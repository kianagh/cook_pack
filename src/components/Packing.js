import React from 'react'
import pack from '../assets/packing.jpg'
import './Packing.css'

export default function Packing() {
    return (    
        <div className='text-right third d-flex align-items-center'>
            <div className='row p-5 d-flex align-items-center'>

                <div className='col-md-8'>
                    <h1 className='text-white text-right pack'>داخل بسته‌های کوک‌پک چی وجود داره؟</h1>
                    <div>
                        <ul className='d-flex flex-column  justify-content-start'>
                            <li className='li text-white '>مواد اولیه تازه و سالم تهیه شده به صورت مستقیم از مزرعه</li>
                            <li className='li text-white'>دستور پخت‌های آسان و مخصوص هر غذا با اطلاعات تغذیه‌ای</li>
                            <li className='li text-white'>بسته‌بندی جداگانه مواد و مناسب قرار دادن در یخچال در صورت نیاز</li>
                            <li className='li text-white'>استفاده از مواد قابل بازیافت و بدون آسیب به طبیعت برای بسته‌بندی </li>
                            <li className='li text-white'>کاهش حداکثری زباله‌ها و ضایعات غذایی برای  تجربه‌ای لذت‌بخش از آشپزی</li>

                        </ul>
                    </div>

                </div>
                <div className='col-md-4'>
                    <img src={pack} alt='packing' className='packpic' />
                </div>

            </div>

        </div>
    )
}
