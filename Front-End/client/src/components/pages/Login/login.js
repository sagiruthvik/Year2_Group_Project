import React, {useState} from 'react';
import '../Login/login.css';
import Footer from "../../Footer";
import axios from "axios";

const Login = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        console.log(JSON.stringify({
            username, password
        }))

        const content = axios.post('http://localhost:8080/login', {
            username,
            password
        }, { withCredentials: true }).then(function (response) {
            console.log(response);
            if (response.headers.authorization) {
                localStorage.setItem("token", JSON.stringify(response.headers.authorization));
                localStorage.setItem("loggedIn", "true");
                return window.location = "/";
            }
        })
        console.log(content);
    }

    return (
        <body id={"customLoginBody"}>
        <div className="container-login">
            <h1 id="loginTitle">Account Login</h1>
            <form onSubmit={submit}>
                <p id="loginSubHeading">Email Address</p>
                <input className="inputFields" type="email" required
                       onChange={e => setUsername(e.target.value)}
                />
                <p id="loginSubHeading">Password</p>
                <input className="inputFields" type="password" required
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="submitButton" type="submit">Login</button>
            </form>
        </div>
        <Footer/>
        </body>
    );
}

export default Login;