import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// 挂载Mock
import './mock/index'
import App from './App';
import * as serviceWorker from './serviceWorker';
// 引入mobx的store
import store from './store/index'
import StoreContext from './context/StoreContext'

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
