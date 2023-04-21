import { createSlice } from '@reduxjs/toolkit';
import * as Helpers from './calculatorSliceHelpers';

const buttonDict = {
  '0': Helpers.handleNum,
  '1': Helpers.handleNum,
  '2': Helpers.handleNum,
  '3': Helpers.handleNum,
  '4': Helpers.handleNum,
  '5': Helpers.handleNum,
  '6': Helpers.handleNum,
  '7': Helpers.handleNum,
  '8': Helpers.handleNum,
  '9': Helpers.handleNum,
  '-': Helpers.handleOperation,
  '+': Helpers.handleOperation,
  '/': Helpers.handleOperation,
  'X': Helpers.handleOperation,
  '=': Helpers.handleEqual,
  '.': Helpers.handleDot,
  'AC': Helpers.handleClear, 
};

export const calculatorSlice = createSlice({
  name: 'calculate',
  initialState: {
    input: '0',
    output: ''
  },
  reducers: {
    buttonPressed: (state, action) => {
      const handler = buttonDict[action.payload];
      handler(state, action.payload);
    }
  }
});

export const stateInput = state => state.input;

export const { buttonPressed } = calculatorSlice.actions;

export default calculatorSlice.reducer;
