import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import TemporaryDrawer1 from './Drawer(MenuIcon)';
import { Search } from '@material-ui/icons';
import logo from '../../Assets/BhartiAXALogo.svg';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(6),
  },
  logoButton: {
    marginRight: theme.spacing(-5),
    height: 20,
  },
  searchButton: {
    marginRight: theme.spacing(-1),
  },
  profileButton: {
    marginRight: theme.spacing(-1),
  },
  toolbar: {
    minHeight: 6,
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: '#FFFFFF'
  },
  // title: {
  //   flexGrow: 1,
  //   alignSelf: 'flex-end',
  // },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Grid container wrap="nowrap" spacing={0}
            direction="row"
            alignItems="center"
          >
            <Grid item xs={1} sm={1} md={1}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="#000000"
                aria-label="open drawer"
              >
                <TemporaryDrawer1 />
                {/* <MenuIcon /> */}
              </IconButton>
            </Grid>
            <Grid item xs sm={1} md={10}>
              <Link to={process.env.PUBLIC_URL + '/'}>
                <IconButton className={classes.logoButton} >
                  <img src={logo} className="BhartiAXA" alt="logo" />
                </IconButton>
              </Link>
            </Grid>
            <Grid item xs={0} sm={1} md={1}>
              <IconButton className={classes.searchButton} aria-label="search" color="#000000">
                {/* <TemporaryDrawer2/> */}
                <Search />
              </IconButton>
              <IconButton className={classes.profileButton} aria-label="display more actions" edge="end" color="#000000">
                <AccountCircleOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
