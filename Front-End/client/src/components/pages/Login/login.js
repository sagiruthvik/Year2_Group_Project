import React, {useState} from 'react';
import '../Login/login.css';
import Footer from "../../Footer";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

const Login = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[isLoading, setIsLoading] = useState(false);
    const[errorPresent, setErrorPresent] = useState(false);

    const submit = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        const content = axios.post('http://localhost:8080/login', {
            username,
            password
        }, { withCredentials: true }).then(function (response) {
            console.log(response);
            if (response.headers.authorization) {
                setErrorPresent(false);
                localStorage.setItem("token", JSON.stringify(response.headers.authorization));
                localStorage.setItem("loggedIn", "true");
                return window.location = "/";
            }
        }).catch(err => {
            setErrorPresent(true);
            (JSON.stringify(err.response));
        })
        console.log(content);
        setTimeout(() => {
            setIsLoading(false);
        }, 500)

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
                <input className="inputFields" type="password" required minLength={6} maxLength={32}
                       onChange={e => setPassword(e.target.value)}
                />
                <div>
                    {errorPresent
                        ? <Alert variant="danger" style={{textAlign: "center", marginTop: "0px", color: "red",
                            fontSize: "17px", marginLeft: "-20%", marginRight: "-20%", textTransform: "none"}}>Error : Incorrect Credentials, Try Again.</Alert>
                        : <Alert variant="success"/>
                    }
                </div>
                <button className="submitButton" type="submit" disabled={isLoading}>
                    {isLoading && <i class="fas fa-spinner fa-pulse"/>}
                    {!isLoading && <p>Login</p>}
                </button>
        </form>
        </div>
        <Footer/>
        </body>
    );

}

export default Login;