/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import Viewer from 'cesium/Source/Widgets/Viewer/Viewer';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Ion,
  createWorldTerrain,
  // Resource,
  // Rectangle,
} from 'cesium';
import Appbar from './components/Appbar';
import './App.css';
import './cesium.scss';

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZTRiMGQxOS0zZTZjLTRhYmYtYmE1ZS1hNjJjNDM1NzNjYmEiLCJpZCI6MzA0NjAsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyIsInByIl0sImlhdCI6MTU5Mzc2MzUwM30.TlS6B0HhmY8gHfLOvZxUzbJnRkoyTEHRXAY9BxlW-E4';
class App extends Component {
  componentDidMount() {
    // function OpenStreetMapNominatimGeocoder() {}
    // OpenStreetMapNominatimGeocoder.prototype.geocode = function (input) {
    //   const endpoint = 'https://nominatim.openstreetmap.org/search';
    //   const resource = new Resource({
    //     url: endpoint,
    //     queryParameters: {
    //       format: 'json',
    //       q: input,
    //     },
    //   });

    //   return resource.fetchJson().then((results) => {
    //     let bboxDegrees;
    //     return results.map((resultObject) => {
    //       bboxDegrees = resultObject.boundingbox;
    //       return {
    //         displayName: resultObject.display_name,
    //         destination: Rectangle.fromDegrees(
    //           bboxDegrees[2],
    //           bboxDegrees[0],
    //           bboxDegrees[3],
    //           bboxDegrees[1],
    //         ),
    //       };
    //     });
    //   });
    // };
    this.viewer = new Viewer(this.cesiumContainer, {
      animation: false,
      timeline: false,
      fullscreenButton: false,
      baseLayerPicker: false,
      homeButton: false,
      navigationHelpButton: false,
      sceneModePicker: false,
      // geocoder: new OpenStreetMapNominatimGeocoder(),
      terrainProvider: createWorldTerrain({
        requestWaterMask: true,
        requestVertexNormals: true,
      }),
    });
    this.viewer.scene.globe.enableLighting = true;
    this.viewer.scene.globe.depthTestAgainstTerrain = true;
    this.viewer.cesiumWidget.creditContainer.style.display = 'none';
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
