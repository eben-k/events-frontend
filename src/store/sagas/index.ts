import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getEventsService,
  getEventTypesService,
  getRecipientsService,
} from '../../services';
import {
  GetCareRecipientsResponse,
  GetEventsResponse,
  GetEventTypesResponse,
} from '../../types/event';
import {
  fetchEvents,
  fetchEventsError,
  fetchEventsSuccess,
  fetchEventTypes,
  fetchEventTypesError,
  fetchEventTypesSuccess,
  fetchRecipients,
  fetchRecipientsError,
  fetchRecipientsSuccess,
} from '../actions';

function* fetchReceiversSaga() {
  try {
    const response: GetCareRecipientsResponse = yield call(
      getRecipientsService
    );

    yield put(fetchRecipientsSuccess(response));
  } catch (error) {
    yield put(
      fetchRecipientsError({
        error: error.message,
      })
    );
  }
}

function* fetchEventsSaga(action: ReturnType<typeof fetchEvents>) {
  try {
    const response: GetEventsResponse = yield call(
      getEventsService,
      action.payload
    );

    yield put(fetchEventsSuccess(response));
  } catch (error) {
    yield put(
      fetchEventsError({
        error: error.message,
      })
    );
  }
}

function* fetchEventTypesSaga() {
  try {
    const response: GetEventTypesResponse = yield call(getEventTypesService);

    yield put(fetchEventTypesSuccess(response));
  } catch (error) {
    yield put(
      fetchEventTypesError({
        error: error.message,
      })
    );
  }
}

function* initSaga() {
  yield takeLatest(fetchEvents, fetchEventsSaga);
  yield takeLatest(fetchRecipients, fetchReceiversSaga);
  yield takeLatest(fetchEventTypes, fetchEventTypesSaga);
}

export default initSaga;
