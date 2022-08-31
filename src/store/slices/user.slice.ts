import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import User from '../../models/User';
import AuthenticationResponse from '../../network/responses/AuthenticationResponse';
import ErrorResponse from '../../network/responses/ErrorResponse';
import authenticationAsyncActions from '../actions/authentication.action';
import postErrorRequest from '../postErrorRequest';
import postRequest from '../postRequest';
import {CPA} from '../types';

const initialState: User = {
  email: '',
  firstname: '',
  lastname: '',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signOut: () => initialState,
  },
  extraReducers: {
    [authenticationAsyncActions.signin.fulfilled.type]: (
      state,
      action: CPA<AuthenticationResponse>,
    ) => {
      state.email = action.payload.user.email;
      state.firstname = action.payload.user.firstname;
      state.lastname = action.payload.user.lastname;
      postRequest(action);
    },
    [authenticationAsyncActions.signin.rejected.type]: (
      state,
      action: CPA<ErrorResponse>,
    ) => {
      postErrorRequest(state, action, initialState);
    },
    [authenticationAsyncActions.signup.fulfilled.type]: (
      state,
      action: CPA<AuthenticationResponse>,
    ) => {
      state.email = action.payload.user.email;
      state.firstname = action.payload.user.firstname;
      state.lastname = action.payload.user.lastname;
      postRequest(action);
    },
    [authenticationAsyncActions.signup.rejected.type]: (
      state,
      action: CPA<ErrorResponse>,
    ) => {
      postErrorRequest(state, action, initialState);
    },
  },
});

export const userActions = slice.actions;

export default slice.reducer;
