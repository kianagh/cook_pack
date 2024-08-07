import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Materials() {
    const [foods, setFoods] = useState("");

    useEffect(() => {
        axios.get("./FOODcard.json").then((res) => {
            setFoods(res.data.foods);  
        }).catch((error) => {
            console.error("Error fetching the JSON file", error);
        });
    }, []);

    if (!foods) {
        return <p>Loading...</p>; 
    }

    return (
        <div className='container'>
            <div className='row g-2'>
                <div className='nameOfFood'>
                    {foods.map((food, id) =>
                        <div key={id}>
                            <h1>{food.name}</h1>
                            <img src={food.src} alt={food.id} />
                            <p>{food.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
