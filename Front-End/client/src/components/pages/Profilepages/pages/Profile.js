import React from 'react';
import { Profiledata } from '../Data/Profiledata';

function Profile() {
    return(
        <>
    {Profiledata.map((item,index)=>{
      return(
        <div className="profile_details">
        <div className="left_content">
          <img className="p_img" src={item.image}></img>
          <div className="user_details">
          <p className="p_name">{item.Name}</p><br/>
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
    </>
    );
}

export default Profile;
