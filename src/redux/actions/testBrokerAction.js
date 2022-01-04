import axios from "axios";

export const TEST_BROKER = "TEST_BROKER"
export const TEST_BROKER_PENDING = "TEST_BROKER_PENDING"
export const TEST_BROKER_ERROR = "TEST_BROKER_ERROR"
export const CLEAR_SNACKBAR = "CLEAR_SNACKBAR"

export const testBROKERAction = (body,history) => dispatch =>{
    dispatch({
        type: TEST_BROKER_PENDING
    })
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/test`,body).then(res=>{
        dispatch({
            type:TEST_BROKER,
            payload:res.data.data,
            message:res.data.message
        })
        history.push("/result")
    }).catch(err =>{
        dispatch({
            type:TEST_BROKER_ERROR,
            payload: err.response ? err.response.data.message.host : err.message,
        })
    })
}

export const clearSnackBar = () => dispatch => {
    return dispatch({
        type: CLEAR_SNACKBAR
    })
}
