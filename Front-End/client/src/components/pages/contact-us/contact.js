import React from 'react'
const Contact = () => {

    return(

        <form className="form">
            <h1>Contact Form</h1>

            <label> Name</label>
            <input placeholder="Type in your Name" />

            <label> Email</label>
            <input placeholder="Type in your E-mail Address" />

            <label> Message</label>
            <textarea placeholder='How can we help you?'></textarea>

            <button type='submit'>
            Submit
            </button>

        </form>

    )


}


export default Contact