import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import Home from './component/Home';
import Game from './component/Game';
import movies from './component/Movies';
import './App.css';

export default function App() {
  const allTabs = ['/', '/game', '/movies'];
  const navBarTheme = createMuiTheme({
    palette: {
      primary: {
        main: amber[100],
      },
      secondary: {
        main: amber[400],
      },
    },
    typography: {
      textPrimary: {
        main: amber[500],
      },
    },
  });
  return (
    <Router>
        <Route
          path="/"
          render={({ location }) => (
            <ThemeProvider theme={navBarTheme}>
            <Fragment>
            <AppBar position="static">
              <Tabs centered={true} indicatorColor= 'secondary' value={location.pathname}>
                <Tab label="Home" value="/" component={Link} to={allTabs[0]} />
                <Tab label="Game" value="/game" component={Link} to={allTabs[1]} />
                <Tab value="/movies" label="Movies" component={Link} to={allTabs[2]} />
              </Tabs>
              </AppBar>
              <Switch>
                <Route path={allTabs[1]} render={() => <Game />} />
                <Route path={allTabs[2]} component = {movies} />
                <Route path={allTabs[0]} render={() => <Home />} />
              </Switch>
            </Fragment>
            </ThemeProvider>
          )}
        />
    </Router>
  );
}
