/* eslint-disable no-console */
/* eslint-disable object-shorthand */
/* eslint-disable new-cap */
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
  Color,
  // LabelStyle,
  // VerticalOrigin,
  // Cartesian2,
  // BillboardCollection,
  LabelCollection,
  PointPrimitiveCollection,
  PathGraphics,
  SampledPositionProperty,
  JulianDate,
  IonResource,
  TimeInterval,
  TimeIntervalCollection,
  VelocityOrientationProperty,
  sampleTerrainMostDetailed,
  // when,
  Cartographic,
  // Transforms,
  // HeadingPitchRoll,
  // Model,
  // GeographicTilingScheme,
  // Resource,
  // Rectangle,
} from 'cesium';
import Appbar from './components/Appbar';
import './App.css';
import './cesium.scss';
import points from './Points';
import buildings from './Buildings';
// import pointer from './pointer.png';

const min = Math.ceil(10);
const max = Math.floor(100);
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YmZjODk5ZS02NGQ4LTRiNTEtYjBmOC1lNWIzZTg5Mjc5ODEiLCJpZCI6MzA0NjAsImlhdCI6MTYwMDMxMzAzOX0.IGCnaqPf_0HIbduqIQdYP5goZLRJGwosub9l9RaKZYk';
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
      shouldAnimate: true,
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
      url: 'http://localhost:8888/xyz_tile2/{TileMatrix}/{TileCol}/{TileRow}.png',
      layer: '',
      style: 'default',
      tileMatrixSetID: 'default028mm',
      // tilingScheme: new GeographicTilingScheme(),
    });
    this.viewer.imageryLayers.addImageryProvider(osm);
    const labels = this.viewer.scene.primitives.add(
      new LabelCollection(),
    );
    // const billboards = this.viewer.scene.primitives.add(
    //   new BillboardCollection(),
    // );
    const bPoints = this.viewer.scene.primitives.add(
      new PointPrimitiveCollection(),
    );
    for (let i = 0; i < points.length; i += 1) {
      // this.viewer.entities.add({
      //   name: points[i].name,
      //   position: Cartesian3.fromDegrees(points[i].geometry.coordinates[0], points[i].geometry.coordinates[1]),
      //   point: {
      //     pixelSize: 5,
      //     color: Color.RED,
      //     outlineColor: Color.WHITE,
      //     outlineWidth: 2,
      //   },
      //   label: {
      //     text: points[i].name,
      //     font: '14pt monospace',
      //     style: LabelStyle.FILL_AND_OUTLINE,
      //     outlineWidth: 2,
      //     verticalOrigin: VerticalOrigin.BOTTOM,
      //     pixelOffset: new Cartesian2(0, -50),
      //   },
      // });
      const bHeight = Math.floor(Math.random() * (max - min) + min);
      let bColor = Color.RED;
      if (bHeight <= 20) {
        bColor = Color.RED;
      } else if (bHeight <= 30) {
        bColor = Color.ORANGE;
      } else if (bHeight <= 40) {
        bColor = Color.YELLOW;
      } else if (bHeight <= 50) {
        bColor = Color.YELLOWGREEN;
      } else if (bHeight <= 60) {
        bColor = Color.GREEN;
      } else if (bHeight <= 70) {
        bColor = Color.CYAN;
      } else if (bHeight <= 80) {
        bColor = Color.BLUE;
      } else if (bHeight <= 90) {
        bColor = Color.PURPLE;
      } else {
        bColor = Color.GOLD;
      }
      labels.add({
        position: new Cartesian3.fromDegrees(points[i].geometry.coordinates[0], points[i].geometry.coordinates[1], bHeight),
        text: points[i].name,
        show: true,
        font: '12px 微软雅黑',
        fillColor: Color.BLACK,
      });
      bPoints.add({
        position: new Cartesian3.fromDegrees(points[i].geometry.coordinates[0], points[i].geometry.coordinates[1], bHeight),
        color: bColor,
        pixelSize: 4,
      });
      this.viewer.entities.add({
        name: buildings[i].properties.name,
        description: 'a ba a ba',
        polygon: {
          hierarchy: Cartesian3.fromDegreesArray(
            buildings[i].geometry.coordinates,
          ),
          height: -30,
          extrudedHeight: bHeight,
          material: bColor.withAlpha(0.5),
          outline: true,
          outlineColor: bColor,
        },
      });
    }
    const positionProperty = new SampledPositionProperty();
    const dormToLib = [[-119.852040219502697, 34.410147363027158, -22.909094938494476],
      [-119.852490219502697, 34.410290363027158, -22.886982576250382], [-119.852930219502697, 34.410438363027158, -22.879027751971037],
      [-119.85338804677354, 34.410576956202733, -22.70707537508957], [-119.85338804677354, 34.410976956202733, -22.434443959311952],
      [-119.85338804677354, 34.411376956202733, -22.158446106457465], [-119.85338804677354, 34.411776956202733, -20.844531817754937],
      [-119.85338804677354, 34.412176956202733, -19.996354491578263], [-119.853336191225514, 34.412689956662994, -20.09738823900354],
      [-119.853336191225514, 34.413089956662994, -22.240146541704615], [-119.852736191225514, 34.413049956662994, -20.110514033888776],
      [-119.852036191225514, 34.412999956662994, -23.505067663734863], [-119.851336191225514, 34.412959956662994, -21.06127471663023],
      [-119.850636191225514, 34.412959956662994, -21.867154635835693], [-119.849936191225514, 34.412959956662994, -21.69630359954906],
      [-119.849236191225514, 34.412959956662994, -22.49564248302828], [-119.848536191225514, 34.412959956662994, -22.06393927069189],
      [-119.847836191225514, 34.412959956662994, -21.299457749685338], [-119.847236191225514, 34.412959956662994, -20.590095962566078],
      [-119.846636191225514, 34.412959956662994, -20.292156773617364], [-119.846136191225514, 34.412959956662994, -20.09738823900354],
      [-119.846136191225514, 34.413359956662994, -20.404484771353182], [-119.846036191225514, 34.413659956662994, -22.432457604181568]];
    const timeStepInSeconds = 15;
    const totalSeconds = timeStepInSeconds * (dormToLib.length - 1);
    const start = JulianDate.fromIso8601('2020-03-09T23:10:00Z');
    const stop = JulianDate.addSeconds(start, totalSeconds, new JulianDate());
    this.viewer.clock.startTime = start.clone();
    this.viewer.clock.stopTime = stop.clone();
    this.viewer.clock.currentTime = start.clone();
    this.viewer.timeline.zoomTo(start, stop);
    // Speed up the playback speed 50x.
    this.viewer.clock.multiplier = 1;
    // Start playing the scene.
    this.viewer.clock.shouldAnimate = true;
    const terrainProvider = createWorldTerrain();
    const positionsList = dormToLib.map((p) => [Cartographic.fromDegrees(p[0], p[1])]);
    const getList = positionsList.map((p) => sampleTerrainMostDetailed(terrainProvider, p));
    Promise.all(getList).then(([...result]) => {
      dormToLib.forEach((p, i) => { const point = p; point[2] = result[i].height; });
    });

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < dormToLib.length; i++) {
      const dataPoint = dormToLib[i];
      const time = JulianDate.addSeconds(start, i * timeStepInSeconds, new JulianDate());
      const position = Cartesian3.fromDegrees(dataPoint[0], dataPoint[1], dataPoint[2]);
      positionProperty.addSample(time, position);
      this.viewer.entities.add({
        description: 'Cuyama to Library',
        position: position,
        scale: 200,
        point: { pixelSize: 10, color: Color.RED },
      });
    }
    const thatViewer = this.viewer;
    async function loadModel() {
      // Load the glTF model from Cesium ion.
      const airplaneUri = await IonResource.fromAssetId(152450);
      const airplaneEntity = thatViewer.entities.add({
        availability: new TimeIntervalCollection([new TimeInterval({ start: start, stop: stop })]),
        position: positionProperty,
        // Attach the 3D model instead of the green point.
        model: {
          uri: airplaneUri,
          scale: 25,
        },
        // Automatically compute the orientation from the position.
        orientation: new VelocityOrientationProperty(positionProperty),
        path: new PathGraphics({ width: 3 }),
      });

      thatViewer.trackedEntity = airplaneEntity;
    }

    loadModel();
  }

  getLocation(loc) {
    if (loc && loc.length === 2) {
      this.viewer.camera.flyTo({
        destination: Cartesian3.fromDegrees(loc[0], loc[1], 150.0),
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
