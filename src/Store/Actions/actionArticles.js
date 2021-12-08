import axios from "axios";


const getCategoriesSucces = (data) => {
  return {
    type: "GET_CATEGORIES",
    payload: data,
  };
};

export const getCategories = (query) => {
  return (dispatch) => {
    axios
      .get(`/articles?category=${query}`)
      .then((response) => {
        dispatch(getCategoriesSucces(response.data));
      })
      .catch((error) => console.log(error));
  };
}

const postArticleSucces = (data) => {
  return {
    type: "POST_ARTICLES",
    payload: data,
  };
};

export const postArticle = (body) => {
  return (dispatch) => {
    axios
      .post("/articles/creacion", body)
      .then((response) => {
        dispatch(postArticleSucces(response));
      })
      .catch((error) => console.log(error));
  };
};

const putArticleSucces = (data) => {
  return {
    type: "PUT_ARTICLES",
    payload: data,
  };
};

export const putArticles = (data) => {
  return (dispatch) => {
    axios.put(`/articles/${data.id}`, data).then((response) => {
      dispatch(putArticleSucces(response));
    })
    .catch((error) => console.log(error));
  };
};

const deleteArticleSucces = (data) => {
  return {
    type: "DELETE_ARTICLES",
    payload: data,
  };
};

export const deleteArticles = (id) => {
  return (dispatch) => {
    axios.delete("/articles/delete", id).then((response) => {
      dispatch(deleteArticleSucces(response));
    })((error) => console.log(error));
  };
};
