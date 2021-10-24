import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Grid from '@material-ui/core/Grid';
import TaxBenefits from '../../Assets/Tax Benefits.svg';

const useStyles = makeStyles({
    root: {
        // minWidth: 275,
        width: '31.5%',
        backgroundColor: '#FFECE8',
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

export default function SimpleCard26() {
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
                            <img src={TaxBenefits} className="TaxBenefits" alt="TaxBenefits" width="100" height="100" />
                        </Grid>
                        <Grid container wrap="nowrap" spacing={2}
                            direction="column"
                        >
                            <Grid item >
                                <Typography className={classes.title} style={{ marginLeft: '-120px' }}>
                                    Tax Benefits
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography className={classes.body} style={{ marginBottom: '20px' }}>
                                    Up to 1.5 lakh per annum can be availed as tax deduction benefit under Section 80C of the Income Tax Act, 1961. The maturity returns are also exempted from tax under Section 10(10D), keeping into consideration the terms and conditions.
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
