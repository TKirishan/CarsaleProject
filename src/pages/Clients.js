import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import c1 from '../image/clients/c1.png';
import c2 from '../image/clients/c2.png';
import c3 from '../image/clients/c3.png';
import "./Project.css";

function Clients() {
    return (
        <Container fluid>
            <section id="clients-say" className="clients-say">
                <Container>
                    <div className="section-header">
                        <h3><b>What our Clients Say</b></h3>
                    </div>
                    <div className="row">
                        <div className="owl-carousel testimonial-carousel">
                            <Row>
                                <Col lg={4} md={12} sm={12} className='p-2'>
                                    <div className="single-testimonial-box">
                                        <div className="testimonial-description bg">
                                            <div className="testimonial-info">
                                                <div className="testimonial-img">
                                                    <img src={c1} alt="image of clients person" />
                                                </div>
                                            </div>
                                            <div className="testimonial-comment">
                                                <p>
                                                    The website's interface is sleek and user-friendly, making navigation a breeze. However, adding more detailed car specifications could enhance the browsing experience. Overall, it's a convenient platform for exploring various car options.
                                                </p>
                                            </div>
                                            <div className="testimonial-person">
                                                <h2><a href="#">Tomas lili</a></h2>
                                                <h4>New York</h4>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                                <Col lg={4} md={12} sm={12} className='p-2'>
                                    <div className="single-testimonial-box">
                                        <div className="testimonial-description bg">
                                            <div className="testimonial-info">
                                                <div className="testimonial-img">
                                                    <img src={c2} alt="image of clients person" />
                                                </div>
                                            </div>
                                            <div className="testimonial-comment">
                                                <p>
                                                    The website offers an extensive range of vehicles, but the search filters could be more precise to narrow down options efficiently. Additionally, including customer reviews or ratings could instill trust and aid in decision-making.
                                                </p>
                                            </div>
                                            <div className="testimonial-person">
                                                <h2><a href="#">Romi Rain</a></h2>
                                                <h4>London</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={12} sm={12} className='p-2'>
                                    <div className="single-testimonial-box">
                                        <div className="testimonial-description bg">
                                            <div className="testimonial-info">
                                                <div className="testimonial-img">
                                                    <img src={c3} alt="image of clients person" />
                                                </div>
                                            </div>
                                            <div className="testimonial-comment">
                                                <p>
                                                    The website's layout is clutter-free and visually appealing, providing a seamless browsing experience. However, integrating a live chat feature for immediate assistance and inquiries could improve customer engagement.
                                                </p>
                                            </div>
                                            <div className="testimonial-person">
                                                <h2><a href="#">John Doe</a></h2>
                                                <h4>Washington</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </div>
                </Container>
            </section>
        </Container>
    )
}

export default Clients;