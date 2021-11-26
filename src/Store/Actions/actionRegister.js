import axios from "axios";


export function loginRegister(values){
    return async function(dispatch){
        try {

            const registerResponse = await axios.post(`http://localhost:3001/users/register`,values)

            dispatch({
                type : "LOGIN_REGISTER",
                payload : "registro exitoso"
            })

        } catch (e) {
            return "No se pudo completar el registro, intente de nuevo"
        }   
    }
}