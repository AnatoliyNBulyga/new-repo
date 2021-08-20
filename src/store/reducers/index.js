// core
import { combineReducers } from "redux";
// reducers
import { dataReducer } from "store/reducers/dataReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    data: dataReducer,
    filter: filterReducer
});

export default rootReducer;