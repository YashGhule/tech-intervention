import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

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

export default function SimpleBreadcrumbs1() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.space}>
      {/* <Link to={process.env.PUBLIC_URL + '/gallery'}> */}
      <Link color="inherit" href="/" onClick={handleClick} className={classes.title}>
        Home
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick} className={classes.title}>
        ULIP
      </Link>
      <Typography color="textPrimary" className={classes.title}>Life Insurance Terms</Typography>
    </Breadcrumbs>
  );
}
