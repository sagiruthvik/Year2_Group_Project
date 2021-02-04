import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillClockFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';


const Homepage = () => {
return(
    
<div className= "mainPage">
    <div className = "Surround">
        <div className = "headers">
<h1>
    Hungry? <br/> Get Started
</h1>
</div>
<div className = "searchBar">
<h2 className = "address">
    <HiLocationMarker className="location"/>
<input className="input" type="address" placeholder= "Enter Delivery Address"/>
</h2>
  <h2 className = "find">
  <Link to ="/SearchPage">
      <button class="Findfood-button">Find Food</button>
      </Link>
  </h2>
</div>

<Link to ="/Login">
<h3 className = "signIn">Sign in to see your past orders </h3>
</Link>


</div>

</div>
)

}

export default Homepage;