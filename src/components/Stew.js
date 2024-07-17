import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './FoodsItems.css';
import  gheyme from '../assets/gheyme.jpg'
import ghorme from '../assets/ghorme.jpg'
import fesenjan from '../assets/fesemjoon.jpg'
import ghaleie from '../assets/ghalie.jpg'
import mahiche from '../assets/mahiche.jpg'
import zareshkPlo from '../assets/zereshkPolo.jpg'

export default function FoodsItems() {
    return (
        <div className='container'>
            <div>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={loobia} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>لوبیا پلو</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={adas} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>عدس پلو</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={tahchin} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>تهچین</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={reshte} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>رشته پلو</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={albaloo} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>آلبالو پلو</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={kalam} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>کلم پلو</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
