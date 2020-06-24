import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

const Users = () => {
  const match = useRouteMatch();
  return (
    <Router>
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
    </Router>
  );
};

function User() {
  const { userId } = useParams();
  return <h3>Requested topic ID: {userId}</h3>;
}
export default Users;
