import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const FilterBar = ({ onFilterChange }) => {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        onFilterChange({ [name]: value });
    };

    return (
        <div className="mb-3 w-100 me-4">
            <Form>
                <Row>
                    <Col>
                        <Form.Label>Bedrooms</Form.Label>
                        <Form.Control name="bedrooms" as="select" onChange={handleFilterChange}>
                            <option value="">Any</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Label>Bathrooms</Form.Label>
                        <Form.Control name="bathrooms" as="select" onChange={handleFilterChange}>
                            <option value="">Any</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Label>Parking</Form.Label>
                        <Form.Control name="parking" as="select" onChange={handleFilterChange}>
                            <option value="">Any</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Label>Price Range</Form.Label>
                        <Form.Control name="priceRange" type="range" min="0" max="1000000" onChange={handleFilterChange} />
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default FilterBar;
