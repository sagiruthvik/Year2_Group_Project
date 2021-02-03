import React from 'react';
import Sidebar from './Sidebar';
import './Style/big.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Orders from './pages/Orders';
import Favourites from './pages/Favourites';
import Payments from './pages/Payments';
import Addresses from './pages/Addresses';
import Mydetails from './pages/Mydetails';
import { Profiledata } from './Profiledata';

function Main() {
  return (
    <>
    {Profiledata.map((item,index)=>{
      return(
        <div className="profile_details">
        <div className="left_content">
          <img className="p_img" src={item.image}></img>
          <div className="user_details">
          <p className="p_name">{item.Name}</p>
          <span className="p_location">{item.icon} {item.Address}</span>
          </div>
        </div>
        <div className="right_content">
          <button className="p_edit_btn">Edit Profile</button>
          <div className="user_content_details">
          <span className="p_review">Reviews {item.Reviews}</span>
          <span>|</span>
          <span className="p_order">Orders {item.Orders}</span>
          </div>
        </div>
      </div>
      );
    })}
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/Profile/Orders' exact component={Orders} />
          <Route path='/Profile/Favourites' component={Favourites} />
          <Route path='/Profile/Payments' component={Payments} />
          <Route path='/Profile/Addresses' component={Addresses} />
          <Route path='/Profile/Mydetails' component={Mydetails} />
        </Switch>
      </Router>
    </>
  );
}

export default Main;
