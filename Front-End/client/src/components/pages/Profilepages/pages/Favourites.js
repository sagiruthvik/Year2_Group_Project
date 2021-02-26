// import React, {useState} from 'react';
// import { FavouritesData } from '../Data/FavouritesData';

import axios from "axios"
import React, { Component } from 'react'
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md'

export default class Favourites extends Component {

  constructor(props){
    super(props);
    this.state = {
      FavouritesData : [],
      isloaded : false
    }
  }

  componentDidMount(){
    const access_token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyQGIuY29tIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9LHsiYXV0aG9yaXR5IjoidXNlcjpyZWFkIn1dLCJpYXQiOjE2MTQxNjI2NTUsImV4cCI6MTYxNDcwOTgwMH0.gxNoRg5V5I3XGPwpMRhZyfNs5aZWGZd1W0ycEs-G0vL2fB9pRrQZhlYMVnG1x9b7WJEYPkfd3ad7DQCnZuQVIw';
    const api = 'http://localhost:8080/api/v1/users/favData';

    axios.interceptors.request.use(
      config => {
        config.headers.authorization = `Bearer ${access_token}`;
        return config;
      },
      error =>{
        return Promise.reject(error);
      }
    );
    axios.get(api).then((response)=>{
            // response.json()
            console.log(response.data);
            this.setState({
              isloaded : true,
              FavouritesData : response.data
            });
          })
  }


  render() {

    var{isloaded, FavouritesData} = this.state;

    if(!isloaded){
      return(
        <div className="container">
          Loading....
        </div>
      )
    }


    return (
      <div className="container"> 
      {FavouritesData.map((item,index)=>{
          return(
          // <div className="row">
          <div className="column" key={item.favID}>
            <div className="card">
              <div className="res_details">
              <p className="res_name">{item.favRestaurantName}</p>
              <p className="res_add">{item.favRestaurantAddress}</p>
              <p className="rating">Rating 3.8 {item.favRestaurantRating}</p>
              <div className="btn">
              <button className="button">Order</button>    <button className="button">Help</button>
              </div>
                <img src={item.images}></img>
                </div>
                <div className="order_details">
              <h3 className="item">{item.favItem}</h3>
              <p className="price">Price : £{item.favItemCost}</p>
              <p className="es_time"><AiIcons.AiOutlineFieldTime />{item.orderDeliveryDate}</p>
              <p className="offer1"><MdIcons.MdLocalOffer /> {item.favItemDiscount}</p>
              <p className="offer2"><MdIcons.MdLocalOffer /> {item.favItemDiscount}</p>
              </div>
            </div>
           </div>
      //   </div>
          );
      })}
  </div>
    );
    
  }
}


// function Favourites() {
//   const [show,setShow] = useState(true);
//   return (
//     <div className="container"> 
//     {FavouritesData.map((item,index)=>{
//         return(
//         // <div className="row">
//         <div className="column" key={index}>
//           <div className="card">
//             <div className="res_details">
//             <p className="res_name">{item.restaurant_name}</p>
//             <p className="res_add">{item.restaurant_address}</p>
//             <p className="rating">Rating 3.8 {item.rating}</p>
//             <div className="btn">
//             <button className="button">Order</button>    <button className="button">Help</button>
//             </div>
//               <img src={item.images}></img>
//               </div>
//               <div className="order_details">
//             <h3 className="item">{item.title}</h3>
//             <p className="price">Price : {item.rupess}{item.newPrice}</p>
//             <p className="es_time">{item.time_ic} {item.delivery_time}</p>
//             <p className="offer1">{item.offer} 60% off | Use WELCOMEBACK</p>
//             <p className="offer2">{item.offer} upto £5 Amazonpay cashback</p>
//             </div>
//           </div>
//          </div>
//     //   </div>
//         );
//     })}
// </div>
//   );
// }

// export default Favourites;
