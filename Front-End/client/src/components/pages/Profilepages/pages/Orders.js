import React, { Component} from 'react'
import axios from "axios";
import authHeader from "../../Login/authHeader";

export default class Orders extends Component {

  constructor(props){
    super(props);
    this.state = {
      OrdersData : [],
      isloaded : false,
      ProfileData : []
    }
  }

  componentDidMount(){
    const api = 'http://localhost:8080/api/v1/users/ordersData';
    let checkAccessToken = authHeader().token;
    let accessToken = "";
    if(checkAccessToken !== undefined) {
      accessToken = authHeader().token.toString();
    }
    axios.interceptors.request.use(
      config => {
        config.headers.authorization = accessToken;
        return config;
      },
      error =>{
        return Promise.reject(error);
      }
    );
    axios.get(api).then((response)=>{
            // response.json()
            console.log("Order 0 data " + JSON.stringify(response.data[0].orderUserID));
            this.setState({
              isloaded : true,
              OrdersData : response.data
            });
          })

          axios.get("http://localhost:8080/api/v1/users/").then((response)=>{
            // response.json()
            console.log("Profile data ID "+response.data.id);
            this.setState({
              ProfileData : response.data
            });
          })
  }

  render() {

    var{isloaded, OrdersData, ProfileData} = this.state;

    if(!isloaded){
      return(
        <div className="container">
          <div class="loader"></div>
        </div>
      )
    }

    for(var i=0;i<OrdersData.length;i++){
      {console.log(OrdersData.length)}
      if(JSON.stringify(OrdersData[i].orderUserID) != ProfileData.id){
        {console.log(OrdersData[i].OrderUserID)}
        
        return(
          <div className="container">
            <h1>No Order Found</h1>
          </div>
        )
      }else{

     return (

      <div className="container">
      {/* {OrdersData.map((item,index)=>{
          return( */}
            
          {/* // <div className="row"> */}
          <div className="column" key={JSON.stringify(OrdersData[i].orderID)}>
            <div className="card">
              <div className="res_details">
              <p className="res_name">{JSON.stringify(OrdersData[i].orderRestaurantName)}</p>
              <p className="res_add">{JSON.stringify(OrdersData[i].orderRestaurantAddress)}</p>
              <p className="order_no">Order{JSON.stringify(OrdersData[i].orderNumber)}</p>
              <div className="btn">
              <button className="button">Reorder</button>   <button className="button">Help</button>
              </div>
                <img src={JSON.stringify(OrdersData[i].images)}></img>
                </div>
                <div className="order_details">
                <h2 className="or_de">Order details</h2>
              <h3 className="item">{JSON.stringify(OrdersData[i].orderName)} {JSON.stringify(OrdersData[i].orderQuantity)}</h3>
              <p className="price">Paid : £{JSON.stringify(OrdersData[i].orderPrice)}</p>
              <p className="or_date">Orderd on {JSON.stringify(OrdersData[i].orderDate)}</p>
              <p className="del_date">Delivered on {JSON.stringify(OrdersData[i].orderDeliveryDate)}</p>
              </div>
            </div>
           </div>
         {/* </div> */}
      {/* //     );
      // })} */}
  </div>

    )
      }
    }
  }
}

// <div className="column" key={JSON.stringify(OrdersData[i].orderID)}>
//             <div className="card">
//               <div className="res_details">
//               <p className="res_name">{JSON.stringify(OrdersData[i].orderRestaurantName)}</p>
//               <p className="res_add">{JSON.stringify(OrdersData[i].orderRestaurantAddress)}</p>
//               <p className="order_no">Order{JSON.stringify(OrdersData[i].orderNumber)}</p>
//               <div className="btn">
//               <button className="button">Reorder</button>   <button className="button">Help</button>
//               </div>
//                 <img src={JSON.stringify(OrdersData[i].images)}></img>
//                 </div>
//                 <div className="order_details">
//                 <h2 className="or_de">Order details</h2>
//               <h3 className="item">{JSON.stringify(OrdersData[i].orderName)} {JSON.stringify(OrdersData[i].orderQuantity)}</h3>
//               <p className="price">Paid : £{JSON.stringify(OrdersData[i].orderPrice)}</p>
//               <p className="or_date">Orderd on {JSON.stringify(OrdersData[i].orderDate)}</p>
//               <p className="del_date">Delivered on {JSON.stringify(OrdersData[i].orderDeliveryDate)}</p>
//               </div>
//             </div>
//            </div>