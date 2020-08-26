import React from 'react';
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
// 引入国际化配置
import { IntlProvider } from 'react-intl'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'
const localeMap = {
  en: enUS,
  zh: zhCN
}

ReactDOM.render(
  // <React.StrictMode>
  <StoreContext.Provider value={store}>
    <IntlProvider locale={store.lang.local} messages={localeMap[store.lang.local as 'en'|'zh']}>
      <HashRouter>
        <App />
      </HashRouter>
    </IntlProvider>

  </StoreContext.Provider>
  // </React.StrictMode>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
