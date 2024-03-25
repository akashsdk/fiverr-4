import React from 'react';
import './TestimonialCart.css';

export default function TestimonialCart({text, name, img}) {
  return (
    <div className='TestimonialCart-Body'>
        <p className='TestimonialCart-Text1'>{text}</p>

        <div className='TestimonialCart-Div'>
            <img className='TestimonialCart-Img' src={img} alt='cart'/>
            <p className='TestimonialCart-Text2'>{name}</p>
        </div>
    </div>
  )
}
