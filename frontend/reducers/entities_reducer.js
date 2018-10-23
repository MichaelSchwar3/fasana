import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  runs: runsReducer,
  friends: friendsReducer,
  workouts: workoutsReducer,
  comments: commentsReducer,
});

export default entitiesReducer;
