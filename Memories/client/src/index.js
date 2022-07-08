import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';

const store = configureStore({ reducer: reducers }, compose(applyMiddleware(thunk)));

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);