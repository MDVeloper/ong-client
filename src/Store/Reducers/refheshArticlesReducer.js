const dataInitial = {
    aux : true
}

export default function projectReducer (state = dataInitial, action) {

    switch (action.type) {
        case "REFHESH_ARTICLES":
            return {
                ...state,
                aux : !state.aux
            }

        default:
            return state;
    }
}