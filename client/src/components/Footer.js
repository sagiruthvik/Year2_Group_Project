import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiFacebook } from 'react-icons/fi';
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className= "footer">
            
<div className = "social-icons">
<AiOutlineInstagram className = "instaLogo iconz"/>
<AiOutlineTwitter className = "twitLogo iconz"/>
<GrLinkedinOption className = "lnLogo iconz"/>
<FiFacebook className = "fbLogo iconz"/>
</div>
<div className= "underSection">
<ul className = "info">
<Link to ="/About" className="navbar_links" >
 About
 </Link>
<li> <a href="#">Food Waste</a> </li>
<li> <a href="#">Help Us</a> </li>
<li> <a href="#">Donate</a> </li>
</ul>
<ul className = "terms">
<li> <a href="#">T&C</a> </li>
<li> <a href="#">FAQ</a> </li>
<li> <a href="#">Contact Us</a> </li>
<li> <a href="#">Privacy Policy</a> </li>
</ul>
</div>
</div>

        )
}

export default Footer;