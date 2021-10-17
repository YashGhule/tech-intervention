import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List1Panel1 from './List1Panel1Accordion(ULIP)';
import TextMobileStepper2 from './CarouselUnderBenefitsOfULIP(ULIPPage)';
import BasicTable from './TableUnderTopULIPLifeInsurancePlans(ULIPPage)';
import TextMobileStepper3 from './CarouselUnderULIPChargers(ULIPPage)';
import List2Panel2 from './List2Panel2Accordion(ULIP)';
import List4Panel4 from './List4Panel4Accordion';
import List5Panel5 from './List5Panel5Accordion';
import List6Panel6 from './List6Panel6Accordion';
import List7Panel7 from './List7Panel7Accordion';
import List8Panel8 from './List8Panel8Accordion';
import List9Panel9 from './List9Panel9Accordion';
import List10Panel10 from './List10Panel10Accordion';
import List11Panel11 from './List11Panel11Accordion';
import List14Panel14 from './List14Panel14Accordion';
import List15Panel15 from './List15Panel15Accordion';
import List13Panel13 from './List13Panel13Accordion';
import Grid from '@material-ui/core/Grid';
import StepstoBuyULIPOnlineinIndia from '../../Assets/Steps to Buy ULIP Online in India.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontFamily: 'SFPro',
    fontWeight: '600',
    fontSize: 17,
    flexBasis: '100%',
    flexShrink: 0,
  },
  body: {
    fontFamily: 'SFPro',
    fontWeight: '500',
    fontSize: 14,
    flexBasis: '100%',
    flexShrink: 0,
  },

  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions2() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Why Do You Need to Buy the ULIP Investment Plan?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Grid container spacing={3} >
            <Grid item xs={12} sm={12} md={12}> */}
          <Typography className={classes.body}>
            <List1Panel1 />
          </Typography>
          {/* </Grid>
          </Grid> */}
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Importance of Top ULIP Plans</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            <List2Panel2 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Benefits of ULIP</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextMobileStepper2 />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Features of ULIP </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            <List4Panel4 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Who Should Buy ULIP Plan?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            <List5Panel5 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>How to Choose the ULIP Plan?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            <List6Panel6 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Why should you Buy a Unit Link Insurance Policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            <List7Panel7 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Key Aspects to Consider as an Investor in ULIP</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            <List8Panel8 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Top ULIP Life Insurance Plans </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3} >
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.body}>
                <List9Panel9 />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <BasicTable />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>How to Invest Long Term with ULIP Lock-In Period?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            <List10Panel10 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>How to Calculate ULIP Plan Returns?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            <List11Panel11 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>ULIP Charges</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3} >
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.body}>
                There are fees associated with ULIPs, which can be broken down into several categories. The following are the ones you should be aware of.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextMobileStepper3 />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Steps to Buy ULIP Online in India</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            ULIP plans, like any other life insurance product, can be acquired online quickly and easily. So, let's have a look at how to buy ULIP plan online.
            <img src={StepstoBuyULIPOnlineinIndia} className="StepstoBuyULIPOnlineinIndia" alt="StepstoBuyULIPOnlineinIndia" width="300" height="300" />
            <List13Panel13 />
            Investors can pay using a debit card, a credit card, an online wallet, or net banking to buy ULIP  policy online.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>ULIP Plan Claim Process</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            <List14Panel14 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Factors Impacting ULIP Plan Premium</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            <List15Panel15 />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
