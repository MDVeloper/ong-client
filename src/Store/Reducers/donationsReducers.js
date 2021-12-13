const initialState = {
    amount: 0,
    allTransactions: []
};

const allTransactions = (state, action) => {
    return {
        ...state,
        allTransactions: action.payload,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TRANSACTIONS":
            return allTransactions(state, action);
        default:
            return state;
    }
};

export default reducer;
