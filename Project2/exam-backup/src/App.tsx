import React from 'react';
import styles from './App.module.css';

// 引入路由配置
import routerConfig from './router/router';
import RouterView from './router/RouterView';
import { IRouterItem } from './utils/interface';

// 引入国际化配置
import { IntlProvider } from 'react-intl'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'
import useStore from './context/useStore';
import { useObserver } from 'mobx-react-lite';
const localeMap = {
  en: enUS,
  zh: zhCN
}

function App() {
  const { lang } = useStore();

  return useObserver(()=><IntlProvider locale={lang.local} messages={localeMap[lang.local as 'en' | 'zh']}>
    <RouterView routes={routerConfig.routes as IRouterItem[]}></RouterView>
  </IntlProvider>)
}

export default App;
