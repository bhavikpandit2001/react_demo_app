import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-con">
                    <ul>
                        <li>
                        <NavLink  className='navbar-logo'>
                                CART <i className='fab fa-typo3'></i>
                            </NavLink>
                            {/* <NavLink to="/">Home</NavLink> */}
                            <NavLink to="/register">Register</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;