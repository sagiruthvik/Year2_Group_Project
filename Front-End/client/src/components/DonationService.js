import axios from 'axios'

<<<<<<< Updated upstream
const DONATION_REST_API_URL = 'http://localhost:8080/api/donation';
=======
const DONATION_REST_API_URL = 'http://localhost:8080//api/donation';
export default {
    Donation: (itemName, expDate, dateOfDonation, companyName, itemType) => {
        return axios
        .post(DONATION_REST_API_URL + "Donate", {
           itemName: itemName,
            expDate: expDate,
            dateOfDonation: dateOfDonation,
            companyName: companyName,
            itemType: itemType
    
        });
    
    }
>>>>>>> Stashed changes

}



<<<<<<< Updated upstream
const DonateMoney = (donateAs, cardNumber, cardName, cardExpirationDate, cardCSV, amountToDonate) => {
    return axios
        .post(DONATION_REST_API_URL + "DonateMoney", {
            donateAs: donateAs,
            cardNumber: cardNumber,
            cardName: cardName,
            cardExpirationDate: cardExpirationDate,
            cardCSV: cardCSV,
            amountToDonate: amountToDonate
        });
=======
>>>>>>> Stashed changes

}

export default {Donation, DonateMoney};



    
