import axios from "axios";

/* export function startSesion(value) {
  return async function (dispatch) {
    const { email, password } = value;
    try {
      const res = await axios
        .post("http://localhost:3001/users/login", {
          email, //challenge@alkemy.org
          password, //react
        })
        .then((response) => {
          console.log("esto es la response", response.data);
        });
      localStorage.setItem("token", res.data.token);
      return dispatch({
        type: "USER_VALIDATE",
      });
    } catch (e) {
      if (!e) return;
      dispatch({
        type: "USER_INVALID",
        payload: e.response.data.error,
      });
      setTimeout(() => {
        dispatch({
          type: "CLOSE_SESION",
        });
      }, 3000);
    }
  };
} */

export function startSesion(value) {
  return async function (dispatch) {
    console.log(value);
    const { email, password } = value;
    try {
      await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      }).then(
        (respuesta) => {
            console.log(respuesta)
            let status = respuesta.data;
            console.log(respuesta.data);
          //const user = userCredential.user;
          //localStorage.setItem("token", user);
          return dispatch({
            type: "USER_VALIDATE",
            payload: status,
          });
        }
      );
    } catch (error) {
        console.log(error)
      //const errorCode = error.code;
      setTimeout(() => {
        dispatch({
          type: "CLOSE_SESION",
        });
      }, 3000);
/*       return dispatch({
        type: "ERROR",
        payload: [errorCode],
      }); */
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

export const closeSesion = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: "CLOSE_SESION",
  });
};
