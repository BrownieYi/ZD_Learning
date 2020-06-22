import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import home from './component/Home';
import game from './component/Game';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className = "body">
        <nav>
          <div className = "nav-bar">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/game" component={game}>
          </Route>
          <Route path="/home" component={home}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
