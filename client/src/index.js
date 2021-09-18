import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { store } from './store';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
