import React from 'react';
import styles from './App.module.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './views/login/Login'

function App() {
  return (
    <div className={styles.App}>
      <Switch>
        <Route path="/login" component={LoginPage}></Route>
        {/* <Redirect to="/login"></Redirect> */}
      </Switch>
    </div>
  );
}

export default App;
