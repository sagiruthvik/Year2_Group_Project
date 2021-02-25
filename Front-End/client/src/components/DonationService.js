import axios from 'axios'

const DONATION_REST_API_URL = 'http://localhost:8080//api/donation';

const Donation = (itemName, expDate, dateOfDonation, companyName, itemType, fileName) => {
    return axios
    .post(DONATION_REST_API_URL + "Donate", {
       itemName: itemName,
        expDate: expDate,
        dateOfDonation: dateOfDonation,
        companyName: companyName,
        itemType: itemType,
        fileName: fileName,

    });

}

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

}

export default {Donation, DonateMoney};



    
