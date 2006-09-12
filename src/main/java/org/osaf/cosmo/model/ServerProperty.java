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
package org.osaf.cosmo.model;

/**
 * Represents a Cosmo Server Property
 */
public class ServerProperty extends BaseModelObject implements
        java.io.Serializable {

    /**
     * 
     */
    private static final long serialVersionUID = -4099057363051156531L;
    private String name;
    private String value;
  
    
    public static final String PROP_SCHEMA_VERSION = "cosmo.schemaVersion";
    
    // Constructors

    /** default constructor */
    public ServerProperty() {
    }
    
    public ServerProperty(String name, String value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
