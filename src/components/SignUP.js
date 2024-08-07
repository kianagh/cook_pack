import React from 'react'
import sandwich from '../assets/sandwich.png'
import '../Pages/Registering.css'
import { Link } from 'react-router-dom'

export default function SignUP() {
    return (
        <div className='BackGroundofSignUp'>
            <div className='container col d-flex p-3'>
                <div className='col-5'>
                    <div><h3>ثبت نام</h3></div>
                    <div>
                        <form className='pb-3'>
                            <div className="form-group d-flex flex-column align-items-center m-2">
                                <label for="exampleInputEmail1">نام کاربری:</label>
                                <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" مهدی کشاورزی" />
                                <small id="emailHelp" className="form-text " style={{ color: 'white' }}>وارد کردن نام اجباری است!</small>
                                {/* if we want to mute a text =>text-muted */}
                            </div>
                            <div className='d-flex flex-column align-items-center m-3'>
                                <label for="exampleInputEmail1">شماره همراه:</label>
                                <input required id="typeNumber" type="number" className="form-control" placeholder='۰۹۱۲۳۴۵۶۷۸۹' />
                                <small id="emailHelp" className="form-text " style={{ color: 'white' }}> وارد کردن شماره همراه اجباری است!</small>

                            </div>
                            <div className="form-group d-flex flex-column align-items-center m-3">
                                <label for="exampleInputPassword1">رمز عبور</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="*****w" />
                            </div>
                            <div className=" d-flex flex-column align-items-center form-group m-3">
                                <label for="exampleInputPassword1">تکرار رمز عبور</label>
                                <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="*****w" />
                            </div>
                            <div className="d-flex  align-items-center justify-content-evenly form-check m-3">
                                <label class="form-check-label" for="exampleCheck1">ذخیره کردن</label>

                                <input required type="checkbox" className="form-check-input" id="exampleCheck1" />
                            </div>
                            <Link to='/conforming'>
                                <button type="submit" className="btn" style={{ backgroundColor: '#ABD2FF', color: '#021D4B', fontWeight: 700 }}>
                                    ارسال کد
                                </button>
                            </Link>
                            <div>
                                <p>ثبت نام شما به منزله‌ی پذیرفتن شرایط کوک‌پک می‌باشد.</p>
                            </div>
                        </form>
                    </div>
                    <div></div>
                </div>
                <div className='col-7 boxOfSandwich'>
                    <div className='sandwich'>
                        <img src={sandwich} alt='sandwich' className='sandwich' />

                    </div>

                </div>

            </div>

        </div>
    )
}
