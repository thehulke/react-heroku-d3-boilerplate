import {
    createStore,
    applyMiddleware
} from "redux";
import _ from "lodash";

const initialState = {
    author: 'Lior G'
};


function chartReducer(state, action) {
    if (!state) {
        return initialState;
    }
    switch (action.type) {

        case 'test':
            console.log(action.payload);
            return state;

        case 'get_data':
            console.log(action.payload);
            return state;


        default:
            return state;
    }

}
// End of ChartReducer

function thunkMiddleware(data) {
    var dispatch = data.dispatch;
    var getState = data.getState;

    return function(next) {
        return function(action) {
            return typeof action === 'function' ? action(dispatch, getState) : next(action);
        };
    };
}

let createStoreWithThunk = applyMiddleware(thunkMiddleware)(createStore);
let store = createStoreWithThunk(chartReducer);
let actions = {
    test_action() {

        return {
            type: 'test',
            payload: {
                name: 'lior'
            }

        };
    },
    // End of test_action

    get_data_action() {
        return (dispatch, getstate) => {
            console.log("Fetching Data");
            dispatch({
                type: 'get_data',
                payload: 'Async Data recieved succesfully'
            });
        };
    },


};
// End of actions obj


export default {
    store: store,
    actions: actions
};
