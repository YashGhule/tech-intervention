import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function List8Panel8() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        Before investing in ULIPs, consider the following crucial factors:
      </ListItem>
      {/* <Divider /> */}
      <ListItem >
        Individual Financial Objectives:
        A ULIP is one of the solutions available if your financial aim is to build life cover with wealth and save money for your retirement.
      </ListItem>
      <ListItem >
        Risk Factor:
        Because ULIP investments are less diversified than Equity Linked Savings Scheme (ELSS), the risk of ULIP is likely to be higher than that of ELSS.
      </ListItem>
      {/* <Divider light /> */}
      <ListItem >
        Investment Horizon:
        ULIPs have a 5-year lock-in term. If you give up a ULIP within the first 3 years, your insurance coverage will expire instantly. The surrender value, on the other hand, can only be reimbursed after three years.
      </ListItem>
      <ListItem >
        Compare Different Offerings by ULIP:
        The next step is to analyse the ULIP offerings by various insurance providers once you've set your financial objective and the type of ULIP that will assist you in achieving it. Consider a comparison of hidden costs, premium payments, and ULIP efficiency, among other things.
        Furthermore, look into the kind of funds that the ULIP invests in to see what kind of returns you may expect from your investment.
      </ListItem>
    </List>
  );
}