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
import { Hidden, Typography } from '@material-ui/core';
import { FormatAlignCenter } from '@material-ui/icons';
import SimpleCard22 from '../Components/Home Page/StoriesHomeYogeshCard (Desktop)';
import SimpleCard23 from '../Components/Home Page/StoriesHomeSunainaCard (Desktop)';
import SimpleCard24 from '../Components/Home Page/StoriesHomeAnilCard (Desktop)';
import List1Panel1 from '../Components/ULIP Page/List1Panel1Accordion(ULIP)';
import List16Panel16 from '../Components/ULIP Page/WhyDoYouNeedtoBuyULIPInvestment Plan (Desktop)';
import List17Panel17 from '../Components/ULIP Page/ImportanceofTopULIPPlans (Desktop)';
import SimpleCard25 from '../Components/ULIP Page/BenefitsULIP-RegularSavings (Desktop)';
import SimpleCard26 from '../Components/ULIP Page/BenefitsULIP-TaxBenefits (Desktop)';
import SimpleCard27 from '../Components/ULIP Page/BenefitsULIP-Protection (Desktop)';
import SimpleCard28 from '../Components/ULIP Page/BenefitsULIP-PotentialGrowth (Desktop)';
import SimpleCard29 from '../Components/ULIP Page/BenefitsULIP-FlexibiltyofInvestment (Desktop)';
import SimpleCard30 from '../Components/ULIP Page/BenefitsULIP-GreaterRewards (Desktop)';
import List18Panel18 from '../Components/ULIP Page/FeaturesULIP (Desktop)';
import List19Panel19 from '../Components/ULIP Page/WhoShouldBuyULIP (Desktop)';
import List20Panel20 from '../Components/ULIP Page/HowtoChooseULIP (Desktop)';
import List21Panel21 from '../Components/ULIP Page/WhyShouldYouBuy (Desktop)';
import List22Panel22 from '../Components/ULIP Page/KeyAspectstoConsider (Desktop';
import List23Panel23 from '../Components/ULIP Page/TopULIPPlans (Desktop)';
import BasicTable1 from '../Components/ULIP Page/TableforTopULIPPlans (Desktop)';
import List24Panel24 from '../Components/ULIP Page/HowtoInvestLongterm (Desktop)';
import List25Panel25 from '../Components/ULIP Page/HowToCalculateULIPReturns (Desktop)';
import SimpleCard31 from '../Components/ULIP Page/ULIPChargesPremium (Desktop)';
import SimpleCard32 from '../Components/ULIP Page/ULIPChargesPolicy (Desktop)';
import List26Panel26 from '../Components/ULIP Page/HowtoBuyULIPOnline (Desktop)';
import StepstoBuyULIPOnlineinIndia from '../Assets/Steps to Buy ULIP Online in India.svg';
import List27Panel27 from '../Components/ULIP Page/ULIPClaimProcess (Desktop)';
import List28Panel28 from '../Components/ULIP Page/FactorsImpactingULIPPremium (Desktop)';

const useStyles = makeStyles({
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 27,
    marginBottom: '20px',
    color: '#393939'
  },
  para: {
    fontFamily: 'SFPro',
    fontWeight: 'normal',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: '30px',
    marginRight: '30px',
    color: '#393939'
  },
  jargon: {
    marginBottom: '25px',
  },
});

