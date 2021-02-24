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

export default Donation





    
