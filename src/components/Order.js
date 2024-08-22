import React from 'react';
import logo from '../assets/Logo.svg';
import dimond from '../assets/dimond.png';
import box from '../assets/box.png';
import map from '../assets/maplogo.png';
import comment from '../assets/comments.png';
import human from '../assets/human.png';
import out from '../assets/out.png';
import { Link } from 'react-router-dom';
import Card6 from './Card6';



export default function RegComplete() {
    const logos = [
        { text: "اشتراک", src: dimond,add:'/reg' },
        { text: "سفارش ها", src: box,add:'/register' },
        { text: "آدرس ها", src: map,add:'/map' },
        { text: "دیدگاه ها", src: comment,add:'!#' },
    ];
    const logoindown = [
        { text: "حساب ها", src: human,add:'/login' },
        { text: "خروج از حساب", src: out,add:'!#' },
    ];
    return (
        <div className='register'>
            <div className='col-10 LeftPartBack'>
              <Card6/>
            </div>
            <div className='col-2 rightPartOfBack'>
                <div className='d-flex flex-column'>
                    <div className='d-flex align-items-center justify-content-center logos-section'>
                        <div className='d-flex flex-column justify-content-center'>
                            <div className='logoinReg d-flex justify-content-center'>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className='col pt-5'>
                                <ul className='row'>
                                    {logos.map((item, index) => (
                                        <li key={index} className='d-flex justify-content-right m-2'>
                                            <img className="vec col-1 mt-1" src={item.src} alt="logo" />
                                            <Link to={item.add} className='col-11 p-1 text'>{item.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col pt-5 logoindown-section d-flex justify-content-center align-items-end'>
                        <ul className='row align-items-center d-flex'>
                            {logoindown.map((item, index) => (
                                <li key={index} className='d-flex justify-content-right align-items-center m-2'>
                                    <img className="vec col-1 mx-1" src={item.src} alt="logo" />
                                    <Link className='col-11 text' to={item.add}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
