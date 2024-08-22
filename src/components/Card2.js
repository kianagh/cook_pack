import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import pen from "../assets/pen.png";
import alarm from "../assets/alarm.png";
import shopping from "../assets/shopping.png";
import "./Card.css";
import sadFace from '../assets/sadFace.gif'
export default function Card2() {
    const profit = [
        { text: "ارسال رایگان" },
        { text: "رزرو ۴ وعده در ماه" },
        { text: "استفاده از حساب اعتباری" },
        { text: "دسر و نوشیدنی رایگان در بسته" },
    ]
    return (
        <div className="">
            <div className="card">
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
                        <button className="btn btn-primary btnOrder ">
                            <p>سفارش جدید</p>
                        </button>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="title-container">
                        <p> کوک پک پرو</p>
                        <div className="hr"></div>
                    </div>
                    <div className="text-container mt-5">
                        <p>اشتراک فعال ندارید!</p>
                        <div className="mt-5 d-flex row align-items-center">
                            <div className="col-7">
                                <h1 className="d-flex">مزایا کوک‌پرو</h1>
                                <div>
                                    <ul className="row d-flex">
                                        {profit.map((item, index) =>
                                            <li key={index} className=" d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10ZM9.42933 14.28L15.1867 7.08267L14.1467 6.25067L9.23733 12.3853L5.76 9.488L4.90667 10.512L9.42933 14.28Z" fill="#021D4B" />
                                                </svg>
                                                <p className="my-4 mx-1 text">{item.text}</p>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 sadFace"><img src={sadFace} alt='logo' className="sadFace" /></div>
                        </div>{" "}
                    </div>
     
                    <Link to='/buyaccount'>
                        <button className="btn btn-lg">خرید اشتراک</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
