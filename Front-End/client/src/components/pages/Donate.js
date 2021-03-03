<<<<<<< Updated upstream
import React, {useState} from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "../pages/errorMessage"
import Footer from '../Footer'
import DonationService from '../DonationService'


const Donate = (props) => {

    const [itemName, setItemName] = useState ("")
    const [expDate, setExpDate] = useState ("")
    const [dateOfDonation, setDateofDonation] = useState ("")
    const [companyName, setCompanyName] = useState ("")
    const [itemType, setItemType] = useState ("")
    const [file,setFile] = useState("")

    const [donateAs, setDonateAs] = useState ("")
    const [cardNumber, setCardNumber] = useState ("")
    const [cardExpirationDate, setCardExpirationDate] = useState ("")
    const [cardName, setCardName] = useState ("")
    const [cardCSV, setCardCSV] = useState ("")
    const [amountToDonate, setAmountToDonate] = useState("")

  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting }
  } = useForm();

const onChangeItemName = (e) => {
  const itemName = e.target.value;
  setItemName(itemName);
}

const onChangeExpDate = (e) => {
  const expDate = e.target.value;
  setExpDate(expDate);
}

const onChangeDateOfDonation = (e) => {
  const dateOfDonation = e.target.value;
  setDateofDonation(dateOfDonation);
}

const onChangeCompanyName = (e) => {
  const companyName = e.target.value;
  setCompanyName(companyName);
}

const onChangeItemType = (e) => {
  const itemType = e.target.value;
  setItemType(itemType);
}

const onChangeFile = (e) => {
  const file = e.target.value;
  setFile(file);
}

//Donate Money Methods

const onChangeDonateAs = (e) => {
    const donateAs = e.target.value;
    setDonateAs(donateAs);
}

const onChangeCardName = (e) => {
    const cardName = e.target.value;
    setCardName(cardName);
}

const onChangeCardNumber = (e) => {
    const cardNumber = e.target.value;
    setCardNumber(cardNumber);
}

const onChangeCardExpirationDAte = (e) => {
    const cardExpirationDate = e.target.value;
    setCardExpirationDate(cardExpirationDate);
}

const onChangeCardCSV = (e) => {
    const cardCSV = e.target.value;
    setCardCSV(cardCSV);
}

const onChangeAmountToDonate = (e) => {
    const amountToDonate = e.target.value;
    setAmountToDonate(amountToDonate);
}

const onSubmit = (e) => {
  e.preventDefault();
  
  DonationService.Donation(itemName,expDate, dateOfDonation, companyName, itemType, file).then(
    (response) => {
    }
  )
}

const onSubmitMoney = (e) => {
    e.preventDefault();

    DonationService.DonateMoney(donateAs, cardNumber, cardName, cardExpirationDate, cardCSV, amountToDonate).then(
        (response) => {
        }
    )
}

