/* eslint-disable no-shadow */
import React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  useTheme,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import PublicIcon from '@material-ui/icons/Public';
import SearchIcon from '@material-ui/icons/Search';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Motion, spring } from 'react-motion';
import deepPurple from '@material-ui/core/colors/deepPurple';
import grey from '@material-ui/core/colors/grey';
import Mode from './Mode';
import Home from './Home';
import Search from './Search';

const drawerWidth = 150;

const theme1 = createMuiTheme({
  palette: {
    primary: {
      main: grey[200],
    },
    secondary: {
      main: deepPurple[200],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    // width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: grey[200],
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: grey[200],
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  card: {
    width: 300,
    position: 'relative',
    marginTop: 65,
    zIndex: 100,
    height: 'calc(100vh - 67px)',
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [modeChecked, setModeChecked] = React.useState(false);
  const [homeChecked, setHomeChecked] = React.useState(false);
  const [searchChecked, setSearchChecked] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setModeChecked(false);
    setSearchChecked(false);
    setHomeChecked(false);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const cardRenderChildren = function (interpolatingStyle) {
    return <div className={classes.card} style={interpolatingStyle}>
        {modeChecked && <Mode/>}
        {searchChecked && <Search/>}
        {homeChecked && <Home/>}
    </div>;
  };

  return (
    <ThemeProvider theme={theme1}>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            UCSB
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
       <List>
         <ListItem button onClick = { function () {
           handleDrawerClose();
           setHomeChecked((prev) => !prev);
           setModeChecked(false);
           setSearchChecked(false);
         }}>
           <ListItemIcon><HomeIcon /></ListItemIcon>
           <ListItemText>Home</ListItemText>
         </ListItem>
         <ListItem button onClick = {function () {
           handleDrawerClose();
           setModeChecked((prev) => !prev);
           setHomeChecked(false);
           setSearchChecked(false);
         }}>
           <ListItemIcon><PublicIcon /></ListItemIcon>
           <ListItemText>Mode</ListItemText>
         </ListItem>
         <ListItem button onClick = {function () {
           handleDrawerClose();
           setSearchChecked((prev) => !prev);
           setModeChecked(false);
           setHomeChecked(false);
         }}>
           <ListItemIcon><SearchIcon /></ListItemIcon>
           <ListItemText>Search</ListItemText>
         </ListItem>
       </List>
      </Drawer>
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
          {cardRenderChildren}
      </Motion>
    </div>
    </ThemeProvider>
  );
}
