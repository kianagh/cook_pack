import React from 'react';
import './MainPage.css';
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logopart.png';
import Gifs from '../components/Gifs';
import book from '../assets/book.gif'
import cooking from '../assets/cooking.gif'
import door from '../assets/door.gif'
import Packing from '../components/Packing';
import yesOrNo from '../assets/yesOrNo.gif'
import plus from '../assets/plus.gif'
import pack from '../assets/pack.gif'
import gholak from '../assets/gholakgif.gif'
import Ideas from '../components/Ideas';
import Footer from '../components/Footer';

// import Row from 'react-bootstrap/esm/Row';

export default function MainPage() {

    return (

        <div className='homePage'>

            <div className='heroPage container-fluid '>
                <div className='navbarPlace container'>
                    <Navbar expand="lg" className="navbar mt-5" >
                        <div className='container navbarPlace '>
                            <Navbar.Brand className="ml-auto" href="#">
                                <img src={logo} alt='logo' />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav " />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto  flex-grow-1 justify-content-center">
                                    <Link to='/aboutUs' className='nav-link'>درباره ما</Link>
                                    <Link to='/supporting' className='nav-link'>پشتیبانی</Link>
                                    <Link to='./foodpage' className='nav-link'>منوی هفته</Link>
                                    <Link to='/plan' className='nav-link'>طرح ها</Link>
                                </Nav>
                                <Nav className='reg'>
                                    <Link to='/signup' className='nav-link'>ثبت نام</Link>
                                    <Link to='/login' className='nav-link'>ورود</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>
                </div>
                <div className='col align-self container justify-content-start d-flex align-items-center h-50'>
                    <div className='text-right' >
                        <h1 className='text-dark MainTop '>طعم غذا،<br /> به مواد تازشه...</h1>
                        <p className='text-white text-right mr-0 secondMainTop'>بیش از ۳۰۰ نوع وعده غذایی در ۸ دسته‌بندی متفاوت هفتگی</p>
                        <div className='col  container justify-content-start d-flex mt-2'>
                            <Link to='/foodpage'>
                                <button className=' btn-hero ml-auto'>مشاهده دسته بندی</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='secondPart'>
                <div className='d-flex justify-content-start align-items-center  container'>
                    <div className='rotetedBox d-flex justify-content-center  align-items-center  '>
                        <div className='squar d-flex justify-content-center  '>
                            <p className='text-white opacity-100'> کوک‌پک چطور
                                کـــار مــی‌کنـه؟</p>
                        </div>
                    </div>
                </div>
                <div class="container p-5">
                    <div class="row">
                        <div class="col-md-4 mt-4">
                            <Gifs gifUrls={[book]} title="انتخاب غذای مورد نظر" info="انتخاب غذای مناسب در ۸ دسته بندی همراه با قابلیت شخصی‌سازی مواد اولیه!" />
                        </div>
                        <div class="col-md-4 mt-4">
                            <Gifs gifUrls={[cooking]} title="تحویل پک سفارشی" info="ارسال مواد اولیه به همراه دستورالعمل ویژه کوک پک با بسته‌بندی سفارشی در زمان و محل مشخص شده" />
                        </div>
                        <div class="col-md-4 mt-4">
                            <Gifs gifUrls={[door]} title="آشپزی کنید و لذت ببرید" info="لذت کامل آشپزی بدون هیچ زباله‌ی غذایی و سرو غذای سالم با دستور پخت مخصوص" />
                        </div>
                    </div>
                </div>


            </div>
            <div className='thirdPart'>
                <Packing />
            </div>
            <div className='fourthPage  p-5 align-items-center d-flex'>
                <div class="row d-flex align-items-center">
                    <div class="col-md-3  mt-4">
                        <Gifs gifUrls={[yesOrNo]} title="شخصی‌سازی لیست" info="حذف یا تغییر مواد غذایی و مقدار آن‌ها" />
                    </div>
                    <div class="col-md-3  mt-4">
                        <Gifs gifUrls={[plus]} title="بدون تعهد مشتری" info="لغو آسان درخواست در هر زمانی بدون غرامت" />
                    </div>
                    <div class="col-md-3  mt-4">
                        <Gifs gifUrls={[pack]} title="تنوع مواد غذایی تازه" info="تنوع بالای مواد اولیه تازه حتی برای گیاهخواران" />
                    </div>
                    <div class="col-md-3  mt-4">
                        <Gifs gifUrls={[gholak]} title="مقرون به صرفه" info="پک ارزان و اشتراک متناسب با هر بودجه‌ای" />
                    </div>
                </div>
            </div>
            <div className='idea'>
                <Ideas />
            </div>
            <div className='FOOTER'>
                <Footer />
            </div>

        </div>
    );
}
