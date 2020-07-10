import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: 65,
    height: 600,
    width: 300,
    zIndex: 1000,
    position: 'absolute',
    left: 73.199997,
    top: 0,
  },
  but: {
    margin: theme.spacing(1),
    left: 36,
    width: '25ch',
    height: '20ch',
  },
}));

const Mode = (props) => {
  const classes = useStyles();
  const [clean, setClean] = React.useState(false);
  const [discover, setDiscover] = React.useState(false);
  const [all, setAll] = React.useState(false);
  return (<div {...props}>
  <Card className={classes.card}>
      <CardContent>
      </CardContent>
      <Button
        disabled= {clean}
        size="large"
        className={classes.but}
        variant="contained"
        color="primary"
        onClick= {function () {
          setClean(true);
          setDiscover(false);
          setAll(false);
        }}
      >
        Clean
      </Button>
      <Button
        disabled= {discover}
        size="large"
        className={classes.but}
        variant="contained"
        color="primary"
        onClick= {function () {
          setClean(false);
          setDiscover(true);
          setAll(false);
        }}
      >
        Discover
      </Button>
      <Button
        disabled= {all}
        size="large"
        className={classes.but}
        variant="contained"
        color="primary"
        onClick= {function () {
          setClean(false);
          setDiscover(false);
          setAll(true);
        }}
      >All
      </Button>
  </Card>
  </div>);
};
export default Mode;
