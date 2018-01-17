import { combineReducers } from 'redux';

import auth from './reducers/authReducers';


const rootReducer = combineReducers({
    auth,
});

export default rootReducer;