import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import User from './User';

const Topics = function Tps() {
  const match = useRouteMatch();

  return (
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/guest`}>guest</Link>
          </li>
          <li>
            <Link to={`${match.url}/admin`}>admin</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${match.path}/:userId`}>
            <User />
          </Route>
          <Route path={match.path}>
            <h3>Please select your identity.</h3>
          </Route>
        </Switch>
      </div>
  );
};
export default Topics;
