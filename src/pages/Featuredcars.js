import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Project.css";
import Button from 'react-bootstrap/Button';
import f1 from '../image/featured-cars/fc1.png';
import f2 from '../image/featured-cars/fc2.png';
import f3 from '../image/featured-cars/fc3.png';
import f6 from '../image/featured-cars/fc6.png';
import f7 from '../image/featured-cars/fc7.png';
import f8 from '../image/featured-cars/fc8.png';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const carsData = [
    { id: 1, img: f1, name: 'BMW 6-series gran coupe', model: '2017', miles: '3100 mi', hp: '240HP', type: 'Automatic', price: '$89,395' },
    { id: 2, img: f2, name: 'Chevrolet Camaro WMV20', model: '2017', miles: '3100 mi', hp: '240HP', type: 'Automatic', price: '$66,575' },
    { id: 3, img: f3, name: 'Lamborghini V520', model: '2017', miles: '3100 mi', hp: '240HP', type: 'Automatic', price: '$125,250' },
    { id: 4, img: f6, name: 'Porsche 718 Cayman', model: '2017', miles: '3100 mi', hp: '240HP', type: 'Automatic', price: '$48,500' },
    { id: 5, img: f8, name: 'BMW 6 - Series Gran Coupe', model: '2017', miles: '3100 mi', hp: '240HP', type: 'Automatic', price: '$89,395' },
    { id: 6, img: f7, name: 'BMW 8 Series', model: '2017', miles: '3100 mi', hp: '240HP', type: 'Automatic', price: '$56,000' },
];

function Featuredcars() {
    const { addToCart } = useContext(CartContext);

    return (
        <Container>
            <section className="featured-cars" id="featured-cars">
                <div className="container">
                    <div className="section-header">
                        <p>Checkout <span>the</span> Featured Cars</p>
                        <h3><b>Featured Cars</b></h3>
                    </div>
                    <div className="featured-cars-content">
                        <Row className="row">
                            {carsData.map(car => (
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
                                            <h5>{car.price}</h5>
                                            <p>
                                                Combining sleek design with powerful performance, the {car.name} is a symbol of luxury and sophistication.
                                            </p>
                                            <div className='center'>
                                                <Button variant="primary" className='btn_center'><Link to="carsdetails">More Details</Link></Button>
                                                <Button variant="outline-secondary" className='btn_center' onClick={() => addToCart(car)}>Add to Cart</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Featuredcars;
