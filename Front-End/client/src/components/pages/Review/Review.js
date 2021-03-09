import React, {useState} from 'react'
import Footer from "../../Footer"
import axios from 'axios'
import { LoginButton } from '../../Navbar/LoginButton';
const Review = () => {

    const[name, setname] = useState('');
    const[description, setdescription] = useState('');

const reviewregister = (e) =>{
    e.preventDefault();
    const register = axios.post('http://localhost:3000/api/review/newReview', {
            name:name,
            description: description
        })
        .catch(err => {
            console.log(JSON.stringify(err));
        })
}
    
        return(
            <div>
                <div>
                    <form onSubmit={reviewregister}>
                        <label>Name</label>
                        <input type="text" required onChange={e => setname(e.target.value)}/>
                        <label>Description</label>
                        <input type="text" onChange={e => setdescription(e.target.value)} />
                        <button>Post</button>


                    </form>








                </div>
            <Footer/>
            </div>
    )
}
export default Review