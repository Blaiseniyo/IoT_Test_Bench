import axios from "axios";

export const TEST_CONNECTION = "TEST_CONNECTION";
export const TEST_CONNECTION_PENDING = "TEST_CONNECTION_PENDING";
export const TEST_CONNECTION_ERROR = "TEST_CONNECTION_ERROR";
export const TEST_SUBSCRIBER = "TEST_SUBSCRIBER";
export const TEST_SUBSCRIBER_PENDING = "TEST_SUBSCRIBER_PENDING";
export const TEST_SUBSCRIBER_ERROR = "TEST_SUBSCRIBER_ERROR";
export const TEST_PUBLISHER = "TEST_PUBLISHER";
export const TEST_PUBLISHER_PENDING = "TEST_PUBLISHER_PENDING";
export const TEST_PUBLISHER_ERROR = "TEST_PUBLISHER_ERROR";
export const CLEAR_SNACKBAR = "CLEAR_SNACKBAR";

export const testConnectionAction = (body) => (dispatch) => {
	dispatch({
		type: TEST_CONNECTION_PENDING,
	});
	return axios
		.post(`${process.env.REACT_APP_BACKEND_URL}/connect`, body)
		.then((res) => {
			localStorage.setItem("pass", body.password);
			delete body.password;
			dispatch({
				type: TEST_CONNECTION,
				payload: res.data.message,
				info: body,
			});
		})
		.catch((err) => {
			dispatch({
				type: TEST_CONNECTION_ERROR,
				payload: err.response ? err.response.data.message : err.message,
			});
		});
};

export const testSubscriberAction = (body) => (dispatch) => {
	dispatch({
		type: TEST_SUBSCRIBER_PENDING,
	});
	return axios
		.post(`${process.env.REACT_APP_BACKEND_URL}/subscriber/connect`, body)
		.then((res) => {
			localStorage.setItem("pass", body.password);
			delete body.password;
			dispatch({
				type: TEST_SUBSCRIBER,
				payload: res.data.message,
				info: body,
			});
		})
		.catch((err) => {
			dispatch({
				type: TEST_SUBSCRIBER_ERROR,
				payload: err.response ? err.response.data.message : err.message,
			});
		});
};
export const testPublisherAction = (body) => (dispatch) => {
	dispatch({
		type: TEST_PUBLISHER_PENDING,
	});
	return axios
		.post(`${process.env.REACT_APP_BACKEND_URL}/publisher/connect`, body)
		.then((res) => {
			localStorage.setItem("pass", body.password);
			delete body.password;
			dispatch({
				type: TEST_PUBLISHER,
				payload: res.data.message,
				info: body,
			});
		})
		.catch((err) => {
			dispatch({
				type: TEST_PUBLISHER_ERROR,
				payload: err.response ? err.response.data.message : err.message,
			});
		});
};

export const clearSnackBar = () => (dispatch) => {
	return dispatch({
		type: CLEAR_SNACKBAR,
	});
};
