import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavigationLinks.scss'

const NavigationLinks = (props = []) => {
  const navLinks = props.navLinks || {};
  return (
    <ul className='navigation-links'>
      { navLinks.map((item, index) => {
        return (
          <li key={index} className={`${item.isLogo ? 'logo' : ''}`}>
            <NavLink to={item.path} >
              {item.image && <img src={item.image.src} alt={item.image.alt}/>}
              {item.title && <span>{item.title}</span>}
            </NavLink>
          </li>
        )
      }) }
    </ul>
  )
}

export default NavigationLinks