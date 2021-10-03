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
      widht: '100%',
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
}));

export default function SimplePaper1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} >
        <h3 style={{ color: "#FFFFFF" }}>
          IRDAI Notice on Spurious Calls
        </h3>
        <p style={{ color: "#FFFFFF" }}>
          BEWARE OF SPURIOUS PHONE CALLS AND FICTIOUS/FRAUDULENT OFFERS

          IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.
        </p>
        <Divider classes={{ root: classes.divider }} />
        <p style={{ color: "#FFFFFF" }}>
          Copyright. All rights reserved.
        </p>
        <BasicButtonGroup3 />
      </Paper>
    </div>
  );
}