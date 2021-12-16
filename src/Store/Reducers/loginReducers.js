import { ConstructionOutlined } from "@mui/icons-material";

const dataInitial = {
    active: false,
    error: "",
    message: ""
}

export default function loginReducers(state = dataInitial, action) {
    switch (action.type) {
        case "USER_INVALID":
            return {
                ...state,
                error: action.payload
            };
        case "USER_VALIDATE":
            console.log("ACTION", action.payload)
            return {
                ...state,
                active: action.payload
            };
        case "CLOSE_SESION":
            return {
                ...state,
                active: false
            };

        case "SUCCESSFUL_REGISTER":
            return {
                ...state,
                message: action.payload
            }

        case "ERROR_REGISTER":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}