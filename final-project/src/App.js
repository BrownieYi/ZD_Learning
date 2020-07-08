/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import Viewer from 'cesium/Source/Widgets/Viewer/Viewer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from './components/Appbar';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.viewer = new Viewer(this.cesiumContainer);
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
      <React.Fragment>
        <CssBaseline />
        <Appbar />
      </React.Fragment>
      <React.Fragment>
        <div id="cesiumContainer" ref={ (element) => this.cesiumContainer = element } style={{
          position: 'absolute',
          left: 70,
          top: 64,
          width: '89.388vw',
        }}/>
      </React.Fragment>
      </div>
    );
  }
}

export default App;
