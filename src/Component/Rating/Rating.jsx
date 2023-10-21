/* eslint-disable react/jsx-key */
import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Rating.css'
import { useState } from 'react';


const Rating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
      
        <div className='Rating flex'>
            {[...Array(5)].map((star,index) => {
                const currentRating = index +1
              return (
                <label>
                <input type="radio"
                 name="rating" 
                 value={currentRating }
                 onClick={()=>setRating(currentRating)}
                 />
                <FaStar
                 className='star'
                  size={25}
                  color={currentRating <= (hover || rating)? '#0F9EFB':'#D9EDF9' }
                  onMouseEnter={()=> setHover(currentRating)}
                  onMouseLeave={()=> setHover(null)}
                   />
                </label>
              )
            })}
        </div>
    );
};

export default Rating;