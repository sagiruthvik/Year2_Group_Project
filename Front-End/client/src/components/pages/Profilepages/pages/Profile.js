// import React,{useState} from 'react';
import Modal from 'react-modal'
// import { Profiledata } from '../Data/Profiledata';

import React, { Component } from 'react';
import axios from "axios";

class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      ProfileData : [],
      isloaded : false,
      modalIsOpen : false,
      setModalIsOpen : false
    }
  }


  componentDidMount(){
    const access_token1 = localStorage.getItem('token');
    const access_token = access_token1.substring(1, access_token1.length-1);
    console.log("Token "+access_token);
    const api = 'http://localhost:8080/api/v1/users/';

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
            console.log("data.id "+response.data);
            this.setState({
              isloaded : true,
              ProfileData : response.data
            });
          })
  }

  render() {

    var{isloaded, ProfileData, modalIsOpen, setModalIsOpen} = this.state;

            return(
              <div className="profile_details" key={ProfileData.id}>
              <div className="left_content">
                {/* <img className="p_img" src={item.image}></img> */}
                <div className="user_details">
                <p className="p_name">{ProfileData.firstName}</p><br/>
                <div className="mini_details">
                <span className="p_location">{ProfileData.icon} {ProfileData.address}</span>
                <span className="p_number">{ProfileData.phoneNumber}</span>
                <span className="p_email">{ProfileData.email}</span>
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
                      <input type="text" name="name" className="input_name" defaultValue={ProfileData.firstName}/><br /><br />
                      <input type="email" name="email" className="input_email" defaultValue={ProfileData.email} /><br /><br />
                      <input type="number" name="number" className="input_number" defaultValue={ProfileData.phoneNumber}  /><br /><br />
                      <input type="text" name="address" className="input_address" defaultValue={ProfileData.address}  />
                    </form><br /><br />
                    <button className="update_btn" onClick={()=>alert("Profile Updated", setModalIsOpen(false))}>UPDATE</button><br /><br />
                  </div>
                </Modal>
                <div className="user_content_details">
                <span className="p_review">Reviews 12{ProfileData.Reviews}</span>
                <span>|</span>
                <span className="p_order">Orders 12{ProfileData.Orders}</span>
                </div>
              </div>
            </div>
            );
  }
}

export default Profile;

// function Profile() {
//   const[modalIsOpen, setModalIsOpen] = useState(false);
//     return(
//         <>
//     {Profiledata.map((item,index)=>{
//       return(
//         <div className="profile_details" key={index}>
//         <div className="left_content">
//           {/* <img className="p_img" src={item.image}></img> */}
//           <div className="user_details">
//           <p className="p_name">{item.Name}</p><br/>
//           <div className="mini_details">
//           <span className="p_location">{item.icon} {item.Address}</span>
//           <span className="p_number">{item.ph_no}</span>
//           <span className="p_email">{item.email}</span>
//           </div>
//           </div>
//         </div>
//         <div className="right_content">
//           <button className="p_edit_btn" onClick={()=>setModalIsOpen(true)}>Edit Profile</button>
//           <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
//             <div className="my_modal">
//               <h1>Edit Profile</h1>
//               <button className="close_btn" onClick={()=>setModalIsOpen(false)}>X</button>
//               <form className="my_form">
//                 <input type="text" name="name" className="input_name" defaultValue={item.Name}/><br /><br />
//                 <input type="email" name="email" className="input_email" defaultValue={item.email} /><br /><br />
//                 <input type="number" name="number" className="input_number" defaultValue={item.ph_no}  /><br /><br />
//                 <input type="text" name="address" className="input_address" defaultValue={item.Address}  />
//               </form><br /><br />
//               <button className="update_btn" onClick={()=>alert("Profile Updated", setModalIsOpen(false))}>UPDATE</button><br /><br />
//             </div>
//           </Modal>
//           <div className="user_content_details">
//           <span className="p_review">Reviews {item.Reviews}</span>
//           <span>|</span>
//           <span className="p_order">Orders {item.Orders}</span>
//           </div>
//         </div>
//       </div>
//       );
//     })}
//     </>
//     );
// }

// export default Profile;
