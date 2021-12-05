const initialState = {
    amount: 0
};

const setAmountMP = (state, action) => {
    return {
        ...state,
        amount: action.payload,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AMOUNT_MP":
            return setAmountMP(state, action);
        default:
            return state;
    }
};

export default reducer;