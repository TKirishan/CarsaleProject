import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./Project.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import img1 from '../image/new-cars-model/ncm1.png';
import img2 from '../image/new-cars-model/ncm2.png';
import img3 from '../image/new-cars-model/ncm3.png';
import { Link } from 'react-router-dom';




function NewestCars() {
  return (
    <Container fluid>
      <section className="new-cars">
        <Container>
          <div className="section-header">
            <p>Checkout <span>the</span> Latest Cars</p>
            <h3><b>Newest Cars</b></h3>
          </div>
          <div className="new-cars-content">
            <Carousel id="new-cars-carousel">
              <Carousel.Item>
                <Row>
                  <Col md={7} sm={12}>
                    <div className="new-cars-img">
                      <img
                        src={img1}
                        alt="Chevrolet Camaro ZA100"
                      />
                    </div>
                  </Col>
                  <Col md={5} sm={12}>
                    <div className="new-cars-txt">
                      <h2><a href="#">Chevrolet Camaro <span> za100</span></a></h2>
                      <p>
                      The Camaro's design and engine options have been engineered to be high-performance and impress. The first generation Camaro was available as a 2-door, 2+2 seat, hardtop, or convertible, and came standard with a 230 cu in Chevrolet straight-6 engine. 
                     
                      </p>
                      <p className="new-cars-para2">
                      The Chevrolet Camaro is a mid-size American pony car that was first introduced in 1966 to compete with the Ford Mustang.
                      </p>
                      <Button className="welcome-btn new-cars-btn" href="#">
                      <Link to="carsdetails " className='text-decoration-none text-white'>View details</Link>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col md={7} sm={12}>
                    <div className="new-cars-img">
                      <img
                        src={img2}
                        alt="BMW Series-3 Wagon"
                      />
                    </div>
                  </Col>
                  <Col md={5} sm={12}>
                    <div className="new-cars-txt">
                      <h2><a href="#">BMW series-3 wagon</a></h2>
                      <p>
                      It comes with a 248 horsepower 2.0-liter four-cylinder engine mated to an eight-speed automatic transmission, with all-wheel drive as standard. Despite the low demand, the 3 Series Wagon offers the same features and handling as its old sedan counterpart, but with the added benefit of more cargo space.
                      </p>
                      <p className="new-cars-para2">
                      The wagon comes with a panoramic sunroof, power rear liftgate, ambient interior lighting, rain-sensing windshield wipers, and front and rear parking sensors.
                      </p>
                      <Button className="welcome-btn new-cars-btn" href="#">
                      <Link to="carsdetails" className='text-decoration-none text-white'>View details</Link>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col md={7} sm={12}>
                    <div className="new-cars-img">
                      <img
                        src={img3}
                        alt="Ferrari 488 Superfast"
                      />
                    </div>
                  </Col>
                  <Col md={5} sm={12}>
                    <div className="new-cars-txt">
                      <h2><a href="#">Ferrari 488 Superfast</a></h2>
                      <p>
                      The Ferrari 488 is a mid-engine supercar with a 3.9-liter, twin-turbocharged V8 engine and a seven-speed dual-clutch gearbox. It has classic Ferrari sports car proportions, with a short front wing and side air intakes
                      </p>
                      <p className="new-cars-para2">
                      Power: The 488 can go from 0 to 60 mph in less than three seconds. The 488 Spider can go from 0 to 100 km/h in three seconds and from 0 to 200 km/h in 8.7 seconds.
                      </p>
                      <Button className="welcome-btn new-cars-btn" href="#">
                      <Link to="carsdetails" className='text-decoration-none text-white'>View details</Link>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </div>
        </Container>
        <div id='featured-cars'></div>
      </section>
    </Container>

  )
}

export default NewestCars;