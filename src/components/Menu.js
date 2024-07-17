import React, { useState } from 'react';
import rice from '../assets/ricevec.png';
import salad from '../assets/sakadvec.png';
import stew from '../assets/stewvec.png';
import pizza from '../assets/pizzavec.png';
import pasta from '../assets/pastavec.png';
import logo from '../assets/Logo.svg';
import steak from '../assets/steakvec.png';
import './menu.css';

const vectors = [
    { vector: rice, id: 1, btnName: "پلویی" },
    { vector: pizza, id: 2, btnName: "فست فود" },
    { vector: stew, id: 3, btnName: "خورشتی" },
    { vector: steak, id: 4, btnName: "کبابی" },
    { vector: salad, id: 5, btnName: "گیاهی" },
    { vector: pasta, id: 6, btnName: "متفرقه" },
];
const defaultVector = vectors.find(vector => vector.id === 1).vector;


export default function Menu() {
    const [clickedImage, setClickedImage] = useState(defaultVector);

    const handleClick = (vector) => {
        setClickedImage(vector);
    };

    return (
        <div className='rightSideMenu container'>
            <div className='col  entireSide'>
                <div className='row'>
                    <div className='clickedImageContainer'>
                        {clickedImage && <img src={clickedImage} alt="Clicked" className="clickedImage m-5" />}
                    </div>
                </div>
                <div className='row-8 d-flex flex-column justify-content-between align-items-center'>
                    {vectors.map((data) => (
                        <div key={data.id} className='btnDiv d-flex justify-content-centre m-3 align-items-center'>
                            <button className="menuBtn row" onClick={() => handleClick(data.vector)}>
                                {data.btnName}
                            </button>
                        </div>
                    ))}
                </div>
                <div className='row'>
                    <img src={logo} alt='logo' className='logo' />
                </div>
            </div>
        </div>
    );
}