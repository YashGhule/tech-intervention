import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  body: {
    fontFamily: 'SFPro',
    fontWeight: '500',
    fontSize: 14,
  },
}));

export default function List1Panel1() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        <Typography className={classes.body}>
          <b>{'\u2022'} Life Cover:</b> ULIP plans invest in life cover, which provides a high return in case of the policyholder’s death.
        </Typography>
      </ListItem>
      {/* <Divider /> */}
      <ListItem >
        <Typography className={classes.body}>
          <b>{'\u2022'} Liquidity:</b> Partial withdrawal is allowed in ULIP policy if you need it.
        </Typography>
      </ListItem>
      <ListItem >
        <Typography className={classes.body}>
          <b>{'\u2022'} Long-Term Funds:</b> The longer you invest in your ULIP scheme, the greater are your chances of receiving high returns.
        </Typography>
      </ListItem>
      {/* <Divider light /> */}
      <ListItem >
        <Typography className={classes.body}>
          <b>{'\u2022'} Regular Savings:</b> With the help of ULIP investment, you can save in a disciplined manner.
        </Typography>
      </ListItem>
    </List >
  );
}