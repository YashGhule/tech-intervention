import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleCard6 from '../Components/FAQ Page/Q1(FAQPage)';
import SimpleCard7 from '../Components/FAQ Page/Q2(FAQPage)';
import SimpleCard8 from '../Components/FAQ Page/Q3(FAQPage)';
import SimpleCard9 from '../Components/FAQ Page/Q4(FAQPage)';
import SimpleCard10 from '../Components/FAQ Page/Q5(FAQPage)';
import SimpleCard11 from '../Components/FAQ Page/Q6(FAQPage)';
import SimpleCard12 from '../Components/FAQ Page/Q7(FAQPage)';
import SimpleCard13 from '../Components/FAQ Page/Q8(FAQPage)';
import SimpleCard14 from '../Components/FAQ Page/Q9(FAQPage)';
import SimpleCard15 from '../Components/FAQ Page/Q10(FAQPage)';
import SimpleBreadcrumbs2 from '../Components/FAQ Page/Breadcrumb(FAQPage)';
import Grid from '@material-ui/core/Grid';

export default function FAQ() {
  return (
    <React.Fragment>
      <Container fixed>
        <Grid container spacing={3} >
          <Grid item xs={12} sm={12} md={12}>
            <SimpleBreadcrumbs2 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <h2>
              FAQs
            </h2>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <SimpleCard6 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <SimpleCard7 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <SimpleCard8 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <SimpleCard9 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <SimpleCard10 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <SimpleCard11 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <SimpleCard12 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <SimpleCard13 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <SimpleCard14 />
          </Grid>
          <Grid item xs={12} sm={12} md={12} >
            <SimpleCard15 />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}