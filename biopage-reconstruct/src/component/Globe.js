/* eslint-disable class-methods-use-this */
import React, { useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import Button from '@material-ui/core/Button';
import { Viewer, Entity, EntityDescription } from 'resium';
import { Cartesian3, createWorldTerrain } from 'cesium';
import { hot } from 'react-hot-loader/root';
/* global document */

const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
const pointGraphics = { pixelSize: 10 };
const terrainProvider = createWorldTerrain();

const Globe = () => {
  const topButTheme = createMuiTheme({
    palette: {
      primary: {
        main: amber[100],
      },
      secondary: {
        main: amber[400],
      },
    },
  });
  const scrollFunction = () => {
    const topbutton = document.getElementById('topBut');
    if (document.documentElement.scrollTop > document.documentElement.clientHeight / 4) {
      topbutton.style.display = 'block';
    } else {
      topbutton.style.display = 'none';
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      scrollFunction();
    });
  }, []);

  const topFunction = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
      <div>
    <ThemeProvider theme = {topButTheme}>
    <Button variant="contained" color="secondary" onClick={topFunction} id="topBut" title="Go up">Top</Button>
    </ThemeProvider>
    <Viewer terrainProvider={terrainProvider}>
      <Entity position={position} point={pointGraphics}>
        <EntityDescription>
          <h1>Hello, world.</h1>
          <p>JSX is available here!</p>
        </EntityDescription>
      </Entity>
    </Viewer>
    </div>
  );
};

export default hot(Globe);
