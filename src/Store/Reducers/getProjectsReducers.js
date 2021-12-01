const dataInitial = {
    projects : [],
    errors : ""
}

export default function projectReducer (state = dataInitial, action) {

    switch (action.type) {
        case "GET_PROJECT":
            return {
                ...state,
                projects : action.payload
            }
    
        case "ERROR_GETPROJECTS":
            return {
                ...state,
                error: action.payload
            }


        default:
            return state;
    }
}