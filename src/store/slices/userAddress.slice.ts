import {CPA, UserAddressState} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import postRequest from '../postRequest';
import postErrorRequest from '../postErrorRequest';
import userAddressAsyncActions from '../actions/userAddress.action';
import UserAddress from '../../models/UserAddress';
import OkResponse from '../../network/responses/OkResponse';
import authenticationAsyncActions from '../actions/authentication.action';

const initialState: UserAddressState = {
  list: [],
};

const slice = createSlice({
  name: 'user-address',
  initialState,
  reducers: {
    clear: () => initialState,
  },
  extraReducers: {
    [userAddressAsyncActions.index.fulfilled.type]: (
      state,
      action: CPA<Array<UserAddress>>,
    ) => {
      state.list = action.payload;
      postRequest(action);
    },
    [userAddressAsyncActions.index.rejected.type]: (_, action: CPA<any>) => {
      postErrorRequest(action, action, initialState);
    },
    [userAddressAsyncActions.addNewAddress.fulfilled.type]: (
      state,
      action: CPA<UserAddress>,
    ) => {
      state.list.unshift(action.payload);
      postRequest(action);
    },
    [userAddressAsyncActions.addNewAddress.rejected.type]: (
      _,
      action: CPA<any>,
    ) => {
      postErrorRequest(action, action, initialState);
    },
    [userAddressAsyncActions.updateAddress.fulfilled.type]: (
      state,
      action: CPA<UserAddress>,
    ) => {
      const index = state.list.findIndex(({id}) => id === action.payload.id);
      if (index >= 0) {
        state.list.splice(index, 1, action.payload);
      }
      // state.list.unshift(action.payload);
      postRequest(action);
    },
    [userAddressAsyncActions.updateAddress.rejected.type]: (
      _,
      action: CPA<any>,
    ) => {
      postErrorRequest(action, action, initialState);
    },
    [userAddressAsyncActions.deleteAddress.fulfilled.type]: (
      state,
      action: CPA<OkResponse & {id: string}>,
    ) => {
      const index = state.list.findIndex(({id}) => id === action.payload.id);
      if (index >= 0) {
        state.list.splice(index, 1);
      }
      // state.list.unshift(action.payload);
      postRequest(action);
    },
    [userAddressAsyncActions.deleteAddress.rejected.type]: (
      _,
      action: CPA<any>,
    ) => {
      postErrorRequest(action, action, initialState);
    },
    [authenticationAsyncActions.signout.fulfilled.type]: () => initialState,
    [authenticationAsyncActions.signout.rejected.type]: () => initialState,
  },
});

export const userAddressActions = slice.actions;

export default slice.reducer;
