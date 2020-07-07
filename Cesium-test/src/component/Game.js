import React, { useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import amber from '@material-ui/core/colors/amber';
import brown from '@material-ui/core/colors/brown';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import lol from '../image/league.jpg';
import ss from '../image/sekiro.jpg';
import mhw from '../image/mhw.jpg';
/* global document */

const Game = () => {
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
  const textTheme = createMuiTheme({
    palette: {
      primary: {
        main: brown[700],
      },
      secondary: {
        main: brown[400],
      },
    },
    typography: {
      h6: {
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
			<Container maxWidth="md">
            <Grid
                container spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
            >
			<Grid item xs={12}>
			<ThemeProvider theme={textTheme}>
			<Typography variant="h5" color="Primary">
				These are some of the games I currently play.
			</Typography>
			</ThemeProvider>
			</Grid>
					<Grid item xs={12} sm={6}>
						<a href="https://na.leagueoflegends.com/en-us/">
                            <img src={lol} alt="" />

                        </a>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant="h6">
							League of Legends
						</Typography>
					</Grid>

					<Grid item xs={12} sm={6}>
						<a href="https://www.sekirothegame.com">
                            <img src={ss} alt="" />
                        </a>
					</Grid>
					<Grid item xs={12} sm={6}>
					<Typography variant="h6">
						Sekiro: Shadow Die Twice
					</Typography>
					</Grid>

					<Grid item xs={12} sm={6}>
						<a href="https://www.monsterhunterworld.com/us/">
                            <img src={mhw} alt = "" />
                        </a>
					</Grid>
					<Grid item xs={12} sm={6}>
					<Typography variant="h6">
						Monster Hunter World
					</Typography>
					</Grid>
			</Grid>
			</Container>
		</div>
  );
};
export default Game;
