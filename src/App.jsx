import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ShimmerUI from './pages/shimmer/ShimmerUI.jsx'
import InfiniteScroll from './pages/infiniteScroll/InfiniteScroll.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className='flex-col align-middle'>
      <Navbar/>
      <Routes>
        <Route path='/shimmer' element={<ShimmerUI/>}/>
        <Route path='/scroll' element={<InfiniteScroll/>}/>
      </Routes>
    </div>
  )
}

export default App
