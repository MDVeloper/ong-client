import axios from "axios"



export function getProject() {
    return async function(dispatch) {
        try {
            // Hablitar cuando se sepa la ruta que me trae las cosas del back
            const projects = await axios.get(`/articles/?category=Projects`)

            dispatch({
                type : "GET_PROJECT",
                payload : projects.data
            })

        } catch (e) {
            dispatch({
                type : "ERROR_GETPROJECTS",
                payload : "No se pudieron cargar los proyectos"
            })
        }
    }
};