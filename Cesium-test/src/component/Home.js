/* eslint-disable max-len */
import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import brown from '@material-ui/core/colors/brown';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import homeimg from '../image/image.jpg';
/* global document */

const Home = () => {
  const scrollFunction = () => {
    const topbutton = document.getElementById('topBut');
    if (document.documentElement.scrollTop > document.documentElement.clientHeight / 4) {
      topbutton.style.display = 'block';
    } else {
      topbutton.style.display = 'none';
    }
  };
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
  useEffect(() => {
    document.addEventListener('scroll', () => {
      scrollFunction();
    });
  }, []);

  const topFunction = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
              <div className="Home">
                <Button onClick={topFunction} id="topBut" title="Go up">Top</Button>
                <Container maxWidth="lg">
                <Grid
                  container spacing={3}
                  direction="row"
                  justify="center"
                  alignItems="flex-start"
                >
                  <Grid item xs={12}>
                    <ThemeProvider theme={textTheme}>
                    <Typography variant="h6" color="Primary">
                    <h1>Welcome To My Website</h1>
                    </Typography>
                    </ThemeProvider>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <div className="hmImg">
                    <img src={homeimg} alt=""/>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="body1" color="textPrimary" paragraph={true}>
                    Hi, my name is Mingyu Xie, I was born in June 1st, 2000 and I am from Wuhan, China. I am a second year Computer Science major undergraduate of UCSB.
                    </Typography>
                  </ThemeProvider>
                  </Grid>
                  </Grid>
                  </Container>
              </div>
  );
};
export default Home;
