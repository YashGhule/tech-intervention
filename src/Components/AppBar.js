import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import TemporaryDrawer1 from './Drawer(MenuIcon)';
import TemporaryDrawer2 from './Drawer(SearchIcon)';
import { Search } from '@material-ui/icons';
import logo from '../Assets/BhartiAXALogo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(80),
  },
  toolbar: {
    minHeight: 6,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  logo: {
    maxWidth: 160,
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <TemporaryDrawer1 />
            {/* <MenuIcon /> */}
          </IconButton>
          <IconButton>
            <img src={logo} className="BhartiAXA" alt="logo" />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>

          </Typography>
          <IconButton aria-label="search" color="inherit">
            {/* <TemporaryDrawer2/> */}
            <Search />
          </IconButton>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
