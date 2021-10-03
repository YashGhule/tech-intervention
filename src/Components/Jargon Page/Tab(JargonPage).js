import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { List, ListItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="A" {...a11yProps(0)} />
          <Tab label="B" {...a11yProps(1)} />
          <Tab label="C" {...a11yProps(2)} />
          <Tab label="D" {...a11yProps(3)} />
          <Tab label="E" {...a11yProps(4)} />
          <Tab label="F" {...a11yProps(5)} />
          <Tab label="G" {...a11yProps(6)} />
          <Tab label="H" {...a11yProps(7)} />
          <Tab label="I" {...a11yProps(8)} />
          <Tab label="J" {...a11yProps(9)} disabled={true} />
          <Tab label="K" {...a11yProps(10)} disabled={true} />
          <Tab label="L" {...a11yProps(11)} />
          <Tab label="M" {...a11yProps(12)} />
          <Tab label="N" {...a11yProps(13)} />
          <Tab label="O" {...a11yProps(14)} />
          <Tab label="P" {...a11yProps(15)} />
          <Tab label="Q" {...a11yProps(16)} disabled={true} />
          <Tab label="R" {...a11yProps(17)} />
          <Tab label="S" {...a11yProps(18)} />
          <Tab label="T" {...a11yProps(19)} />
          <Tab label="U" {...a11yProps(20)} />
          <Tab label="V" {...a11yProps(21)} />
          <Tab label="W" {...a11yProps(22)} />
          <Tab label="X" {...a11yProps(23)} disabled={true} />
          <Tab label="Y" {...a11yProps(24)} disabled={true} />
          <Tab label="Z" {...a11yProps(25)} disabled={true} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Accidental Death Benefit
                </h4>
                Under this benefit, a sum of money is paid over and above the death benefit in the event of death caused due to an accident.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Additional Riders
                </h4>
                Add-on riders like severe sickness or accidental death coverage may incur an additional premium when choosing additional benefits.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Adverse Selection
                </h4>
                The tendency of persons exposed a higher risk to seek more insurance coverage than those at a lower risk.Insurers react either by charging higher premiums or not insuring at all, as in the case of floods.Adverse selection concentrates risk instead of spreading it.The fact is that the insurance works best when risk is shared among a large number of the policyholders.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Age
                </h4>
                Age is the key criterion in determining the premium you pay. However, some saving plans are age agnostic. An individual is less prone to an age-related ailment and untimely demise at a young age; therefore, the premiums are lower.

                When you start saving at an early age, you can enrol in a solid saving plan at a discounted premium rate. As you get older, the insurer raises your premiums since the chances of filing a claim due to death rise.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Age limits
                </h4>
                The tendency of persons exposed a higher risk to seek more insurance coverage than those at a lower risk.Insurers react either by charging higher premiums or not insuring at all, as in the case of floods.Adverse selection concentrates risk instead of spreading it.The fact is that the insurance works best when risk is shared among a large number of the policyholders.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={1}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Base Policy/basic Plan
                </h4>
                The basic plan is the insurance product on which the rider is attached is called Base Plan.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Bear Market
                </h4>
                It is a period of negative sentiment in market leading to a fall in the prices of stock markets.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Beneficiary
                </h4>
                This is the amount added on to the basic sum assured under a with-profit life insurance policy.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Binding Receipt
                </h4>
                A temporary receipt given for a premium payment accompanying the application for insurance. If the policy is approved, this binds the company to make the policy effective from the date of the binding receipt.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Bonus
                </h4>
                Bonus is a surplus return on investment of participating policies declared as a percentage of Sum Assured and is shared with the policyholder in the form of bonus payout at the end of the financial year. The bonus rates are decided at the discretion of the insurance company and when declared, it becomes guaranteed. For bonus details pertaining to your policy, please refer the policy document.

                Life Insurance companies share the profits from the participating fund with the Policyholder in the form of bonuses which are usually declared at the end of every financial year and can be classified as cash bonus, reversionary bonus and terminal bonus. It is only available on participating or with profits Insurance Policy.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={2}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Cash Bonus
                </h4>
                Cash Bonuses are paid in the same year in which the bonus is declared, thus giving the Policyholder cash payouts year after year as opposed to a single payout at the end of policy.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Claim Amount
                </h4>
                It is the amount payable by the insurer to the insured, or the assignee/ beneficiary under a policy on a claim arising.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Compound Reversionary Bonus
                </h4>
                Compound Reversionary Bonuses are declared as a percentage rate of Sum Assured & the Reversionary Bonuses already declared. For example, if the policy is of `10 lakhs with the bonus declared last year of `1,00,000 and the rate of bonus being 10%, then the bonus amount this year would be `1,10,000 (as opposed to `1,00,000 under Simple Reversionary Bonus). However, the amount is paid only on maturity or at the time of claim as it is Reversionary Bonus.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Concealment
                </h4>
                Deliberately hiding a material fact from the Insurer is referred to as concealment. Concealment may lead to termination of promised benefits.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Corporate Bonds
                </h4>
                It is a debt security issued by a company to borrow money from the public. Corporate bonds are less risky financial assets as compared to equities and provide a better return as compared to Government Bonds. However, there is a risk of default attached to corporate bonds in case the company goes bankrupt.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={3}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Date Of Commencement Of Risk
                </h4>
                It is the date which represents the beginning of Life Cover.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Dating Back
                </h4>
                Dating Back or Back Dating is an option to the life assured to get the advantage of lower age wherein the policy is commenced from a date earlier than the actual date of signing of proposal form. However, back dating is limited to one year.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Days of Grace
                </h4>
                Policyholders are expected to pay regular premium on due dates. A period of 15-30 days from the due date is allowed as grace to make payment of premium. This duration is known as days of grace.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Death Benefit
                </h4>
                The payment made to a beneficiary upon the death of the insured person.

                Whenever an unfortunate event happens, there is both emotional as well as financial loss. An insurance company helps you replace the financial/monetary loss through the Death Benefit, which helps maintain your family’s financial stability. This benefit includes both a guaranteed sum of money called as Sum Assured on Death and also the Accrued Bonuses, if applicable.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Declining
                </h4>
                The process of the insurer refusing to insure an individual after careful evaluation of the application for insurance and any other risk factors.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={4}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Endowment plan
                </h4>
                An insurance policy which provides a lump sum amount on a fixed date, either maturity of the policy or upon the death of the life insured, whichever occurs earlier.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Endowment Policy
                </h4>
                The insured amount is payable either at the end of specified number of years or upon the death of the insured person, whichever is earlier. The assured has to pay an annual premium which is determined on the basis of the assured's age at entry and the term of the policy.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  EPDB
                </h4>
                Extended Permanent Disability Benefit
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Equities
                </h4>
                It is one of the principal asset classes having high potential of returns as well as high risk. It represents ownership interest in the company and therefore the returns are dependent on the company’s performance.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Exclusions
                </h4>
                Special circumstances stated in the policy bond under which no benefits will be provided to the beneficiaries.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={5}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Female lives
                </h4>
                Category I: Women with income earned by virtue of their employment in any reputed organisation or institution eligible for Non-Medical Special Schemes. Valid for professionals such as Medicine, Law, Charted Accountancy etc. and lady career agents of LIC.
                Category II: Women with unearned income attracting payment on income tax or women holding sizeable personal properties/ investments yielding income attracting assessment for income tax.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Financial Advisor/agent
                </h4>
                The insured amount is payable either at the end of specified number of years or upon the death of the insured person, whichever is earlier. The assured has to pay an annual premium which is determined on the basis of the assured's age at entry and the term of the policy.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  First Class Life
                </h4>
                An Individual is categorised as First Class Life if he/ she is eligible to have insurance coverage at normal rates of premium.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  First Unpaid Premium (FUP)
                </h4>
                First unpaid premium refers to the first default in paying premium by the policyholder. On payment of the due premium, a receipt is issued and this receipt indicates the date of next due. If this due premium is not paid, then that date becomes the date of FUP.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Franchise insurance
                </h4>
                A form of insurance in which individual policies are issued to the employees of a common employer or the members of an association. This is done under an arrangement by which the employer or association agrees to collect the premium and remit them to the insurer.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={6}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Government Bonds And Securities
                </h4>
                These are the least risky financial instruments as they are issued by the government to borrow money from the public. The rates of interest and time period are predetermined in Government Bonds.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Grace Period
                </h4>
                A specified period after a premium payment is due, in which the policyholder may make such payment, and during which the protection of the policy continues

                A period during which the Policyholder can still make the overdue Premium Payment without attracting any interest. Grace period is of 30 days from the original due date as stipulated by regulation and the benefits under the Policy remain unaltered during this period.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Graded Commission Scale
                </h4>
                A commission scale providing for payment of high first-year commission and lower renewal commissions.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Gross Premium
                </h4>
                The total premium paid by the policyholder.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Gross Rate
                </h4>
                The sum of the pure premium and a loading element.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={7}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Hazard
                </h4>
                Any situation which increases the probability of a loss is known as a Hazard.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={8}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Immediate Annuity
                </h4>
                An annuity providing for payment to the beneficiary immediately.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Income payout
                </h4>
                The money paid to the policyholder as regular income at the end of the policy term.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Insurability
                </h4>
                Insurability refers to all conditions pertaining to individuals seeking insurance; that affect their health, susceptibility to injury and life expectancy; an individual's risk profile.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Insurable Interest
                </h4>
                A condition in which the person applying for insurance and the person who is to receive the policy benefit will suffer an emotional or financial loss, if any unforeseen event occurs. Without insurable interest, an insurance contract is invalid.

                It means that the Policyholder or the owner must have some emotional or financial loss if an unfortunate event happens to the Insured to make the insurance contract valid.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Insurance Company (Insurer)
                </h4>
                It is the company that collects premiums and provides compensation for financial loss incurred due to an unfortunate event.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={9}>

      </TabPanel>


      <TabPanel value={value} index={10}>

      </TabPanel>


      <TabPanel value={value} index={11}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Lapsed Policy
                </h4>
                This refers to a policy which has terminated and is no longer in force due to non-payment of the premium due.

                Lapsed is a policy status under which all benefits of the policy stops due to non-payment of the premium due within the grace period. In case of a lapsed policy, policy holder has an option to either reinstate the policy within 2 years and restore the benefits or surrender the policy and receive the Surrender Value, if any.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Large Cap
                </h4>
                Large Cap is a short form for Large Market Capitalization and as a thumb rule includes companies having a market capitalization of ₹10,000 crore or more. Such firms are less risky to invest as they have strong market presence and are well established.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Last Birth Day
                </h4>
                Age at last Birthday
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Lien
                </h4>
                In some cases, extra risk is expected to decrease over a period of time. In such cases proposal is considered and accepted with lien. Lien operates throughout the period, on a decreasing basis. In the event of death, during the lien period the full sum assured is not payable. Eg: If 25% decreasing lien is imposed for 5 years. It is understood that in first year risk cover (sum assured payable) is only up to 75%,second year- 80%, third year-85%, fourth year 90%, fifth year 95%, and from sixth year onwards lien is not operative.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Life Assured
                </h4>
                Life Assured refers to the person whose life is being insured.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={12}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Market Capitalization
                </h4>
                It is the worth of the whole company based on factors like past performance, future prospects and market sentiments of the company. It is calculated by using the simple formula:
                Market Capitalization= Market Price of Share X Number of shares outstanding
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Maturity
                </h4>
                The insured amount is payable either at the end of specified number of years or upon the death of the insured person, whichever is earlier. The assured has to pay an annual premium which is determined on the basis of the assured's age at entry and the term of the policy.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Maturity Benefit
                </h4>
                An Individual is categorised as First Class Life if he/ she is eligible to have insurance coverage at normal rates of premium.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Maturity Claim
                </h4>
                The Payment made to the policyholder at the end of the chosen term of the policy is known as Maturity Claim.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Maturity Date
                </h4>
                It represents the ending (end of term) for an Insurance Plan. On maturity date, the Policyholder will receive the benefits on maturity depending on the plan chosen, and the life cover terminates.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={13}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  NAV
                </h4>
                It is the value of a unit of an Investment Fund and is calculated by dividing the total assets of the fund by the number of units. Formula to calculate NAV= Total Assets – Total Liabilities Number of Outstanding Units in the fund.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Near Birth Day
                </h4>
                Age on nearest birthday
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Nomination
                </h4>
                An act by which the policyholder authorises another person to receive the policy monies. The person so-authorised is called Nominee.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Nominee/Beneficiary
                </h4>
                Nominee is the person who is nominated to receive the amount under a policy and to give a valid discharge to the insurer on settlement of claim under a life insurance policy.

                The person who is nominated to receive the benefits of the policy, in the event of Life Insured’s unfortunate death before maturity date is called the Nominee.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Non-participating policy
                </h4>
                An insurance plan under which all the benefits are guaranteed at the beginning, regardless of the actual investment performance.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={14}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Occupational Hazards
                </h4>
                Occupations which expose the insured to greater than normal physical danger by the very nature of the work in which the insured is engaged, and the varying periods of absence from the occupation, due to the disability, that can be expected.

                Occupations where the Life Insured is faced with greater than normal danger due to the nature of work. For example: If a person is working in a coal mine there is more risk to his life as compared to a person working in office.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Occupational Title
                </h4>
                Some of the insurance companies may charge a higher premium for certain professions or types of work. Therefore, upon signing the insurance, it's critical to provide the insurer with accurate information about your job and income.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={15}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Paid Up
                </h4>
                If the Policyholder has paid a certain number of prescribed annual premiums and is unable to pay the future premiums, then the policy is converted into paid up status. This takes away the obligation to make future premium payments however the benefits of the policy are reduced. The benefits are typically reduced to the extent of premiums paid to premiums payable.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Paid-up Insurance
                </h4>
                Insurance policy on which all required premiums have been paid.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Paidup Value
                </h4>
                Paidup value is the reduced amount of sum assured, paid by the insurer in case of discontinuation of the payment of premiums, after paying the full premiums for the first three years.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Paramedical Examination
                </h4>
                Physical examination of an applicant by a trained person other than a physician.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Partial Withdrawal
                </h4>
                It is a facility that allows the Policyholder to withdraw a part of his funds before the end of the Policy Term. This is usually recommended to be used only in case of an emergency as it may affect the final Investment Value.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={16}>

      </TabPanel>


      <TabPanel value={value} index={17}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Rebating
                </h4>
                Giving a consideration, usually all or part of the commission, to the prospect or insured as an inducement to buy or renew a policy. Rebating is officially prohibited, as it takes away from the earning of the agent.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Reduced Paid-up Insurance
                </h4>
                A form of insurance available as a non-forfeiture option. It provides for continuation of the original insurance plan, but at a reduced amount.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Regular Premium Payment Term
                </h4>
                Regular Premium Payment Term is suitable if Policyholder wishes to invest and accumulate money for more number of years, as premiums are to be paid for the entire Policy Term. Regular Premium Payment Term plans may charge lower premium for same level of benefits as a Unit Linked or Limited Premium Payment Term plan.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Renewable Term Insurance
                </h4>
                Term insurance which can be renewed at the end of the term, at the option of the policyholder and without evidence of insurability, for a limited number of successive terms. The rates increase at each renewal as the age of the insured goes up and apparent risk increases.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Renewal Premium
                </h4>
                Premium which is payable after the 1st years premium to ensure the continuation of the benefits of the policy.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={18}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Salary Saving Scheme
                </h4>
                This scheme provides for payment of premiums by money deduction from the salary of the employees by the employer.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Settlement Options
                </h4>
                The several ways, other than immediate payment in cash, which a policyholder or beneficiary may choose to have policy benefits paid.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Settlement Period (Extendable Investment Period)
                </h4>
                The period to which the investment period can be extended and the Policyholder can stay invested in the funds even after the end of policy term. At any time during the settlement period Policyholder can withdraw the fund value as on that day. The company only charges for fund management during this period.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Simple Reversionary Bonus
                </h4>
                Simple Reversionary Bonus is declared as a percentage rate of Sum Assured. For example, if the policy is of `10 lakhs and the bonus declared for the year is `20 per 1000 Sum Assured then bonus amount is `20,000. However, this amount is paid only on maturity or at the time of claim as it is a Reversionary Bonus.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Single Premium
                </h4>
                It means that premium needs to be paid only once i.e. at the beginning of your policy.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={19}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Target Pension
                </h4>
                This is the amount of pension which one wishes to receive under a pension policy.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Terminal Bonus
                </h4>
                Terminal Bonuses are declared at the time of maturity or claim, from the residual profits available in the participating fund.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Term Insurance
                </h4>
                A basic insurance plan which provides a lump sum amount to the family of the person who is insured in case of his/her unfortunate death.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Term Insurance Rider
                </h4>
                An endorsement or attachment to a life insurance policy that provides additional term coverage for only a specified, limited period. If the insured dies during this time, the designated beneficiary can receive death benefit proceeds.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Term Life Insurance
                </h4>
                A form of life insurance which provides coverage for a specified period of time and does not build cash value.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={20}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Underwriting
                </h4>
                The process of evaluating risks for insurance and determining in what amounts and on what terms the insurance company will accept the risk.

                Before the issuance of an Insurance Policy, the Life to be Insured is evaluated on different parameters like health status, financial standing, age, occupation etc. to determine whether he can be issued the policy and also decide the amount of money that has to be paid as the Insurance premium. This process is referred to as underwriting.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Unearned Premium
                </h4>
                The portion of a premium that a company has collected but has yet to earn because the policy still has an unexpired time to run.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Unenforceable Contract
                </h4>
                The contract, though a valid one cannot be enforced in a court of law because of lack of some evidential features.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Uninsurable Risk
                </h4>
                That which is not acceptable for insurance due to excessive risk.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Unit
                </h4>
                Unit is a part or portion of the Investment Fund has been purchased from the premiums paid.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={21}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Valuation Date
                </h4>
                It is the date on which unit price of the investment fund is determined.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Vesting Bonus
                </h4>
                It is the Bonus, which the insurer declares after evaluating its assets and liabilities, and that is added to the sum assured under a policy.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Vesting Date
                </h4>
                This is the date from which the life assured i.e., child becomes the absolute owner of the policy.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Voidable Contract
                </h4>
                A contract, which is valid until it is treated as void by the aggrieved party, is a voidable contract. Usually in such an event, the insurer would be the aggrieved party and has the option to repudiate liability.
              </Grid>
            </ListItem>
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Void Contract
                </h4>
                A contract obtained by fraud is a void contract. It is not a contract at all. Under this there cannot be any action as no rights or obligations are cast on the parties to the contract.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={22}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <Grid container spacing={3} >
            <ListItem >
              <Grid item xs={12} sm={12} md={12}>
                <h4>
                  Whole Life Plan
                </h4>
                A life insurance plan which provides a cover for your entire life time. Such plans are used to accumulate and pass on the wealth from one generation to another as legacy in a tax efficient manner.
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </TabPanel>


      <TabPanel value={value} index={23}>

      </TabPanel>


      <TabPanel value={value} index={24}>

      </TabPanel>


      <TabPanel value={value} index={25}>

      </TabPanel>
    </div>
  );
}
