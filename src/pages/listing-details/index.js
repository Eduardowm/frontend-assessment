import React, { useContext, useState } from 'react';
import { Button, Form, ListGroup, Modal } from 'react-bootstrap';
import { ListingContext } from "../../contexts/listing-context";
import './index.css';

const ListingDetailsPage = () => {
    const { listing, saveProperty, savedProperties } = useContext(ListingContext);

    // date format should follow "Feb 18, 2021"
    const dateFormatted = new Date(listing.DateListed).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    const propertyCharacteristics = [
        { label: 'BED', value: listing.Bedrooms },
        { label: 'BATH', value: listing.Bathrooms },
        { label: 'PARKING', value: listing.Parking },
        { label: 'SQFT', value: listing['Square Feet'] },
        { label: 'YEAR BUILT', value: listing['YearBuilt'] },
    ];

    const [ showModal, setShowModal ] = useState( false );
    const [ formData, setFormData ] = useState( {
        fullName: '',
        email: '',
        phone: '',
        comments: ''
    } );
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = ( e ) => {
        const { name, value } = e.target;
        setFormData( { ...formData, [name]: value } );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation
        if (formData.fullName && formData.email && formData.phone && formData.comments) {
            // Validation successful, display success message
            setFormSubmitted(true);
            // Reset form data
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                comments: ''
            });
        } else {
            // Validation failed, display error message or take appropriate action
            // For simplicity, let's alert the user
            alert('Please fill in all fields');
        }
    };

    const handleCloseModal = () => {
        setShowModal( false );
    };

    const handleSaveProperty = () => {
        saveProperty(listing);
        setShowModal(true);
    };

    return (
        <div className="container">
            <div className="listing-details">
                <div className="details-column">
                    <div className="title-price">
                        <h1>{listing.Title}</h1>
                        <p className="price">${listing['Sale Price']}</p>
                    </div>
                    <div className="location-date">
                        <p className="location">{listing.Location}</p>
                        <p className="date-listed">Date Listed: {dateFormatted}</p>
                    </div>
                    <div className="property-image">
                        <img src={listing.PictureURL} alt={listing.Title} />
                    </div>
                    <div className="property-characteristics">
                        {propertyCharacteristics.map((characteristic, index) => (
                            <div className="characteristic" key={index}>{characteristic.value} <span>{characteristic.label}</span></div>
                        ))}
                    </div>
                    <p className="description">{listing.Description}</p>
                </div>
                <div className="contact-agent">
                    <Button onClick={ handleSaveProperty }>Save Property</Button>

                    <h2>Contact Agent</h2>
                    <Form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" id="fullName" name="fullName" required placeholder="Full Name" onChange={handleInputChange}  />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="Email" required onChange={handleInputChange}  />
                        </div>
                        <div className="form-group">
                            <input type="tel" id="phone" name="phone" placeholder="Phone Number" required onChange={handleInputChange}  />
                        </div>
                        <div className="form-group">
                            <textarea id="comments" name="comments" placeholder="Comments" required onChange={handleInputChange}  />
                        </div>
                        <button className="contact-now-button">Contact Now</button>
                    </Form>

                    {formSubmitted && (
                        <p style={{ color: 'green', marginTop: '10px' }}>Message sent successfully</p>
                    )}
                </div>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Saved Properties</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {savedProperties.length === 0 ? (
                        <p>No saved properties</p>
                    ) : (
                        <ListGroup>
                            {savedProperties.map(property => (
                                <ListGroup.Item key={property.Id}>
                                    <p>{property.Title}</p>
                                    {/* Add additional property details as needed */}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ListingDetailsPage;
