
import OurServices from './ourservices'
import Login from './login'
import SignUp from './signup'
import Home from './home'
import AboutUs from './about'
import {  Route, Routes } from 'react-router-dom'
import ContactUs from './contact'

const PageRouter = ()=>{

    return(
    <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/ourservices" element={<OurServices/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/signup" element={<SignUp/>} />
        <Route  path="/about-us" element={<AboutUs/>} />
        <Route  path="/contact-us" element={<ContactUs/>} />
    </Routes>
    )
}



export default PageRouter