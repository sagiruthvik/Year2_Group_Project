import React from 'react'
const Contact = () => {

    return(

        <form className="form">
            <h1>Contact Form</h1>
            <h2>We here at Meals on Wheels are always here to feed and support you on the go!</h2>
            <label> Name</label>
            <input placeholder="Type in your Name" />

            <label> Email</label>
            <input placeholder="Type in your E-mail Address" />

            <label> Message</label>
            <textarea placeholder='How can we help you today?'></textarea>

            <button type='submit'>
            Submit
            </button>

        </form>

    )


}


export default Contact