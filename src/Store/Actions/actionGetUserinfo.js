import axios from "axios"

export function getUserInfo(id) {
    return async function(dispatch){
        var json = await axios.get()
        return dispatch({
            type: "GET_USER_INFO",
            payload: json.data
        })
    }
}
