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

export default function List10Panel10() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        Short-term financial challenges can wreak havoc on your long-term financial plans. If things get difficult, we prefer to turn to investments that can be quickly liquidated. And that is when investment lock-in periods, such as those found in unit linked insurance plans online in India (ULIPs), come in handy.
      </ListItem>
      {/* <Divider /> */}
      <ListItem >
        1. Assures that your goal is protected
        Long-term life goals, such as retirement, necessitate large sums of money. Because large sums of money cannot be saved quickly, long-term continuous saves are required to attain various objectives. However, you may encounter financial emergencies that need you to spend a substantial amount of money.
      </ListItem>
      <ListItem >
        2. Encourages people with bonuses to stay invested
        When you begin long-term investing with a ULIP, you usually set aside money for a specific purpose, such as your child's higher education or wedding. These objectives are anticipated to take 10-20 years to achieve.
        However, while keeping your usual monthly costs, you may encounter situations where you require a large sum of money in a short period. It could be anything as simple as raising funds for a child's school admissions.
        These are not things you can fit into your monthly budget or cover with minor savings. However, if you cannot withdraw funds from investments such as ULIPs during the initial years due to a lock-in, you will have saved a substantial amount at the end of the necessary 5-year lock-in term.
        When contrasted to considerable amounts over a longer period, the temptation to liquidate a smaller savings amount during an emergency will be stronger. Hence, your money has a better chance of increasing unrestricted over time and producing the growth you desire. As a result, you are compelled to make plans for crises, such as an emergency fund with liquid investments equal to 3-6 months of living expenses. In any event, you will need to find the money somewhere else during an emergency, which is where investment plans come in.
      </ListItem>
      {/* <Divider light /> */}
      <ListItem >
        3. Aids in surviving short-term turmoil
        Long-term, i.e. 8-10 years or more, equity is considered one of the -performing asset types. However, the investments are vulnerable to high volatility in the short term.
        Individual investors who are new to stock investments may be disturbed by excessive short-term volatility. Some may even withdraw assets prematurely on big market drops, missing out on long-term gain opportunities.
        You can't make a sudden and premature withdrawal from ULIPs because they have a minimum 5-year lock-in period, which also helps you tap the long-term growth potential of equities. As long-term investment plans pass the 8-10 year mark, you become accustomed to the turbulence, which settles down to more consistent returns.
        Investors pick the greatest investment plan that allows them to access their funds in an emergency. But, often, this facility causes more harm than good because consumers wind up undoing their hard work overtime by making rash decisions to abandon long-term assets.
        Short-term emergencies won't derail your progress toward long-term goals like your child's higher education because of lock-in periods in investments like ULIPs.
      </ListItem>
    </List>
  );
}