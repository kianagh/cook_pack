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
import tele from '../assets/tele.svg'
import email from '../assets/email.svg'
import phone from '../assets/phonee.svg'

export default function Footer() {
  return (
    <div>
      <div className='  container'>
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
        <Row className='d-flex align-items-center justfy-content-around'>
          <Col className='d-flex justify-content-start align-items-start  text-right col-md-6'>
            <Row className='d-flex justify-content-start align-items-start flex-column text-right '>
              <div className='d-flex'><h1 className='text-right'>درباره کوک پک</h1></div>
              <div className='d-flex justify-content-start align-items-centre '><p className='text-right p'>وظیفه ما در کوک پک به عنوان اولین سایت کشور در حوزه ارائه مواد اولیه غذایی، این است که فضایی برای خانواده‌ها فراهم شود تا بدون اتلاف وقت در فروشگاه‌ها و جستجوی مواد مرغوب، از لذت آشپزی در جمع گرم خانواده بهره‌مند شوند. کوک‌پک آماده ارسال مواد اولیه تازه از مزارع مرغوب به تمام شهر‌ها و شهرستان‌های ایران زمین است</p></div>
              <div className='emailForm'>
                <InputGroup className='inputgroup'>
                  <Form.Control className='bg-white form' placeholder='برای اطلاع از آخرین اخبار وجشنواره‌های کوک‌پک ایمیل خود را وارد کنید' />
                  <InputGroup.Text className='Useremail'>ایمیل</InputGroup.Text>
                </InputGroup></div>
            </Row>
          </Col>
          <Col className='d-flex align-items-start flex-column col-md-6'>
            <div className=' d-flex justify-content-center align-items-start flex-column  col-md-6 '>
              <div>
                <h3>ارتباط با ما</h3>
              </div>
              <div className='d-flex justify-content-between conection'>
                <div className='d-flex align-items-center'>
                  <img src={email} />
                  <p>ایمیل:</p>
                </div>
                <p>info@CookPack.ir</p>
              </div>
              <div className='d-flex justify-content-between conection'>
                <div className='d-flex align-items-center'>
                  <img src={tele} />
                  <p>تلگرام:</p>
                </div>
                <p>@CookPackAdmin</p>
              </div>
              <div className='d-flex justify-content-between conection'>
                <div className='d-flex align-items-center'>
                  <img src={phone} />
                  <p>شماره تماس :</p>
                </div>
                <p>09123456789</p>
              </div>
            </div>

          </Col>
        </Row>
        <Row>
          <p className='pt-3'>کلیه حقوق محصولات و محتوای این سایت متعلق به گروه کوک‌پک میباشد و هر گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست.</p>
        </Row>
      </div>
    </div>
  )
}
