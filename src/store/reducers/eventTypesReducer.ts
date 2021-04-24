import { createReducer } from '@reduxjs/toolkit';
import { EventType } from '../../types/event';
import * as actions from '../actions';

export interface EventTypesReducer {
  types: EventType[];
  isLoading: boolean;
  error: string | null;
}

const initialState: EventTypesReducer = {
  types: [],
  isLoading: false,
  error: null,
};

const eventTypesReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(actions.fetchEventTypes, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(actions.fetchEventTypesSuccess, (state, action) => {
      state.isLoading = false;
      state.types = action.payload.event_types;
    })
    .addCase(actions.fetchRecipientsError, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    })
);

export default eventTypesReducer;
