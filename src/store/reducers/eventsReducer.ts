import { createReducer } from '@reduxjs/toolkit';
import { Event, Query } from '../../types/event';
import * as actions from '../actions';

export interface IEventReducer {
  total: number;
  events: Event[];
  activeQuery: Query | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: IEventReducer = {
  total: 0,
  events: [],
  activeQuery: null,
  isLoading: false,
  error: null,
};

const eventsReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(actions.fetchEvents, (state, action) => {
      state.isLoading = true;
      state.activeQuery = action.payload;
      state.error = null;
    })
    .addCase(actions.fetchEventsSuccess, (state, action) => {
      state.isLoading = false;
      state.events = action.payload.events;
      state.total = action.payload.meta.total;
    })
    .addCase(actions.fetchEventsError, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
      state.total = 0;
    })
);

export default eventsReducer;
