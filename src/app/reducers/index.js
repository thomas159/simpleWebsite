import { combineReducers } from 'redux';
import users from './usersReducer';
import tweets from './tweetsReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  users,
  tweets,
  form: formReducer,
});
// const rootReducer = combineReducers({
//   users: fetchUsersReducer,
//   form: formReducer,
//   tweets: fetchTweetsReducer,
// });

// export default rootReducer;
