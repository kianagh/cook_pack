import React from 'react';
import { Row, Col } from 'react-bootstrap';

import loobia from '../assets/loobia.jpg';
import adas from '../assets/adas.jpg';
import tahchin from '../assets/tahchin.jpg';
import reshte from '../assets/reshte.jpg';
import albaloo from '../assets/albaloo.jpg';
import kalam from '../assets/kalam.jpg';

import morghSokhari from '../assets/morghSokhari.jpg'
import  HotDog from '../assets/hotDog.jpg'
import pizza from '../assets/pizza.jpg'
import burger from '../assets/burger.jpg'
import felafel from '../assets/felafel.jpg'

import mahi from '../assets/mahi.jpg'
import jooje from '../assets/jooje.jpg'
import ketf from '../assets/ketf.jpg'
import chini from '../assets/chini.jpg'
import koobide from '../assets/koobide.jpg'
import steak from '../assets/steak.jpg'

import  gheyme from '../assets/gheyme.jpg'
import ghorme from '../assets/ghorme.jpg'
import fesenjan from '../assets/fesemjoon.jpg'
import ghaleie from '../assets/ghalie.jpg'
import mahiche from '../assets/mahiche.jpg'
import zareshkPlo from '../assets/zereshkPolo.jpg'

import geraten from '../assets/geraten.jpg'
import kokosabzi from '../assets/koko.png'
import koobidesoya from '../assets/soya.jpg'
import mamsun from '../assets/momsen.jpg'
import lazaniaesfenanaj from '../assets/lazania.jpg'

import ashreshte from '../assets/ash.jpg'
import abgoosht from '../assets/abGoosht.jpg'
import lazania from '../assets/lazaniaa.jpg'
import kotlet from '../assets/kotlate.jpg'
import pasta from '../assets/pasta.jpg'
import macaroni from '../assets/macaroni.jpg' 
 import Menu from './Menu'

import './FoodsItems.css';

export default function FoodsItems() {
    return (
        <div className='container foodsItem'>
            <div className='rice'>
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

            <div className='pizza'>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={morghSokhari} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> مرغ سوخاری</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={HotDog} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>هات داگ </p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={pizza} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>پیتزا</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={burger} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> همبرگر</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={felafel} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> فلافل</p>
                    </Col>
                </Row>
            </div>

            <div className='stew'>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={gheyme} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>خورش قیمه </p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={ghorme} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>خورش قرمه سبزی </p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={mahiche} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>باقالی پلو با ماهیچه</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={fesenjan} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> خورش فسنجان</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={ghaleie} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> خورش قلیه ماهی</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={zareshkPlo} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>زرشک پلو با مرغ </p>
                    </Col>
                </Row>
            </div>

            <div className='steak'>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={mahi} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> ماهی کبابی</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={jooje} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> کوبیده مرغ</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={ketf} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>کتف و بال</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={chini} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> جوجه کباب</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={koobide} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> کباب کوبیده</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={steak} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> استیک</p>
                    </Col>
                </Row>
            </div>

            <div className='salad'>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={geraten} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> گراتین بادمجان</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={kokosabzi} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> کوکو سبزی</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={koobidesoya} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>کوبیده سویا</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={mamsun} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> ساندویچ مامسان</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={lazaniaesfenanaj} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> لازانیا اسفناج</p>
                    </Col>
                </Row>
            </div>

            <div className='pasta'>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={ashreshte} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> آش رشته</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={abgoosht} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> آبگوشت</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={lazania} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'>لازانیا</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={kotlet} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> کتلت</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={pasta} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> پاستا</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column pt-5">
                        <div className="rectangleOfFoods">
                            <img src={macaroni} alt="ghaza" className="ghaza" />
                        </div>
                        <p className='pictureName'> ماکارونی</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
