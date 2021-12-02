const dataInitial = {
    news : [],
    errors : ""
}

export default function newsReducer (state = dataInitial, action) {

    switch (action.type) {
        case "GET_NEWS":
            return {
                ...state,
                news : action.payload
            }
    
        case "ERROR_GETNEWS":
            return {
                ...state,
                error: action.payload
            }


        default:
            return state;
    }
}