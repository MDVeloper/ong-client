import axios from "axios";

  const getAllTransactionsSuccess = (data) => {
    return {
      type: "GET_TRANSACTIONS",
      payload: data,
    };
  };

export const getAllTransactions = (body) => {
    return (dispatch) => {
      axios
        .get(`/donations`, body)
        .then((response) => {
          dispatch(getAllTransactionsSuccess(response.data));
        })
        .catch((error) => console.log(error));
    };
  }

