import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Grid from '@material-ui/core/Grid';
import SimpleDialogDemo1 from './DialogBox';
import MediaSpeak from '../../Assets/Media Speak.svg';

const useStyles = makeStyles({
    root: {
        // minWidth: 275,
        width: '15%',
        height: '350px',
        backgroundColor: '#FFECE8',
        borderRadius: 15,
        marginInline: 10,
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
        fontSize: 12,
        textAlign: 'left',
    },

    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard16() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardContent className={classes.content}>
                    <Grid container wrap="nowrap" spacing={2}
                        direction="column"
                        alignItems="center"
                    >

                        <Grid item >
                            <img src={MediaSpeak} className="MediaSpeak" alt="MediaSpeak" width="100" height="100" />
                        </Grid>
                        <Grid item >
                            <Typography className={classes.title}>
                                Media Speak
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography className={classes.body}>
                                Bharti AXA urges you to choose certainty for the important life goals with our guaranteed solution
                            </Typography>
                            <Typography className={classes.body}>
                                #savingsplan #bhartaxasmartplan
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                {/* <CardActions> */}

                {/* </CardActions> */}
            </CardActionArea>
        </Card >
    );
}
