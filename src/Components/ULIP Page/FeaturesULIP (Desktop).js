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
    body: {
        fontFamily: 'SFPro',
        fontWeight: '500',
        fontSize: 14,
        marginBottom: '20px',
        color: '#393939'
    },
}));

export default function List18Panel18() {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem className={classes.body}>
                In a ULIP plan, the premium paid by the policyholder is invested in a fund that will collect long-term savings. This fund will be decided as per the policyholder’s choice and according to his/her estimated risks.
                The premium paid is subject to various changes like mortality changes, administrative changes, fund management changes, etc.
                Under ULIP policy, no withdrawal is allowed for five years, which is the lock-in period. After this lock-in period, one can withdraw money partially without any termination.
            </ListItem>
            <ListItem className={classes.body}>
                <b>Following are some of the other key features that will help you to buy ULIP online and offline:</b>
            </ListItem >
            {/* <Divider /> */}
            <ListItem style={{ color: "#00529C", fontFamily: 'Montserrat', fontSize: 15 }}>
                1. Single-Premium
            </ListItem>
            <ListItem className={classes.body}>
                In the ULIP policy plan, the policyholder must pay the entire premium amount as a lump sum at the beginning of the policy term.
            </ListItem>
            <ListItem style={{ color: "#00529C", fontFamily: 'Montserrat', fontSize: 15 }}>
                2. Regular Premium Payment
            </ListItem>
            <ListItem className={classes.body}>
                The policyholder of a ULIP policy has to pay a pre-determined premium amount on a periodical basis, i.e., annually, semi-annually, or monthly, based on the premium payment term opted for.
            </ListItem>
            {/* <Divider light /> */}
            <ListItem style={{ color: "#00529C", fontFamily: 'Montserrat', fontSize: 15 }}>
                3. Number of Premium Payment Years
            </ListItem>
            <ListItem className={classes.body}>
                The number of the premium payment years depends on the term of the policy that the policyholder has chosen. In most cases, the number of premium-paying years and the term of the policy are the same. However, in some policies, the insured gets the option of choosing the number of years of premium payment.
            </ListItem>
        </List>
    );
}