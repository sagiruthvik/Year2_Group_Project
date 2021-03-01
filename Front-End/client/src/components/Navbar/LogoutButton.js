import React, {useState} from 'react'
import './Button.css'
import { Link } from 'react-router-dom';

export function LogoutButton() {

    const Submit = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("loggedIn");
        window.location = "/"
    }

    return(
        <Link>
            <button className="logout-button" onClick={Submit}>Logout </button>
        </Link>
    );
}