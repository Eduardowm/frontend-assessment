import React, { createContext, useState, useEffect } from 'react';

export const ListingContext = createContext();

export const ListingProvider = ({ children }) => {
    const [listing, setListing] = useState(null);
    const [savedProperties, setSavedProperties] = useState([]);

    useEffect(() => {
        // Load saved properties from local storage when component mounts
        const savedPropertiesFromStorage = JSON.parse(localStorage.getItem('savedProperties'));
        if (savedPropertiesFromStorage) {
            setSavedProperties(savedPropertiesFromStorage);
        }
    }, []);

    const saveProperty = (property) => {
        // Add property to saved properties
        const updatedProperties = [...savedProperties, property];
        setSavedProperties(updatedProperties);
        // Save updated properties to local storage
        localStorage.setItem('savedProperties', JSON.stringify(updatedProperties));
    };

    const removeProperty = (propertyId) => {
        // Remove property from saved properties
        const updatedProperties = savedProperties.filter(property => property.Id !== propertyId);
        setSavedProperties(updatedProperties);
        // Save updated properties to local storage
        localStorage.setItem('savedProperties', JSON.stringify(updatedProperties));
    };

    return (
        <ListingContext.Provider value={{ listing, setListing, savedProperties, saveProperty, removeProperty }}>
            {children}
        </ListingContext.Provider>
    );
};
