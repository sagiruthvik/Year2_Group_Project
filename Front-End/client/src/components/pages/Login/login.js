import React from 'react';
import '../Login/login.css';
import Footer from "../../Footer";

function login() {
    return (
        <body>
        <div className="container-login">
            <h1 id="loginTitle">Account Login</h1>
            <form>
                <p id="loginSubHeading">Email Address</p>
                <input className="inputFields" type="text" name="username" />
                <p id="loginSubHeading">Password</p>
                <input className="inputFields" type="text" name="password"/>
                <input className="submitButton" type="submit" name="login" value="Login"/>
            </form>
        </div>
        <div id="customFooter">
            <Footer/>
        </div>
        </body>
    );
}

export default login;