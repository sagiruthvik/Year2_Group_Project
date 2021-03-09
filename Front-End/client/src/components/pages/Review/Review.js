import React, {useState} from 'react'
import Footer from "../../Footer"
import axios from 'axios'
import "../Review/ReviewForm.css"

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
                
                <div className = "background">
                    <form className = "form-shape" onSubmit={reviewregister}>
                        <div className = "form-contents">
                        <h3 className = "form-text">Name</h3>
                        <input className = "form-input" type="text" required onChange={e => setname(e.target.value)}/>
                        <h3 className = "form-text" >Description</h3>
                        <textarea className = "form-input-big" placeholder = "200" type="text" onChange={e => setdescription(e.target.value)} />
                        <div className = "form-button">
                            <button >Post</button>
                        </div>
                        

                        </div>
                    </form>








                </div>
            <Footer/>
            </div>
    )
}
export default Review