import React from 'react'
import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
    return (

        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link> */}
            <NavLink to="/"
            //  className={({ isActive }) => (isActive) ? "ativo" : "desativado"} // outra maneira de ativar o ACTIVE
            >Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
    )
}

export default Navbar