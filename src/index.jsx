/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import stores from 'stores';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Profile from 'pages/MyProfile';
import OtherProfile from 'pages/Profile';
import Navbar from 'components/navbar';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/myprofile" exact component={Profile} />
        <Route path="/profile/:userID" component={OtherProfile} />
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
