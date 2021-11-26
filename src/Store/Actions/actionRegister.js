import axios from "axios";


export function loginRegister(values){
    console.log(values)
    return async function(dispatch){
        return await axios.post(`http://localhost:3001/users/registro`,values)
        .then((response) => {dispatch({
            type : "LOGIN_REGISTER",
            payload : response
        })})
    }
}