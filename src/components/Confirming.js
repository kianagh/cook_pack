import React from 'react'
import sandwich from '../assets/sandwich.png'
// import { MDBInput } from 'mdb-react-ui-kit';
import '../Pages/Registering.css'
import { Link } from 'react-router-dom'

export default function Confirming() {
    return (
        <div className='BackGroundofSignUp row '>
            <div className='col d-flex p-3'>
                <div className='col-5 p-5'>
                    <div>
                        <h2 className='mb-3'>تایید شماره</h2>
                        <div className=''>
                            <p>کد به شماره ۰۹۱۲۳۴۵۶۷۸۹ ارسال شد.</p>
                            <p>لطفا کد ۵ رقمی خود را وارد کنید:</p>
                        </div>
                        <input className='inputOfTheCode' required />
                    </div>
                    <div>
                        <div className='d-flex align-items-center justify-content-center m-4'>
                            <Link to='/login'>
                                <button className='btn pardakhtBtn btnComfirm d-flex justify-content-center align-items-center '>تایید</button>
                            </Link>
                        </div>
                        <p>کدی دریافت نکردید؟</p>
                        <Link to='/signUp'>
                            <button className='btn btn-transparent   ' to='/signUp'>دریافت مجدد</button>

                        </Link>
                        <div className='d-flex justify-content-center '>
                            <p className='col-5' >آیا شماره اشتباه است؟</p>
                            <Link to='/signup' className='signUpChange' >ویرایش</Link>
                        </div>
                    </div>
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
