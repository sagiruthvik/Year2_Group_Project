import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
const [click, setClick] = useState(false);
const [dropdown, setDropdown] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu= () => setClick(false);

const onMouseEnter = () => {
    if(window.innerWidth < 960){
        setDropdown(false)
    } else{
        setDropdown(true)
    }
};

const onMouseLeave = () => {
    if(window.innerWidth < 960){
        setDropdown(false)
    } else{
        setDropdown(false)
    }
};


    return (
        <>
        <nav className = "navbar">
            <Link to="/" className = "logo">
                Meals On Wheels
            </Link>
            <div className = "icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className= "nav-item">
                    <Link to ="/About" className="navbar_links" onClick={closeMobileMenu}>
                    About
                    </Link>
                </li>
                <li className= "nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                    <Link to ="/Problem" className="navbar_links" onClick={closeMobileMenu}>
                        Food Waste <i className="fas fa-caret-down" />
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className= "nav-item">
                    <Link to ="/Help" className="navbar_links" onClick={closeMobileMenu}>
                        Help
                    </Link>
                </li>
                <li className= "nav-item">
                    <Link to ="/Sign-Up" className="navbar_links_mobile" onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            <Button/>
        </nav>
        </>
    );
}

export default Navbar