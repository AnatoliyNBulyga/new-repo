// constants for actions
import { constantData } from "store/actions/dataActions";

const initialState = {
    cards: [],
    isLoading: false
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type) {

        case constantData.SHOW_LOADER:
            return {...state, isLoading: true};

        case constantData.SET_DATA:
            return {...state, cards: action.payload, isLoading: false};

        default:
            return state;
    }
};