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

export default function List5Panel5() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        Anyone looking out for making financial investments must buy ULIP plan online for a hassle free purchase. Suppose you are looking for availing the multiple investment benefits of the market.
      </ListItem>
      {/* <Divider /> */}
      <ListItem >
        In that case, you choose one of the most popular and reliable life cover with wealth creation instruments, like the  Unit Linked Insurance Plan online in India (ULIP).
      </ListItem>
      <ListItem >
        If you want to avail the dual benefits of life coverage and long-term investment, ULIP investment will help you reap those benefits.
      </ListItem>
      {/* <Divider light /> */}
      <ListItem >
        Moreover, the ULIP plans reap maximum returns through numerous instruments like equity funds, debt funds, or balanced funds. You can gain higher returns on your investment by purchasing the ULIP scheme.
      </ListItem>
      <ListItem >
        Suppose you want to avail of life cover benefits and get coverage in times of the unfortunate event of death to help your family in times of financial crisis.
      </ListItem>
      {/* <Divider /> */}
      <ListItem >
        In that case, you can choose to buy ULIP investment plan online as well as offline. Other than that, you can also avail long-term savings fund growth benefit for fulfilling future financial needs and requirements.
      </ListItem>
      <ListItem >
        Along with the other numerous benefits, if you also want to avail of tax exemption benefits, the ULIP insurance policy helps you gain those benefits. If you are looking for investment options, selecting the instrument for investment is a crucial and cumbersome task.
      </ListItem>
      {/* <Divider light /> */}
      <ListItem >
        However, if you want to balance your insurance cover and maximized returns, the ULIP investment plan can be a favourable option.
      </ListItem>
    </List>
  );
}