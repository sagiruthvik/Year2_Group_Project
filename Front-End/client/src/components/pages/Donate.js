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
  }


// const rootElement = document.getElementById("root");

export default Donate;

//   const Donate 
// const [itemName, setItemName] = useState ("")
// const [expDate, setExpDate] = useState ("")
// const [dateOfDonation, setDateofDonation] = useState ("")
// const [companyName, setCompanyName] = useState ("")
// const [itemType, setItemType] = useState ("")
// const [file,setFile] = useState("")

// const onChangeItemName = (e) => {
//   const itemName = e.target.value;
//   setItemName(itemName);
// }

// const fieldRequired = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// const [fileName, setFileName] = useState("Select File")
//   const onChange = e =>{
//     setFile(e.target.files[0]);
//     setFileName(e.target.files[0].name)
//   }

  

  // const {
  //   register,
  //   handleSubmit,
  //   errors,
  //   setError,
  //   clearError,
  //   formState: { isSubmitting }
  // } = useForm();

//   const onSubmit = data => {
//     alert(JSON.stringify(data));
//     const FormData = new FormData()
//     FormData.append('file',file)
//   };
//   const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


  // return (
  //     <div>
  //     <div className = "donBackround">
  //     <div className = "Form">
  //   <form className="Ingredient" onSubmit={onSubmit}>
  //     <h1 className = "donHeader">Donate Ingredients and Food</h1>
  //     <label>Ingredient/Food:</label>
  //     <input 
  //     className = "donInput"
  //     name="itemName" 
  //     // value= {itemName}
  //     ref={register({ required: true, minLength: 2, maxLength:10 })} />
  //     <ErrorMessage error={errors.itemName} />

  //     <label>Expiration Date:</label>
  //     <input 
  //     className = "donInput"
  //     name="expDate" 
  //     // value = {expDate}
  //     ref={register({ required: true, pattern:/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/ })} />
  //     <ErrorMessage error={errors.expDate} />

  //     <label>Date of Donation:</label>
  //     <input 
  //     className = "donInput"
  //     name="dateOfDonation" 
  //     // value= {dateOfDonation}
  //     ref={register({ required: true, pattern: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/ })} />
  //     <ErrorMessage error={errors.dateOfDonation} />
      

  //     <label>Company Name:</label>
  //     <input 
  //     className = "donInput"
  //     name="companyName"
  //     // value= {companyName} 
  //     ref={register({ required: false, maxLength:20 })} />

  //     <label>Donation Type</label>
  //     <select className = "donInput" name="donType" ref={register({ required: true })}>
  //       <option value="">Select...</option>
  //       {/* <option value= {itemType} >Ingredient</option>
  //       <option value= {itemType} >Food</option> */}
  //     </select>
  //     <ErrorMessage error={errors.donType} />
    
    
  //     <input 
  //     className="donInput" 
  //     name = "file"
  //     type="file" 
  //     // onChange={onChange} 
  //     //  name={fileName}
  //     ref={register({ required: true })}
  //     />
  //       <ErrorMessage error={errors.donSubmit} />
        
  //     <input 
  //     className = "donSubmit"
  //      disabled={isSubmitting}
  //       type="submit" />
  //       ref={register({ required: true })}
  //   </form>
  //   </div>
  //   </div >
  //   <Footer/>
  //   </div>
  // );

