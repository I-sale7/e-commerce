import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../Icon/Icon';
import './NavigationLinks.scss'

const NavigationLinks = (props = []) => {
  const navLinks = props.navLinks;
  return (
    <>
      {navLinks &&
        <ul className='navigation-links'>
          { navLinks.map((item, index) => {
            return (
              <li key={index} className={`${item.isLogo ? 'logo' : ''}`}>
                <NavLink to={item.path} >
                  {item.image && <img src={item.image.src} alt={item.image.alt}/>}
                  {item.title && <span>{item.title}</span>}
                  {item.icon && <Icon icon={item.icon} />}
                </NavLink>
              </li>
            )
          }) }
        </ul>
      }
    </>
  )
}

export default NavigationLinks