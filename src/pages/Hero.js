import React from 'react'
import { Container } from 'react-bootstrap';
import "./Project.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function Herobanner() {
    return (
        <div>
            <Container fluid id='home'>
                <div className='hero'>
                    <header className='text-center'>

                        <h2 className="mb-4 display-1">
                            Get your desired car at a reasonable price
                        </h2>
                        <h6 className="mb-4 display-6">
                            "Discover your dream ride at <b>CarSales.com</b> – where every journey begins."
                        </h6>
                        <Button variant="primary"><a href='#featured-cars' id="btn">Explore Now</a></Button>

                    </header>

                </div>
            </Container>
        </div>
        
    
    )
}

export default Herobanner;
