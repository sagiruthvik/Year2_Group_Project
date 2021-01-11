import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faUser, faUtensils } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return(
        
<nav>

            <div className="nav-bar">

                <ul>
                
                    <div className="navNames">
                    <li className="title"><a href="#">Meals On <br/> Wheels</a></li>
                    <li> <a href="#">About</a> </li>
                    <li> <a href="#">Food Waste</a> </li>
                    <li> <a href="#">Help Us</a> </li>
                    <li> <a href="#">Donate</a> </li>
                    </div>

                    <div className="SignIn">
                    <li> <a href="#">Sign in</a> </li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;

