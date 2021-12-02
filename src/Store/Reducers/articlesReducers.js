const initialState = {
  article: [],
  categories: [],
};

const executeGetCategories = (state, action) => {
  return {
    ...state,
    categories: action.payload,
  };
};

const executePostArticles = (state, action) => {
  return {
    ...state,
    article: action.payload,
  };
};

const executePutArticles = (state, action) => {
  return {
    ...state,
    article: action.payload,
  };
};

const executeDeleteArticles = (state, action) => {
  return {
    ...state,
    article: action.payload,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return executeGetCategories(state, action);
    case "POST_ARTICLES":
      return executePostArticles(state, action);
    case "PUT_ARTICLES":
      return executePutArticles(state, action);
    case "DELETE_ARTICLES":
      return executeDeleteArticles(state, action);
    default:
      return state;
  }
};

export default reducer;
