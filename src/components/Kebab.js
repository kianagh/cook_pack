import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './FoodsItems.css';
import mahi from '../assets/mahi.jpg'
import jooje from '../assets/jooje.jpg'
import ketf from '../assets/ketf.jpg'
import chini from '../assets/chini.jpg'
import koobide from '../assets/koobide.jpg'
import steak from '../assets/steak.jpg'

export default function FoodsItems() {
    return (
        <div className='container'>
            <div>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={mahi} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>لوبیا پلو</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={jooje} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>عدس پلو</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={ketf} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>تهچین</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={chini} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>رشته پلو</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={koobide} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>آلبالو پلو</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={steak} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>کلم پلو</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
