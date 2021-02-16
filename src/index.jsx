import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Navbar from './components/navbar';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Switch>
        <Route path="/register" exact component={Register} />
      </Switch>
    </main>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
