import axios from "axios";

export const setAmountMP = (amount) => {
    return {
      type: "SET_AMOUNT_MP",
      payload: amount,
    };
  };

 const getAllTransactionsSuccess = (data) => {
    return {
      type: "GET_TRANSACTIONS",
      payload: data,
    };
  };

export const getAllTransactions = (dispatch) => {
    return (dispatch) => {
      axios
        .get(`/donations`)
        .then((response) => {
          console.log(response.data)
          dispatch(getAllTransactionsSuccess(response.data));
        })
        .catch((error) => console.log(error));
    };
  }
