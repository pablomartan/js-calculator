import React from 'react';
import { useSelector } from 'react-redux';
import { stateInput } from './features/calculatorSlice';

export function Display() {
  const state = useSelector(stateInput);

  return(
    <>
      <div id='formula' className='m-1 overflow-scroll'>
        {state.output}
      </div>
      <div id='display' className='m-1 pt-2 overflow-scroll'>
        {state.input}
      </div>
    </>
  )
}
