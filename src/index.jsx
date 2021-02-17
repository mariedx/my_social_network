/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Redirect,
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import stores from 'stores';
import Home from 'pages/home';
import Register from 'pages/register';
import Login from 'pages/login';
import Profile from 'pages/MyProfile';
import OtherProfile from 'pages/profile';
import Navbar from 'components/navbar';
import Cookies from 'js-cookie';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
  {...rest}
    render={props => (
      Cookies.get('token') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    )}
  />
);

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/myprofile" exact component={Profile} />
        <PrivateRoute path="/profile/:userID" component={OtherProfile} />
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
