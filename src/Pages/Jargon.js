import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleBreadcrumbs1 from '../Components/Jargon Page/Breadcrumb(JargonPage)';
import ScrollableTabsButtonForce from '../Components/Jargon Page/Tab(JargonPage)';
import Grid from '@material-ui/core/Grid';

export default function Jargon() {
  return (
    <React.Fragment>
      <Container fixed>
        <Grid container spacing={3} >
          <Grid item xs={12} sm={12} md={12}>
            <SimpleBreadcrumbs1 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <h2>
              Life Insurance Terms
            </h2>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <ScrollableTabsButtonForce />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}