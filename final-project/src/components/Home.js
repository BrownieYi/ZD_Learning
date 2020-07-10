import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: 65,
    height: 600,
    width: 300,
    zIndex: 1000,
    position: 'absolute',
    left: 73.199997,
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      top: 50,
    },
  },
  submit: {
    margin: theme.spacing(2),
    left: 6,
    width: '25ch',
    top: 50,
  },
  margin: {
    margin: theme.spacing(2),
  },
  textField: {
    width: '25ch',
    top: 50,
  },
}));

const Home = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
  <Card className={classes.card}>
    <CardContent>
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <TextField variant="outlined" label="User Name" />
      </FormControl>
      <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
      </FormControl>
    </CardContent>
    <CardActions>
      <Button className={classes.submit} variant="contained" color="primary" >Log In</Button>
    </CardActions>
  </Card>
  );
};
export default Home;
