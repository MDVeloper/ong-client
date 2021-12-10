import axios from "axios";

export function startSesion(value) {
  return async function (dispatch) {
    const { email, password } = value;
    try {
      const res = await axios
        .post("/users/login", {
          email,
          password,
        })
        
        // console.log(res)
      localStorage.setItem("token", JSON.stringify(res.data.token));
      window.location.href = "/users"
      return dispatch({
        type: "USER_VALIDATE",
        payload: true
      });
    } catch (e) {
      if (!e) return;
      dispatch({
        type: "USER_INVALID",
        payload: e.response.data,
      });
      // setTimeout(() => {
      //   dispatch({
      //     type: "CLOSE_SESION",
      //   });
      // }, 3000);
    }
  };
}


export function statusUser() {
  return function (dispatch) {
    if (localStorage.getItem("token")) {
      dispatch({
        type: "USER_VALIDATE",
      });
    } else {
      dispatch({
        type: "CLOSE_SESION",
      });
    }
  };
}

