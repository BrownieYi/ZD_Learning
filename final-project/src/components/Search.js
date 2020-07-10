import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Button, TextField } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: 65,
    height: 600,
    width: 300,
    zIndex: 1000,
    position: 'absolute',
    left: 73.199997,
  },
  button: {
    margin: theme.spacing(1),
    left: 10,
    width: '34ch',
  },
  divider: {
    marginTop: '35vh',
  },
}));

const Search = () => {
  const classes = useStyles();
  // let searchHistory = [];
  const [searchValue, setSearchValue] = React.useState('');
  const handleChange = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };
  // const handleSubmit = () => {
  //   alert(searchValue);
  // };
  return (
  <Card className={classes.card}>
    <CardContent>
      <form /* onSubmit={handleSubmit} */>
          <TextField
            variant="outlined"
            label= "Search"
            value={searchValue}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
      </form>
    </CardContent>
      <Divider className={ classes.divider }/>
      <Button
        variant="contained"
        color="primary"
        className={
          classes.button
        }
        startIcon={<LocationOnIcon />}
      >
        Storke Tower
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={
          classes.button
        }
        startIcon={<LocationOnIcon />}
      >
        Campell Hall
      </Button>
  </Card>
  );
};
export default Search;
