import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselWithBackgroundCaption.css';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';

const CarouselWithBackgroundCaption = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
      name: 'سامان',
      imageUrl: pic4,
      caption: 'من از این سایت دو وعده گرفتم و واقعا بسته‌بندی و آماده‌سازی موادشون حرف نداشت. گوشتاشون هم تازه بود. من با خانوادم شروع به آشپزی کردیم و از این تجربه خیلی لذت بردیم ممنون از تیم کوک پک.',
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {slidesData.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <div
            className="carousel-background"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="carousel-caption">
              <h3>{slide.name}</h3>
              <p>{slide.caption}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselWithBackgroundCaption;
