// import axios from "axios";


export function loginRegister(values){
    return async function(dispatch){
        try {

            // const registerResponse = await axios.post(`http://localhost:3001/Usuario/Registro`,values)

            return dispatch({
                type : "LOGIN_REGISTER",
                payload : "Registro exitoso"
        })
        } catch (e) {
            return dispatch({
                type : "LOGIN_REGISTER",
                payload : "No se pudo completar el registro, intente nuevamente"
            })
        }   
    }
}