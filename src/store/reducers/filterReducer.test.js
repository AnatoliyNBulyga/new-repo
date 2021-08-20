// constants for actions
import {filterActions} from "store/actions/filterActions";
import filterReducer from "store/reducers/filterReducer";

it("The filter type should be set to store correctly", () => {
    // 1. Test data
    const action = filterActions.setType(
        2
    );
    const state = {
        type: 0
    };
    // 2. Action
    const newState = filterReducer( state, action );
    // 3. Expectation
    expect(newState.type).toBe(2);
})