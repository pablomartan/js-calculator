import { createSlice } from '@reduxjs/toolkit';

const operators = ['-', '+', '/', 'X', '*'];

const removeSigns = str => {
  console.log(str);
  if (!operators.includes(str.slice(-1))) {
    return str;
  } else {
    return removeSigns(str.slice(0, str.length - 1));
  }
};

export const calculatorSlice = createSlice({
  name: 'calculate',
  initialState: {
    input: '0',
    output: ''
  },
  reducers: {
    buttonPressed: (state, action) => {
      const input = state.input;
      const output = state.output;
      const val = action.payload;

      switch(val) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          if (operators.includes(input)) {
            state.input = val;
            state.output += val;
          } else if (input == '0' || output.includes('=')) {
            state.input = state.output = val;
          } else {
            state.input += val;
            state.output += val;
          }
          break;
        case '-':
        case '+':
        case '/':
        case 'X':
          // makes sure the sign appended to output can be parsed by eval()
          const sign = val == 'X' ? '*' : val;
          state.input = val;
          
          if (state.output.includes('=')) {
            state.output = input + sign;
          } else if (operators.includes(state.output.slice(-1)) && val != '-') {
            state.output = removeSigns(state.output).concat(sign);
          } else {
            state.output += sign;
          }
          break;
        case 'AC':
          state.input = '0';
          state.output = '';
          break;
        case '.':
          if (!input.includes('.')) {
            state.input += '.';
            state.output += '.';
          }
          break;
        case '=':
          if (!state.output.includes('=') && state.output != '') {
            state.input = eval(output);
            state.output += String('=' + state.input);
          }
      }
    }
  }
});

export const stateInput = state => state.input;

export const { buttonPressed } = calculatorSlice.actions;

export default calculatorSlice.reducer;
