import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';


const handleRegister = (e) => {
    e.preventDefault();
}


const Homepage = () => {
return(
<div className= "mainPage">
   <div className = "Surround">
      <div className = "headers">
         <h1>
            Hungry? <br/> Get Started
         </h1>
      </div>
      <form className="Searching" onSubmit={handleRegister}>
      <div className = "searchBar">
         <div className = "address">
            <HiLocationMarker className="location"/>
            <input className="input" type="address" placeholder= "Enter Delivery Address" required/>
         </div>
         <div className = "find">
            <button class="Findfood-button">Find Food</button>
         </div>

      </div>
      </form>
      <h3 className = "signIn">Sign in to see your past orders </h3>
   </div>
</div>
)
}
export default Homepage;
