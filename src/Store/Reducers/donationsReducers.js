const initialState = {
    amount: 0,
    allTransactions: []
};

const setAmountMP = (state, action) => {
    return {
        ...state,
        amount: action.payload,
    };
};

const allTransactions = (state, action) => {
    return {
        ...state,
        allTransactions: action.payload,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AMOUNT_MP":
            return setAmountMP(state, action);
        case "GET_TRANSACTIONS":
            return allTransactions(state, action);
        default:
            return state;
    }
};

export default reducer;