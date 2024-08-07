import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import loobia from '../assets/loobia.jpg';
import adas from '../assets/adas.jpg';
import tahchin from '../assets/tahchin.jpg';
import reshte from '../assets/reshte.jpg';
import albaloo from '../assets/albaloo.jpg';
import kalam from '../assets/kalam.jpg';

import morghSokhari from '../assets/morghSokhari.jpg'
import HotDog from '../assets/hotDog.jpg'
import pizza from '../assets/pizza.jpg'
import burger from '../assets/burger.jpg'
import felafel from '../assets/felafel.jpg'

import mahi from '../assets/mahi.jpg'
import jooje from '../assets/jooje.jpg'
import ketf from '../assets/ketf.jpg'
import chini from '../assets/chini.jpg'
import koobide from '../assets/koobide.jpg'
import steak from '../assets/steak.jpg'

import gheyme from '../assets/gheyme.jpg'
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


import './FoodsItems.css';

export default function FoodsItems({ visibleSection }) {
    return (
        <div className='container foodsItem'>
            {visibleSection === 'rice' && (
                <div className='rice'>
                    <Row className="d-flex align-items-center justify-content-center">
                            <Col md={6} className="d-flex align-items-center  pt-5">
                                <div className="rectangleOfFoods">
                            <Link to='' style={{textDecoration:"none"}} >
                                    <img src={loobia} alt="ghaza" className="ghaza" />
                                <p className='pictureName'>لوبیا پلو</p>
                            </Link>
                                </div>
                            </Col>
                       
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                            <Link to='/foods/2'  style={{textDecoration:"none"}}>
                                <img src={adas} alt="ghaza" className="ghaza" />
                                <p className='pictureName'>عدس پلو</p>
                            </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                               <Link to="/foods/3"  style={{textDecoration:"none"}}>
                               <img src={tahchin} alt="ghaza" className="ghaza" />
                               <p className='pictureName'>تهچین</p>
                               </Link>
                            </div>
                        </Col>
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                            <Link to='/foods/4'  style={{textDecoration:"none"}}>
                                <img src={reshte} alt="ghaza" className="ghaza" />
                                <p className='pictureName'>رشته پلو</p>
                            </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                            <Link to='foods/5'  style={{textDecoration:"none"}}>
                                <img src={albaloo} alt="ghaza" className="ghaza" />
                                 <p className='pictureName'>آلبالو پلو</p>
                            </Link>
                            </div>
                        </Col>
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link to='/foods/6'  style={{textDecoration:"none"}}>
                                    <img src={kalam} alt="ghaza" className="ghaza" />
                                    <p className='pictureName'>کلم پلو</p>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            )}

            {visibleSection === 'pizza' && (
                <div className='pizza'>
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                            <Link to='/foods/7'>
                                 <img src={morghSokhari} alt="ghaza" className="ghaza" />
                            </Link>
                            </div>
                            <p className='pictureName'> مرغ سوخاری</p>
                        </Col>
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link to='/foods/8'>
                                <img src={HotDog} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'>هات داگ </p>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                 <Link to='/foods/9'>
                                <img src={pizza} alt="ghaza" className="ghaza" />
                                 </Link>
                            </div>
                            <p className='pictureName'>پیتزا</p>
                        </Col>
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                               <Link  to='/foods/10'>
                                <img src={burger} alt="ghaza" className="ghaza" />
                               </Link>
                            </div>
                            <p className='pictureName'> همبرگر</p>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                            <Link to='/foods/11'>
                            <img src={felafel} alt="ghaza" className="ghaza" />
                            </Link>
                            </div>
                            <p className='pictureName'> فلافل</p>
                        </Col>
                    </Row>
                </div>

            )}

            {visibleSection === 'stew' && (
                <div className='stew'>
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                            <Link to='/foods/12'>
                            <img src={gheyme} alt="ghaza" className="ghaza" />
                            </Link>
                            </div>
                            <p className='pictureName'>خورش قیمه </p>
                        </Col>
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                            <Link to='/foods/13'>
                            <img src={ghorme} alt="ghaza" className="ghaza" />
                            </Link>
                            </div>
                            <p className='pictureName'>خورش قرمه سبزی </p>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                            <Link to='/foods/14'>
                                <img src={mahiche} alt="ghaza" className="ghaza" />
                            </Link>
                            </div>
                            <p className='pictureName'>باقالی پلو با ماهیچه</p>
                        </Col>
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                            <Link to='/foods/15'>
                                <img src={fesenjan} alt="ghaza" className="ghaza" />
                            </Link>
                            </div>
                            <p className='pictureName'> خورش فسنجان</p>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link to='/foods/16'>
                                <img src={ghaleie} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'> خورش قلیه ماهی</p>
                        </Col>
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link to='/foods/17'>
                                <img src={zareshkPlo} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'>زرشک پلو با مرغ </p>
                        </Col>
                    </Row>
                </div>
            )}

            {visibleSection === 'steak' && (
                <div className='steak'>
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link to='/foods/18'>
                                    <img src={mahi} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'> ماهی کبابی</p>
                        </Col>
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link to='/foods/19'>
                                    <img src={jooje} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'> کوبیده مرغ</p>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link to='/foods/20'>
                                 <img src={ketf} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'>کتف و بال</p>
                        </Col>
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link  to='/foods/21'>
                                <img src={chini} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'> جوجه کباب</p>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link  to='/foods/22'>
                                    <img src={koobide} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'> کباب کوبیده</p>
                        </Col>
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link  to='/foods/23'>
                                    <img src={steak} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'> استیک</p>
                        </Col>
                    </Row>
                </div>
            )}

            {visibleSection === 'salad' && (
                <div className='salad'>
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link  to='/foods/24'>
                                     <img src={geraten} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'> گراتین بادمجان</p>
                        </Col>
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link  to='/foods/25'>
                                    <img src={kokosabzi} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'> کوکو سبزی</p>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link  to='/foods/26'>
                                <img src={koobidesoya} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'>کوبیده سویا</p>
                        </Col>
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                            <Link  to='/foods/27'>
                                <img src={mamsun} alt="ghaza" className="ghaza" />
                            </Link>
                            </div>
                            <p className='pictureName'> ساندویچ مامسان</p>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link  to='/foods/28'>
                                    <img src={lazaniaesfenanaj} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'> لازانیا اسفناج</p>
                        </Col>
                    </Row>
                </div>
            )}

            {visibleSection === 'pasta' && (
                <div className='pasta'>
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link  to='/foods/29'>
                                    <img src={ashreshte} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'> آش رشته</p>
                        </Col>
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link  to='/foods/30'>
                                    <img src={abgoosht} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'> آبگوشت</p>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                             <Link  to='/foods/31'>
                                 <img src={lazania} alt="ghaza" className="ghaza" />
                             </Link>
                            </div>
                            <p className='pictureName'>لازانیا</p>
                        </Col>
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link  to='/foods/32'>
                                    <img src={kotlet} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'> کتلت</p>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-center">
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link  to='/foods/33'>
                                    <img src={pasta} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'> پاستا</p>
                        </Col>
                        <Col md={6} className="d-flex align-items-center flex-column pt-5">
                            <div className="rectangleOfFoods">
                                <Link  to='/foods/34'>
                                    <img src={macaroni} alt="ghaza" className="ghaza" />
                                </Link>
                            </div>
                            <p className='pictureName'> ماکارونی</p>
                        </Col>
                    </Row>
                </div>
            )}

        </div>
    );
}
