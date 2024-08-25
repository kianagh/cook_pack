import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../FOODcard.json'; // Adjust the path as necessary
import "./Materia.css"
// import Comments from './Comments';
import Firstavatar from "../assets/avatar1.png"
import secondavatar from "../assets/avatar2.png"
import thirdavatar from "../assets/avatar3.png"
import fourthavatar from "../assets/avatar4.png"
import loobia from "../assets/loobia.jpg"

const Food = () => {
  const { id } = useParams(); // Get the ID from the URL
  const foodId = parseInt(id, 10); // Convert ID to number


  const food = data.foods.find((item) => item.id === foodId);

  if (!food) {
    return <h2>Food not found</h2>;
  }
  console.log(id)
  return (
    <div className='row bgCover'>
      <div className='col-3 p-5'>
        <div>
          <p className=''>نیاز به شخصی‌سازی دارید؟</p>
          <div className='personal p-2'>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
              <label className="form-check-label" for="flexCheckDefault">
                برنج
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked">
                لوبیا سبز خورد شده
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                گوشت چرخ کرده
              </label>
            </div> <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                پیاز
              </label>
            </div> <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                رب گوچه فرنگی
              </label>
            </div> <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                نمک، فلفل، زردچوبه، روغن
              </label>
            </div>
          </div>
          <div className='py-2 comments px-2 my-3'>
            <p>دیدگاه‌ها:</p>
            <div>
              <div>
                <div className='d-flex w-100 align-items-start '>
                  <img src={Firstavatar} alt='avatar' />
                  <p className='my-1'>سمانه علیپور</p>
                </div>
                <p>مواد اولیه بسیار مرغوب و تازه بود. من گوشت هم سفارش دادم که اون هم خیلی تازه بود. حتما امتحان کنید.</p>
              </div>
              <div>
                <div className='d-flex w-100 align-items-start '>
                  <img src={secondavatar} alt='avatar' />
                  <p className='my-1'>علیرضا شهسواری</p>
                </div>
                <p>من خیلی وقته از این سایت استفاده میکنم. هم از غذاهای کبابی گرفتم و هم فست‌فود اما دفعه اول بود که از قسمت پلویی یه بسته گرفتم. خیلی عالی بود مخصوصا برنجش که ایرانی بود.</p>
              </div> <div>
                <div className='d-flex w-100 align-items-start '>
                  <img src={thirdavatar} alt='avatar' />
                  <p className='my-1'>مهناز کریمی</p>
                </div>
                <p>خیلی عالی بود! حتما امتحانش کنید.</p>
              </div> <div>
                <div className='d-flex w-100 align-items-start '>
                  <img src={fourthavatar} alt='avatar' />
                  <p className='my-1'>کیانا قرائیان</p>
                </div>
                <p>من این بسته رو سفارش دادم اما دوست داشتم که گوشت تکه‌ای باشه. امیدوارم در آینده این موضوع رو برای بسته‌هاتون لحاظ کنید.</p>
              </div>
            </div>
          </div>
          <div className='comments p-3'>
            <div className='bg-light rounded p-2 idea'>
              <p>برای ثبت دیدگاه، باید وارد حساب خود شوید.</p>
              <Link to='/comments'>
                <button className='btn'>ورود به حساب</button>
              </Link>
            </div>
            <button className='m-2 btnsecond rounded w-100 text-white' disabled>ثبت نظر</button>
          </div>
        </div>
      </div>
      <div className='background col-9 p-5'>
        <div className='container bg-white  rounded back' >
          <div className='d-flex flex-column ' >
            <div className='coverImage'>
              <img className='image rounded p-2' src={loobia} alt='food'  />
            </div>
            <div className='d-flex w-100 justify-content-between align-items-center'>
              <h1 className='foodname'>{food.name}</h1>
              <p className='m-t-1'>{food.time}</p>
            </div>
            <div className='text'>
              <p>محتویات بسته‌ی لوبیا پلوی ۴ نفره شامل موارد زیر خواهد بود:</p>
            </div>
            <div className=' borderOfTable ' >
              <table className='innerTable table rounded'>
                <tr>
                  <td className='rightText'>برنج</td>
                  <td className='leftText'>۴ پیمانه</td>
                </tr>
                <tr>
                  <td className='rightText'>لوبیا سبز خورد شده</td>
                  <td className='leftText'>۳ پیمانه</td>
                </tr>
                <tr>
                  <td className='rightText'>گوشت چرخ‌کرده</td>
                  <td className='leftText'>۴۰۰ گرم</td>
                </tr>  <tr>
                  <td className='rightText'>پیاز</td>
                  <td className='leftText'>۳ عدد متوسط</td>
                </tr>
                <tr>
                  <td className='rightText'>رب گوجه فرنگی</td>
                  <td className='leftText'>۵ قاشق غذاخوری</td>
                </tr>
                <tr>
                  <td className='rightText'>نمک، فلفل، زردچوبه، روغن  </td>
                  <td className='leftText'>به مقدار لازم  </td>
                </tr>
              </table>
            </div>
            <p>برای تعداد نفرات متفاوت، مقدار مواد به همان نسبت تغییر خواهد کرد.</p>
          </div>
          <p className='description'>{food.description}</p>
          <div className='d-flex justify-content-between align-items-center py-3'>
            <p>جهت ثبت سفارش، ابتدا وارد حساب کاربری خود شوید.</p>
            <Link to="/pay">
              <button className='btn'>ورود به حساب</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Food;
