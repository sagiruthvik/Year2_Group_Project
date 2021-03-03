import React, { Component} from 'react'
import axios from "axios";

export default class Orders extends Component {

  constructor(props){
    super(props);
    this.state = {
      OrdersData : [],
      isloaded : false
    }
  }

  componentDidMount(){
    const access_token1 = localStorage.getItem('token');
    const access_token = access_token1.substring(1, access_token1.length-1);
    console.log("Orders Token " + access_token);
    const api = 'http://localhost:8080/api/v1/users/ordersData';

    axios.interceptors.request.use(
      config => {
        config.headers.authorization = access_token;
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
              OrdersData : response.data
            });
          })
  }

  render() {

    var{isloaded, OrdersData} = this.state;

    if(!isloaded){
      return(
        <div className="container">
          <div class="loader"></div>
        </div>
      )
    }

    return (
      <div className="container">
      {OrdersData.map((item,index)=>{
          return(
            
          // <div className="row">
          <div className="column" key={item.orderID}>
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
