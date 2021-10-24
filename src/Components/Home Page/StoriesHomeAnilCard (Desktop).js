import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Grid from '@material-ui/core/Grid';
import SimpleDialogDemo1 from './DialogBox';
import AnilKumar from '../../Assets/Anil Kumar.svg';

const useStyles = makeStyles({
    root: {
        // minWidth: 275,
        width: '31.5%',
        backgroundColor: '#FFF6E2',
        borderRadius: 15,
        marginInline: 11,
        marginBottom: '40px',
        marginTop: '80px'
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

export default function SimpleCard24() {
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
                            <Typography className={classes.title}>
                                Stories
                            </Typography>
                        </Grid>
                        <Grid item >
                            <img src={AnilKumar} className="AnilKumar" alt="AnilKumar" width="150" height="150" />
                        </Grid>
                        <Grid item >
                            <Typography className={classes.body}>
                                I was searching for term plan where I got best in Bharti AXA with income + premium in budget. Good Support was given by the associate in guiding and purchasing for the plan.
                            </Typography>
                        </Grid>
                        {/* <Divider orientation="vertical" flexItem /> */}
                        <Divider style={{ width: "85%" }} />
                        <Grid item >
                            <Typography className={classes.name}>
                                <b>ANIL KUMAR</b>
                            </Typography>
                            <Typography className={classes.name} style={{ marginBottom: "20px" }}>
                                CHANDIGARH | May 12, 2021
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
