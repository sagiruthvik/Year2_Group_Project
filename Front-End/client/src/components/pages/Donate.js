import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "../pages/errorMessage"
import Footer from '../Footer'

function Donate() {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting }
  } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const validateUserName = async value => {
    await sleep(1000);
    if (value !== "bill") {
      setError("username", "validate");
    } else {
      clearError("username");
    }
  };

  return (
      <div>
      <div className = "donBackround">
      <div className = "Form">
    <form className="Ingredient" onSubmit={handleSubmit(onSubmit)}>
      <h1 className = "donHeader">Donate Ingredients and Food</h1>
      <label>Ingredient/Food:</label>
      <input 
      name="ingName" 
      ref={register({ required: true, minLength: 2, maxLength:10 })} />
      <ErrorMessage error={errors.ingName} />

      <label>Expiration Date:</label>
      <input 
      name="expDate" 
      ref={register({ required: true, pattern:/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/ })} />
      <ErrorMessage error={errors.expDate} />

      <label>Date of Donation:</label>
      <input 
      name="donDate" 
      ref={register({ required: true, pattern: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/ })} />
      <ErrorMessage error={errors.donDate} />
      

      <label>Company Name:</label>
      <input 
      name="compName" 
      ref={register({ required: false, maxLength:20 })} />

      <label>Donation Type</label>
      <select name="donType" ref={register({ required: true })}>
        <option value="">Select...</option>
        <option value="ingredient">Ingredient</option>
        <option value="food">Food</option>
      </select>
      <ErrorMessage error={errors.donType} />
    
      <input disabled={isSubmitting} type="submit" />
      
    </form>
    </div>
    </div >
    <Footer/>
    </div>
  );
}
const rootElement = document.getElementById("root");

export default Donate;