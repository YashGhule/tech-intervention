import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function List14Panel14() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        The first step involves informing us about your intention to file the claim. Get a hold of the claims form that you can find both at our physical outlet and Bharti AXA’s online portal. The claims form will involve filling in details such as to cause of death, the name of the beneficiary, the location of the death, and personal details such as the date of birth of the beneficiary, policy number and name of the beneficiary, amongst other aspects.
      </ListItem>
      {/* <Divider /> */}
      <ListItem >
        The next step involves arranging all the necessary documents that you will need to ensure that your claim goes through successfully. Some of the main documents that you need to keep handy if you are looking to file a claim include the death certificate pertaining to the deceased registered under the policy, age of the deceased, original copies of the policy document, ID proof of the beneficiary, and any medical reports/records about the beneficiary’s unfortunate demise.
      </ListItem>
      <ListItem >
        Once the claims form and the necessary documents are submitted, the claim will be processed within 30 days. In some cases, additional steps will be undertaken by the insurer. This is especially true in cases where claims are made within three years since the purchase of the policy, in case of which additional investigation is undertaken. This includes checking with the hospital where the deceased registered under the policy was admitted before his/her demise.
      </ListItem>
      {/* <Divider light /> */}
    </List>
  );
}