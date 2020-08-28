import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 引入mobx的store
import store from './store/index'
import StoreContext from './context/StoreContext'
// 引入路由模式
import { HashRouter } from 'react-router-dom'
// 引入antd全局样式
import 'antd/dist/antd.css';


ReactDOM.render(
  // <React.StrictMode>
  <Suspense fallback={<h1>Loading profile...</h1>}>
    <StoreContext.Provider value={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </StoreContext.Provider >
  </Suspense>
  // </React.StrictMode>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
