import axios from "axios"



export function getProject() {
    return async function(dispatch) {
        try {
            // Hablitar cuando se sepa la ruta que me trae las cosas del back
<<<<<<< HEAD
            const projects = await axios.get(`http://localhost:3001/articles/?category=Projects`)
            console.log(projects)
=======
            const projects = await axios.get(`/articles/?category=Projects`)

>>>>>>> f905dacd4c2d323ee4704a856647df7df28333be
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