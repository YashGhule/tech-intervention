import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function List1Panel1() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        Life Cover: ULIP plans invest in life cover, which provides a high return in case of the policyholder’s death.
      </ListItem>
      {/* <Divider /> */}
      <ListItem >
        Liquidity: Partial withdrawal is allowed in ULIP policy if you need it.
      </ListItem>
      <ListItem >
        Long-Term Funds: The longer you invest in your ULIP scheme, the greater are your chances of receiving high returns.
      </ListItem>
      {/* <Divider light /> */}
      <ListItem >
        Regular Savings: With the help of ULIP investment, you can save in a disciplined manner.
      </ListItem>
    </List>
  );
}