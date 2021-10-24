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

export default function List19Panel19() {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem >
                <Typography className={classes.body}>
                    Anyone looking out for making financial investments must buy ULIP plan online for a hassle free purchase. Suppose you are looking for availing the <b>multiple investment benefits of the market.</b>
                    In that case, you choose one of the most popular and reliable life cover with wealth creation instruments, like the  Unit Linked Insurance Plan online in India (ULIP).
                </Typography>
            </ListItem>
            <ListItem >
                <Typography className={classes.body}>
                    If you want to avail the <b>dual benefits of life coverage and long-term investment,</b> ULIP investment will help you reap those benefits.
                    Moreover, the ULIP plans reap maximum returns through numerous instruments like equity funds, debt funds, or balanced funds. You can gain higher returns on your investment by purchasing the ULIP scheme.
                </Typography>
            </ListItem>
            <ListItem >
                <Typography className={classes.body}>
                    Suppose you want to avail of <b>life cover benefits and get coverage in times of the unfortunate event of death</b> to help your family in times of financial crisis.
                    In that case, you can choose to buy ULIP investment plan online as well as offline. Other than that, you can also avail long-term savings fund growth benefit for fulfilling future financial needs and requirements.
                </Typography>
            </ListItem>
            <ListItem >
                <Typography className={classes.body}>
                    Along with the other numerous benefits, if you also want to avail of <b>tax exemption benefits,</b> the ULIP insurance policy helps you gain those benefits. If you are looking for investment options, selecting the instrument for investment is a crucial and cumbersome task.
                    However, if you want to balance your insurance cover and maximized returns, the ULIP investment plan can be a favourable option.
                </Typography>
            </ListItem>
        </List>
    );
}