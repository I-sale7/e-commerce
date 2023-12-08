import React from 'react'
import Hero from '../../components/Hero/Hero'

const HERO_CONTENT = {
    subtitle: 'Plants',
    title: 'Bird of Paradise Plant',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nulla in mauris efficitur elementum.',
    oldPrice: '$65.00',
    newPrice: '$50.00',
    button: {
      text: 'Add to Cart',
      action: ()=> {
        return;
      }
    },
    img: {
      src: 'src/assets/hero.png',
      alt: 'hero Image'
    }
  }

const Home = () => {
  return (
    <>
    <Hero content={HERO_CONTENT}/>
    </>
  )
}

export default Home