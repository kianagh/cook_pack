import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './FoodsItems.css';
import ash from '../assets/ash.jpg'
import abGoosht from  '../assets/abGoosht.jpg'
import lasagna from '../assets/lazaniaa.jpg'
import kotlet from '../assets/kotlate.jpg'
import pasta from '../assets/pasta.jpg'
import macaroni from '../assets/macaroni.jpg'

export default function FoodsItems() {
    return (
        <div className='container'>
            <div>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={ash} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>لوبیا پلو</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={abGoosht} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>عدس پلو</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={lasagna} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>تهچین</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={kotlet} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>رشته پلو</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={pasta} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>آلبالو پلو</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={macaroni} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>کلم پلو</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
