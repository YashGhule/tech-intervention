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

export default function List7Panel7() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        <b>{'\u2022'} Income Tax Benefits:</b>
      </ListItem >
      <ListItem >
        Many people are unaware that the premiums paid for ULIPs are eligible for a tax deduction under Section 80C. This coverage has a twofold benefit you can take advantage of.
      </ListItem>
      {/* <Divider /> */}
      <ListItem >
        <b>{'\u2022'} Life Cover:</b>
      </ListItem>
      <ListItem>
        Basically, ULIPs provide life insurance as well as investment opportunities. It provides security to a taxpayer's family in an emergency, such as the taxpayer's untimely demise.
      </ListItem>
      <ListItem >
        <b>{'\u2022'} Finance Long-Term Objectives:</b>
      </ListItem>
      <ListItem>
        These are a suitable investment option if you have long-term goals like buying a house, a new car, and so on because the money is compounded. As a result, net returns are higher in general. This is true even if you choose to quit after the 5-year lock-in term instead of not investing the money and keeping it in a savings account or a fixed-income investment. However, in the case of ULIPs, it is to keep the policy active for a longer period to get the most out of it.
      </ListItem>
      {/* <Divider light /> */}
      <ListItem >
        <b>{'\u2022'} Regular Savings:</b>
      </ListItem>
      <ListItem>
        With the help of ULIP investment, you can save in a disciplined manner.
      </ListItem>
    </List>
  );
}