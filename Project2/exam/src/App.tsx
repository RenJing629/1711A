import React from 'react';
import styles from './App.module.css';

// 引入路由配置
import routerConfig from './router/router';
import RouterView from './router/RouterView';
import { IRouterItem } from './utils/interface';

function App() {
  return <RouterView routes={routerConfig.routes as IRouterItem[]}></RouterView>
}

export default App;
