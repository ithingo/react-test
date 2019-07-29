import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk)
);

const renderMethod = !!module.hot ? render : hydrate;
renderMethod(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);