import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function List2Panel2() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        Unit linked life insurance plans have a number of advantages that make them an effective investment vehicle. Here are a few reasons why ULIPs is of utter importance when one is putting together an investment portfolio.
      </ListItem>
      {/* <Divider /> */}
      <ListItem >
        1. Flexible Investment choices
        By investing the premium in equities, debt, or other financial tools, you can opt between low, medium, and high-risk investment alternatives with the best ULIP plans. Investor can make their own decision based on their financial goals, risk appetite, and market expertise.
      </ListItem>
      <ListItem >
        2. Absolute Clarity
        All specifics of the investment, including charges, the estimated rate of return, fund valuation, and other information, are provided to investors before purchase. Besides, investors are continuously notified of Net Asset Value (NAV), quarterly reports and annual account statements about the investment status.
      </ListItem>
      {/* <Divider light /> */}
      <ListItem >
        3. Savings and Tax-Advantages
        ULIP allow investors to participate in market-linked gains without having to trade stocks. Furthermore, most ULIPs feature a 5-year lock-in period during which the investor can partially exit the plan if necessary for them.
        Furthermore, under section 80C of the Income Tax Act of 1961, premiums paid toward the policy are tax-deductible. The great aspect is that, upon maturity, the returns from a ULIP are tax-free under Section 10(10D) of the Income Tax Act.
      </ListItem>
      <ListItem >
        4. Life Insurance
        ULIPs are insurance policies that provide financial security through annuity payments and life coverage. An annuity plan allows you to create an investment portfolio over time with consistent payments, which can then be used as a source of income once you retire. In the case of the life insured's demise, a life cover provides financial stability to their family.
      </ListItem>
    </List>
  );
}