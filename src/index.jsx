import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </main>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
