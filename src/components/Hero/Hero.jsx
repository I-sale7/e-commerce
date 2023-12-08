import React, { useState } from 'react'
import './Hero.scss'
import { useDispatch } from 'react-redux';
import { DECREMENT, INCREMENT } from '../../store/actions/types';
import { decreamentAction, increamentAction } from '../../store/actions/cartActions';

const Hero = (props) => {
  const content = props.content;

  const dispatch = useDispatch();

  const addToCart = ()=> {
    increamentAction(dispatch)
  }

  const removeFromCart = ()=> {
    decreamentAction(dispatch)
  }

  return (
    <div className='hero-container'>
      <div className='hero__context'>
        <span className='hero__context-sub-title'>
          {content && content.subtitle || 'Plants'}
        </span>
        <div className='hero__context-title'>
          {content && content.title || 'Bird of Paradise Plant'}
        </div>
        <div className='hero__context-desc'>
          {content && content.desc || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nulla in mauris efficitur elementum.'}
        </div>
        <div className='hero__context-price'>

          <span className='hero__context-price old'>
            {content && content.oldPrice || '$65.00'}
          </span>
          <span className='hero__context-price new'>
            {content && content.newPrice || '$50.00'}
          </span>
          <button className='hero__context-button' onClick={ addToCart }>
            {content && content.button.text || 'Add to Cart'}
          </button>
          <button className='hero__context-button--delete' onClick={ removeFromCart }>
            Remove from Cart
          </button>
        </div>
      </div>

      <div className='hero__image'>
        <img src={content && content.img.src || 'src/assets/hero.png'} alt={content && content.img.alt || 'hero Image'}/>
      </div>

    </div>
  )
}

export default Hero