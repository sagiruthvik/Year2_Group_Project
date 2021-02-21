import React,{useState} from 'react';
import Modal from 'react-modal'
import { Profiledata } from '../Data/Profiledata';

function Profile() {
  const[modalIsOpen, setModalIsOpen] = useState(false);
    return(
        <>
    {Profiledata.map((item,index)=>{
      return(
        <div className="profile_details" key={index}>
        <div className="left_content">
          {/* <img className="p_img" src={item.image}></img> */}
          <div className="user_details">
          <p className="p_name">{item.Name}</p><br/>
          <div className="mini_details">
          <span className="p_location">{item.icon} {item.Address}</span>
          <span className="p_number">{item.ph_no}</span>
          <span className="p_email">{item.email}</span>
          </div>
          </div>
        </div>
        <div className="right_content">
          <button className="p_edit_btn" onClick={()=>setModalIsOpen(true)}>Edit Profile</button>
          <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
            <div className="my_modal">
              <h1>Edit Profile</h1>
              <button className="close_btn" onClick={()=>setModalIsOpen(false)}>X</button>
              <form className="my_form">
                <input type="text" name="name" className="input_name" defaultValue={item.Name}/><br /><br />
                <input type="email" name="email" className="input_email" defaultValue={item.email} /><br /><br />
                <input type="number" name="number" className="input_number" defaultValue={item.ph_no}  /><br /><br />
                <input type="text" name="address" className="input_address" defaultValue={item.Address}  />
              </form><br /><br />
              <button className="update_btn" onClick={()=>alert("Profile Updated", setModalIsOpen(false))}>UPDATE</button><br /><br />
            </div>
          </Modal>
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
