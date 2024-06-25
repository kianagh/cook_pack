import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import pen from "../assets/pen.png";
import alarm from "../assets/alarm.png";
import shopping from "../assets/shopping.png";
import emptyBox from "../assets/emptybox.png";
import "./Card.css";
export default function Card() {
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
            <p>سفارش ها</p>
            <div className="hr"></div>
          </div>
          <div className="text-container mt-5">
            <p> متاسفانه شما هنوز سفارشی ندادید!</p>
            <div className="mt-5">
              <img
                width={259}
                height={259}
                className=""
                src={emptyBox}
                alt="logo"
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
