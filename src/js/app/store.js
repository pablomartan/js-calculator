import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/calculatorSlice.js';

export const store = configureStore({
  reducer: {
    input: reducer
  }
});
