import { combineReducers } from "redux";
import Connection from "./connectionReducer";
import TestBroker from "./testBrokerReducer"

const RootReducer = combineReducers({
    Connection,
    TestBroker
})


export default RootReducer;