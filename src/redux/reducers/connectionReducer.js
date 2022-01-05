import {
	TEST_CONNECTION,
	TEST_CONNECTION_PENDING,
	TEST_CONNECTION_ERROR,
	TEST_SUBSCRIBER,
	TEST_SUBSCRIBER_PENDING,
	TEST_SUBSCRIBER_ERROR,
	TEST_PUBLISHER,
	TEST_PUBLISHER_PENDING,
	TEST_PUBLISHER_ERROR,
	CLEAR_SNACKBAR,
} from "../actions/connectionAction";

const initialState = {
	pending: false,
	connected: false,
	data: "",
	snackBarMessage: {
		open: false,
		severity: "",
		message: null,
	},
};

const ConnectionReducer = (state = initialState, action) => {
	switch (action.type) {
		case TEST_CONNECTION_PENDING:
			return {
				...state,
				pending: true,
				connected: false,
			};
		case TEST_CONNECTION:
			return {
				...state,
				pending: false,
				connected: true,
				data: action.info,
				snackBarMessage: {
					open: true,
					severity: "success",
					message: action.payload,
				},
			};
		case TEST_CONNECTION_ERROR:
			return {
				...state,
				pending: false,
				connected: false,
				snackBarMessage: {
					open: true,
					severity: "error",
					message: action.payload,
				},
			};
		case TEST_SUBSCRIBER_PENDING:
			return {
				...state,
				pending: true,
				connected: false,
			};
		case TEST_SUBSCRIBER:
			return {
				...state,
				pending: false,
				connected: true,
				data: action.info,
				snackBarMessage: {
					open: true,
					severity: "success",
					message: action.payload,
				},
			};
		case TEST_SUBSCRIBER_ERROR:
			return {
				...state,
				pending: false,
				connected: false,
				snackBarMessage: {
					open: true,
					severity: "error",
					message: action.payload,
				},
			};
		case TEST_PUBLISHER_PENDING:
			return {
				...state,
				pending: true,
				connected: false,
			};
		case TEST_PUBLISHER:
			return {
				...state,
				pending: false,
				connected: true,
				data: action.info,
				snackBarMessage: {
					open: true,
					severity: "success",
					message: action.payload,
				},
			};
		case TEST_PUBLISHER_ERROR:
			return {
				...state,
				pending: false,
				connected: false,
				snackBarMessage: {
					open: true,
					severity: "error",
					message: action.payload,
				},
			};
		case CLEAR_SNACKBAR:
			return {
				...state,
				snackBarMessage: {
					open: false,
					severity: "",
					message: null,
				},
			};
		default:
			return state;
	}
};

export default ConnectionReducer;
