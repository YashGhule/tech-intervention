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

export default function List6Panel6() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        Following are the steps to be followed for choosing the ULIP plan:
      </ListItem>
      {/* <Divider /> */}
      <ListItem >
        1. Claim Settlement Ratio
        Before buying the Top ULIP plan in India that suits you, check the claim settlement ratio of the insurance provider. The higher the ratio, the better the plan.
      </ListItem>
      <ListItem >
        2. Performance of ULIP Funds
        Before buying the ULIP Life insurance, you must assess the performance of the ULIP funds over a long time. ULIP equity funds offer high returns along with high risks, while debt funds offer lower returns at lower risks. Hence, the performance of different ULIP plans must be compared with its alternatives for making the right decision.
      </ListItem>
      {/* <Divider light /> */}
      <ListItem >
        3. Solvency Ratio
        The solvency ratio of any insurance provider provides the ratio of whether the insurance provider will honour its claims in the future. You must opt for an insurance company that offers high solvency ratio.
      </ListItem>
      <ListItem >
        4. Investment Strategies Offered
        Many ULIP plans offer investment strategies like Systematic Transfer Plans and investing based on the lifecycle. One must select the ULIP policy that offers the strategies suited for you.
      </ListItem>
      <ListItem >
        5. Charges
        It would help if you took the charges of the ULIP before taking the final decision. You must choose the ULIP plan in India that is available at affordable charges. There are few typical charges associated with ULIP plans like switching charges, mortality charges, fund management fees, policy administration charges, and discontinued premium charges.
      </ListItem>
    </List>
  );
}