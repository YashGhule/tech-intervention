import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions1() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Popular Link</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
              <ListItem >
                Premium Payment Options
              </ListItem>
              <ListItem >
                Online Insurance Plans
              </ListItem>
              <ListItem >
                Term Insurance Calculator
              </ListItem>
              <ListItem >
                Customer Login
              </ListItem>
              <ListItem >
                Fund Performance
              </ListItem>
              <ListItem >
                Be Smart
              </ListItem>
              <ListItem >
                Insurance Calculators
              </ListItem>
              <ListItem >
                Sitemap
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Most Read</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
              <ListItem >
                FAQs
              </ListItem>
              <ListItem >
                Glossary
              </ListItem>
              <ListItem >
                What is Tax Planning and Why You Need it?
              </ListItem>
              <ListItem >
                1 Crore Term Insurance
              </ListItem>
              <ListItem >
                Demystifying Traditional Insurance Plans
              </ListItem>
              <ListItem >
                How to Get Better Returns on ULIP
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Life Insurance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
              <ListItem >
                Term Insurance
              </ListItem>
              <ListItem >
                Savings Plans
              </ListItem>
              <ListItem >
                Investment Plans
              </ListItem>
              <ListItem >
                Health Insurance Plans
              </ListItem>
              <ListItem >
                Group Plans
              </ListItem>
              <ListItem >
                Riders
              </ListItem>
              <ListItem >
                Yoddha Plans
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Customer Service</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
              <ListItem >
                Login
              </ListItem>
              <ListItem >
                Renew Your Policy
              </ListItem>
              <ListItem >
                Check Unclaimed Amount
              </ListItem>
              <ListItem >
                Download Statements
              </ListItem>
              <ListItem >
                Register for E-NACH
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>About Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
              <ListItem >
                About Bharti
              </ListItem>
              <ListItem >
                About AXA
              </ListItem>
              <ListItem >
                Board of Directors
              </ListItem>
              <ListItem >
                Leadership Team
              </ListItem>
              <ListItem >
                Media Center
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Claim Center</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
              <ListItem >
                Know the Claim Process
              </ListItem>
              <ListItem >
                Track Your Claims
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Join Bharti AXA Life</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
              <ListItem >
                Careers
              </ListItem>
              <ListItem >
                For Employees
              </ListItem>
              <ListItem >
                Become an Agent
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Key Links</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
              <ListItem >
                Insurance Ombudsman
              </ListItem>
              <ListItem >
                Corporate Agents and Brokers
              </ListItem>
              <ListItem >
                Do Not Call
              </ListItem>
              <ListItem >
                Grievance Redressal
              </ListItem>
              <ListItem >
                Life Insurance Council
              </ListItem>
              <ListItem >
                Withdrawn Products
              </ListItem>
              <ListItem >
                Insurance Marketing Firm
              </ListItem>
              <ListItem >
                Terms of Usage
              </ListItem>
              <ListItem >
                Public Disclosures
              </ListItem>
              <ListItem >
                Cookie Policy
              </ListItem>
              <ListItem >
                IRDAI
              </ListItem>
              <ListItem >
                Unclaimed Amount
              </ListItem>
              <ListItem >
                Fraud Control Policy
              </ListItem>
              <ListItem >
                Blacklisted Advisors
              </ListItem>
              <ListItem >
                Data Privacy Policy
              </ListItem>
              <ListItem >
                Policy for Protection of Interests of Policyholders
              </ListItem>
              <ListItem >
                Nomination and Remuneration Policy
              </ListItem>
              <ListItem >
                Related Party Transaction Policy
              </ListItem>
              <ListItem >
                Whistleblower Policy
              </ListItem>
              <ListItem >
                Underwriting Philosophy Disability and Mental Illness
              </ListItem>
              <ListItem >
                Underwriting Philosophy HIV/Aids
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}