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

export default function List23Panel23() {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem >
                <Typography className={classes.body}>
                    <b>Bharti AXA Life</b> provides some of the insurance policy plans available in the market. The ULIP plan offered by Bharti AXA Life is the Bharti AXA Life Wealth Pro Plan.

                    It aims to provide life insurance cover and growth in the investment of the policyholder. This policy offers a <b>comprehensive financial solution to provide life cover of up to 10 times the premium amount.</b>

                    It thus helps build life cover with wealth over a long period and enables fulfilment of aspirations and dreams of the individual and his/her family.
                </Typography>
            </ListItem>
            {/* <Divider light /> */}
            <ListItem >
                <Typography className={classes.body}>
                    The plan provides two variants to choose from <b>growth variant and legacy variant.</b> Moreover, multiple investment strategies are also offered to choose from as per the investor’s suitability and needs.

                    Other benefits included in the ULIP scheme are a death benefit, maturity benefit, loyalty addition, settlement option, and others.
                </Typography>
            </ListItem>
            <ListItem style={{ color: "#B4B4B4", textTransform: "uppercase", marginBottom: "-10px" }} className={classes.body}>
                <b>Bharti AXA Life Wealth Pro Plan</b>
            </ListItem>
            <ListItem style={{ color: "#00529C", fontSize: "18px", fontFamily: "Montserrat" }}>
                Details
            </ListItem>
        </List>
    );
}