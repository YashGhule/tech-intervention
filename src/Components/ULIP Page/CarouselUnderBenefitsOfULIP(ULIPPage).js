import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Grid from '@material-ui/core/Grid';
import RegularSavings from '../../Assets/Regular Savings.svg';
import TaxBenefits from '../../Assets/Tax Benefits.svg';
import Protection from '../../Assets/Protection.svg';
import PotentialGrowth from '../../Assets/Potential Growth.svg';
import FlexibilityofInvestment from '../../Assets/Flexibility of Investment.svg';
import GreaterRewards from '../../Assets/Greater Rewards.svg';

const tutorialSteps = [
  {
    label: 'Regular Savings',
    imgPath: RegularSavings,
    text: 'ULIP policy is a way to inculcate the habit of disciplined and regular savings, which will further help in long-term financial planning. By paying regular premiums in the ULIP investment plan, you can enjoy wealth creation benefits for your loved ones.',
  },
  {
    label: 'Tax Benefits',
    imgPath: TaxBenefits,
    text: 'Up to 1.5 lakh per annum can be availed as tax deduction benefit under Section 80C of the Income Tax Act, 1961. The maturity returns are also exempted from tax under Section 10(10D), keeping into consideration the terms and conditions.',
  },
  {
    label: 'Protection',
    imgPath: Protection,
    text: 'A ULIP plan provides the protective benefit of a life cover, which helps keep your family and loved ones secure in your absence.',
  },
  {
    label: 'Potential Growth',
    imgPath: PotentialGrowth,
    text: 'You can earn higher returns from equity and debt funds in the ULIP policy. With this potential fund growth, you can achieve your long-term life goals like buying a new dream car, buying a house, funding your child’s higher education, funding your child’s marriage, and many more.',
  },
  {
    label: 'Flexibility of Investment',
    imgPath: FlexibilityofInvestment,
    text: 'In the best ULIP plan, you can get flexibility and control over your invested money in many ways. There are options like fund switch, partial withdrawal, premium redirection, and top-up that provide different choices for the management and investment of your money in the ULIP investment.',
  },
  {
    label: 'Greater Rewards',
    imgPath: GreaterRewards,
    text: 'If you stay invested for a longer period of time, and pay regular premiums, the insurance company adds to your savings through additional benefits and bonuses, that are available in different forms. This will help in adding up to your savings amount and growth of money.',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    backgroundColor: '#FFEECB',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(0),
    backgroundColor: theme.palette.background.default,
    backgroundColor: '#FFEECB',
  },
  body: {
    fontSize: 10,
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
    backgroundColor: '#FFEECB',
  },
  step: {
    backgroundColor: '#FFEECB',
  },
  img: {
    height: 150,
    width: "100%",
    overflow: 'hidden',
    display: 'block',
    // width: '100%',
  },
}));

export default function TextMobileStepper2() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Grid container spacing={1} >
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ fontFamily: 'Montserrat', fontSize: '17px' }}>{tutorialSteps[activeStep].label}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Grid container wrap="nowrap" spacing={2}
        direction="row"
        alignItems="center"
      >
        <Grid item xs={6} sm={6} md={6}>
          <Paper square elevation={0} className={classes.body}>
            <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left' }}>
              {tutorialSteps[activeStep].text}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <img
            className={classes.img}
            src={tutorialSteps[activeStep].imgPath}
            alt={tutorialSteps[activeStep].label}
          />
        </Grid>
      </Grid>

      <MobileStepper className={classes.step}
        steps={maxSteps}
        position="static"
        // variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {/* Next */}
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            {/* Back */}
          </Button>
        }
      />
    </div>
  );
}
