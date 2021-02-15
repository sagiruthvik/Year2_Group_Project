
import React from 'react'
import Footer from "../../Footer"
import '../Findfood/notFound.css'


function notFound() {
    return(
<div className = "bg-fundo">

    
    <div className = "bg-text"> 
        <h1 >Sorry we are currently unavailable in your area</h1>
    </div>   

     <div className ="footer-down">
         <Footer/>
     </div>
        
     
    
</div>


    )

}


export default notFound;

