import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ListingContext } from "../../contexts/listing-context";

const ListingsSection = ( { listings } ) => {
    const { setListing } = useContext(ListingContext);

    const handleViewDetails = (listing) => {
        setListing(listing);
    };

    return (
            <div className="row">
                { listings.map( ( listing ) => (
                    <div className="col-md-4 mb-3" key={ listing.Id }>
                        <Card>
                            <Card.Img variant="top" src={ listing.ThumbnailURL }/>
                            <Card.Body>
                                <Card.Title>{ listing.Title }</Card.Title>
                                <Card.Text>{ listing.Location }</Card.Text>
                                <Card.Text>{ `${ listing.Bedrooms } Bedrooms | ${ listing.Bathrooms } Bathrooms` }</Card.Text>
                                <Card.Text>{ `Price: $${ listing['Sale Price'] }` }</Card.Text>
                                <Link to={`/listing/${listing.Id}`}>
                                    <Button variant="primary" onClick={() => handleViewDetails(listing)}>View Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                ) ) }
            </div>
    );
};

export default ListingsSection;
