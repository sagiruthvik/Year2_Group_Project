import React from 'react';
import { AddressesData } from '../Data/AddressesData';

function Addresses() {
  return (
    <div className="container">
    {AddressesData.map((item,index)=>{
        return(
        // <div className="row">
        <div className="column">
          <div className="card_add">
            <div className="add_details">
            <p className="address"><span>Street :</span><span></span> {item.Address}</p>
            <p className="house_no"><span>House number :</span><span></span>{item.House_no}</p>
            <p className="city"><span>City :</span><span></span> {item.City}</p>
            <p className="code"><span>Post Code :</span><span></span> {item.Postcode}</p>
            <p className="mark"><span>LandMark :</span><span></span> {item.LandMark}</p>
            <div className="btn_add">
            <button className="button">Edit</button>    <button className="button">Delete</button>
            </div>
              </div>
              {/* <div className="order_details">
              <h2 className="or_de">Order details</h2>
            <h3 className="item">{item.title} {item.quantity}</h3>
            <p className="price">Paid : {item.rupess}{item.newPrice}</p>
            <p className="or_date">Orderd on {item.ordered_date}</p>
            <p className="del_date">Delivered on {item.delivered_date} {item.status}</p>
            </div> */}
          {/* </div> */}
         </div>
        </div>
        );
    })}
</div>
  );
}

export default Addresses;
