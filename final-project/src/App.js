import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from './components/Appbar';
import './App.css';

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Appbar />
      </React.Fragment>
    );
  }
}

export default App;
