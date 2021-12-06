import axios from "axios";


export function loginRegister(values){
    console.log(values)
    return async function(dispatch){
        try {
            
            // Habilitar linea cuando se pueda conectar con la base de datos 
            // y pasarle la respuesta al payload para que se genere un estado con la 
            // respúesta del back end

            const registerResponse = await axios.post(`/users/register`,values)

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