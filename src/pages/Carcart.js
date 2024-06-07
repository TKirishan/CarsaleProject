import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import empty from '../image/cart/Empty-amico.svg';
import cart_img from "../image/cart/cart-shopping-solid.svg";
import "./Project.css";

function Carcart() {
    const { cart, removeFromCart } = useContext(CartContext);

    // Ensure the price is a number when calculating the total price
    const totalPrice = cart.reduce((total, car) => total + car.price, 0);

    return (

        <Container fluid>
            <Container fluid id="nav" >
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
                    <Container >
                        <Navbar.Brand href="#home" className="mr-auto" id="Navlogo"><b>CarsSales.com</b></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto" id="b_t">
                                <Nav.Link href="#home"><Link to='/' className='text-decoration-none text-black'>Home</Link></Nav.Link>
                                <Nav.Link href="#service"><Link to='/' className='text-decoration-none text-black'>Service</Link></Nav.Link>
                                <Nav.Link href="#new-cars"><Link to='/' className='text-decoration-none text-black'>New Cars</Link></Nav.Link>
                                <Nav.Link href="#featured-cars"><Link to='/' className='text-decoration-none text-black'>Featured Cars</Link></Nav.Link>
                                <Nav.Link href="#brands"><Link to='/' className='text-decoration-none text-black'>Brands</Link></Nav.Link>
                                <Nav.Link href="#contact"><Link to='/' className='text-decoration-none text-black'>Contact</Link></Nav.Link>
                                <Nav.Link href="#cart"><Link to='/cart' className='text-decoration-none text-black'><img src={cart_img} className='cart_imgnav' /></Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
            <br />
            <br />
            <br />
            <section className="cart">
                <div className="container">

                    <div className="section-header">
                        <p>Checkout <span>the</span> Cart</p>
                        <h3><b className='cart_heading'></b></h3>
                    </div>
                    <div className="cart-content">
                        {cart.length === 0 ? (
                            <div>
                                <p><div className="alert alert-danger d-flex align-items-center" role="alert">
                                    <div className='fw-bold'>
                                        Your cart is empty
                                    </div>
                                </div></p>
                                <div id='cart_img'>
                                    <img src={empty} id='cart_img_size' />
                                </div>

                            </div>

                        ) : (
                            <Row className="row">
                                {cart.map(car => (
                                    <Col lg={4} md={6} className='size p-3' key={car.id}>
                                        <div className="single-featured-cars">
                                            <div className="featured-img-box">
                                                <div className="featured-cars-img">
                                                    <img src={car.img} alt="cars" />
                                                </div>
                                                <div className="featured-model-info">
                                                    <p>
                                                        Model: {car.model}
                                                        <span className="featured-mi-span"> {car.miles}</span>
                                                        <span className="featured-hp-span"> {car.hp} - </span>
                                                        {car.type}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="featured-cars-txt">
                                                <h4><a href="#" id='rl'>{car.name}</a></h4>
                                                <h5>${car.price.toFixed(2)}</h5>
                                                <Button variant="outline-secondary" className='btn_center' onClick={() => removeFromCart(car.id)}>Remove from Cart</Button>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        )}
                    </div>
                    <br />
                    <br />
                    {cart.length > 0 && (
                        <div className="checkout-section">
                            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
                            <Button variant="primary">Proceed to Checkout</Button>

                        </div>
                    )}
                </div>
            </section>
            <br />
            <br />
            <br />
            <Container fluid id="footer-color">
                <footer id="contact" className="contact">
                    <Row>
                        <Col lg={12}>
                            <div className="container">
                                <div className="footer-top">
                                    <div className="row">
                                        <div className="col-md-3 col-sm-6">
                                            <div className="single-footer-widget">
                                                <div className="footer-logo">
                                                    <a href="index.html" id='flogo'>Carvilla</a>
                                                </div>
                                                <p>
                                                    Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua. Ut enim ad minim veniam.
                                                </p>
                                                <div className="footer-contact">
                                                    <p>info@themesine.com</p>
                                                    <p>+1 (885) 2563154554</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-6">
                                            <div className="single-footer-widget">
                                                <h2>ABOUT DEVLOON</h2>
                                                <ul>
                                                    <li><a href="#">About Us</a></li>
                                                    <li><a href="#">Career</a></li>
                                                    <li><a href="#">Terms <span> of Service</span></a></li>
                                                    <li><a href="#">Privacy Policy</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-xs-12">
                                            <div className="single-footer-widget">
                                                <h2>TOP BRANDS</h2>
                                                <ul>
                                                    <li><a href="#">BMW</a></li>
                                                    <li><a href="#">Lamborghini</a></li>
                                                    <li><a href="#">Camaro</a></li>
                                                    <li><a href="#">Audi</a></li>
                                                    <li><a href="#">Infiniti</a></li>
                                                    <li><a href="#">Nissan</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-3 offset-md-1 col-sm-6">
                                            <div className="single-footer-widget">
                                                <h2>News Letter</h2>
                                                <p>
                                                    Subscribe to get latest news  update and informations
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-copyright">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <p>
                                                &copy; copyright.designed and developed by CarSales.com.
                                            </p>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="footer-social">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </footer>
            </Container>
        </Container>
    )
}

export default Carcart;
