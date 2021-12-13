import axios from "axios";

  const getAllUsersSuccess = (data) => {
    return {
      type: "GET_ALL_USERS",
      payload: data,
    };
  };

export const getAllUsers = () => {
    return (dispatch) => {
      axios
        .get(`/users/all`)
        .then((response) => {
          dispatch(getAllUsersSuccess(response.data));
        })
        .catch((error) => console.log(error));
    };
  }