import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import './Ideas.css'


export default function Ideas() {
    return (
        <div className='container'>
            <Row>
                <Col>
                    <div>
                        <h1>!نظر و عکستون از آشپزی با کوک‌پک رو به اشتراک بگذارید و عضو باشگاه مشتریان شوید</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='d-flex justify-content-between pictures d-flex align-items-center'>
                        <div className='pb-5'>
                            <img src={pic1} alt='pictures' className='pictureOne z-index'/>
                        </div>
                        <div>
                            <img src={pic2} alt='pictures' className='pictureSecond'/>
                        </div>  <div>
                            <img src={pic3} alt='pictures' className='pictureThird'/>
                        </div>  <div>
                            <img src={pic4} alt='pictures' className='pictureFourth'/>
                        </div>
                    </div>

                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <p>.اعضای باشگاه مشتریان میتوانند از تخفیفات هفتگی برای وعده‌ها و همچنین کدتخفیف‌های ویژه‌ی اشتراک‌ها استفاده کنند</p>
                    </div>
                </Col>
            </Row>


        </div>
    )
}
