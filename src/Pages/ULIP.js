import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ControlledAccordions2 from '../Components/ULIP Page/Accordion(ULIPPage)';
import TextMobileStepper1 from '../Components/Home Page/StoriesHomeCarousel';
import SimpleCard6 from '../Components/FAQ Page/Q1(FAQPage)';
import SimpleCard7 from '../Components/FAQ Page/Q2(FAQPage)';
import SimpleCard9 from '../Components/FAQ Page/Q4(FAQPage)';
import SimpleCard8 from '../Components/FAQ Page/Q3(FAQPage)';
import ContainedButtons3 from '../Components/ULIP Page/ReadMore(ULIP-AnsYourQueries)';
import ContainedButtons4 from '../Components/ULIP Page/ViewAllJargon(ULIPPage)';
import SimpleBreadcrumbs3 from '../Components/ULIP Page/Breadcrumb(ULIPPage)';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { FormatAlignCenter } from '@material-ui/icons';

const useStyles = makeStyles({
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 27,
  },
  para: {
    fontFamily: 'SFPro',
    fontWeight: 'normal',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: '30px',
    marginRight: '30px',
  },
  jargon: {
    marginBottom: '25px',
  },
});

export default function ULIP() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container fixed>
        <Grid container spacing={3} >
          <Grid item xs={12} sm={12} md={12}>
            <SimpleBreadcrumbs3 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.title}>
              Unit Linked
            </Typography>
            <Typography className={classes.title}>
              Insurance Plan
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.para}>
              <b>Unit linked insurance plan</b> is an insurance plan that provides dual benefits in one policy. It is a mix of insurance and investment policy that helps to achieve the goal of life cover with wealth creation and along with life cover.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.para}>
              The investment fund in the Top ULIP plan is collected based on debt or equity, or both. It matches the policyholder’s long-term goals like children’s education, retirement planning, buying a house, etc.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.para}>
              You can switch your ULIP portfolio between debt and equity-based on your knowledge of market performance as well as risk appetite.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.para}>
              In a ULIP investment, the number of units credited to the policyholder depends on the prevailing NAV as per that date and the premium amount paid.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.para}>
              Under a ULIP policy, the nominee receives death benefit - in case of the policyholder’s demise during the term of the ULIP. If the policyholder survives the term of ULIP, he/she can receive the maturity value of the ULIP plan.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.para}>
              The policyholder of ULIP is typically allowed to choose ULIP funds and assets to generate the returns. Even if the value of the ULIP investment falls below the sum assured, nominee of the policyholder will be paid the death benefit.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <ControlledAccordions2 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextMobileStepper1 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <h2>
              ULIP - Answering Your Queries
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
            <ContainedButtons3 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.para} style={{ color: "#7A7A7A" }}>
              <b>Disclaimer:</b> IN THIS POLICY, THE INVESTMENT RISK IN INVESTMENT PORTFOLIO IS BORNE BY THE POLICYHOLDER
              Note: During the settlement period, the investment risk in the investment portfolio is borne by the beneficiary.
              Note: Tax benefits are as per the Income Tax Act, 1961, and are subject to any amendments made thereto from time to time
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.para} style={{ color: "#7A7A7A" }}>
              For more details on risk factors, terms and conditions, please read sales brochure carefully before concluding a sale
              BEWARE OF SPURIOUS PHONE CALLS AND FICTIOUS /  FRADULENT OFFERS
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.para} style={{ color: "#7A7A7A" }}>
              <b>{'\u2022'}</b> IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums.Public receiving such phone calls are requested to lodge a police complaint.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} className={classes.jargon}>
            <ContainedButtons4 />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment >
  );
}