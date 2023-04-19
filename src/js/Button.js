import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { buttonPressed } from './features/calculatorSlice';

export function Button(props) {
  const dispatch = useDispatch();

  return(
    <button className='calc-btn m-1' id={props.id}
    onClick={e => dispatch(buttonPressed(e.target.value))} value={props.value}>
    {props.value}
    </button>
  )
}
