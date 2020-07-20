import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HistoryIcon from '@material-ui/icons/History';
import { Button, TextField } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import cookie from 'js-cookie';
import API from '../api/API';

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
    height: '35vh',
    overflow: 'hidden',
  },
  searchBar: {
    marginTop: '5vh',
    marginLeft: '15px',
  },
}));

const Search = (props) => {
  const classes = useStyles();
  let searchHistory = [];
  const [searchValue, setSearchValue] = React.useState('');
  const [his, setHis] = React.useState(cookie.get(CookieName));
  const [searchNames, setSearchNames] = React.useState([]);
  const handleChange = (event) => {
    setSearchValue(event.target.value);
    setSearchNames([]);
    if (searchValue !== '') {
      const param = { text: searchValue, access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZTRiMGQxOS0zZTZjLTRhYmYtYmE1ZS1hNjJjNDM1NzNjYmEiLCJpZCI6MzA0NjAsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyIsInByIl0sImlhdCI6MTU5Mzc2MzUwM30.TlS6B0HhmY8gHfLOvZxUzbJnRkoyTEHRXAY9BxlW-E4' };
      const api = new API();
      api
        .get('', param)
        .then((response) => {
          for (let i = 0; i < response.data.features.length; i += 1) {
            const names = response.data.features[i].properties.name;
            searchNames.push(names);
            setSearchNames(setSearchNames);
            console.log(searchNames);
          }
        });
    }
    console.log(searchValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue !== '') {
      if (cookie.get(CookieName) === '') {
        searchHistory.push(searchValue);
        cookie.set(CookieName, JSON.stringify(searchHistory));
      } else {
        searchHistory = JSON.parse(cookie.get(CookieName));
        searchHistory.unshift(searchValue);
        cookie.set(CookieName, JSON.stringify(searchHistory));
      }
      setHis(cookie.get(CookieName));
      setSearchValue('');
    }
  };
  const hists = JSON.parse(his);
  const sHistory = hists.map(
    (hist) => <Button
                className={classes.button}
                key={hists.id}
                startIcon={<HistoryIcon />}
              >
              {hist}
              </Button>,
  );
  return (
  <div {...props}>
  <Card className={classes.card}>
      <form className={classes.searchBar} onSubmit={handleSubmit} >
          <TextField
            variant="outlined"
            label= "Search"
            value={searchValue}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton onClick={handleSubmit}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
      </form>
      <Paper elevation={0} className={classes.paper}>
        {sHistory}
      </Paper>
      <Divider className={ classes.divider }/>
      <Button
        variant="contained"
        color="secondary"
        className={
          classes.button
        }
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
        startIcon={<LocationOnIcon />}
      >
        Campell Hall
      </Button>
  </Card>
  </div>
  );
};
export default Search;
