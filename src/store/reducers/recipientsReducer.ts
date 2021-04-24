import { createReducer } from '@reduxjs/toolkit';
import { CareRecipient } from '../../types/event';
import * as actions from '../actions';

export interface IRecipientReducer {
  recipients: CareRecipient[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IRecipientReducer = {
  recipients: [],
  isLoading: false,
  error: null,
};

const recipientsReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(actions.fetchRecipients, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(actions.fetchRecipientsSuccess, (state, action) => {
      state.isLoading = false;
      state.recipients = action.payload.recipients;
    })
    .addCase(actions.fetchRecipientsError, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    })
);

export default recipientsReducer;
