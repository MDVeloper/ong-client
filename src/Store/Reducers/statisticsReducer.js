const initialState = {
    users: []
}

export default function statisticsReducer(state = initialState, action) {

    switch (action.type) {
        case "GET_ALL_USERS":
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}