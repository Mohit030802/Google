import React, { useState } from 'react'
import Navbar from './Navbar'
import Routes from './Routes'
import Footer from './Footer'


const Home = () => {
  const [darkTheme,setDarkTheme]=useState(false);
  return (
    <>
      <div className={darkTheme?'dark':''}>
        <div className='bg-gray-100 text-black dark:bg-gray-700 dark:text-white'>

        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Routes/>
        <Footer/>
        </div>
      </div>
    </>
  )
}

export default Home
