import React from 'react'
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
      <button class="Findfood-button">Find Food</button>
  </h2>
</div>

<h3 className = "signIn">Sign in to see your past orders </h3>

</div>

</div>
)

}

export default Homepage;