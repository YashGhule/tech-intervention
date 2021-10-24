import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Grid from '@material-ui/core/Grid';
import CreateWealthIcon from '../../Assets/Create Wealth Icon.svg';
import AchieveGoalsIcon from '../../Assets/Achieve Goals Icon.svg';
import ProtectLifeIcon from '../../Assets/Protect Life Icon.svg';
import { Hidden, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: '#BFD3E6',
    },

    primary: {
        fontFamily: 'Montserrat',
        fontWeight: 'normal',
        fontSize: 17,
    },

    secondary: {
        fontFamily: 'SFPro',
        fontWeight: 'normal',
        fontSize: 14,
    },
}));

export default function InsetDividers1() {
    const classes = useStyles();

    return (
        <List className={classes.root} >
            <Grid container spacing={2} style={{ marginLeft: "70px" }}>
                <Grid item md={3} >
                    <ListItem button>
                        <ListItemAvatar>
                            {/* <Avatar> */}
                            <img src={ProtectLifeIcon} className="ProtectLifeIcon" alt="ProtectLifeIcon" />
                            {/* </Avatar> */}
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography className={classes.primary}>
                                Protect Life
                            </Typography>
                            <Typography className={classes.secondary}>
                                Explore for our term insurance plans
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Grid>
                <Divider variant="inset" component="li" />
                <Grid item md={3}>
                    <ListItem button>
                        <ListItemAvatar>
                            {/* <Avatar> */}
                            <img src={CreateWealthIcon} className="CreateWealthIcon" alt="CreateWealthIcon" />
                            {/* </Avatar> */}
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography className={classes.primary}>
                                Create Wealth
                            </Typography>
                            <Typography className={classes.secondary}>
                                Choose from our spread of ULIP Plans
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Grid>
                <Divider variant="inset" component="li" />
                <Grid item md={3}>
                    <ListItem button>
                        <ListItemAvatar>
                            {/* <Avatar> */}
                            <img src={AchieveGoalsIcon} className="AchieveGoalsIcon" alt="AchieveGoalsIcon" />
                            {/* </Avatar> */}
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography className={classes.primary}>
                                Achieve Goals
                            </Typography>
                            <Typography className={classes.secondary}>
                                Get guaranteed returns from our savings plan
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Grid>
            </Grid >
        </List >
    );
}
