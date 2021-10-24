import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Grid from '@material-ui/core/Grid';
import FlexibilityofInvestment from '../../Assets/Flexibility of Investment.svg';

const useStyles = makeStyles({
    root: {
        // minWidth: 275,
        width: '31.5%',
        backgroundColor: '#FFDEE0',
        borderRadius: 15,
        marginInline: 10,
        marginBottom: '40px',
    },
    content: {
        marginTop: '15px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 17,
    },
    body: {
        fontFamily: 'SFPro',
        fontWeight: 'normal',
        fontSize: 14,
        textAlign: 'left',
        marginLeft: '20px',
        marginRight: '20px',
    },
    name: {
        fontFamily: 'SFPro',
        fontWeight: 'normal',
        fontSize: 12,
        textAlign: 'left',
        marginLeft: '-160px',
    },

    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard29() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardContent className={classes.content}>
                    <Grid container wrap="nowrap" spacing={2}
                        direction="row"
                        alignItems="center"
                    >

                        <Grid item >
                            <img src={FlexibilityofInvestment} className="FlexibilityofInvestment" alt="FlexibilityofInvestment" width="100" height="100" />
                        </Grid>
                        <Grid container wrap="nowrap" spacing={2}
                            direction="column"
                        >
                            <Grid item >
                                <Typography className={classes.title} style={{ marginLeft: '-20px' }}>
                                    Flexibility of Investment
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography className={classes.body} style={{ marginBottom: '20px' }}>
                                    In the best ULIP plan, you can get flexibility and control over your invested money in many ways. There are options like fund switch, partial withdrawal, etc., that provide different choices for the management and investment of your money in the ULIP investment.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
                {/* <CardActions> */}

                {/* </CardActions> */}
            </CardActionArea>
        </Card >
    );
}
