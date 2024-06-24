import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const messageRequest = async (userData) => {


  return axios
    .post(`${API_BASE_URL}/trx/external/v1/enquiry-form`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log('Successful ', response);
      return response.data;
    })
    .catch((error) => {
      return error.response.data || error;
    });
};
