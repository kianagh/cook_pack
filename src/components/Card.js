import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.png'
import pen from '../assets/pen.png'
import './Card.css'

export default function Card() {
    return (
        <div className='card'>
            <div className='innerCard'>
                <div className='row firstRow'>
                    <div className='col'>
                        <div>
                            <img src={avatar} alt='logo'/>
                        </div>
                        <div>
                            <p>مهدی کشاورزی</p>
                            <div>
                                <img src={pen}/>
                                <Link>ویرایش اطلاعات</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col'></div>

                </div>
            </div>

        </div>
    )
}
