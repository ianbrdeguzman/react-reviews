import React, { useState } from 'react';
import { data } from './data.js';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    let [index, setIndex] = useState(0);

    const handlePrev = () => {
        if (index < 1) {
            setIndex(data.length - 1);
        } else {
            setIndex(index - 1);
        }
    };
    const handleNext = () => {
        if (index < data.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };
    const handleRandom = () => {
        let newIndex = Math.floor(Math.random() * (data.length - 1));
        if (newIndex === index) {
            newIndex = index + 1;
        }
        setIndex(newIndex);
    };
    return (
        <article className='review'>
            <div className='img-container'>
                <img
                    src={data[index].image}
                    alt={data[index].name}
                    className='person-img'
                />
                <span className='quote-icon'>{FaQuoteRight()}</span>
            </div>
            <h4 className='author'>{data[index].name}</h4>
            <p className='job'>{data[index].job}</p>
            <p className='info'>{data[index].text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={handlePrev}>
                    {FaChevronLeft()}
                </button>
                <button className='next-btn' onClick={handleNext}>
                    {FaChevronRight()}
                </button>
            </div>
            <button className='random-btn' onClick={handleRandom}>
                surprise me
            </button>
        </article>
    );
};

export default Review;
