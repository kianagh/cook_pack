import React from 'react';
import { Row, Col } from 'react-bootstrap';
import morghSokhari from '../assets/morghSokhari.jpg'
import  HotDog from '../assets/hotDog.jpg'
import pizza from '../assets/pizza.jpg'
import burger from '../assets/burger.jpg'
import felafel from '../assets/felafel.jpg'

import './FoodsItems.css';

export default function FoodsItems() {
    return (
        <div className='container'>
            <div>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={morghSokhari} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>لوبیا پلو</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={HotDog} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>عدس پلو</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={pizza} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>تهچین</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={burger} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>رشته پلو</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={felafel} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>آلبالو پلو</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
