import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { setDealers } from "features/ProductList/productListSlice"

function init(dealers?: string[]) {
  if(dealers) {
    store.dispatch(setDealers(dealers));
  } 

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

init();