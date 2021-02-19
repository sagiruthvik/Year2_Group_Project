import UserServices from "../UserServices";
import React, { Component } from 'react'
import axios from "axios";

export default class Orders extends Component {

  constructor(props){
    super(props);
    this.state = {
      OrdersData : []
    }
  }

  componentDidMount(){
    axios.get("localhost:8080/api/v1/users/ordersData").then((res) =>{
      console.log(res);
      this.setState({ OrdersData : res.data});
    })
  }


  render() {
    return (
      <div className="container">
      {this.state.OrdersData.map((item,index)=>{
          return(
            
          // <div className="row">
          <div className="column">
            <div className="card">
              <div className="res_details">
              <p className="res_name">{item.orderRestaurantName}</p>
              <p className="res_add">{item.orderRestaurantAddress}</p>
              <p className="order_no">Order{item.orderNumber}</p>
              <div className="btn">
              <button className="button">Reorder</button>   <button className="button">Help</button>
              </div>
                <img src={item.images}></img>
                </div>
                <div className="order_details">
                <h2 className="or_de">Order details</h2>
              <h3 className="item">{item.orderName} {item.orderQuantity}</h3>
              <p className="price">Paid : £{item.orderPrice}</p>
              <p className="or_date">Orderd on {item.orderDate}</p>
              <p className="del_date">Delivered on {item.orderDeliveryDate}</p>
              </div>
            </div>
           </div>
      //   </div>
          );
      })}
  </div>
    )
  }
}


// function Orders() {

//   const [Orders] = [];

//   return (
//     <div className="container">
//     {OrdersData.map((item,index)=>{
//         return(
//         // <div className="row">
//         <div className="column">
//           <div className="card">
//             <div className="res_details">
//             <p className="res_name">{item.restaurant_name}</p>
//             <p className="res_add">{item.restaurant_address}</p>
//             <p className="order_no">Order{item.order_no}</p>
//             <div className="btn">
//             <button className="button">Reorder</button>   <button className="button">Help</button>
//             </div>
//               <img src={item.images}></img>
//               </div>
//               <div className="order_details">
//               <h2 className="or_de">Order details</h2>
//             <h3 className="item">{item.title} {item.quantity}</h3>
//             <p className="price">Paid : {item.rupess}{item.newPrice}</p>
//             <p className="or_date">Orderd on {item.ordered_date}</p>
//             <p className="del_date">Delivered on {item.delivered_date} {item.status}</p>
//             </div>
//           </div>
//          </div>
//     //   </div>
//         );
//     })}
// </div>
//   );
// }

