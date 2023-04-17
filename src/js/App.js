import React from 'react';
import { ButtonContainer } from './ButtonContainer.js';
import { Display } from './Display.js';

export function App() {
  return(
      <div id='app' className='col-10 col-xs-8 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-0 m-auto shadow'>
        <Display />
        <ButtonContainer />
      </div>
  )
}
