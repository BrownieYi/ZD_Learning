/* eslint-disable max-len */
/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import Viewer from 'cesium/Source/Widgets/Viewer/Viewer';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Ion,
  createWorldTerrain,
  Cartesian3,
  WebMapTileServiceImageryProvider,
  // GeographicTilingScheme,
  // Resource,
  // Rectangle,
} from 'cesium';
import Appbar from './components/Appbar';
import './App.css';
import './cesium.scss';

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZTRiMGQxOS0zZTZjLTRhYmYtYmE1ZS1hNjJjNDM1NzNjYmEiLCJpZCI6MzA0NjAsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyIsInByIl0sImlhdCI6MTU5Mzc2MzUwM30.TlS6B0HhmY8gHfLOvZxUzbJnRkoyTEHRXAY9BxlW-E4';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
    };
    this.getLocation = this.getLocation.bind(this);
  }

  componentDidMount() {
    this.viewer = new Viewer(this.cesiumContainer, {
      animation: true,
      timeline: true,
      fullscreenButton: false,
      // baseLayerPicker: false,
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
    const osm = new WebMapTileServiceImageryProvider({
      url: 'http://localhost:8888/xyz_tile/{TileMatrix}/{TileCol}/{TileRow}.png',
      layer: '',
      style: 'default',
      tileMatrixSetID: 'default028mm',
      // tilingScheme: new GeographicTilingScheme(),
    });
    this.viewer.imageryLayers.addImageryProvider(osm);
  }

  getLocation(loc) {
    if (loc && loc.length === 2) {
      this.viewer.camera.flyTo({
        destination: Cartesian3.fromDegrees(loc[0], loc[1], 50.0),
      });
    }
    this.setState({ location: loc });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
      <React.Fragment>
        <CssBaseline />
        <Appbar pushLocation2={this.getLocation}/>
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
