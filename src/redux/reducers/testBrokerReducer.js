import {
    TEST_BROKER,
    TEST_BROKER_PENDING,
    TEST_BROKER_ERROR,
    CLEAR_SNACKBAR
  } from "../actions/testBrokerAction";
  
  const initialState = {
    pending: false,
    result:{"sentMessages":0,"recievedMessages":0,"sentMessages_percentage":0,"failedMessage":0,"messages_per_second":0,"totalTime":0, "sentSize":0, "recievedSize":0,"CPU_used":0,"RAM_used":0,"RAM_size_used":0},
    snackBarMessage: {
      open: false,
      severity: '',
      message: null
    }
  };
  
  const testBrokerReducer = (state = initialState, action) => {
    switch (action.type) {
      case TEST_BROKER_PENDING:
        return {
          ...state,
          pending: true
        }
      case TEST_BROKER:
        return {
          ...state,
          pending: false,
          result:action.payload,
          snackBarMessage: {
            open: true,
            severity: 'success',
            message: action.message
          }
        };
      case TEST_BROKER_ERROR:
          console.log(action)
        return {
          ...state,
          pending: false,
          snackBarMessage: {
            open: true,
            severity: 'error',
            message: action.payload
          }
        };
      case CLEAR_SNACKBAR:
        return {
          ...state,
          snackBarMessage: {
            open: false,
            severity: '',
            message: null
          }
        }
      default:
        return state;
    }
  };
  
  export default testBrokerReducer
  
  