import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import YogeshSharma from '../../Assets/Yogesh Sharma.svg';
import SunainaMehta from '../../Assets/Sunaina Mehta.svg';
import AnilKumar from '../../Assets/Anil Kumar.svg';

const tutorialSteps = [
  {
    label: 'Stories',
    imgPath: YogeshSharma,
    Quote: 'I was worried for my family protection so I have decided to purchase Term Plan, I connected with a Bharti AXA associate, got the best experience, purchased the plan.',
    Name: 'YOGESH SHARMA',
    LocationandTime: 'DELHI | MAY 12, 2021',

  },
  {
    label: 'Stories',
    imgPath: SunainaMehta,
    Quote: 'Website journey was very simple and user friendly, Adviser has advised very nicely in simple manner. Advise to purchase a dual benefit plan (Shinning star)was good.',
    Name: 'SUNAINA MEHTA',
    LocationandTime: 'BANGALORE  | May 12, 2021',
  },
  {
    label: 'Stories',
    imgPath: AnilKumar,
    Quote: 'I was searching for term plan where I got best in Bharti AXA with income + premium in budget. Good Support was given by the associate in guiding and purchasing for the plan.',
    Name: 'ANIL KUMAR',
    LocationandTime: 'CHANDIGARH  | May 12, 2021',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    // display: 'inline-block',
    backgroundColor: '#FFDEE0',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(0),
    backgroundColor: theme.palette.background.default,
    backgroundColor: '#FFDEE0',
  },
  body: {
    fontSize: 10,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
    backgroundColor: '#FFDEE0',
  },
  step: {
    backgroundColor: '#FFDEE0',
  },
  img: {
    height: 150,
    maxWidth: 150,
    overflow: 'hidden',
    display: 'center',
    width: '100%',
  },
}));

export default function TextMobileStepper1() {
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

      <Grid container spacing={1} >
        <Grid item xs={12} sm={12} md={12}>
          <img
            className={classes.img}
            src={tutorialSteps[activeStep].imgPath}
            alt={tutorialSteps[activeStep].label}
          />
        </Grid>
      </Grid>

      <Paper square elevation={0} className={classes.body}>
        <Grid container spacing={1} >
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left', marginBottom: '8px' }}>
              {tutorialSteps[activeStep].Quote}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ fontFamily: 'SFPro', fontSize: '12px', fontWeight: 'bold', textAlign: 'left' }}>
              {tutorialSteps[activeStep].Name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ fontFamily: 'SFPro', fontSize: '12px', textAlign: 'left' }}>
              {tutorialSteps[activeStep].LocationandTime}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <MobileStepper className={classes.step}
        steps={maxSteps}
        position="static"
        variant="dots"
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
    </div >
  );
}
