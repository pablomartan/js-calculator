export const operators = ['-', '+', '/', 'X', '*'];

export const removeSigns = str => {
  console.log(str);
  if (!operators.includes(str.slice(-1))) {
    return str;
  } else {
    return removeSigns(str.slice(0, str.length - 1));
  }
};

export const handleNum = (state, val) => {
  if (operators.includes(state.input)) {
    state.input = val;
    state.output += val;
  } else if (state.input == '0' || state.output.includes('=')) {
    state.input = state.output = val;
  } else {
    state.input += val;
    state.output += val;
  }
};

export const handleOperation = (state, val) => {
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
};

export const handleEqual = state => {
  if (!state.output.includes('=') && state.output != '') {
    state.input = eval(state.output);
    state.output += String('=' + state.input);
  }
};

export const handleDot = state => {
  if (!input.includes('.')) {
    state.input += '.';
    state.output += '.';
  }
};

export const handleClear = state => {
  state.input = '0';
  state.output = '';
};
