import { combineReducers } from 'redux';
import searchListReducer from './searchListReducer';
import userLocationInfoReducer from './userLocationInfoReducer';
import currentLocationInfoReducer from './currentLocationInfoReducer';

const rootReducer = combineReducers({
    searchList: searchListReducer,
    userLocationInfo: userLocationInfoReducer,
    currentLocationInfo: currentLocationInfoReducer
});

export default rootReducer;