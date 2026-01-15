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
import mail from '/Images/Home Page/Email.png'
import phone from '/Images/Home Page/Phone.png'
import location from '/Images/Home Page/Location.png'
import facebook from '/Images/Home Page/Facebook.png'
import linkedIn from '/Images/Home Page/LinkedIn.png'
import twitter from '/Images/Home Page/Twitter.png'



function App() {
  const url = [{
    content: "Home",
    href: "/"
  }, {
    content: "Careers",
    href: "/careers"
  }, {
    content: "About",
    href: "/about"
  }, {
    content: "Security",
    href: "/security"
  }]

  const contact = [{
    icon: mail,
    content: "hello@skillbirdge.com"
  }, {
    icon: phone,
    content: "+91 91813 23 2309"
  }, {
    icon: location,
    content: "Somewhere in the World"
  }]

  const btn = [{
    content: "Sign Up",
    href: "/signup"
  }, {
    content: "Log In",
    href: "/login"
  }]

  const icons = [{
    content: facebook,
    href: "https://www.facebook.com/"
  }, {
    content: twitter,
    href: "https://x.com/"
  }, {
    content: linkedIn,
    href: "https://www.linkedin.com/"
  }]




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
