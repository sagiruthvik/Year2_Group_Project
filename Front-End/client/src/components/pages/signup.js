import React, { Component } from 'react';


class Signup extends Component {
    render(){
  return (
    <div class= "backgroundbox">
    <div class= "signupbox">
        <h1>Sign up Here</h1>
        <form>
        <p>Username</p>
        <input type ="text" name="username" placeholder="enter username" className ="form-control"/>
        <p>Password</p>
        <input type ="text" name="password" placeholder="enter password" className ="form-control"/>
        <p>Email</p>
        <input type ="text" name="email" placeholder="enter email" className ="form-control"/>
        <input type ="submit" name="" value="Sign up"></input>
        </form>
    </div>
    </div>
  );
}
}

export default Signup;
