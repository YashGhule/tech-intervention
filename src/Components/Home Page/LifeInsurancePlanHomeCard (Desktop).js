import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InsetDividers from './LifeInsurancePlanHomeList';
import Grid from '@material-ui/core/Grid';
import InsetDividers1 from './LifeInsurancePlanHomeList (Desktop)';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: '#BFD3E6',
        borderRadius: 15
    },

    title: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 27,
    },
});

export default function SimpleCard7() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Grid item >
            <Card className={classes.root}>
                <CardContent >
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography className={classes.title}>
                                Life Insurance Plan For Every Possibility
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            {/* <CardActions > */}
                            <InsetDividers1 />
                            {/* </CardActions> */}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}
