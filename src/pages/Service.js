import React from 'react';
import "./Project.css";
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ser1 from '../image/car-solid.svg';
import ser2 from '../image/screwdriver-wrench-solid.svg';
import ser3 from '../image/car-burst-solid.svg';

function Service() {
    return (
        <Container >
            <div className="section-header">
                <h3><b>Our Services</b></h3>
            </div>
            <Container className="d-flex justify-content-center mt-5">

                <Row className="justify-content-center">
                    <Col xs={12} lg={4} className="mb-4 d-flex justify-content-center">
                        <Card className="card-custom">
                            <div className='d-flex justify-content-center pt-3'>
                                <Card.Img variant="top" src={ser1} className='serviceimg' />
                            </div>
                            <br />
                            <Card.Body className="text-center">
                                <Card.Title>Largest Dealership of Car</Card.Title>
                                <Card.Text className="text-justify">
                                    Largest Dealership of Car: Offering an extensive range of vehicles with exceptional customer service and unbeatable prices.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={4} className="mb-4 d-flex justify-content-center">
                        <Card className="card-custom">
                            <div className='d-flex justify-content-center pt-3'>
                                <Card.Img variant="top" src={ser2} className='serviceimg' />
                            </div>
                            <br />
                            <Card.Body className="text-center">
                                <Card.Title>Unlimited Repair Warranty</Card.Title>
                                <Card.Text>

                                    Our Unlimited Repair Warranty provides limitless, hassle-free coverage for all vehicle repairs, ensuring peace of mind without any caps or deductibles.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={4} className="mb-4 d-flex justify-content-center">
                        <Card className="card-custom">
                            <div className='d-flex justify-content-center pt-3'>
                                <Card.Img variant="top" src={ser3} className='serviceimg' id='serimg3' />
                            </div>
                            <Card.Body className="text-center">
                                <br />
                                <Card.Title>Insurance Support</Card.Title>

                                <Card.Text >
                                    Comprehensive assistance with all your insurance needs, ensuring peace of mind and seamless claims processing.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br id="new-cars" />
        </Container>
    )
}

export default Service;