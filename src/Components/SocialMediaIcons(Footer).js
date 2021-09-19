import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));

export default function BasicButtonGroup1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button><InstagramIcon /></Button>
      <Button><TwitterIcon /></Button>
      <Button><FacebookIcon /></Button>
      <Button><YouTubeIcon /></Button>
      <Button><LinkedInIcon /></Button>
    </div>
  );
}
