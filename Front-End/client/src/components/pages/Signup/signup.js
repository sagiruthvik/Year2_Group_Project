import React from 'react';
import Footer from "../../Footer";
import '../Signup/signup.css';

function signup() {
    return (
        <body>
        <div className="container-signup">
            <h1 id="signupTitle">Register Account</h1>
            <form>
                <a id="requiredStarLabel">(*) = Field is required.</a>
                <p id="signupSubHeading" style={{marginTop: "10px"}}>First Name*</p>
                <input className="inputFields" type="text" name="firstName" />
                <p id="signupSubHeading">Last Name*</p>
                <input className="inputFields" type="text" name="LastName" />
                <p id="signupSubHeading">DOB*</p>
                <input className="inputFields" type="text" name="dateOfBirth" />
                <p id="signupSubHeading">Email Address*</p>
                <input className="inputFields" type="text" name="username" />
                <p id="signupSubHeading">Password*</p>
                <input className="inputFields" type="text" name="password"/>
                <p id="signupSubHeading">Phone Number</p>
                <input className="inputFields" type="text" name="phone" />
                <p id="signupSubHeading">Allergy</p>
                <input className="inputFields" type="text" name="allergy" />
                <input className="submitButton" type="submit" name="login" value="Signup"/>
            </form>
        </div>
        <div id="customSignUpFooter">
            <Footer/>
        </div>
        </body>
    );
}


export default signup;