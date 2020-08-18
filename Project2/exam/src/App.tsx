import React from 'react';
import styles from './App.module.css';
import { Route, Redirect, Switch } from 'react-router-dom';

import LoginPage from './views/login/Login'
import MainPage from './views/main/Main'

function App() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/main" component={MainPage}></Route>
      {/* <Redirect to="/login"></Redirect> */}
    </Switch>
  );
}

export default App;
