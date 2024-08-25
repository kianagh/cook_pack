import React, { useState } from 'react';
import rice from '../assets/ricevec.png';
import salad from '../assets/sakadvec.png';
import stew from '../assets/stewvec.png';
import pizza from '../assets/pizzavec.png';
import pasta from '../assets/pastavec.png';
import steak from '../assets/steakvec.png';
import logo from '../assets/Logo.svg';
import './menu.css';

const vectors = [
    { vector: rice, id: 1, btnName: "پلویی", section: "rice" },
    { vector: pizza, id: 2, btnName: "فست فود", section: "pizza" },
    { vector: stew, id: 3, btnName: "خورشتی", section: "stew" },
    { vector: steak, id: 4, btnName: "کبابی", section: "steak" },
    { vector: salad, id: 5, btnName: "گیاهی", section: "salad" },
    { vector: pasta, id: 6, btnName: "متفرقه", section: "pasta" },
];

const defaultVector = vectors.find(vector => vector.id === 1).vector;

export default function Menu({ handleShowSection }) {
    const [clickedImage, setClickedImage] = useState(defaultVector);
    const [menuVisible, setMenuVisible] = useState(true);

    const handleClick = (vector, section) => {
        setClickedImage(vector);
        handleShowSection(section);
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className={`menu-container ${menuVisible ? 'visible' : 'hidden'}`}>
            <button className='menu-toggle-btn' onClick={toggleMenu}>
                <span className='menu-icon' onClick={toggleMenu}>☰</span> {/* You can use an icon here */}
            </button>
            <div className='rightSideMenu container'>
                <div className='col entireSide'>
                    <div className='row'>
                        <div className='clickedImageContainer'>
                            {clickedImage && <img src={clickedImage} alt="Clicked" className="clickedImage m-5" />}
                        </div>
                    </div>
                    <div className='row-8 d-flex flex-column justify-content-between align-items-center'>
                        {vectors.map((data) => (
                            <div key={data.id} className='btnDiv d-flex justify-content-centre m-3 align-items-center'>
                                <button className="menuBtn row" onClick={() => handleClick(data.vector, data.section)}>
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
        </div>
    );
}
