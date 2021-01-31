import React, {useState} from 'react';
import { FavouritesData } from '../Data/FavouritesData';

function Favourites() {
  const [show,setShow] = useState(true);
  return (
    <div className="container"> 
    {FavouritesData.map((item,index)=>{
        return(
        // <div className="row">
        <div className="column">
          <div className="card">
            <div className="res_details">
            <p className="res_name">{item.restaurant_name}</p>
            <p className="res_add">{item.restaurant_address}</p>
            <p className="rating">Rating 3.8 {item.rating}</p>
            {/* <button className="fav_btn" onClick={()=>setShow(!show)}>{show?<p>{item.status}</p>:null}</button> */}
            <div className="btn">
            <button className="button">Order</button>    <button className="button">Help</button>
            </div>
              <img src={item.images}></img>
              </div>
              <div className="order_details">
            <h3 className="item">{item.title}</h3>
            <p className="price">Price : {item.rupess}{item.newPrice}</p>
            <p className="es_time">{item.time_ic} {item.delivery_time}</p>
            <p className="offer1">{item.offer} 60% off | Use WELCOMEBACK</p>
            <p className="offer2">{item.offer} upto £5 Amazonpay cashback</p>
            </div>
          </div>
         </div>
    //   </div>
        );
    })}
</div>
  );
}

export default Favourites;
