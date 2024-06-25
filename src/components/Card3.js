import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import pen from "../assets/pen.png";
import alarm from "../assets/alarm.png";
import shopping from "../assets/shopping.png";
import "./Card.css";
import happyFace from '../assets/happyFce.gif'
export default function Card3() {

    return (
        <div className="">
            <div className="card">
                <div className="d-flex justify-content-between mb-5">
                    <div className="d-flex">
                        <div>
                            <img src={avatar} alt="logo " />
                        </div>
                        <div className="w-100 username mt-2 mx-2 ">
                            <h2>مهدی کشاورزی</h2>
                            <div className="">
                                <img className="logoPen" src={pen} alt="logo" />
                                <Link className="linkStyle">ویرایش اطلاعات</Link>
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
                        <p>مهلت اشتراک شما:17 روز!</p>
                        <div className="mt-5 d-flex col justify-content-between">
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-start flex-column">
                                    <h2 className="mb-3">اعتبار باقیمانده:</h2>
                                    <p className="mt-1 mb-3">۷۶۵,۰۰۰ تومان</p>
                                </div>
                                <div className="d-flex flex-column align-items-start">
                                    <h2 className="mb-3 ">وعده های رزور شده:</h2>
                                    <p className="mt-1 ">۳ عدد</p>
                                </div>
                            </div>

                            <div className="col-6 sadFace"><img src={happyFace} alt='logo' className="sadFace" /></div>
                        </div>{" "}
                    </div>
                    <div>
                        <p>پس از اتمام اشتراک فعال، میتوانید مجددا برای خرید اشتراک اقدام نمایید.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
