import React from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Project.css";

function DropDown() {
    return (

       <Container className="model-search-content py-4 mt-5">
          <Row>
                <Col md={12}>
                    <Row className="justify-content-center">
                        <Col md={2} className="offset-md-1 col-12 mb-4">
                            <div className="single-model-search">
                                <h2>Select Year</h2>
                                <div className="model-select-icon">
                                    <Form.Control as="select" className="form-control" >
                                        <option value="default">Year</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                    </Form.Control>
                                </div>
                            </div>
                            <div className="single-model-search">
                                <h2>Body Style</h2>
                                <div className="model-select-icon">
                                    <Form.Control as="select" className="form-control">
                                        <option value="default">Style</option>
                                        <option value="sedan">Sedan</option>
                                        <option value="van">Van</option>
                                        <option value="roadster">Roadster</option>
                                    </Form.Control>
                                </div>
                            </div>
                        </Col>
                        <Col md={2} className="offset-md-1 col-12 mb-4">
                            <div className="single-model-search">
                                <h2>Select Make</h2>
                                <div className="model-select-icon">
                                    <Form.Control as="select" className="form-control">
                                        <option value="default">Make</option>
                                        <option value="toyota">Toyota</option>
                                        <option value="holden">Holden</option>
                                        <option value="mercedes-benz">Mercedes-Benz</option>
                                    </Form.Control>
                                </div>
                            </div>
                            <div className="single-model-search">
                                <h2>Car Condition</h2>
                                <div className="model-select-icon">
                                    <Form.Control as="select" className="form-control">
                                        <option value="default">Condition</option>
                                        <option value="new">New</option>
                                        <option value="used">Used</option>
                                        <option value="certified">Certified</option>
                                    </Form.Control>
                                </div>
                            </div>
                        </Col>
                        <Col md={2} className="offset-md-1 col-12 mb-4">
                            <div className="single-model-search">
                                <h2>Select Model</h2>
                                <div className="model-select-icon">
                                    <Form.Control as="select" className="form-control">
                                        <option value="default">Model</option>
                                        <option value="kia-rio">Kia Rio</option>
                                        <option value="mitsubishi">Mitsubishi</option>
                                        <option value="ford">Ford</option>
                                    </Form.Control>
                                </div>
                            </div>
                            <div className="single-model-search">
                                <h2>Select Price</h2>
                                <div className="model-select-icon">
                                    <Form.Control as="select" className="form-control">
                                        <option value="default">Price</option>
                                        <option value="$0.00">$0.00</option>
                                        <option value="$10,000">$10,000</option>
                                        <option value="$20,000">$20,000</option>
                                    </Form.Control>
                                </div>
                            </div>
                        </Col> 
                     
                        <Col md={2} className="col-12 mb-4 d-flex align-items-center mt-4">
                            <div className="single-model-search text-center w-100 center_search" >
                                <Button variant="primary" className="model-search-btn w-100">
                                    Search
                                </Button>
                            </div>
                        </Col>
                </Row>
            </Col>
        </Row>
            <br id="service"/>
        </Container>
    )
}

export default DropDown;