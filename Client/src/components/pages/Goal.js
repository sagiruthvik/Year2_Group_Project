import React from 'react'
import { Link } from 'react-router-dom'
import packing from '../../img/packing.jpg'

function Goal() {
    return (
        <div className ="About">
            <div className = "block">
                <ul>
                    <li className = ";inks"></li>
                       <Link to ="/About" className="about_links" >
                        What is Meals On Wheels?
                       </Link>
              <Link to ="/Goal" className="about_links" >
              What is our goal?
              </Link>
              <Link to ="/Services" className="about_links" >
              What are services do we offer?
              </Link>
              <Link to ="/Who_Are_We_Helping?" className="about_links" >
              What Can You Do To Help?
              </Link>
              </ul>
            </div>

        </div>
    )
}

export default Goal
