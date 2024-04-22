import React, { useState } from 'react'
import Icon from '../Icon/CartIcon';
import './Cart.scss'
import { useSelector } from 'react-redux';


const Cart = () => {
  const {count} = useSelector(state => state.count);
  console.log(count);

  return (
    <span className='cart-container'>
      <Icon />
      <span className='cart-count'>{count}</span>
    </span>
  )
}

export default Cart