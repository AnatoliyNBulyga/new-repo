// core
import { combineReducers } from "redux";
// reducers
import { dataReducer } from "store/reducers/dataReducer";

const rootReducer = combineReducers({
    data: dataReducer
});

export default rootReducer;