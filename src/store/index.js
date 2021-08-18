// core
import { createStore } from 'redux';
// root reducer
import rootReducer from "store/reducers/";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, composeEnhancers);

export default store;