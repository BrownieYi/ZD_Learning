import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(() => ({
  card: {
    marginTop: 65,
    height: 600,
    width: 300,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
  <Card className={classes.card}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Home
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    </CardActions>
  </Card>
  );
};
export default Home;
