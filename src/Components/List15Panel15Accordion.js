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

export default function List15Panel15() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        Unit Linked Insurance Policy
        An insurance plan which gives benefits both of life insurance as well as investing in different funds consisting of different investment instruments like stocks, money market securities or government bonds. However, the returns are dependent on market performance and the policyholder has to bear the investment risk.
      </ListItem>
      {/* <Divider /> */}
      <ListItem >
        Date Of Commencement Of Risk
        It is the date which represents the beginning of the Life Cover.
      </ListItem>
      <ListItem >
        Grace Period
        A specified period after a premium payment is due, in which the policyholder may make such payment, and during which the protection of the policy continues to hold.
        A period during which the Policyholder can still make the overdue Premium Payment without attracting any interest. Grace period is of 30 days from the original due date as stipulated by regulation and the benefits under the Policy remain unaltered during this period.
      </ListItem>
      {/* <Divider light /> */}
      <ListItem >
        Investment Fund Allocation Instruction
        It is the instruction given by the Policyholder to allocate his premiums towards the purchase of units in the desired Investment Fund.
      </ListItem>
      <ListItem >
        Investment Risk/market Fluctuations
        The performance of the Investment Fund depends on the financial markets and may increase or decrease. The risk of such fluctuations or uncertainties due to market related factors is called as the Investment Risk.
      </ListItem>
      <ListItem >
        Lock In Period
        It refers to the number of years for which the funds need to be kept invested in the policy and cannot be withdrawn.
      </ListItem>
    </List>
  );
}