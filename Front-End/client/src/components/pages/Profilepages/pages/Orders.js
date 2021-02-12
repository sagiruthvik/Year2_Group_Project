import React from 'react';
import { OrdersData } from '../Data/OrdersData';

function Orders() {

  return (
    <div className="container">
    {OrdersData.map((item,index)=>{
        return(
        // <div className="row">
        <div className="column">
          <div className="card">
            <div className="res_details">
            <p className="res_name">{item.restaurant_name}</p>
            <p className="res_add">{item.restaurant_address}</p>
            <p className="order_no">Order{item.order_no}</p>
            <div className="btn">
            <button className="button">Reorder</button>   <button className="button">Help</button>
            </div>
              <img src={item.images}></img>
              </div>
              <div className="order_details">
              <h2 className="or_de">Order details</h2>
            <h3 className="item">{item.title} {item.quantity}</h3>
            <p className="price">Paid : {item.rupess}{item.newPrice}</p>
            <p className="or_date">Orderd on {item.ordered_date}</p>
            <p className="del_date">Delivered on {item.delivered_date} {item.status}</p>
            </div>
          </div>
         </div>
    //   </div>
        );
    })}
</div>
  );
}

export default Orders;