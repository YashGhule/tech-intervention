import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List, ListItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        textAlign: 'left',
        marginLeft: '180px',
        marginTop: '30px',
        marginBottom: '30px',
    },
    acc: {
        backgroundColor: '#DCE7F1',
    },
    heading: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 16,
        flexBasis: '90%',
        flexShrink: 0,
        marginLeft: '20px',
        color: '#00529C',
    },
    options: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 13,
        flexBasis: '50%',
        flexShrink: 0,
        marginLeft: '-180px',
        color: '#00529C',
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function ControlledAccordions3() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={3}>
                    <Accordion className={classes.acc} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "#00529C", marginRight: "20px" }} />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Popular Link</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Typography>
                                <List component="nav" className={classes.root} aria-label="mailbox folders">
                                    <ListItem className={classes.options}>
                                        Premium Payment Options
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Online Insurance Plans
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Term Insurance Calculator
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Customer Login
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Fund Performance
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Be Smart
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Insurance Calculators
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Sitemap
                                    </ListItem>
                                </List>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.acc} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "#00529C", marginRight: "20px" }} />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Most Read</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <List component="nav" className={classes.root} aria-label="mailbox folders">
                                    <ListItem className={classes.options}>
                                        FAQs
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Glossary
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        What is Tax Planning and Why You Need it?
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        1 Crore Term Insurance
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Demystifying Traditional Insurance Plans
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        How to Get Better Returns on ULIP
                                    </ListItem>
                                </List>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.acc} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "#00529C", marginRight: "20px" }} />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Life Insurance</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <List component="nav" className={classes.root} aria-label="mailbox folders">
                                    <ListItem className={classes.options}>
                                        Term Insurance
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Savings Plans
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Investment Plans
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Health Insurance Plans
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Group Plans
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Riders
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Yoddha Plans
                                    </ListItem>
                                </List>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={3}>
                    <Accordion className={classes.acc} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "#00529C", marginRight: "20px" }} />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Customer Service</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <List component="nav" className={classes.root} aria-label="mailbox folders">
                                    <ListItem className={classes.options}>
                                        Login
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Renew Your Policy
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Check Unclaimed Amount
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Download Statements
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Register for E-NACH
                                    </ListItem>
                                </List>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.acc} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "#00529C", marginRight: "20px" }} />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>About Us</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <List component="nav" className={classes.root} aria-label="mailbox folders">
                                    <ListItem className={classes.options}>
                                        About Bharti
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        About AXA
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Board of Directors
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Leadership Team
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Media Center
                                    </ListItem>
                                </List>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.acc} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "#00529C", marginRight: "20px" }} />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Claim Center</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <List component="nav" className={classes.root} aria-label="mailbox folders">
                                    <ListItem className={classes.options}>
                                        Know the Claim Process
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Track Your Claims
                                    </ListItem>
                                </List>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={3}>
                    <Accordion className={classes.acc} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "#00529C", marginRight: "20px" }} />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Join Bharti AXA Life</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <List component="nav" className={classes.root} aria-label="mailbox folders">
                                    <ListItem className={classes.options}>
                                        Careers
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        For Employees
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Become an Agent
                                    </ListItem>
                                </List>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.acc} expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "#00529C", marginRight: "20px" }} />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Key Links</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <List component="nav" className={classes.root} aria-label="mailbox folders">
                                    <ListItem className={classes.options}>
                                        Insurance Ombudsman
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Corporate Agents and Brokers
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Do Not Call
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Grievance Redressal
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Life Insurance Council
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Withdrawn Products
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Insurance Marketing Firm
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Terms of Usage
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Public Disclosures
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Cookie Policy
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        IRDAI
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Unclaimed Amount
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Fraud Control Policy
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Blacklisted Advisors
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Data Privacy Policy
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Policy for Protection of Interests of Policyholders
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Nomination and Remuneration Policy
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Related Party Transaction Policy
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Whistleblower Policy
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Underwriting Philosophy Disability and Mental Illness
                                    </ListItem>
                                    <ListItem className={classes.options}>
                                        Underwriting Philosophy HIV/Aids
                                    </ListItem>
                                </List>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </div >
    );
}