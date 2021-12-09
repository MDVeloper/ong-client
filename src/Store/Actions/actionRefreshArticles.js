import axios from "axios";

export function actionRefreshArticles() {
  return async function (dispatch) {
    dispatch({
        type : "REFHESH_ARTICLES"
    })
  };
}
