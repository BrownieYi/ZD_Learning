import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import PublicIcon from '@material-ui/icons/Public';
import SearchIcon from '@material-ui/icons/Search';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Mode from './Mode';
import Home from './Home';
import Search from './Search';

/* global document */

const drawerWidth = 150;

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
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    marginTop: 65,
    height: 600,
    width: 300,
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    document.getElementById('homeCard').style.display = 'none';
    document.getElementById('modeCard').style.display = 'none';
    document.getElementById('searchCard').style.display = 'none';
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
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
       <List>
         <ListItem button onClick = {function () {
           handleDrawerClose();
           document.getElementById('modeCard').style.display = 'none';
           document.getElementById('searchCard').style.display = 'none';
           if (document.getElementById('homeCard').style.display === 'block') {
             document.getElementById('homeCard').style.display = 'none';
           } else {
             document.getElementById('homeCard').style.display = 'block';
           }
         }}>
           <ListItemIcon><HomeIcon /></ListItemIcon>
           <ListItemText>Home</ListItemText>
         </ListItem>
         <ListItem button onClick = {function () {
           handleDrawerClose();
           document.getElementById('homeCard').style.display = 'none';
           document.getElementById('searchCard').style.display = 'none';
           if (document.getElementById('modeCard').style.display === 'block') {
             document.getElementById('modeCard').style.display = 'none';
           } else {
             document.getElementById('modeCard').style.display = 'block';
           }
         }}>
           <ListItemIcon><PublicIcon /></ListItemIcon>
           <ListItemText>Mode</ListItemText>
         </ListItem>
         <ListItem button onClick = {function () {
           handleDrawerClose();
           document.getElementById('homeCard').style.display = 'none';
           document.getElementById('modeCard').style.display = 'none';
           if (document.getElementById('searchCard').style.display === 'block') {
             document.getElementById('searchCard').style.display = 'none';
           } else {
             document.getElementById('searchCard').style.display = 'block';
           }
         }}>
           <ListItemIcon><SearchIcon /></ListItemIcon>
           <ListItemText>Search</ListItemText>
         </ListItem>
       </List>
      </Drawer>
      <div id ="modeCard" style={{
        display: 'none',
        zIndex: 1000,
        position: 'absolute',
        left: 70,
      }}>
        <Mode />
      </div>
      <div id ="homeCard" style={{
        display: 'none',
        zIndex: 1000,
        position: 'absolute',
        left: 70,
      }}>
        <Home />
      </div>
      <div id ="searchCard" style={{
        display: 'none',
        zIndex: 1000,
        position: 'absolute',
        left: 70,
      }}>
        <Search />
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
