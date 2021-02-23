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
    const access_token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyQGIuY29tIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9LHsiYXV0aG9yaXR5IjoidXNlcjpyZWFkIn1dLCJpYXQiOjE2MTM1NjQ2MzksImV4cCI6MTYxNDEwNTAwMH0.ApmMjNM-gMdQKRk8HoG44KF2DrNgfmJXg_q1FS89loIUcMZXuso0aJ-jcWh1SuhABhcqJadx00o0T3VeiR8OGQ';
    const api = 'http://localhost:8080/api/v1/users/ordersData';

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
              OrdersData : response.data
            });
          })
  }

  render() {

    var{isloaded, OrdersData} = this.state;

    if(!isloaded){
      return(
        <div>
          Data Isnt loaded
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
