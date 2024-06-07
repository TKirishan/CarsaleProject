import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Project.css";
import { Link } from 'react-router-dom';
import cart_img from "../image/cart/cart-shopping-solid.svg";

function Navbars() {
    return (
       <Container fluid id="nav" >
              <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
                  <Container >
                      <Navbar.Brand href="#home" className="mr-auto" id="Navlogo"><b>CarsSales.com</b></Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
                      <Navbar.Collapse id="responsive-navbar-nav">
                          <Nav className="ml-auto d-flex align-items-baseline" id="b_t">
                              <Nav.Link href="#home">Home</Nav.Link>
                              <Nav.Link href="#service">Service</Nav.Link>
                              <Nav.Link href="#new-cars">New Cars</Nav.Link>
                              <Nav.Link href="#featured-cars">Featured Cars</Nav.Link>
                              <Nav.Link href="#brands">Brands</Nav.Link>
                              <Nav.Link href="#contact">Contact</Nav.Link>
                              <Nav.Link href="#cart"><Link to='/cart' className='text-decoration-none text-black'><img src={cart_img} className='cart_imgnav'/></Link></Nav.Link>
                              <Nav.Link ><Link to='/Signin' className='text-decoration-none text-black'>Sign in</Link></Nav.Link>
                          </Nav>
                      </Navbar.Collapse>
                  </Container>
              </Navbar>
          </Container>
   
    );
}

export default Navbars;