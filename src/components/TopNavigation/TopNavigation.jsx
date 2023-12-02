import React from 'react'
import NavigationLinks from '../NavigationLinks/NavigationLinks'
import './TopNavigation.scss'

const TopNavigation = () => {
  const navLinks = [
    {
      image: {
        src: 'src/assets/logo-retina.png',
        alt: 'logo',
      },
      isLogo: true,
      path: '/'
    },
    {
      title: 'Shop All',
      path: '/shop_all'
    },
    {
      title: 'Plants',
      path: '/plants'
    },
    {
      title: 'Cacti',
      path: '/cacti'
    },
    {
      title: 'Our Story',
      path: '/our_story'
    },
    {
      title: 'Questions',
      path: '/faqs'
    },
    {
      icon: 'cart'
    }
  ]

  return (
    <div className='top-navigation-bar'>
      <NavigationLinks navLinks={navLinks}></NavigationLinks>
    </div>
  )
}

export default TopNavigation