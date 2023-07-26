import React from 'react'
import { NavLink } from "react-router-dom"
import './Navbar.css'

const Navigate = () => {
    return (
        <nav className='navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/services'>Services</NavLink>
        </nav>
    )
}

export default Navigate;