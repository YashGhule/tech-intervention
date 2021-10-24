import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextMobileStepper from '../Components/Home Page/TrendingNowHomeCarousel';
import SimpleCard1 from '../Components/Home Page/LifeInsurancePlanHomeCard';
import TextMobileStepper1 from '../Components/Home Page/StoriesHomeCarousel';
import SimpleCard2 from '../Components/Home Page/AnsYourQueriesCard1';
import ContainedButtons1 from '../Components/Home Page/BuyNow(Home-GetCustomQuote)';
import ContainedButtons2 from '../Components/Home Page/ReadMore(Home-AnsYourQueries)';
import SimpleCard3 from '../Components/Home Page/AnsYourQueriesCard2';
import SimpleCard4 from '../Components/Home Page/AnsYourQueriesCard3';
import SimpleCard5 from '../Components/Home Page/AnsYourQueriesCard4';
import Grid from '@material-ui/core/Grid';
import AretheseyourIllustration from '../Assets/Are these your(Illustration).svg';
import { Box, Divider, Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import SimpleCard7 from '../Components/Home Page/LifeInsurancePlanHomeCard (Desktop)';
import SimpleCard16 from '../Components/Home Page/TrendingNowMediaSpeakCard (Desktop)';
import SimpleCard17 from '../Components/Home Page/TrendingNowJustLaunchedCard (Desktop)';
import SimpleCard18 from '../Components/Home Page/TrendingNowMostReadCard (Desktop)';
import SimpleCard19 from '../Components/Home Page/TrendingNowWeWonCard (Desktop)';
import SimpleCard20 from '../Components/Home Page/TrendingNow99.05Card (Desktop)';
import SimpleCard21 from '../Components/Home Page/TrendingNowImportantUpdatesCard (Desktop)';
import SimpleCard22 from '../Components/Home Page/StoriesHomeYogeshCard (Desktop)';
import SimpleCard23 from '../Components/Home Page/StoriesHomeSunainaCard (Desktop)';
import SimpleCard24 from '../Components/Home Page/StoriesHomeAnilCard (Desktop)';

const useStyles = makeStyles({
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: 27,
  },

  subtitle: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 27,
  },

  body: {
    fontFamily: 'SFPro',
    fontWeight: 'normal',
    fontSize: 16,
  },

  buynow: {
    marginBottom: '25px',
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>

      {/* //////////////////////////////////DESKTOP///////////////////////////////// */}

      <Hidden only={['xs', 'sm', 'md']}>
        <Container fixed>
          <Grid container spacing={3} >
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.title} style={{ marginTop: "20px" }} >
                Are these your
              </Typography>
              <Typography className={classes.title}>
                life's BIG questions?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <img src={AretheseyourIllustration} className="AretheseyourIllustration" alt="AretheseyourIllustration" width="320" height="100%" />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <SimpleCard7 />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.subtitle} style={{ marginBottom: "40px", marginTop: "30px" }}>
                Trending Now!
              </Typography>
            </Grid>

            <SimpleCard16 />
            <SimpleCard17 />
            <SimpleCard18 />
            <SimpleCard19 />
            <SimpleCard20 />
            <SimpleCard21 />

            <SimpleCard22 />
            <SimpleCard23 />
            <SimpleCard24 />

            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.subtitle} style={{ marginBottom: "40px" }}>
                Answering your Queries
              </Typography>
            </Grid>
            {/* <Hidden only="xs"> */}
            <Grid item xs={12} sm={12} md={12}>
              <SimpleCard2 />
            </Grid>
            {/* </Hidden> */}
            <Grid item xs={12} sm={12} md={12}>
              <SimpleCard3 />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <SimpleCard4 />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <SimpleCard5 />
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: "30px" }}>
              <ContainedButtons2 />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.subtitle}>
                Get Customized Quote
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.body}>
                With Bharti AXA Life Insurance guaranteed income pro,
              </Typography>
              <Typography className={classes.body}>
                get insurance cover and assured returns on maturity.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={classes.buynow}>
              <ContainedButtons1 />
            </Grid>
          </Grid>
        </Container>
      </Hidden>


      {/* //////////////////////////////////MOBILE///////////////////////////////// */}

      <Hidden only={['lg']}>
        <Container fixed>
          <Grid container spacing={3} >
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.title} style={{ marginTop: "20px" }} >
                Are these your
              </Typography>
              <Typography className={classes.title}>
                life's BIG questions?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <img src={AretheseyourIllustration} className="AretheseyourIllustration" alt="AretheseyourIllustration" width="320" height="100%" />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <SimpleCard1 />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.subtitle}>
                Trending Now!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextMobileStepper />
            </Grid>
            <Grid item>
              <TextMobileStepper1 />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.subtitle}>
                Answering your Queries
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <SimpleCard2 />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <SimpleCard3 />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <SimpleCard4 />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <SimpleCard5 />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ContainedButtons2 />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.subtitle}>
                Get Customized Quote
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.body}>
                With Bharti AXA Life Insurance guaranteed income pro, get insurance cover and assured returns on maturity
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={classes.buynow}>
              <ContainedButtons1 />
            </Grid>
          </Grid>
        </Container>
      </Hidden>
    </React.Fragment>
  );
}