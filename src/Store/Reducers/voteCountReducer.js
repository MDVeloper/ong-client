const initialState = {
    vote : ""
}

export default function voteCountReducer(state = initialState, action) {

    switch (action.type) {
        case "PUT_VOTECOUNT":
            return {
                ...state,
                vote: action.payload
            }
        default:
            return state;
    }
}