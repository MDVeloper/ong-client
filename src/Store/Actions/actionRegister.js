import axios from "axios";


export function loginRegister(values){
    return async function(dispatch){
        return await axios.post(`http://localhost:3001/Usuario/Registro`,values)
        .then((response) => {dispatch({
            type : "LOGIN_REGISTER",
            payload : response
        })})
    }
}