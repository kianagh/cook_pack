import React from 'react'
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import pen from "../assets/pen.png";
import alarm from "../assets/alarm.png";
import shopping from "../assets/shopping.png";
import map from "../assets/map.png"
// import Address from "./Address"
import "./Card.css";
const Card4 = () => {
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
                <h2 className='address'>ویرایش آدرس</h2>
                <hr />
                <div className='row' >
                    <div className='col-7'>
                        <form>
                            <div className='form d-flex flex-column align-items-start'>
                                <label className='lable' for="address" >آدرس</label>
                                <textarea className="add rounded w-100" id="address" rows="2" placeholder='تهران، خیابان آفریقا، خیابان نلسون ماندلا، تقاطع خیابان کریمخان زند، جنب سفیر خودرو'></textarea>
                            </div>
                            <div className='d-flex align-items-start justify-content-between my-1 pelak'>
                                <div className=' d-flex flex-column align-items-start '>
                                    <lable className="lable" for="pelak">پلاک</lable>
                                    <input id='pelak' className="add rounded w-75" />
                                </div>
                                <div className='form d-flex flex-column align-items-start'>
                                    <lable className="lable" for="vahed">واحد</lable>
                                    <input id='vahed' className="add rounded w-75" />
                                </div>
                            </div>
                            <div className='d-flex align-items-strat my-1 justify-content-between'>
                                <div className=' d-flex flex-column align-items-start '>
                                    <lable className="lable" for="code">کد پستی</lable>
                                    <input id='code' className="add rounded w-75" />
                                </div>
                                <div className='form d-flex flex-column align-items-start'>
                                    <lable className="lable" for="num">شماره همراه</lable>
                                    <input id='num' className="add rounded w-75" />
                                </div>
                            </div>

                        </form>
                        <div className=' d-flex align-items-start my-1 justify-content-between ' >
                            <Link to="/order">
                                <button className='btnPay '>
                                    تایید
                                </button>
                            </Link>
                            <Link to='/add'>
                                <button className='btnBack '>
                                    بازگشت
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='col'>
                        <img src={map} alt='map' />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Card4