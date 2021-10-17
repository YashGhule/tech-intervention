import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
// import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
  },

  space: {
    marginTop: '20px',
    marginLeft: '20px',
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs2() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.space}>
      <Link color="inherit" href="/" onClick={handleClick} className={classes.title}>
        Home
      </Link>
      <Link color="inherit" href="/" onClick={handleClick} className={classes.title}>
        ULIP
      </Link>
      <Typography color="textPrimary" className={classes.title}>FAQs</Typography>
    </Breadcrumbs>
  );
}
