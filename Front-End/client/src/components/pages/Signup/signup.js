import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import Footer from "../../Footer";
import '../Signup/signup.css';
import axios from "axios";

const Signup = () => {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[dateOfBirth, setDateOfBirth] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[address, setAddress] = useState('');
    const[phone, setPhone] = useState(null);
    const[allergy, setAllergy] = useState(null);
    // const[redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/v1/signup/', {
            firstName,
            lastName,
            dateOfBirth,
            email,
            password,
            address,
            phone,
            allergy
        }).then(function (response) {
                console.log(response);
                if(response.status === 200) {
                    return window.location = "/Login";
                }
        })

        // await fetch('http://localhost:8080/api/v1/signup/', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         firstName,
        //         lastName,
        //         dateOfBirth,
        //         email,
        //         password,
        //         address,
        //         phone,
        //         allergy
        //     })
        // })

        // setRedirect(true);
        //
        // if(redirect) {
        //     return <Redirect to={"/Login"}/>
        // }

    }

    return (
        <body id={"customSignUpBody"}>
        <div className="container-signup">
            <h1 id="signupTitle">Register Account</h1>
            <form onSubmit={submit}>
                <a id="requiredStarLabel">(*) = Field is required.</a>
                <p id="signupSubHeading" style={{marginTop: "10px"}}>First Name*</p>
                <input className="inputFields" type="text" required
                    onChange={e => setFirstName(e.target.value)}
                />
                <p id="signupSubHeading">Last Name*</p>
                <input className="inputFields" type="text" required
                       onChange={e => setLastName(e.target.value)}
                />
                <p id="signupSubHeading">DOB*</p>
                <input className="inputFields" type="date" required
                       onChange={e => setDateOfBirth(e.target.value)}
                />
                <p id="signupSubHeading">Email Address*</p>
                <input className="inputFields" type="email" required
                       onChange={e => setEmail(e.target.value)}
                />
                <p id="signupSubHeading">Password*</p>
                <input className="inputFields" type="password" required
                       onChange={e => setPassword(e.target.value)}
                />
                <p id="signupSubHeading">Address*</p>
                <input className="inputFields" type="text" required
                       onChange={e => setAddress(e.target.value)}
                />
                <p id="signupSubHeading">Phone Number</p>
                <input className="inputFields" type="text"
                       onChange={e => setPhone(e.target.value)}
                />
                <p id="signupSubHeading">Allergy</p>
                <input className="inputFields" type="text"
                       onChange={e => setAllergy(e.target.value)}
                />
                <button className="submitButton" type="submit">Submit</button>
            </form>
        </div>
        <div id="customSignUpFooter">
            <Footer/>
        </div>
        </body>
    );
}


export default Signup;