/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import Viewer from 'cesium/Source/Widgets/Viewer/Viewer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Ion } from 'cesium';
import Appbar from './components/Appbar';
import './App.css';
import './cesium.scss';

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZTRiMGQxOS0zZTZjLTRhYmYtYmE1ZS1hNjJjNDM1NzNjYmEiLCJpZCI6MzA0NjAsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyIsInByIl0sImlhdCI6MTU5Mzc2MzUwM30.TlS6B0HhmY8gHfLOvZxUzbJnRkoyTEHRXAY9BxlW-E4';
class App extends Component {
  componentDidMount() {
    this.viewer = new Viewer(this.cesiumContainer, {
      animation: false,
      timeline: false,
    });
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
        <div className="cesiumWindow" id="cesiumContainer" ref={ (element) => this.cesiumContainer = element } style={{
          position: 'absolute',
          left: 70,
          top: 64,
        }}/>
      </React.Fragment>
      </div>
    );
  }
}

export default App;
