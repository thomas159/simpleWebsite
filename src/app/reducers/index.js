import { combineReducers } from 'redux';
import fetchUsersReducer from './usersReducer';

const rootReducer = combineReducers({
  users: fetchUsersReducer,
});

export default rootReducer;
