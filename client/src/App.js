import React, { useState, useEffect } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Layout from './hoc/Layout/Layout';

import './App.css';

const asyncScreenplay = asyncComponent(() => {
  return import('./containers/Screenplay/Screenplay');
});

const asyncRating = asyncComponent(() => {
  return import('./containers/Rating/Rating');
});

const asyncLogin = asyncComponent(() => {
  return import('./components/Login/Login');
});

const asyncRegister = asyncComponent(() => {
  return import('./components/Register/Register');
});

const App = () => {

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    //If there is a access token and refresh token, user is auth, NOT BEST PRACTICE, NOT SECURE
    if(localStorage.getItem('accessToken') && localStorage.getItem('refreshToken'))
      setAuth(true);
  })

  let routes = (
    <Switch>
      <Route path="/rating" component={asyncRating} />
      <Route path="/login" component={asyncLogin} />
      <Route path="/register" component={asyncRegister} />
      <Route path="/" exact component={asyncScreenplay} />
      <Redirect to="/" />
    </Switch>
  );

  if(auth) {
    routes = (
      <Switch>
        <Route path="/rating" component={asyncRating} />
        <Route path="/" exact component={asyncScreenplay} />
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <div>
      <Layout isAuth={auth}>
        {routes}
      </Layout>
    </div>
  )
}

export default withRouter(App);
