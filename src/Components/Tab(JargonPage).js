import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { List, ListItem } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="A" {...a11yProps(0)} />
          <Tab label="B" {...a11yProps(1)} />
          <Tab label="C" {...a11yProps(2)} />
          <Tab label="D" {...a11yProps(3)} />
          <Tab label="E" {...a11yProps(4)} />
          <Tab label="F" {...a11yProps(5)} />
          <Tab label="G" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
                <ListItem >
                  <h4>
                    Accidental Death Benefit
                  </h4>
                    Under this benefit, a sum of money is paid over and above the death benefit in the event of death caused due to an accident.
                </ListItem>
                <ListItem >
                  <h4>
                    Additional Riders
                  </h4>
                    Add-on riders like severe sickness or accidental death coverage may incur an additional premium when choosing additional benefits.
                </ListItem>
                <ListItem >
                  <h4>
                    Adverse Selection
                  </h4>
                    The tendency of persons exposed a higher risk to seek more insurance coverage than those at a lower risk. Insurers react either by charging higher premiums or not insuring at all, as in the case of floods. Adverse selection concentrates risk instead of spreading it. The fact is that the insurance works best when risk is shared among a large number of the policyholders.
                </ListItem>
            </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
