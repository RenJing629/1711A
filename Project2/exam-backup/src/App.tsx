import React, { useState,useEffect } from 'react';
import styles from './App.module.css';

// 引入路由配置
import routerConfig from './router/router';
import RouterView from './router/RouterView';

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
  const { lang, user } = useStore();

  function geneRoutes(){
    routerConfig.routes[1].children = user.routes;
    return routerConfig.routes;
  }

  return useObserver(()=><IntlProvider locale={lang.local} messages={localeMap[lang.local as 'en' | 'zh']}>
    <RouterView routes={geneRoutes()}></RouterView>
  </IntlProvider>)
}

export default App;