return (
  <div>
     <div className = "donBackround">
        <div className = "Form">
           <form className="Ingredient" onSubmit={onSubmit}>
              <h1 className = "donHeader">Donate Ingredients and Food</h1>
              <label>Ingredient/Food:</label>
              <input 
              className = "donInput"
              name="itemName" 
              // value= {itemName}
              ref={register({ required: true, minLength: 2, maxLength:10 })} />
              <ErrorMessage error={errors.itemName} />
              <label>Expiration Date:</label>
              <input 
              className = "donInput"
              name="expDate" 
              // value = {expDate}
              ref={register({ required: true, pattern:/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/ })} />
              <ErrorMessage error={errors.expDate} />
              <label>Date of Donation:</label>
              <input 
              className = "donInput"
              name="ateOfDonation" 
              // value= {dateOfDonation}
              ref={register({ required: true, pattern: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/ })} />
              <ErrorMessage error={errors.dateOfDonation} />
              <label>Company Name:</label>
              <input 
              className = "donInput"
              name="companyName"
              // value= {companyName} 
              ref={register({ required: false, maxLength:20 })} />
              <label>Donation Type</label>
              <select className = "donInput" name="donType" ref={register({ required: true })}>
              <option value="">Select...</option>
              <option>Ingredient</option>
              <option>Food</option>
              </select>
              <ErrorMessage error={errors.donType} />
              <input 
              className="donInput" 
              name = "file"
              type="file" 
              // onChange={onChange} 
              name={file}
              // value={file}
              ref={register({ required: true })}
              />
              <ErrorMessage error={errors.donSubmit} />
               
               <button 
               className = "DonSubmit"
               onClick={onSubmit} 
               >
                 Submit

               </button>




              {/* <input
                 className = "donSubmit"
                 disabled={isSubmitting}
                 type="submit"/> */}
                 
              {/* ref={register({ required: true })} */}
           </form>

            {/*DONATE MONEY FORM*/}

            <form id="DonateMoney" onSubmit={onSubmit}>

                <h1 className = "donHeader">Donate Money Today</h1>
                <label>Donate As:</label>
                <input
                    className = "donInput"
                    name="donateAs"
                    onChange={onChangeDonateAs}
                    value= {donateAs}
                    ref={register({ required: true, minLength: 2, maxLength:20 })} />
                <ErrorMessage error={errors.donateAs} />
                <label>Name On Card:</label>
                <input
                    className = "donInput"
                    name="cardName"
                    onChange={onChangeCardName}
                    value= {cardName}
                    ref={register({ required: true, minLength: 16, maxLength:20 })} />
                <ErrorMessage error={errors.cardName} />
                <label>Card Number:</label>
                <input
                    className = "donInput"
                    name="cardNumber"
                    onChange={onChangeCardNumber}
                    value= {cardNumber}
                    ref={register({ required: true, minLength: 2, maxLength:16 })} />
                <ErrorMessage error={errors.cardNumber} />
                <label>Expiration Date:</label>
                <input
                    className = "donInput"
                    name="cardExpirationDate"
                    onChange={onChangeCardExpirationDAte}
                    value= {cardExpirationDate}
                    ref={register({ required: true, pattern:/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/})} />
                <ErrorMessage error={errors.cardExpirationDate} />
                <label>Amount:</label>
                <input
                    className = "donInput"
                    name="amountToDonate"
                    onChange={onChangeAmountToDonate}
                    value= {amountToDonate}
                    ref={register({ required: true, minLength: 2, maxLength:20 })} />
                <ErrorMessage error={errors.amountToDonate} />
                <button id={"submitButton"}
                    className = "DonSubmit"
                    onClick={onSubmitMoney}>
                    Submit
                </button>
            </form>
        </div>
     </div >
     <Footer/>
  </div>
  );
=======
import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
// import { isEmail } from "validator";

// import AuthService from "../services/auth.service";
import Donations from '../DonateService';

const required = (value) => {
  if (!value) {
    return (
      <div className="errorAlert" role="alert">
        This field is required!
      </div>
    );
>>>>>>> Stashed changes
  }
};

// const validEmail = (value) => {
//   if (!isEmail(value)) {
//     return (
//       <div className="errorAlert" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };

const vItemName = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="errorAlert" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

// const vDate = (value) => {
//   if (!(pattern == /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)) {
//     return (
//       <div className="errorAlert" role="alert">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [successful, setSuccessful] = useState(false);
//   const [message, setMessage] = useState("");

  const [itemName, setItemName] = useState ("")
  const [expDate, setExpDate] = useState ("")
  const [dateOfDonation, setDateofDonation] = useState ("")
  const [companyName, setCompanyName] = useState ("")
  const [itemType, setItemType] = useState ("")
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
//   const [file,setFile] = useState("")
  

  const onChangeItemName = (e) => {
    const itemName = e.target.value;
    setItemName(itemName);
  }
  
  const onChangeExpDate = (e) => {
    const expDate = e.target.value;
    setExpDate(expDate);
  }
  
  const onChangeDateOfDonation = (e) => {
    const dateOfDonation = e.target.value;
    setDateofDonation(dateOfDonation);
  }
  
  const onChangeCompanyName = (e) => {
    const companyName = e.target.value;
    setCompanyName(companyName);
  }
  
  const onChangeItemType = (e) => {
    const itemType = e.target.value;
    setItemType(itemType);
  }
  
  // const onChangeFile = (e) => {
  //   const file = e.target.value;
  //   setFile(file);
  // }

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
        Donations.Donations(itemName, expDate, dateOfDonation, companyName, itemType).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="itemName">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="itemName"
                  value={itemName}
                  onChange={onChangeItemName}
                  validations={[required, vItemName]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="expDate">ExpDate</label>
                <Input
                  type="text"
                  className="form-control"
                  name="expDate"
                  value={expDate}
                  onChange={onChangeExpDate}
                  // validations={[required, vDate]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="dateOfDonation">dateOfDonation</label>
                <Input
                  type="text"
                  className="form-control"
                  name="dateOfDonation"
                  value={dateOfDonation}
                  onChange={onChangeDateOfDonation}
                  // validations={[required, vDate]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="companyName">companyName</label>
                <Input
                  type="text"
                  className="form-control"
                  name="companyName"
                  value={companyName}
                  onChange={onChangeCompanyName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="itemType">itemType</label>
                <Input
                  type="text"
                  className="form-control"
                  name="itemType"
                  value={itemType}
                  onChange={onChangeItemType}
                  validations={[required, vItemName]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;