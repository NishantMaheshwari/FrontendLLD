import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import { pages } from './data/pages.jsx'

function App() {
  return (
    <div className='flex-col align-middle'>
      <Navbar/>
      <Routes>
        {
          pages.map((page) => (
            <Route path={page.path} element={page.element}/>
          ))
        }
      </Routes>
    </div>
  )
}

export default App
