import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import Root from './components/Root';
import './index.css';

import reducer from './reducers';

const store = createStore(reducer, {
    randomnumbers: [3]
  
});

ReactDOM.render(
  <Root store={ store } />,
  document.getElementById('root')
);
