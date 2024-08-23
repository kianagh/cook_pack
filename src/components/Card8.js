import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import pen from "../assets/pen.png";
import alarm from "../assets/alarm.png";
import shopping from "../assets/shopping.png";
import "./Card.css";
import didgah from '../assets/didgah.png'
export default function Card3() {

    return (
        <div className="">
            <div className="card">
                <div className="d-flex justify-content-between">
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
                       <Link to='/idea'>
                       <button className="btn btn-primary btnOrder ">
                       دیدگاه جدید
                        </button>
                       </Link>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="title-container">
                        <p>دیدگاه‌ها</p>
                        <div className="hr"></div>
                    </div>
                    <div className="text-container mt-4  ">
                        <p>هنوز هیچ دیدگاهی ثبت نشده است.</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center py-3">
                        <img src={didgah} alt="didgah" />
                    </div>
                </div>
            </div>
        </div>
    );
}
