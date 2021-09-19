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

export default function List11Panel11() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        ULIP plan returns can be calculated easily by following certain steps. With the help of the online calculator, you can calculate the estimated investment returns.
      </ListItem>
      {/* <Divider /> */}
      <ListItem >
        While using the ULIP calculator, the buyers must consider details like premium payment frequency, types of funds, expected rate of returns on investment, amount of money to be invested, etc.
      </ListItem>
      <ListItem >
        Firstly, log in to the online ULIP calculator. As per your suitability, select the premium to be paid for an investment, the minimum amount being ₹ 1500 per month. In the next step, select the frequency of premium payment.
      </ListItem>
      {/* <Divider light /> */}
      <ListItem >
        Then select the policy's tenure and the amount of premium payment they want to allocate for investment. Next, the investor will have to select the lock-in period of investment. The ULIP plans offer a minimum lock-in period of 5 years.
      </ListItem>
      <ListItem >
        Still, according to the experts, it is more beneficial to gain maximum return on investment by investing for a long period. As the last step, the investor must select the funds they want to invest their money in.
      </ListItem>
      <ListItem >
        However, before investing, it is highly important to check how the fund has performed in the market. The ULIP calculator is very easy and hassle-free to use. Along with estimating the returns, the ULIP calculators also take into consideration the inflation rates.
      </ListItem>
    </List>
  );
}