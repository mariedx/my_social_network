/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import stores from 'stores';
import Home from 'pages/home';
import Register from 'pages/register';
import Login from 'pages/login';
import Profile from 'pages/myProfile';
import Navbar from 'components/navbar';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </main>
  </Router>
);

ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
