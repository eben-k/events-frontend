import { createAction } from '@reduxjs/toolkit';
import {
  GetCareRecipientsResponse,
  GetEventsResponse,
  GetEventTypesResponse,
  Query,
} from '../../types/event';
export enum ActionTypes {
  FETCH_EVENTS = 'events/started',
  FETCH_EVENTS_SUCCESS = 'events/success',
  FETCH_EVENTS_ERROR = 'events/error',

  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',

  FETCH_EVENTS_TYPES = 'FETCH_EVENTS_TYPES',
  FETCH_EVENTS_TYPES_SUCCESS = 'FETCH_EVENTS_TYPES_SUCCESS',
  FETCH_EVENTS_TYPES_ERROR = 'FETCH_EVENTS_TYPES_ERROR',
}

const withPayloadType = <T>() => (payload: T) => ({ payload });

export const fetchEvents = createAction(
  ActionTypes.FETCH_EVENTS,
  withPayloadType<Query>()
);

export const fetchEventsSuccess = createAction(
  ActionTypes.FETCH_EVENTS_SUCCESS,
  withPayloadType<GetEventsResponse>()
);

export const fetchEventsError = createAction(
  ActionTypes.FETCH_EVENTS_ERROR,
  withPayloadType<{ error: string }>()
);

export const fetchRecipients = createAction(ActionTypes.FETCH_USERS);

export const fetchRecipientsSuccess = createAction(
  ActionTypes.FETCH_USERS_SUCCESS,
  withPayloadType<GetCareRecipientsResponse>()
);

export const fetchRecipientsError = createAction(
  ActionTypes.FETCH_USERS_ERROR,
  withPayloadType<{ error: string }>()
);

export const fetchEventTypes = createAction(ActionTypes.FETCH_EVENTS_TYPES);

export const fetchEventTypesSuccess = createAction(
  ActionTypes.FETCH_EVENTS_TYPES_SUCCESS,
  withPayloadType<GetEventTypesResponse>()
);

export const fetchEventTypesError = createAction(
  ActionTypes.FETCH_EVENTS_TYPES_ERROR,
  withPayloadType<{ error: string }>()
);
