import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import logo from '../assets/Logo.svg'
import telegram from '../assets/telegram.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter .png'
import facebook from '../assets/facebook.png'
import './Footer.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Footer() {
  return (
    <div>
      <div className=' pb-5 container'>
        <Row className='d-flex align-items-center justfy-content-around '>
          <Col className='col-md-6'>
            <div className='d-flex '>
              <img src={logo} alt='logo' className='' />
            </div>
          </Col>
          <Col className='col-md-6'>
            <div className='d-flex align-items-center justify-content-center p-0 gap-0 social'>
              <a className='p-0 socialMediaIcons ' href='!#'>
                <img src={facebook} alt='socialmedia' className=' p-0 socialmedia' />
              </a>
              <a className='p-0 socialMediaIcons' href='!#'>
                <img src={twitter} alt='socialmedia' className='p-0 socialmedia' />

              </a>
              <a className='p-0 socialMediaIcons' href='!#'>
                <img src={instagram} alt='socialmedia' className='p-0 socialmedia' />

              </a>
              <a className='p-0 socialMediaIcons' href='!#'>
                <img src={telegram} alt='socialmedia' className='p-0 socialmedia' />
              </a>
            </div>
          </Col>

        </Row>
        <Row>
          <Col className='d-flex justify-content-start align-items-start flex-column text-right col-md-6'>
            <Row className='d-flex justify-content-start align-items-start flex-column text-right '>
              <div className='d-flex'><h1 className='text-right'>درباره کوک پک</h1></div>
              <div className='d-flex justify-content-start '><p className='text-right'>وظیفه ما در کوک پک به عنوان اولین سایت کشور در حوزه ارائه مواد اولیه غذایی، این است که فضایی برای خانواده‌ها فراهم شود تا بدون اتلاف وقت در فروشگاه‌ها و جستجوی مواد مرغوب، از لذت آشپزی در جمع گرم خانواده بهره‌مند شوند. کوک‌پک آماده ارسال مواد اولیه تازه از مزارع مرغوب به تمام شهر‌ها و شهرستان‌های ایران زمین است</p></div>
              <div className='emailForm'> 
              <InputGroup className='inputgroup'>
                <Form.Control className='bg-white form' placeholder='برای اطلاع از آخرین اخبار وجشنواره‌های کوک‌پک ایمیل خود را وارد کنید'  />
                <InputGroup.Text className='Useremail'>ایمیل</InputGroup.Text>
              </InputGroup></div>
            </Row>
          </Col>
          <Col></Col>


        </Row>
        <Row></Row>
      </div>
    </div>
  )
}
