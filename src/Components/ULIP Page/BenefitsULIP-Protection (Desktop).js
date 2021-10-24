import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Grid from '@material-ui/core/Grid';
import Protection from '../../Assets/Protection.svg';

const useStyles = makeStyles({
    root: {
        // minWidth: 275,
        width: '31.5%',
        backgroundColor: '#DFF2FA',
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

export default function SimpleCard27() {
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
                            <img src={Protection} className="Protection" alt="Protection" width="100" height="100" />
                        </Grid>
                        <Grid container wrap="nowrap" spacing={2}
                            direction="column"
                        >
                            <Grid item >
                                <Typography className={classes.title} style={{ marginLeft: '-140px' }}>
                                    Protection
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography className={classes.body} style={{ marginBottom: '20px' }}>
                                    A ULIP plan provides the protective benefit of a life cover, which helps keep your family and loved ones secure in your absence.
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
