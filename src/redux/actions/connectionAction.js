import axios from "axios";

export const TEST_CONNECTION = "TEST_CONNECTION"
export const TEST_CONNECTION_PENDING = "TEST_CONNECTION_PENDING"
export const TEST_CONNECTION_ERROR = "TEST_CONNECTION_ERROR"
export const CLEAR_SNACKBAR = "CLEAR_SNACKBAR"

export const testConnectionAction = (body) => dispatch =>{
    dispatch({
        type: TEST_CONNECTION_PENDING
    })
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/connect`,body).then(res=>{
        localStorage.setItem("pass", body.password);
        delete body.password
        dispatch({
            type:TEST_CONNECTION,
            payload:res.data.message,
            info:body
        })
    }).catch(err =>{
        dispatch({
            type:TEST_CONNECTION_ERROR,
            payload: err.response ? err.response.data.message : err.message,
        })
    })
}

export const clearSnackBar = () => dispatch => {
    return dispatch({
        type: CLEAR_SNACKBAR
    })
}
