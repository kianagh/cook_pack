import React from 'react'
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import pen from "../assets/pen.png";
import alarm from "../assets/alarm.png";
import shopping from "../assets/shopping.png";
import Address from "./Address"
import "./Card.css";
const Card4 = () => {
    return (
        <div>
            <div className='card p-3'>
                <div className="d-flex justify-content-between mb-5">
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
                                سفارش جدید
                            </button>
                        </Link>
                    </div>
                </div>
                <h2 className='address'>ثبت آدرس</h2>
                <hr />
                <div>
                    <Address />
                </div>
                <div className='d-flex justify-content-between my-2'>
                    <p>موقعیت تقریبی مکان را روی نقشه ثبت کنید.</p>
                    <Link to='/map'>
                        <button className='btn'>تایید</button>

                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Card4