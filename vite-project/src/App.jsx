import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Security from './pages/Security'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import logo from '/Images/Home Page/Logo.png'
import stroke from '/Images/Home Page/Mobile Icon.png'
import NavBar from './components/Shared components/NavBar/NavBar'
import Footer from './components/Shared components/Footer/Footer'
import url from './components/Shared components/NavBar/js_NavBar_data_url'
import contact from './components/Shared components/NavBar/js_NavBar_data_contact'
import icons from './components/Shared components/Footer/js_Footer_data_sm_icons'
import btn from './components/Shared components/NavBar/js_NavBar_btn'

function App() {

  return (
    <>
      <NavBar
        logo={logo}
        items={url}
        btn={btn}
        smallBtn={stroke}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer
        logo={logo}
        items={url}
        contact={contact}
        icons={icons}
        rights="YourBank All Rights Reserved"
        p="Privacy Policy"
        s="Terms of Service"
      />
    </>
  )
}

export default App
