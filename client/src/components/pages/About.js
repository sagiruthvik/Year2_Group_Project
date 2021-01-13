import React from 'react'
import { Link } from 'react-router-dom'
import packing from '../../img/packing.jpg'

function About() {
    return (
        <div className ="About">
            <div className = "block">
                <ul className ="list">
                       <Link to ="/About" className="about_link1 link" >
                        What is Meals On Wheels?
                       </Link>
              <Link to ="/Goal" className="about_link2 link" >
              What is our goal?
              </Link>
              <Link to ="/Services" className="about_link3 link " >
              What are services do we offer?
              </Link>
              <Link to ="/Who_Are_We_Helping?" className="about_link4 link" >
              What Can You Do To Help?
              </Link>
              </ul>
              <div className = "About_text">
              <h2 className = "title">
                  What is Meals on Wheels?
              </h2>
              <p className = "text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              
              </p>
              
              </div>
            </div>

        </div>
    )
}

export default About