export default function ULIP() {
  const classes = useStyles();

  return (
    <React.Fragment>

      {/* //////////////////////////////////DESKTOP///////////////////////////////// */}

      <Hidden only="xs">
        <Container fixed>
          <Grid container spacing={3} >
            <Grid item xs={12} sm={12} md={12}>
              <SimpleBreadcrumbs3 />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.title}>
                Unit Linked Insurance Plan
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.para}>
                <b>Unit linked insurance plan</b> is an insurance plan that provides dual benefits in one policy. It is a mix of insurance and investment policy that helps to achieve the goal of life cover with wealth creation and along with life cover. The investment fund in the Top ULIP plan is collected based on debt or equity, or both.
                It matches the policyholder’s long-term goals like children’s education, retirement planning, buying a house, etc. You can switch your ULIP portfolio between debt and equity-based on your knowledge of market performance as well as risk appetite. In a ULIP investment, number of units credited to the policyholder depends on the prevailing NAV as per that date and the premium amount paid.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.para} style={{ marginBottom: '20px' }}>
                Under a ULIP policy, the nominee receives <b>death benefit</b>, in case of the policyholder’s demise during the term of the ULIP. If the policyholder survives the term of ULIP, he/she can receive the maturity value of the ULIP plan. The policyholder of ULIP is typically allowed to choose ULIP funds and assets to generate the returns. Even if the value of the ULIP investment falls below the sum assured, the nominee of the policyholder will be paid the death benefit.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.title}>
                Why Do You Need to Buy the ULIP Investment Plan?
              </Typography>
              <List16Panel16 />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.title}>
                Importance of Top ULIP Plans
              </Typography>
              <List17Panel17 />
            </Grid>

            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: '30px' }}>
              <Typography className={classes.title} >
                Benefits of ULIP
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} style={{ marginBottom: '30px' }}>
            <SimpleCard25 />
            <SimpleCard26 />
            <SimpleCard27 />
            <SimpleCard28 />
            <SimpleCard29 />
            <SimpleCard30 />
          </Grid>

          <Grid container spacing={3} >
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.title} >
                Features of ULIP
              </Typography>
              <List18Panel18 />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.title} >
                Who Should Buy ULIP Plan?
              </Typography>
              <List19Panel19 />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.title} >
                How to Choose the ULIP Plan?
              </Typography>
              <List20Panel20 />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.title} >
                Why should you Buy a Unit Link Insurance Policy?
              </Typography>
              <List21Panel21 />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.title} >
                Key Aspects to Consider as an Investor in ULIP
              </Typography>
              <List22Panel22 />
            </Grid>

            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: '30px' }}>
              <Typography className={classes.title} >
                Top ULIP Life Insurance Plans
              </Typography>
              <List23Panel23 />
              <BasicTable1 />
            </Grid>

            <Grid item xs={12} sm={12} md={12} >
              <Typography className={classes.title} >
                How to Invest Long Term with ULIP Lock-In Period?
              </Typography>
              <List24Panel24 />
            </Grid>

            <Grid item xs={12} sm={12} md={12} >
              <Typography className={classes.title} >
                How to Calculate ULIP Plan Returns?
              </Typography>
              <List25Panel25 />
            </Grid>

            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: '30px' }}>
              <Typography className={classes.title} >
                ULIP Charges
              </Typography>
            </Grid>

            <SimpleCard31 />
            <SimpleCard32 />

            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: '30px' }}>
              <Typography className={classes.title} style={{ marginBottom: '30px' }}>
                Steps to Buy ULIP Online in India
              </Typography>
              <Typography style={{ marginBottom: '30px', fontSize: "14px", fontFamily: "SFPro" }}>
                ULIP plans, like any other life insurance product, can be acquired online quickly and easily. So, let's have a look at how to buy ULIP plan online.
              </Typography>
              <Grid container wrap="nowrap" spacing={10}
                direction="row"
                alignItems="center"
              >
                <Grid item>
                  <img src={StepstoBuyULIPOnlineinIndia} className="StepstoBuyULIPOnlineinIndia" alt="StepstoBuyULIPOnlineinIndia" width="330" height="330" style={{ marginBottom: '30px' }} />
                </Grid>
                <Grid item >
                  <List26Panel26 />
                </Grid>
              </Grid>
              <Typography style={{ marginBottom: '30px', fontSize: "14px", fontFamily: "SFPro", fontWeight: "bold" }}>
                ULIP plans, like any other life insurance product, can be acquired online quickly and easily. So, let's have a look at how to buy ULIP plan online.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: '30px' }}>
              <Typography className={classes.title} >
                ULIP Plan Claim Process
              </Typography>
              <List27Panel27 />
            </Grid>

            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: '30px' }}>
              <Typography className={classes.title} >
                Factors Impacting ULIP Plan Premium
              </Typography>
              <List28Panel28 />
            </Grid>

          </Grid>

        </Container>
      </Hidden>


      {/* //////////////////////////////////MOBILE///////////////////////////////// */}

      <Hidden only="lg">
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
                <b>Unit linked insurance plan</b> is an insurance plan providing dual benefits in one policy. It is a mix of insurance and investment policy that helps to achieve the goal of life cover with wealth creation and along with life cover.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.para}>
                The investment fund in the Top ULIP plan is collected based on debt or equity, or both.It matches the policyholder’s long-term goals like children’s education, retirement planning, buying a house, etc.
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
                Under a ULIP policy, the nominee receives <b>death benefit</b> - in case of policyholder’s demise during the term of the ULIP.If the policyholder survives the term of ULIP, he/she can receive the maturity value of the ULIP plan.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.para}>
                The policyholder of ULIP is typically allowed to choose ULIP funds and assets to generate the returns.Even if the value of the ULIP investment falls below the sum assured, nominee of the policyholder will be paid the death benefit.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ControlledAccordions2 />
            </Grid>
          </Grid>
        </Container>
      </Hidden>

      <Container fixed>
        <Grid container spacing={3} >
          <Hidden only="lg">
            <Grid item xs={12} sm={12} md={12}>
              <TextMobileStepper1 />
            </Grid>
          </Hidden>
          <Hidden only="xs">
            <SimpleCard22 />
            <SimpleCard23 />
            <SimpleCard24 />
          </Hidden>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ marginBottom: '30px', fontFamily: 'Montserrat', fontSize: '27px' }}>
              ULIP - Answering Your Queries
            </Typography>
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
              <b>Disclaimer: </b> IN THIS POLICY, THE INVESTMENT RISK IN INVESTMENT PORTFOLIO IS BORNE BY THE POLICYHOLDER.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.para} style={{ color: "#7A7A7A" }}>
              <b>Note:</b> During the settlement period, the investment risk in the investment portfolio is borne by the beneficiary.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.para} style={{ color: "#7A7A7A" }}>
              <b>Note:</b> Tax benefits are as per the Income Tax Act, 1961, and are subject to any amendments made thereto from time to time.
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