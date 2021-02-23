import React from 'react';
import { AddressesData } from '../Data/AddressesData';

function Payments() {
  return (
    <div className="container">
      <h1>Testing Payments</h1>
    {/* {AddressesData.map((item,index)=>{
        return(
        <div className="column">
          <div className="card_add">
            <div className="add_details">
            <p className="address"><span>Street :</span><span></span> {item.Address}</p>
            <p className="house_no"><span>House number :</span><span></span>{item.House_no}</p>
            <p className="city"><span>City :</span><span></span> {item.City}</p>
            <p className="code"><span>Post Code :</span><span></span> {item.Postcode}</p>
            <p className="mark"><span>LandMark :</span><span></span> {item.LandMark}</p>
            <div className="btn_add">
            <button className="button">Edit</button>  
            <button className="button">Delete</button>
            </div>
              </div>
         </div>
        </div>
        );
    })} */}
</div>
  );
}

export default Payments;
