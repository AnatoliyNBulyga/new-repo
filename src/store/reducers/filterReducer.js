import { constantFilter } from '../actions/filterActions';

const initialState = {
    type: 0
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {

        case constantFilter.SET_TYPE:
            return {
                ...state,
                type: action.payload
            }

        default: return state;
    }
}

export default filterReducer;