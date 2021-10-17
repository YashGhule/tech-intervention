import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SimpleBreadcrumbs1 from '../Components/Jargon Page/Breadcrumb(JargonPage)';
import ScrollableTabsButtonForce from '../Components/Jargon Page/Tab(JargonPage)';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 27,
  },
});

export default function Jargon() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container fixed>
        <Grid container spacing={3} >
          <Grid item xs={12} sm={12} md={12}>
            <SimpleBreadcrumbs1 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.title}>
              Life Insurance Terms
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <ScrollableTabsButtonForce />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}