import React from 'react';
import { Link } from 'react-router-dom';

import "./Pay.css"
import loobia from "../assets/loobia.jpg"
import logo from "../assets/Logo.svg"
import PersianCalendar from './PersianCalendar';
import pardakht from "../assets/pardakht.png"
import pardakhtMelaat from "../assets/pardakhtMelat.png"

const Pay = () => {


    return (
        <div className='row bgCover m-0'>
            <div className='col-3 py-5 calenderAandChoose '>
                <div className='d-flex flex-column align-items-start'>
                    <p>تعداد نفرات:</p>
                    <div className='d-flex'>
                        <div class="bg-white btnBorder" role="group" aria-label="First group">
                            <button type="button" class="btn px-4 w-25 buttonOne chooseBtn ">10</button>
                            <button type="button" class="btn px-4 w-25   middleBtn chooseBtn">8</button>
                            <button type="button" class="btn px-4 w-25  middleBtn chooseBtn">4</button>
                            <button type="button" class="btn  px-4 w-25  buttonLast chooseBtn">2</button>
                        </div>
                    </div>

                </div>
                <div className='pt-3  d-flex flex-column align-items-start' >
                    <p className='p-0'>تاریخ ارسال:</p>
                    <PersianCalendar />
                </div>
                <div className='py-2'>
                    <button type="button" class="btn buttonOne  chooseBtn w-25 ">۲ ظهر</button>
                    <button type="button" class="btn buttonLast chooseBtn w-25">۹ صبح</button>
                </div>
                <div className='d-flex align-items-start flex-column p-2'>
                    <p>درگاه پرداخت:</p>
                    <div>
                        <button className='pardakhtBtn mx-1'>
                            <img src={pardakht} alt='pardakht' />
                            سداد
                        </button>
                        <button className='pardakhtBtn'>
                            <img src={pardakhtMelaat} alt='pardakht' />
                            به پرداخت
                        </button>
                    </div>
                </div>
                <div className='p-2 d-flex ' >
                    <Link to='/order'>
                        <button className='btnPay mx-1 '>
                            پرداخت
                        </button>
                    </Link>
                    <Link to='/foodPage'>
                        <button className='btnBack '>
                            بازگشت
                        </button>
                    </Link>
                </div>

            </div>
            <div className='background p-5  col-9 d-flex flex-column align-items-center ' >
                <div className='container bg-white  rounded discount p-4   '>
                    <div className='d-flex justify-content-between align-items-center p-3 '>
                        <img src={logo} alt='logo' className='logo' />
                        <h2>سبد خرید</h2>
                        <Link to="/add">
                            <button className='btn'>انتخاب آدرس</button>
                        </Link>
                    </div>
                    <hr className='p-0 m-2' style={{ height: "0.1px" }} />
                    <div className='row d-flex justify-content-between w-100 rowFood'>
                    <div className='col morghImage'>
                            <img src={loobia} alt='morgh' className=' morgh rounded p-0' />
                        </div>
                        <div className='col ul'>
                            <h2> لوبیا پلو</h2>
                            <ul>
                                <li >برنج</li>
                                <li>لوبیا سبز خرد شده</li>
                                <li>گوشت چرخ‌کرده</li>
                                <li>پیاز</li>
                                <li>رب گوجه فرنگی</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className='material w-100 py-2  rounded d-flex flex-column align-items-center p-4'>
                        <table className='innerTable '>
                            <tr>
                                <td className='rightText'> برنج</td>
                                <td className='leftText'>۱۲۰٬۰۰۰ تومان</td>
                            </tr>
                            <tr>
                                <td className='rightText'>لوبیا سبز خرد شده</td>
                                <td className='leftText'>۱۴۰٬۰۰۰ تومان</td>
                            </tr>
                            <tr>
                                <td className='rightText'> گوشت چرخ‌کرده</td>
                                <td className='leftText'>۳۰٬۰۰۰ تومان</td>
                            </tr>  <tr>
                                <td className='rightText'> رب گوجه فرنگی</td>
                                <td className='leftText'> ۲۵٬۰۰۰ تومان</td>
                            </tr>
                            <tr>
                                <td className='rightText'>پیاز </td>
                                <td className='leftText'>۲۵٬۰۰۰ تومان</td>
                            </tr>
                            <tr>
                                <td className='rightText'>نمک، فلفل، زردچوبه، روغن  </td>
                                <td className='leftText'>۲۴٬۰۰۰ تومان </td>
                            </tr>
                            <div className='Divhr '>
                                <hr />
                            </div>
                            <tr>
                                <td className='rightText money'>هزینه پرداختی </td>
                                <td className='leftText money'>۳۴۹٬۰۰۰ تومان</td>
                            </tr>
                        </table>
                        <div className='d-flex justify-content-between w-100  py-3'>
                            <input placeholder='کد تخفیف دارید؟' name='code' className='rounded' />
                            <button className='btn w-25'>بررسی کد</button>
                        </div>
                        <div className='flex-column align-items-start d-flex w-100'>
                            <p>توضیحات سفارش:</p>
                            <div className="form-group w-100">
                                <textarea className="w-100 rounded" id="exampleFormControlTextarea1" rows="2"></textarea>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Pay;