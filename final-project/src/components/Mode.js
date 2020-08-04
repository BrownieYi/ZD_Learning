import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  card: {
    height: 'calc(100vh - 67px)',
  },
  but: {
    marginTop: 43,
    marginLeft: 43,
    width: '25ch',
    height: '20ch',
  },
}));

const Mode = () => {
  const classes = useStyles();
  const [clean, setClean] = React.useState(false);
  const [discover, setDiscover] = React.useState(false);
  const [all, setAll] = React.useState(false);
  return (
  <Card className={classes.card}>
      <Button
        disabled= {clean}
        size="large"
        className={classes.but}
        variant="contained"
        color="secondary"
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
        color="secondary"
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
        color="secondary"
        onClick= {function () {
          setClean(false);
          setDiscover(false);
          setAll(true);
        }}
      >All
      </Button>
  </Card>
  );
};
export default Mode;
