import axios from "axios"

export const actionVoteCount = (data) => {
    
    return async function(dispatch) {
        try{
            console.log("Action: ", data)
            let voteCount = await axios.put(`articles/vote/${data.id}`,data)

            dispatch({
                type: "PUT_VOTECOUNT",
                payload: voteCount
            })
        }
        catch(error) {
            console.log(error)
        }
    }
}