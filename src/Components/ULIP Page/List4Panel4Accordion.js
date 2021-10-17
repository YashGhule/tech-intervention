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

export default function List4Panel4() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        In a ULIP plan, the premium paid by the policyholder is invested in a fund that will collect long-term savings. This fund will be decided as per the policyholder’s choice and according to his/her estimated risks.
      </ListItem>
      <ListItem>
        The premium paid is subject to various changes like mortality changes, administrative changes, fund management changes, etc.
      </ListItem>
      <ListItem >
        Under ULIP policy, no withdrawal is allowed for five years, which is the lock-in period. After this lock-in period, one can withdraw money partially without any termination.
      </ListItem>
      <ListItem>
        <b>Following are some of the other key features that will help you to buy ULIP online and offline:</b>
      </ListItem>
      {/* <Divider /> */}
      <ListItem style={{ color: "#00529C" }}>
        <b>1. Single-Premium</b>
      </ListItem>
      <ListItem>
        In the ULIP policy plan, the policyholder must pay the entire premium amount as a lump sum at the beginning of the policy term.
      </ListItem>
      <ListItem style={{ color: "#00529C" }}>
        <b>2. Regular Premium Payment</b>
      </ListItem>
      <ListItem>
        The policyholder of a ULIP policy has to pay a pre-determined premium amount on a periodical basis, i.e., annually, semi-annually, or monthly, based on the premium payment term opted for.
      </ListItem>
      {/* <Divider light /> */}
      <ListItem style={{ color: "#00529C" }}>
        <b>3. Number of Premium Payment Years</b>
      </ListItem>
      <ListItem>
        The number of the premium payment years depends on the term of the policy that the policyholder has chosen. In most cases, the number of premium-paying years and the term of the policy are the same. However, in some policies, the insured gets the option of choosing the number of years of premium payment.
      </ListItem>
    </List>
  );
}