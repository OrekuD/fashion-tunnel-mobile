import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Order from '../../models/Order';
import ErrorResponse from '../../network/responses/ErrorResponse';
import OrderStatusChangeResponse from '../../network/responses/OrderStatusChangeResponse';
import ordersAsyncActions from '../actions/orders.action';
import postErrorRequest from '../postErrorRequest';
import postRequest from '../postRequest';
import {CPA, OrdersState} from '../types';

const initialState: OrdersState = {
  list: [],
};

const slice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    updateOrderStatus: (
      state,
      action: PayloadAction<OrderStatusChangeResponse>,
    ) => {
      const tempList = state.list;
      const orderIndex = tempList.findIndex(
        ({id}) => id === action.payload.orderId,
      );
      if (orderIndex < 0) {
        return;
      }

      const statusTimeStamps = tempList[orderIndex].statusTimeStamps;
      const timeStampIndex = statusTimeStamps.findIndex(
        ({status}) => status === action.payload.status,
      );
      if (timeStampIndex < 0) {
        // console.log('new');
        statusTimeStamps.unshift({
          status: action.payload.status,
          time: action.payload.timeStamp,
        });
      } else {
        statusTimeStamps.splice(timeStampIndex, 1, {
          status: action.payload.status,
          time: action.payload.timeStamp,
        });
        // console.log('old');
      }
      // console.log('before: ', tempList[orderIndex].status);
      tempList.splice(orderIndex, 1, {
        ...tempList[orderIndex],
        status: action.payload.status,
        statusTimeStamps,
      });
      // console.log('after: ', tempList[orderIndex].status);
      state.list = tempList;
    },
  },
  extraReducers: {
    [ordersAsyncActions.index.fulfilled.type]: (
      state,
      action: CPA<Array<Order>>,
    ) => {
      state.list = action.payload;
      postRequest(action);
    },
    [ordersAsyncActions.index.rejected.type]: (
      state,
      action: CPA<ErrorResponse>,
    ) => {
      postErrorRequest(state, action, initialState);
    },
    [ordersAsyncActions.createOrder.fulfilled.type]: (
      state,
      action: CPA<Order>,
    ) => {
      state.list.unshift(action.payload);
      postRequest(action);
    },
    [ordersAsyncActions.createOrder.rejected.type]: (
      state,
      action: CPA<ErrorResponse>,
    ) => {
      postErrorRequest(state, action, initialState);
    },
  },
});

export const ordersActions = slice.actions;

export default slice.reducer;
