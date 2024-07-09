import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const mainLayouts = () => {
  return (
    <div>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default mainLayouts