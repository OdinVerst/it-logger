import { combineReducers } from 'redux';
import logReduser from './logReduser';
import techReducer from './techReduser';

export default combineReducers({
    log:logReduser,
    tech: techReducer
});
