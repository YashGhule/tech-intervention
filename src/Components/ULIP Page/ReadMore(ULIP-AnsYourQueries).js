import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      // borderRadius: 20,
    },
  },
}));

export default function ContainedButtons3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={process.env.PUBLIC_URL + '/faq'}>
        <Button variant="contained" style={{ backgroundColor: '#00529C', color: "#FFFFFF", borderRadius: "20px" }} href="">
          Read More
        </Button>
      </Link>
    </div>
  );
}