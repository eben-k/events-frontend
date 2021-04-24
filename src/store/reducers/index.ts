import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import eventTypesReducer from './eventTypesReducer';
import recipientsReducer from './recipientsReducer';

export const rootReducer = combineReducers({
  events: eventsReducer,
  recipients: recipientsReducer,
  eventTypes: eventTypesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
