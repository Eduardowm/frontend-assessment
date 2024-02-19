import React, { useState, useEffect } from 'react';
import FilterBar from "../../components/filter-bar";
import ListingsSection from "../../components/listing-section";
import './index.css';

const ListingPage = () => {
    const [listings, setListings] = useState([]);
    const [filteredListings, setFilteredListings] = useState([]);
    const [showEmptyMessage, setShowEmptyMessage] = useState(false);
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json';

    useEffect(() => {
        fetchListings();
    }, []);

    const fetchListings = async () => {
        try {
            const response = await fetch(proxyUrl + apiUrl);
            const data = await response.json();
            setListings(data);
            setFilteredListings(data);
        } catch (error) {
            console.error('Error fetching listings:', error);
        }
    };

    const handleFilterChange = (filters) => {
        let filteredData = [...listings];

        // Apply filters to the data
        if (filters.bedrooms) {
            filteredData = filteredData.filter((listing) => listing.Bedrooms === parseInt(filters.bedrooms));
        }

        if (filters.bathrooms) {
            filteredData = filteredData.filter((listing) => listing.Bathrooms === parseInt(filters.bathrooms));
        }

        if (filters.parking) {
            filteredData = filteredData.filter((listing) => listing.Parking === parseInt(filters.parking));
        }

        if (filters.priceRange) {
            filteredData = filteredData.filter((listing) => listing['Sale Price'] <= parseInt(filters.priceRange));
        }

        // Update filtered listings state
        setFilteredListings(filteredData);

        // Show empty message if filteredData is empty
        setShowEmptyMessage(filteredData.length === 0);
    };

    const handleSearch = () => {
        setFilteredListings(listings);
    };

    return (
        <div className="container">
            <div className="row w-100">
                <div className="col-md-12">
                    <div className="filter-bar">
                        <FilterBar onFilterChange={handleFilterChange} />
                        <button className="search-button" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {showEmptyMessage ? (
                        <p>No results found.</p>
                    ) : (
                        <div className="listings">
                            <ListingsSection listings={filteredListings} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListingPage;
