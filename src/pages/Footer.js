import React from 'react';
import Container from 'react-bootstrap/Container';
import "./Project.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
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


  )
};

export default Footer;
