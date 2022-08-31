import {createSlice} from '@reduxjs/toolkit';
import {UIState} from '../types';

const initialState: UIState = {
  isFirstLaunch: true,
};

const slice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    disableOnboarding: state => {
      state.isFirstLaunch = false;
    },
  },
});

export const uiActions = slice.actions;

export default slice.reducer;
