import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarDsh from '../components/Dsahboard/NavbarDsh'
const DashboardLayouts = () => {
  return (
    <div>
        <NavbarDsh/>
        <main>
        <Outlet/>
        </main>
    </div>
  )
}

export default DashboardLayouts