/*
 * Copyright 2006 Open Source Applications Foundation
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
package org.osaf.cosmo.mc;

import java.util.ArrayList;

import org.osaf.cosmo.eim.EimRecordSet;
import org.osaf.cosmo.eim.schema.EimRecordTranslationIterator;
import org.osaf.cosmo.model.CollectionItem;
import org.osaf.cosmo.model.Item;

/**
 * Bean class that aggregates all of the EIM records for a synchronize
 * response based on a previous synchronization token and provides the
 * new token.
 */
public class SyncRecords extends SubRecords {

    private SyncToken prevToken;

    /** */
    public SyncRecords(CollectionItem collection,
                       SyncToken prevToken) {
        super(collection);
        this.prevToken = prevToken;
    }

    /** */
    protected EimRecordTranslationIterator createIterator(CollectionItem collection) {
        ArrayList<Item> items = new ArrayList<Item>();

        if (! prevToken.isValid(collection)) {
            if (prevToken.hasItemChanged(collection))
                items.add(collection);

            for (Item child : collection.getChildren()) {
                if (child instanceof CollectionItem)
                    continue;
                if (prevToken.hasItemChanged(child))
                    items.add(child);
            }
        }

        return new EimRecordTranslationIterator(items);
    }
}
