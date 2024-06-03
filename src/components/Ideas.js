import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
// import pic1 from '../assets/pic1.jpg'
// import pic2 from '../assets/pic2.jpg'
// import pic3 from '../assets/pic3.jpg'
// import pic4 from '../assets/pic4.jpg'
import './Ideas.css'
import Slider from './Slider'



export default function Ideas() {
    return (
        <div className='container'>
            <Row>
                <Col>
                    <div>
                        <h1 className='text-white'>نظر و عکستون از آشپزی با کوک‌پک رو به اشتراک بگذارید و عضو باشگاه مشتریان شوید!</h1>
                    </div>
                </Col>
            </Row>
            <Row>
            <Slider/>
               
            </Row>
            <Row>
                <Col>
                    <div>
                        <p className='text-white'>اعضای باشگاه مشتریان میتوانند از تخفیفات هفتگی برای وعده‌ها و همچنین کدتخفیف‌های ویژه‌ی اشتراک‌ها استفاده کنند.</p>
                    </div>
                </Col>
            </Row>


        </div>
    )
}
