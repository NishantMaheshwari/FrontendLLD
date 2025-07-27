import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShimmerUI from './pages/Shimmer/ShimmerUI.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShimmerUI/>
    </>
  )
}

export default App
