import * as HomeActions from '../action-types/homeActionTypes';

import homeInitialState from './initialState/homeInitialState';

export default function(state = homeInitialState, action = {}) {
    switch (action.type) {
        case HomeActions.HELLO :
            return Object.assign({}, state, {
                message : action.payload
            });

        default :
            return state;
    }
}