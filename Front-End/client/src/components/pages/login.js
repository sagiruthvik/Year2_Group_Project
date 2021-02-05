import React, { Component } from 'react';




class Login extends Component {

  render(){
  return (
    <div class= "backgroundbox">
    <div class= "loginbox">
        <h1>Login Here</h1>
        <form>
        
        <p>Username</p>
        <input type ="text" name="username" placeholder="username"></input>
        <p>Password</p>
        <input type ="text" name="password" placeholder="enter password"></input>
        <input type ="submit" name="" value="login" variant = "success"></input>
        </form>
    </div>
    </div>
  );
}
}



export default Login;
