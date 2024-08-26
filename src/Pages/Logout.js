import React from 'react'
import { Button } from 'react-bootstrap'
import './Logout.css'
import { Link } from 'react-router-dom'

export default function Logout() {
    return (
        <div className='logout d-flex justify-content-center align-items-center'>
            <div className='logOut rounded d-flex flex-column justify-content-center align-items-center'>
                <div>
                    <p>خروج از حساب</p>
                    <p>آیا میخواهید از حساب خود خارج شوید؟</p>
                    <div className='d-flex  w-100 justify-content-evenly'>
                        <Link to='/' className='w-25'>
                            <Button className=' bg-light text-dark '>بله</Button>
                        </Link>
                        <Link to='/order' className='w-25'>
                            <Button className='btn  '>انصراف</Button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}
