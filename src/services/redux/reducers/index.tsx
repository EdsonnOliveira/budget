import { combineReducers } from 'redux';
import valueReducer from '../ducks/value';

const appReducer = combineReducers({
    valueReducer
});

export default appReducer;