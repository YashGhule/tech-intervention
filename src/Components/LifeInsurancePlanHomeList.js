import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetDividers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem button>
        <ListItemAvatar>
          {/* <Avatar> */}
          <LocalHospitalIcon />
          {/* </Avatar> */}
        </ListItemAvatar>
        <ListItemText primary="Protect Life" secondary="Explore for our term insurance plans" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button>
        <ListItemAvatar>
          {/* <Avatar> */}
          <AttachMoneyIcon />
          {/* </Avatar> */}
        </ListItemAvatar>
        <ListItemText primary="Create Wealth" secondary="Choose from our spread of ULIP Plans" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button>
        <ListItemAvatar>
          {/* <Avatar> */}
          <VerifiedUserIcon />
          {/* </Avatar> */}
        </ListItemAvatar>
        <ListItemText primary="Achieve Goals" secondary="Get guaranteed returns from our savings plan" />
      </ListItem>
    </List>
  );
}
