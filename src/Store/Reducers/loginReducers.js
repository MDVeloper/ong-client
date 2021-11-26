const dataInitial = {
    active: false,
    error: ""
}

export default function userReducer(state = dataInitial, action){
    switch (action.type){
        case "USER_INVALID":
            return{
                ...state, 
                error: action.payload
            };
        case "USER_VALIDATE":
            return{
                ...state,
                active: true
            };
        case "CLOSE_SESION":
            return{
                ...state,
                active: false
            };

        case "LOGIN_REGISTER":
            return {
                ...state,
                
            }

        default:
            return{
                ...state,
                error : action.payload
            }
    }
}