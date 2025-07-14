import './App.css'
import { useState } from 'react'
import AdminPanel from './components/Admin/AdminPanel'
import User from './components/User/User'
import Navbar from './components/Other/Navbar'
import { Outlet } from 'react-router-dom'
import IsAdminContextProvider from './context/IsAdminContextProvider'
import Footer from './components/Other/Footer'

function App() {



  return (
    <div className='h-screen'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>

  )
}

export default App
