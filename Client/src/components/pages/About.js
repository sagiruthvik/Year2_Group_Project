import React from 'react'
import { Link } from 'react-router-dom'
import packing from '../../img/packing.jpg'

function About() {
    return (
        <div className ="About">
            <div className = "block">
                <ul className ="list">
                       <Link to ="/About" className="about_link1" >
                        What is Meals On Wheels?
                       </Link>
              <Link to ="/Goal" className="about_link2" >
              What is our goal?
              </Link>
              <Link to ="/Services" className="about_link3" >
              What are services do we offer?
              </Link>
              <Link to ="/Who_Are_We_Helping?" className="about_link4" >
              What Can You Do To Help?
              </Link>
              </ul>
            </div>

        </div>
    )
}

export default About
