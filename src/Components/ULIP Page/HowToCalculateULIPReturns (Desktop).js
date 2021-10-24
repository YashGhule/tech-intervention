import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
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
        marginBottom: '20px',
        color: '#393939'
    },
}));

export default function List25Panel25() {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem >
                <Typography className={classes.body}>
                    ULIP plan returns can be calculated easily by following certain steps. With the help of the online calculator, you can calculate estimated investment returns.

                    While using the <b>ULIP calculator,</b> the buyers must consider details like premium payment frequency, types of funds, expected rate of returns on investment, amount of money to be invested, etc.
                </Typography>
            </ListItem>
            <ListItem >
                <Typography className={classes.body}>
                    Firstly, log in to the online ULIP calculator. As per your suitability, select the premium to be paid for an investment, the minimum amount being ₹ 1500 per month. In the next step, select the frequency of premium payment.

                    Then select the policy's tenure and the amount of premium payment they want to allocate for investment. Next, the investor will have to select the lock-in period of investment. ULIP plans offer a <b>minimum lock-in period of 5 years.</b>
                </Typography>
            </ListItem>
            <ListItem >
                <Typography className={classes.body}>
                    Still, according to the experts, it is more beneficial to gain maximum return on investment by investing for a long period. As the last step, investor must select the funds they want to invest their money in.

                    However, before investing, it is highly important to check how the fund has performed in the market. The ULIP calculator is very easy and hassle-free to use. Along with estimating the returns, the ULIP calculators also take into consideration the inflation rates.
                </Typography>
            </ListItem>
        </List>
    );
}