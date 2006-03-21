/*
 * Copyright 2005 Open Source Applications Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.osaf.cosmo.dao.jcr;

import java.util.HashSet;
import java.util.Set;
import javax.jcr.Item;
import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.PathNotFoundException;
import javax.jcr.RepositoryException;
import javax.jcr.Session;

import org.apache.commons.id.StringIdentifierGenerator;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import org.osaf.cosmo.dao.TicketDao;
import org.osaf.cosmo.model.Ticket;
import org.osaf.cosmo.repository.SchemaConstants;
import org.osaf.cosmo.repository.TicketMapper;

import org.springframework.dao.DataRetrievalFailureException;
import org.springframework.dao.InvalidDataAccessResourceUsageException;

import org.springmodules.jcr.JcrCallback;
import org.springmodules.jcr.support.JcrDaoSupport;

/**
 * Implementation of <code>TicketDao</code> that operates against a
 * JCR repository.
 *
 * This implementation extends
 * {@link org.springmodules.jcr.JcrDaoSupport} to gain access to
 * a {@link org.springmodules.jcr.JcrTemplate}, which it uses to
 * obtain repository sessions. See the Spring Modules documentation
 * for more information on how to configure the template with
 * credentials, a repository reference and a workspace name.
 *
 * It uses {@link TicketMapper} to convert JCR nodes and
 * properties to and from instances of {@link Ticket}.
 * 
 * Tickets can only be assigned to nodes of type
 * <code>ticket:ticketable</code>. Tickets are persisted as child
 * nodes named <code>ticket:ticket</code>, of type
 * <code>ticket:ticket</code>, beneath ticketable nodes.
 *
 * Ticket ids are generated by an implementation of
 * {@link org.apache.commons.id.StringIdentifierGenerator}.
 */
