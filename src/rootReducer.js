import {combineReducers} from "redux";

import home from './reducers/homeReducers'

const rootReducer = combineReducers({
    home, // shorthand for lists: lists
});

export default rootReducer;