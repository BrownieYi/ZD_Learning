import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './component/Home';
import Game from './component/Game';
import Users from './component/Users';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className = "body">
        <nav>
          <div className = "nav-bar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