public class JcrTicketDao extends JcrDaoSupport
    implements SchemaConstants, TicketDao {
    private static final Log log = LogFactory.getLog(JcrTicketDao.class);

    private StringIdentifierGenerator idGenerator;

    // TicketDao methods

    /**
     * Creates the given ticket in the repository.
     *
     * @param path the repository path of the resource to which the
     * ticket is to be applied
     * @param ticket the ticket to be saved
     *
     * @throws DataRetrievalFailureException if the item at the given
     * path is not found
     * @throws InvalidDataResourceUsageException if the item at the
     * given path is not a node
     */
    public void createTicket(final String path,
                             final Ticket ticket) {
        if (ticket.getId() == null) {
            ticket.setId(idGenerator.nextStringIdentifier());
        }
        getJcrTemplate().execute(new JcrCallback() {
                public Object doInJcr(Session session)
                    throws RepositoryException {
                    if (! session.itemExists(path)) {
                        throw new DataRetrievalFailureException("item at path " + path + " not found");
                    }
                    Item parentItem = session.getItem(path);
                    if (! parentItem.isNode()) {
                        throw new InvalidDataAccessResourceUsageException("item at path " + path + " not a node");
                    }
                    Node parentNode = (Node) parentItem;

                    Node ticketNode = parentNode.addNode(NN_TICKET, NT_TICKET);
                    TicketMapper.ticketToNode(ticket, ticketNode);

                    parentNode.save();
                    return null;
                }
            });
    }

    /**
     * Returns all tickets for the node at the given path, or an empty
     * <code>Set</code> if the resource does not have any tickets.
     *
     * @param String path the absolute JCR path of the ticketed node
     *
     * @throws DataRetrievalFailureException if the item at the given
     * path is not found
     * @throws InvalidDataResourceUsageException if the item at the
     * given path is not a node
     */
    public Set getTickets(final String path) {
        return (Set) getJcrTemplate().execute(new JcrCallback() {
                public Object doInJcr(Session session)
                    throws RepositoryException {
                    if (! session.itemExists(path)) {
                        throw new DataRetrievalFailureException("item at path " + path + " not found");
                    }
                    Item parentItem = session.getItem(path);
                    if (! parentItem.isNode()) {
                        throw new InvalidDataAccessResourceUsageException("item at path " + path + " not a node");
                    }
                    Node parentNode = (Node) parentItem;

                    NodeIterator i = parentNode.getNodes(NN_TICKET);
                    Set tickets = new HashSet();
                    while (i.hasNext()) {
                        Node child = i.nextNode();
                        tickets.add(TicketMapper.nodeToTicket(child));
                    }

                    return tickets;
                }
            });
    }

    /**
     * Returns the identified ticket for the node at the given path
     * (or the nearest existing ancestor), or <code>null</code> if the
     * ticket does not exist. Tickets are inherited, so if the
     * specified node does not have the ticket but an ancestor does,
     * it will still be returned.
     *
     * @param path the absolute JCR path of the ticketed node
     * @param id the id of the ticket unique to the parent node
     *
     * @throws InvalidDataResourceUsageException if the item at the
     * given path is not a node
     */
    public Ticket getTicket(final String path,
                            final String id) {
        return (Ticket) getJcrTemplate().execute(new JcrCallback() {
                public Object doInJcr(Session session)
                    throws RepositoryException {
                    Node parentNode =
                        findDeepestExistingNodeInPath(session, path);
                    Node ticketNode = findChildTicketNode(parentNode, id);
                    if (ticketNode == null) {
                        if (parentNode.getDepth() == 0) {
                            return null;
                        }
                        return getTicket(parentNode.getParent().getPath(), id);
                    }
                    return TicketMapper.nodeToTicket(ticketNode);
                }
            });
    }

    /**
     * Removes the given ticket from the node at the given path.
     *
     * @param path the absolute JCR path of the ticketed node
     * @param ticket the <code>Ticket</code> to remove
     *
     * @throws InvalidDataResourceUsageException if the item at the
     * given path is not a node
     */
    public void removeTicket(final String path,
                             final Ticket ticket) {
        getJcrTemplate().execute(new JcrCallback() {
                public Object doInJcr(Session session)
                    throws RepositoryException {
                    if (ticket == null) {
                        return null;
                    }
                    Node parentNode =
                        findDeepestExistingNodeInPath(session, path);
                    Node ticketNode = findChildTicketNode(parentNode, ticket);
                    if (ticketNode == null) {
                        if (parentNode.getDepth() == 0) {
                            // this is the root node; the ticket
                            // simply doesn't exist in the original
                            // path
                            return null;
                        }
                        // the ticket might be on an ancestor, so step
                        // up the tree and look for it on the parent
                        removeTicket(parentNode.getParent().getPath(), ticket);
                        return null;
                    }
                    ticketNode.remove();
                    parentNode.save();
                    return null;
                }
            });
    }

    // Dao methods

    /**
     * Initializes the DAO, sanity checking required properties
     * and defaulting optional properties.
     */
    public void init() {
        if (idGenerator == null) {
            throw new IllegalStateException("idGenerator is required");
        }
    }

    /**
     * Readies the DAO for garbage collection, shutting down any
     * resources used.
     */
    public void destroy() {
        // does nothing
    }

    // our methods

    /**
     * Returns the child ticket node for the given node with the given
     * id.
     */
    protected Node findChildTicketNode(Node parent,
                                       String id)
        throws RepositoryException {
        for (NodeIterator i=parent.getNodes(NN_TICKET); i.hasNext();) {
            Node child = i.nextNode();
            if (child.getProperty(NP_TICKET_ID).getString().equals(id)) {
                return child;
            }
        }
        return null;
    }

    /**
     * Returns the child ticket node for the given node matching the
     * given ticket.
     */
    protected Node findChildTicketNode(Node parent,
                                       Ticket ticket)
        throws RepositoryException {
        return findChildTicketNode(parent, ticket.getId());
    }

    /**
     * Returns the deepest node in the given path that actually exists.
     *
     * @throws InvalidDataResourceUsageException if the item at the
     * given path is not a node
     */
    protected static Node findDeepestExistingNodeInPath(Session session,
                                                        String path)
        throws RepositoryException {
        // try for the deepest node first
        if (session.itemExists(path)) {
            Item item = session.getItem(path);
            if (! item.isNode()) {
                throw new InvalidDataAccessResourceUsageException("item at path " + path + " not a node");
            }
            return (Node) item;
        }

        // walk the path to find the deepest existing node from the
        // top down
        Node node = session.getRootNode();
        if (path.equals("/")) {
            return node;
        }
        if (path.startsWith("/")) {
            path = path.substring(1);
        }

        String[] names = path.split("/");
        Node parentNode = null;
        for (int i=0; i<names.length; i++) {
            try {
                parentNode = node;
                node = parentNode.getNode(names[i]);
            } catch (PathNotFoundException e) {
                // previous one was the last existing
                node = parentNode;
                break;
            }
        }

        return node;
    }

    /**
     * Sets the generator used to generate ticket ids.
     */
    public void setIdGenerator(StringIdentifierGenerator generator) {
        idGenerator = generator;
    }
}
