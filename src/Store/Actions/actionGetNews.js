import axios from "axios"



export function getNews() {
    return async function(dispatch) {
        try {

            // Hablitar cuando se sepa la ruta que me trae las cosas del back
            const news = await axios.get(`/articles/?category=News`)

            dispatch({
                type : "GET_NEWS",
                payload : news.data
            })


        } catch (e) {
            dispatch({
                type : "ERROR_GETNEWS",
                payload : "No se pudieron cargar las noticias"
            })
        }
    }
}