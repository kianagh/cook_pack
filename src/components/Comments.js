import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Materia.css"
import Firstavatar from "../assets/avatar1.png"
import secondavatar from "../assets/avatar2.png"
import thirdavatar from "../assets/avatar3.png"
import fourthavatar from "../assets/avatar4.png"
import bag from "../assets/bag.png"
const Comments = () => {
    const { id } = useParams();
    const Id = parseInt(id, 10); // Parse the ID from the URL
    const [food, setFood] = useState(null); // State to store the food data
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/foods/${Id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setFood(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchFoodData();
    }, [Id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!food) {
        return <p>No food found.</p>;
    }

    return (
        <div className='row bgCover'>
            <div className='col-3 p-5'>
                <div>
                    <p>نیاز به شخصی‌سازی دارید؟</p>
                    <div className='personal p-2'>
                        {/* Your checkboxes here */}
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
                            {/* More comments */}
                        </div>
                    </div>
                    <div className='comments p-3'>
                        <div className='bg-light rounded p-2 idea'>
                            <div>
                                <textarea className="bg-light textarea" placeholder='دیدگاه خود را اضافه کنید...' rows="3"></textarea>
                            </div>
                        </div>
                        <button className='m-2 btnsecond rounded w-100 text-white'>ثبت نظر</button>
                    </div>
                </div>
            </div>
            <div className='background p-5 col-9'>
                <div className='container bg-white rounded p-4'>
                    <div className='d-flex flex-column'>
                        <img className='image' src={food.src} alt={food.name} />
                        <div className='d-flex w-100 justify-content-between align-items-center'>
                            <h1>{food.name}</h1>
                            <p className='m-t-1'>{food.time}</p>
                        </div>
                        <div className='text'>
                            <p>محتویات بسته‌ی لوبیا پلوی ۴ نفره شامل موارد زیر خواهد بود:</p>
                        </div>
                        <div className='borderOfTable'>
                            <table className='innerTable table rounded'>
                                <tbody>
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
                                    </tr>
                                    <tr>
                                        <td className='rightText'>پیاز</td>
                                        <td className='leftText'>۳ عدد متوسط</td>
                                    </tr>
                                    <tr>
                                        <td className='rightText'>رب گوجه فرنگی</td>
                                        <td className='leftText'>۵ قاشق غذاخوری</td>
                                    </tr>
                                    <tr>
                                        <td className='rightText'>نمک، فلفل، زردچوبه، روغن</td>
                                        <td className='leftText'>به مقدار لازم</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>برای تعداد نفرات متفاوت، مقدار مواد به همان نسبت تغییر خواهد کرد.</p>
                    </div>
                    <p className='description'>{food.description}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p>جهت شخصی‌سازی، از منوی سمت راست استفاده کنید.</p>
                        <div className='d-flex align-items-center'>
                            <Link to='/pay'>
                                <button className='btn'>افزودن به سبد خرید</button>
                            </Link>
                            <div>
                                <img src={bag} alt='bag' className='bag p-1 mx-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;
