/* eslint-disable max-len */
import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import HistoryIcon from '@material-ui/icons/History';
import { Button, TextField } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import cookie from 'js-cookie';
// import API from '../api/API';
// import withDebounce from './withDebounce';
import points from '../Points';

export const CookieName = 'zondy-learning-name';
cookie.set(CookieName, []);

const useStyles = makeStyles((theme) => ({
  card: {
    height: 'calc(100vh - 67px)',
  },
  button: {
    margin: theme.spacing(1),
    left: 10,
    width: '34ch',
    overflow: 'hidden',
  },
  paper: {
    height: '45vh',
    overflow: 'hidden',
  },
  searchBar: {
    marginTop: '5vh',
    marginLeft: '15px',
  },
}));

// const TextFieldDebounced = withDebounce(TextField, 400);

// eslint-disable-next-line react/prop-types
const Search = ({ pushLocation }) => {
  const classes = useStyles();
  // let searchHistory = [];
  // let searchValue = '';
  // eslint-disable-next-line no-unused-vars
  // let location = '';
  let searchValueAuto = '';
  // const [his, setHis] = React.useState(cookie.get(CookieName));
  // const [searchNames, setSearchNames] = React.useState([]);
  // const [searchLocation, setSearchLocation] = React.useState([]);
  // eslint-disable-next-line no-unused-expressions
  // searchLocation;
  function handleChangeAuto(event, newValue) {
    searchValueAuto = newValue;
    // console.log(searchValueAuto);
    // for (let i = 0; i < points.length; i += 1) {
    //   if (points[i].name === searchValueAuto) {
    //     location = points[i].geometry.coordinates;
    //   }
    // }
    pushLocation(searchValueAuto.geometry.coordinates);
    // if (searchValueAuto !== '') {
    //   if (cookie.get(CookieName) === '') {
    //     searchHistory.push(searchValueAuto);
    //     cookie.set(CookieName, JSON.stringify(searchHistory));
    //   } else {
    //     searchHistory = JSON.parse(cookie.get(CookieName));
    //     searchHistory.unshift(searchValueAuto);
    //     cookie.set(CookieName, JSON.stringify(searchHistory));
    //   }
    //   setHis(cookie.get(CookieName));
    // }
  }
  // const handleChange = (event) => {
  //   searchValue = event.target.value;
  //   if (searchValue !== '') {
  //     const param = { text: searchValue, access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZTRiMGQxOS0zZTZjLTRhYmYtYmE1ZS1hNjJjNDM1NzNjYmEiLCJpZCI6MzA0NjAsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyIsInByIl0sImlhdCI6MTU5Mzc2MzUwM30.TlS6B0HhmY8gHfLOvZxUzbJnRkoyTEHRXAY9BxlW-E4' };
  //     const api = new API();
  //     setSearchNames([]);
  //     setSearchLocation([]);
  //     api
  //       .get('', param)
  //       .then((response) => {
  //         for (let i = 0; i < response.data.features.length; i += 1) {
  //           setSearchNames((labels) => [...labels, response.data.features[i].properties.label]);
  //           // eslint-disable-next-line max-len
  //           setSearchLocation((coordinates) => [...coordinates, response.data.features[i].geometry.coordinates]);
  //         }
  //       });
  //   }
  // };
  // function handleClick() {
  //   if (searchValue !== '') {
  //     const param = { text: searchValue, access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZTRiMGQxOS0zZTZjLTRhYmYtYmE1ZS1hNjJjNDM1NzNjYmEiLCJpZCI6MzA0NjAsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyIsInByIl0sImlhdCI6MTU5Mzc2MzUwM30.TlS6B0HhmY8gHfLOvZxUzbJnRkoyTEHRXAY9BxlW-E4' };
  //     const api = new API();
  //     setSearchNames([]);
  //     setSearchLocation([]);
  //     api
  //       .get('', param)
  //       .then((response) => {
  //         for (let i = 0; i < response.data.features.length; i += 1) {
  //           setSearchNames((labels) => [...labels, response.data.features[i].properties.label]);
  //           // eslint-disable-next-line max-len
  //           setSearchLocation((coordinates) => [...coordinates, response.data.features[i].geometry.coordinates]);
  //         }
  //       });
  //   }
  // }
  // function handleClickAuto() {
  //   for (let i = 0; i < points.length; i += 1) {
  //     if (points[i].name === searchValueAuto) {
  //       location = points.geometry.coordinates;
  //     }
  //   }
  //   if (!location) {
  //     setTimeout(handleClick, 1000);
  //     setTimeout(handleClickAuto, 1000);
  //   }
  //   pushLocation(location);
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (searchValue !== '') {
  //     if (cookie.get(CookieName) === '') {
  //       searchHistory.push(searchValue);
  //       cookie.set(CookieName, JSON.stringify(searchHistory));
  //     } else {
  //       searchHistory = JSON.parse(cookie.get(CookieName));
  //       searchHistory.unshift(searchValue);
  //       cookie.set(CookieName, JSON.stringify(searchHistory));
  //     }
  //     setHis(cookie.get(CookieName));
  //     searchValue = '';
  //   }
  // };
  // const hists = JSON.parse(his);
  // const sHistory = hists.map(
  //   (hist) => <Button
  //               className={classes.button}
  //               key={hists.id}
  //               onClick={() => {
  //                 searchValue = hist;
  //                 handleClick();
  //                 searchValueAuto = hist;
  //                 handleClickAuto();
  //               }}
  //               startIcon={<HistoryIcon />}
  //             >
  //             {hist}
  //             </Button>,
  // );
  return (
  <Card className={classes.card}>
      {/* <form className={classes.searchBar} onSubmit={handleSubmit} > */}
        <Autocomplete className={classes.searchBar}
          freeSolo
          disableClearable
          options={points}
          getOptionLabel={(point) => point.name}
          style={{ width: 270 }}
          value={searchValueAuto}
          onChange={handleChangeAuto}
          renderInput={(params) => <TextField
            {...params}
            variant="outlined"
          />}
        />
      {/* </form> */}
      <Paper elevation={0} className={classes.paper}>
        {/* {sHistory} */}
      </Paper>
      <Divider className={ classes.divider }/>
      <Button
        variant="contained"
        color="secondary"
        className={
          classes.button
        }
        onClick = {() => { pushLocation([-119.848384, 34.412646]); } }
        startIcon={<LocationOnIcon />}
      >
        Storke Tower
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={
          classes.button
        }
        onClick = {() => { pushLocation([-119.84514, 34.41611]); } }
        startIcon={<LocationOnIcon />}
      >
        Campbell Hall
      </Button>
  </Card>
  );
};
export default Search;
