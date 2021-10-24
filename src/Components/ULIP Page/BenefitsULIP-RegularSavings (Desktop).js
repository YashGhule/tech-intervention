import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Grid from '@material-ui/core/Grid';
import RegularSavings from '../../Assets/Regular Savings.svg';

const useStyles = makeStyles({
    root: {
        // minWidth: 275,
        width: '31.5%',
        backgroundColor: '#FFF6E2',
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

export default function SimpleCard25() {
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
                            <img src={RegularSavings} className="RegularSavings" alt="RegularSavings" width="100" height="100" />
                        </Grid>
                        <Grid container wrap="nowrap" spacing={2}
                            direction="column"
                        >
                            <Grid item >
                                <Typography className={classes.title} style={{ marginLeft: '-80px' }}>
                                    Regular Savings
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography className={classes.body} style={{ marginBottom: '20px' }}>
                                    ULIP policy is a way to inculcate the habit of disciplined and regular savings, which will further help in long-term financial planning. By paying regular premiums in the ULIP investment plan, you can enjoy wealth creation benefits for your loved ones.
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
