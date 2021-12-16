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

      if (res.data === "Usuario no encontrado") {
        dispatch({
          type: "USER_INVALID",
          payload: "Usuario no encontrado"
        })
      }

      if (res.data === "Contraseña no valida") {
        dispatch({
          type: "USER_INVALID",
          payload: "Contraseña no encontrada"
        })
      }

      if (res.data !== "Contraseña no valida" && res.data !== "Usuario no encontrado") {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        window.location.href = "/users"
        return dispatch({
          type: "USER_VALIDATE",
          payload: true
        });
      }
    } catch (e) {
      console.log(e)
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

