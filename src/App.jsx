import { useState } from 'react'
import './App.css'
import TopNavigation from './components/TopNavigation/TopNavigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopAll from './views/ShopAll/ShopAll'
import Home from './views/Home/Home'
import Plants from './views/Plants/Plants'
import Cacti from './views/Cacti/Cacti'
import OurStory from './views/OurStory/OurStory'
import Faqs from './views/Faqs/Faqs'
import { Provider } from 'react-redux'
import store from './store/store'


function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <TopNavigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/shop_all' element={<ShopAll />} />
          <Route path='/plants' element={<Plants />} />
          <Route path='/cacti' element={<Cacti />} />
          <Route path='/our_story' element={<OurStory />} />
          <Route path='/faqs' element={<Faqs />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
