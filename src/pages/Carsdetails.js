import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import img1 from "../image/new-cars-model/ncm1.png";
import img2 from "../image/new-cars-model/ncm2.png";
import img3 from "../image/new-cars-model/ncm3.png";
import img4 from "../image/featured-cars/fc1.png";
import img5 from "../image/featured-cars/fc2.png";
import img6 from "../image/featured-cars/fc3.png";
import img7 from "../image/featured-cars/fc6.png";
import img8 from "../image/featured-cars/fc7.png";
import img9 from '../image/featured-cars/fc8.png';
import cart_img from "../image/cart/cart-shopping-solid.svg";
import "./Project.css";

function Carsdetails() {
  return (

  
    <Container fluid className="mb-3">

<Container fluid id="nav" >
              <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
                  <Container >
                      <Navbar.Brand href="#home" className="mr-auto" id="Navlogo"><b>CarsSales.com</b></Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
                      <Navbar.Collapse id="responsive-navbar-nav">
                          <Nav className="ml-auto" id="b_t">
                              <Nav.Link href="#home"><Link to='/'className='text-decoration-none text-black'>Home</Link></Nav.Link>
                              <Nav.Link href="#service"><Link to='/' className='text-decoration-none text-black'>Service</Link></Nav.Link>
                              <Nav.Link href="#new-cars"><Link to='/' className='text-decoration-none text-black'>New Cars</Link></Nav.Link>
                              <Nav.Link href="#featured-cars"><Link to='/' className='text-decoration-none text-black'>Featured Cars</Link></Nav.Link>
                              <Nav.Link href="#brands"><Link to='/' className='text-decoration-none text-black'>Brands</Link></Nav.Link>
                              <Nav.Link href="#contact"><Link to='/' className='text-decoration-none text-black'>Contact</Link></Nav.Link>
                              <Nav.Link href="#cart"><Link to='/cart' className='text-decoration-none text-black'><img src={cart_img} className='cart_imgnav'/></Link></Nav.Link>
                          </Nav>
                      </Navbar.Collapse>
                  </Container>
              </Navbar>
          </Container>




<br/>
<br/>
<br/>
      <div>
        <div className="section-header mt-10 mb-4 text-center">
          <p>
            Checkout <span>the</span> New Cars <span>and</span> Featured Cars
          </p>
          <h3>
            <b>Cars Details</b>
          </h3>
        </div>
      </div>
      {[{
        img: img1,
        title: "Chevrolet Camaro ZL1",
        specs: [
          { label: "Engine", value: "2.0L TwinPower Turbo inline 4-cylinder" },
          { label: "Horsepower", value: "650 hp" },
          { label: "Torque", value: "650 lb-ft" },
          { label: "0-60 mph", value: "3.5 seconds" },
          { label: "Top Speed", value: "198 mph" },
          { label: "Price", value: "Starting from $63,000" }
        ],
        link: "https://www.chevrolet.com/performance/camaro"
      },
      {
        img: img2,
        title: "BMW Series-3 Wagon",
        specs: [
          { label: "Engine", value: "2.0L BMW TwinPower Turbo inline 4-cylinder" },
          { label: "Horsepower", value: "255 hp" },
          { label: "Torque", value: "295 lb-ft" },
          { label: "Transmission", value: "8-speed Sport Automatic" },
          { label: "Drive Type", value: "All-Wheel Drive" },
          { label: "Fuel Economy", value: "25 MPG city / 34 MPG highway" },
          { label: "Price", value: "Starting at $45,000" }
        ],
        link: "https://www.bmwusa.com/vehicles/3-series/wagon.html"
      },
      {
        img: img3,
        title: "Ferrari 488 Superfast",
        specs: [
          { label: "Engine", value: "3.9L V8 twin-turbocharged" },
          { label: "Horsepower", value: "710 hp" },
          { label: "Torque", value: "568 lb-ft" },
          { label: "Top Speed", value: "211 mph" },
          { label: "0-60 mph", value: "2.8 seconds" },
          { label: "Transmission", value: "7-speed dual-clutch automatic" },
          { label: "Price", value: "Starting at around $330,000" }
        ],
        link: "https://www.ferrari.com/en-US/auto/488-gtb"
      },
      {
        img: img4,
        title: "BMW 6-Series Gran Coupe",
        specs: [
          { label: "Engine", value: "3.0L BMW TwinPower Turbo inline 6-cylinder" },
          { label: "Horsepower", value: "335 hp" },
          { label: "Torque", value: "332 lb-ft" },
          { label: "0-60 mph", value: "5.1 seconds" },
          { label: "Top Speed", value: "155 mph" },
          { label: "Transmission", value: "8-speed Sport Automatic" },
          { label: "Drivetrain", value: "Rear-wheel drive / All-wheel drive" },
          { label: "Price", value: "$89,395" }
        ],
        link: "https://www.bmwusa.com/vehicles/6-series/gran-coupe.html"
      },
      {
        img: img5,
        title: "Chevrolet Camaro WMV20",
        specs: [
          { label: "Engine", value: "6.2L V8" },
          { label: "Horsepower", value: "455 hp" },
          { label: "Torque", value: "455 lb-ft" },
          { label: "Transmission", value: "6-speed manual or 10-speed automatic" },
          { label: "0-60 mph", value: "4.0 seconds" },
          { label: "Top Speed", value: "165 mph" },
          { label: "Price", value: "$66,575" }
        ],
        link: "https://www.chevrolet.com/camaro"
      },
      {
        img: img6,
        title: "Lamborghini V520",
        specs: [
          { label: "Engine", value: "6.5L V12" },
          { label: "Horsepower", value: "700 HP" },
          { label: "Torque", value: "455 lb-ft" },
          { label: "Transmission", value: "6-speed manual or 10-speed automatic" },
          { label: "0-60 mph", value: "2.8 seconds" },
          { label: "Top Speed", value: "217 mph" },
          { label: "Price", value: "$125,250" }
        ],
        link: "https://www.lamborghini.com/en-en/models/aventador/aventador-svj"
      },
      {
        img: img7,
        title: "Porsche 718 Cayman",
        specs: [
          { label: "Engine", value: "2.0L Turbocharged Flat-4" },
          { label: "Horsepower", value: "300 hp" },
          { label: "Torque", value: "280 lb-ft" },
          { label: "Top Speed", value: "170 mph" },
          { label: "0-60 mph", value: "4.9 seconds" },
          { label: "Transmission", value: "7-speed dual-clutch automatic" },
          { label: "Price", value: "Starting at $48,500" }
        ],
        link: "https://www.porsche.com/usa/models/718/718-cayman-models/718-cayman/"
      },
      {
        img: img9,
        title: "BMW 6-Series Gran Coupe",
        specs: [
          { label: "Engine", value: "3.9L V8 twin-turbocharged" },
          { label: "Horsepower", value: "710 hp" },
          { label: "Torque", value: "568 lb-ft" },
          { label: "Top Speed", value: "211 mph" },
          { label: "0-60 mph", value: "2.8 seconds" },
          { label: "Transmission", value: "7-speed dual-clutch automatic" },
          { label: "Price", value: "Starting at around $89,395" }
        ],
        link: "https://www.carwow.co.uk/bmw/6-series-gran-coupe#gref"
      },
      {
        img: img8,
        title: "BMW 8 Series",
        specs: [
          { label: "Engine", value: "3.5L V8 twin-turbocharged" },
          { label: "Horsepower", value: "700 hp" },
          { label: "Torque", value: "538 lb-ft" },
          { label: "Top Speed", value: "205 mph" },
          { label: "0-60 mph", value: "2.5 seconds" },
          { label: "Transmission", value: "7-speed dual-clutch automatic" },
          { label: "Price", value: "Starting at around $56,000" }
        ],
        link: "https://www.bmwusa.com/vehicles/8-series/coupe/overview.html"
      },

      ].map((car, index) => (
        <Card className="mt-3 mb-5" key={index}>
          <Row className="mt-3">
            <Col
              xs={12}
              md={8}
              className="d-flex justify-content-center p-3"
            >
              <img src={car.img} className="cars img-fluid" alt={car.title} />
            </Col>
            <Col
              xs={12}
              md={4}
              className="d-flex justify-content-center p-3"
            >
              <Card className="border border-white d-flex justify-content-center">
                <Card.Body>
                  <Card.Title className="badge bg-success"><h4 className="px-2 py-1">{car.title}</h4></Card.Title>
                  {car.specs.map((spec, idx) => (
                    <Card.Text key={idx}>
                      <strong>{spec.label}:</strong> {spec.value}
                    </Card.Text>
                  ))}
                  <Button
                    variant="primary"
                    href={car.link}
                    target="_blank"
                    className="btn-block"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card>
      ))}
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
  );
}

export default Carsdetails;
