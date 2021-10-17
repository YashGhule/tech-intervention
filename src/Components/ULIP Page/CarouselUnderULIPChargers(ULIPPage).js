import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Grid from '@material-ui/core/Grid';
import ChargesforPremiumAllocation from '../../Assets/Charges for Premium Allocation.svg';
import ChargesforPolicyAdministration from '../../Assets/Charges for Policy Administration.svg';

const tutorialSteps = [
  {
    label: 'Charges for Premium Allocation',
    imgPath: ChargesforPremiumAllocation,
    text: 'Premium allocation charges are imposed, ahead of time, on the premium paid by the investor. Medical charges and underwriting costs are examples of early expenses incurred by a corporation when providing insurance.',
  },
  {
    label: 'Charges for Policy Administration',
    imgPath: ChargesforPolicyAdministration,
    text: 'Such charges are deducted on regular basis to reimburse the insurance company for the costs of keeping a life insurance policy.',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    backgroundColor: '#FFECE8',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(0),
    backgroundColor: theme.palette.background.default,
    backgroundColor: '#FFECE8',
  },
  body: {
    fontSize: 10,
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
    backgroundColor: '#FFECE8',
  },
  step: {
    backgroundColor: '#FFECE8',
  },
  img: {
    height: 150,
    width: '100%',
    overflow: 'hidden',
    display: 'block',
    // width: '100%',
  },
}));

export default function TextMobileStepper3() {
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