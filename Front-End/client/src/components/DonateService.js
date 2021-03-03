import axios from "axios";

const DONATION_REST_API_URL = "http://localhost:8080/api/donation/createForm/";

const Donations = (itemName, expDate, dateOfDonation, companyName, itemType) => {
  return axios.post(DONATION_REST_API_URL + "Donate", {
    itemName: itemName,
    expDate: expDate,
    dateOfDonation: dateOfDonation,
    companyName: companyName,
    itemType: itemType,
  });
};

// const login = (username, password) => {
//   return axios
//     .post(API_URL + "signin", {
//       username,
//       password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }

//       return response.data;
//     });
// };

// const logout = () => {
//   localStorage.removeItem("user");
// };

// const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem("user"));
// };

export default {
  Donations
//   login,
//   logout,
//   getCurrentUser,
};