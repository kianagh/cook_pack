import React from 'react'
import sandwich from '../assets/sandwich.png'
// import { MDBInput } from 'mdb-react-ui-kit';
import '../Pages/Registering.css'

export default function Confirming() {
    return (
        <div className='BackGroundofSignUp'>
            <div className='container col d-flex p-3'>
                <div className='col-5'>
                    <div>
                        <h2>تایید شماره</h2>
                        <p>کد به شماره ۰۹۱۲۳۴۵۶۷۸۹ ارسال شد.</p>
                        <p>لطفا کد ۵ رقمی خود را وارد کنید:</p>
                        <input />
                    </div>
                    <div>
                        <button>تایید</button>
                        <p>کدی دریافت نکردید?</p>
                        <button>دریافت مجدد</button>
                        <div>
                            <p>آیا شماره اشتباه است?</p>
                            <link to='/signup'>ویرایش</link>
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
