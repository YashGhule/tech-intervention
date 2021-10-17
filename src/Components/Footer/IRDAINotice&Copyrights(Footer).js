import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import BasicButtonGroup3 from './LinkButtonGroup(Footer)';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0),
      // width: theme.spacing(190),
      // height: theme.spacing(16),
      borderRadius: 0,
      width: '100%',
      backgroundColor: '#00529C',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  divider: {
    backgroundColor: '#FFFFFF',
    opacity: '0.5',
    background: theme.palette.divider,
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'left',
    marginTop: '20px',
    marginLeft: '30px',
    marginRight: '30px',
  },
  body: {
    fontFamily: 'SFPro',
    fontWeight: 'normal',
    fontSize: 12,
    textAlign: 'left',
    marginLeft: '30px',
    marginRight: '30px',
  },
}));

export default function SimplePaper1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} >
        <h3 style={{ color: "#FFFFFF" }} className={classes.title}>
          IRDAI Notice on Spurious Calls
        </h3>
        <p style={{ color: "#FFFFFF", textTransform: "uppercase" }} className={classes.body}>
          BEWARE OF SPURIOUS PHONE CALLS AND FICTIOUS/FRAUDULENT OFFERS
        </p>

        <p style={{ color: "#FFFFFF", marginBottom: "20px" }} className={classes.body}>
          IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.
        </p>
        <Divider classes={{ root: classes.divider }} />
        <p style={{ color: "#FFFFFF", fontSize: "14px" }} className={classes.body}>
          Copyright. All rights reserved.
        </p>
        <BasicButtonGroup3 />
      </Paper>
    </div>
  );
}