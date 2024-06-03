
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import './Carousel.css'

const slidesData = [
  {
    imageUrl: pic1,
    name: 'کیانا',
    caption: 'ما دوتا بچه کوچیک داریم و برای آخر هفته نمیتونستیم بریم خرید برای همین از این سایت سفارش ثبت کردیم. خیلی تجربه لذت بخشی بود و حتما باز هم از این سایت استفاده میکنیم.',
  },
  {
    name: 'غزل',
    imageUrl: pic2,
    caption: 'من به خاطر نگهداری از دخترم نمیتونستم از خونه برم بیرون برای همین از این سایت سفارش دادم. سایت خوبی بود و خیلی سریع تونستم سفارشمو ثبت کنم. مواد اولیشون هم تازه و سالم بودن. اما با یک ساعت تاخیر به دستم رسید که برای جبران یک نوشیدنی هم توی بسته گذاشته بودن.',
  },
  {
    name: 'مهدی',
    imageUrl: pic3,
    caption: 'من از این سایت دو وعده گرفتم و واقعا بسته‌بندی و آماده‌سازی موادشون حرف نداشت. گوشتاشون هم تازه بود. من با خانوادم شروع به آشپزی کردیم و از این تجربه خیلی لذت بردیم ممنون از تیم کوک پک.',
  },
  {
    name: 'آتنا',
    imageUrl: pic4,
    caption: 'من از این سایت دو وعده گرفتم و واقعا بسته‌بندی و آماده‌سازی موادشون حرف نداشت. گوشتاشون هم تازه بود. من با خانوادم شروع به آشپزی کردیم و از این تجربه خیلی لذت بردیم ممنون از تیم کوک پک.',
  },
];

export default function Slider() {


  return (
    <>
      <Carousel>
        {slidesData.map((data) => (
          <Carousel.Item key={data}>
            <div >
              <img className=" sliderImage" src={data.imageUrl} alt='image' />
            </div>
            <Carousel.Caption className=' d-flex row text-right'>
              <h5>{data.name}</h5>
              <p>{data.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}




