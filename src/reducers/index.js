import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import runsReducer from './runsReducer';
import authReducer from './authReducer';
import userEventsReducer from './userEventsReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  runs: runsReducer,
  auth: authReducer,
  userEvents: userEventsReducer
})

export default rootReducer;
