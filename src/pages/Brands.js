import Container from 'react-bootstrap/Container';
import "./Project.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import b1 from '../image/brand/br1.png';
import b2 from '../image/brand/br2.png';
import b3 from '../image/brand/br3.png';
import b4 from '../image/brand/br4.png';
import b5 from '../image/brand/br5.png';
import b6 from '../image/brand/br6.png';

function Brands() {
  return (
    <Container fluid id='brands'>
       
      <section id="brand" className="brand">
      <br/>    <br/>    <br/>
        <Container>
          <Row >
            <Col xs={6} md={4} className='cols'>
              <a href="#">
                <img
                  className="d-block w-100 brand-image br"
                  src={b1}
                  alt="Brand 1"
                />
              </a>
            </Col>
            <Col xs={6} md={4} className='cols'>
              <a href="#">
                <img
                  className="d-block w-100 brand-image br"
                  src={b2}
                  alt="Brand 2"
                />
              </a>
            </Col>
            <Col xs={6} md={4} className='cols'>
              <a href="#">
                <img
                  className="d-block w-100 brand-image br"
                  src={b3}
                  alt="Brand 3"
                />
              </a>
            </Col>
            <Col xs={6} md={4} className='cols'>
              <a href="#">
                <img
                  className="d-block w-100 brand-image br"
                  src={b4}
                  alt="Brand 4"
                />
              </a>
            </Col>
            <Col xs={6} md={4} className='cols'>
              <a href="#">
                <img
                  className="d-block w-100 brand-image br"
                  src={b5}
                  alt="Brand 5"
                />
              </a>
            </Col>
            <Col xs={6} md={4} className='cols'>
              <a href="#">
                <img
                  className="d-block w-100 brand-image br"
                  src={b6}
                  alt="Brand 6"
                />
              </a>
            </Col>
          </Row>
        </Container>
        <br/>    <br/>    <br/>
      </section>
    </Container>

  );
}

export default Brands;