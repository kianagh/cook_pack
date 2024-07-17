import React from 'react'
import sandwich from '../assets/sandwich.png'
import '../Pages/Registering.css'
import { Link } from 'react-router-dom'


export default function Login() {
    return (
        <div className='BackGroundofSignUp row '>
            <div className='col d-flex p-3'>
                <div className='col-5 p-5'>
                    <div className=' d-flex flex-column justifu-content-between align-items-center'>
                        <div className=''>
                            <h2 className='mb-3'>ورود</h2>
                            <div className=''>
                                <form className='d-flex flex-column justify-content-center align-items-center'>
                                    <div class="form-group flex-column d-flex justify-content-center align-items-start m-2 ">
                                        <label for="exampleInputEmail1 " className='m-1'>نام کاربری: </label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="کیانا قرائیان" />
                                        <small id="emailHelp" className="form-text  text-secondary">لطفا نام کاربری را درست وارد کنید</small>
                                    </div>
                                    <div class="form-group flex-column d-flex justify-content-center align-items-start">
                                        <label for="exampleInputPassword1" className='m-1'>رمز عبور:</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="********" />
                                        <small id="emailHelp" className="form-text  text-secondary"> رمز عبور 8 کاراکتر است</small>

                                    </div>
                                </form>
                                <div className='d-flex align-items-center justify-content-center m-4'>
                                    <button className='btn btnComfirm d-flex justify-content-center align-items-center '>ورود</button>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <p>استفاده از رمز عبور یک بار مصرف </p>
                            <div className='d-flex justify-content-between  mt-2 '>
                                <p className='' >   حساب کاربری ندارید؟</p>
                                <Link to='/signup' className='signUpChange' >ثبت نام</Link>
                            </div>
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
