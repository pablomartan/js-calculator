import React from 'react';
import { useSelector } from 'react-redux';
import { stateInput } from './features/calculatorSlice';

export function Display() {
  const state = useSelector(stateInput);

  return(
    <>
      <div id='formula'>
        {state.output}
      </div>
      <div id='display' className='pt-1'>
        {state.input}
      </div>
    </>
  )
}
