import axios from "axios";


export function loginRegister(values){
    return async function(dispatch){
        try {

            const registerResponse = await axios.post(`/users/register`,values)


            if(registerResponse){
                localStorage.setItem("token", registerResponse.data.token)
                window.location.href = "/"

            }
            dispatch({
                type : "SUCCESSFUL_REGISTER",
                payload : "Registro exitoso"
            })

        } catch (e) {
            dispatch({
                type : "ERROR_REGISTER",
                payload : "No se puedo completar el registro, intente de nuevo"
            })
        }
    }
}