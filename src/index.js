import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { App } from './js/App.js';
import { store } from './js/app/store';
import Style from './style/main.scss';

const rootDiv = document.getElementById('root');
const root = createRoot(rootDiv);
root.render(<Provider store={store}>
  <App />
</Provider>);
