import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={process.env.PUBLIC_URL + '/jargon'}>
        <Button variant="contained" style={{ backgroundColor: '#00529C', color: "#FFFFFF", borderRadius: "5px" }} href="">
          View All Jargon
        </Button>
      </Link>
    </div>
  );
}