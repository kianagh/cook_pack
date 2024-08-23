import React from 'react'
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import pen from "../assets/pen.png";
import alarm from "../assets/alarm.png";
import shopping from "../assets/shopping.png";

import loobia from '../assets/loobia.jpg';
import adas from '../assets/adas.jpg';
import tahchin from '../assets/tahchin.jpg';
import reshte from '../assets/reshte.jpg';
import albaloo from '../assets/albaloo.jpg';
import kalam from '../assets/kalam.jpg';
import "./Card.css";
const Card7 = () => {

    const items = [
        { image: loobia, text1: ' لوبیا پلو', text2: 'مواد اولیه بسیار مرغوب و تازه بود. من گوشت هم سفارش دادم که اون هم خیلی تازه بود. حتما امتحان کنید. ',text3:'مبلغ پرداختی: ۷۴۴,۰۰۰ تومان' },
        { image: adas, text1: 'عدس پلو', text2: ' مواد اولیه بسیار مرغوب و تازه بود. من گوشت هم سفارش دادم که اون هم خیلی تازه بود. حتما امتحان کنید. ',text3:'مبلغ پرداختی: ۷۴۴,۰۰۰ تومان'  },
        { image: tahchin, text1: ' تهچین', text2: ' مواد اولیه بسیار مرغوب و تازه بود. من گوشت هم سفارش دادم که اون هم خیلی تازه بود. حتما امتحان کنید.',text3:'مبلغ پرداختی: ۷۴۴,۰۰۰ تومان'  },
        { image: reshte, text1: ' رشته پلو', text2: ' مواد اولیه بسیار مرغوب و تازه بود. من گوشت هم سفارش دادم که اون هم خیلی تازه بود. حتما امتحان کنید. ',text3:'مبلغ پرداختی: ۷۴۴,۰۰۰ تومان'  },
        { image: albaloo, text1: 'آلبالو پلو', text2: 'مواد اولیه بسیار مرغوب و تازه بود. من گوشت هم سفارش دادم که اون هم خیلی تازه بود. حتما امتحان کنید.',text3:'مبلغ پرداختی: ۷۴۴,۰۰۰ تومان'  },
        { image: kalam, text1: 'کلم پلو', text2: 'مواد اولیه بسیار مرغوب و تازه بود. من گوشت هم سفارش دادم که اون هم خیلی تازه بود. حتما امتحان کنید.',text3:'مبلغ پرداختی: ۷۴۴,۰۰۰ تومان'  },

    ];
    return (
        <div>
            <div className='card p-3'>
                <div className="d-flex justify-content-between ">
                    <div className="d-flex">
                        <div>
                            <img src={avatar} alt="logo " />
                        </div>
                        <div className="w-100 username mt-2 mx-2 ">
                            <h2>مهدی کشاورزی</h2>
                            <div className="">
                                <img className="logoPen" src={pen} alt="logo" />
                                <Link to='/signup' className="linkStyle">ویرایش اطلاعات</Link>
                            </div>
                        </div>
                    </div>
                    <div className="leftInnerCard mt-4 d-flex">
                        <div className="btn btn-primary mx-1 btnIcon">
                            <img width={27} height={27} className="" src={alarm} alt="logo" />
                        </div>
                        <div className="btn btn-primary btnIcon mx-2">
                            <img
                                width={27}
                                height={27}
                                className=""
                                src={shopping}
                                alt="logo"
                            />
                        </div>
                        <Link to='/foodpage'>
                            <button className="btn btn-primary btnOrder ">
                                <p>سفارش جدید</p>
                            </button>
                        </Link>
                    </div>
                </div>
                <h2 className='address'> دیدگاه ها</h2>
                <hr />
                <div className='row' >
                    <div className="scrollable">
                        {items.map((item, index) => (
                          <div>
                          <div className="d-flex mb-4 align-items-center justify-content-between" key={index}>
                                <div className='d-flex flex-column align-items-start'>
                                    <h3 className="mb-1 h3">{item.text1}</h3>
                                    <p className="mb-1 text">{item.text2}</p>
                                </div>
                                <img src={item.image} alt={`Item ${index}`} className="me-3 rounded" style={{
                                    width: "170px",
                                    height: "158px"
                                }} />
                            </div>
                            <hr/>
                          </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card7