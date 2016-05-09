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
            return action.payload;


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
          let newState = getstate();
          _.set(newState, 'chartData', [ 1, 2, 4, 11, 13, 17, 18, 19, 20, 21, 22, 24, 26, 31, 36, 25, 22, 14, 28, 39,30, 22]);

            console.log('%c NEW STATE FROM get_data_action','background: yellow;', newState);
            dispatch({
                type: 'get_data',
                payload: newState
            });
        };
    },


};
// End of actions obj


export default {
    store: store,
    actions: actions
};
