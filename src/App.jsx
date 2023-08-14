import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Results from './components/Results'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <div className={darkTheme ? 'dark' : ''}>
        <div className='bg-gray-50 text-black dark:bg-gray-700 dark:text-white'>

          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/search' element={<Results />}></Route>
            <Route path='/images' element={<Results />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>



    </>
  )
}

export default App
