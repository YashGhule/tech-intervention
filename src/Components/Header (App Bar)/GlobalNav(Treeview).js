import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    height: 340,
    flexGrow: 5,
    maxWidth: 400,
    marginLeft: '30px',
    marginRight: '30px',
    fontFamily: 'Montserrat',
  },
  main: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  sub: {
    marginTop: '10px',
    marginBottom: '10px',
  },

});

export default function FileSystemNavigator() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon style={{ color: "#00529C" }} />}
      defaultExpandIcon={<KeyboardArrowDownIcon style={{ color: "#00529C" }} />}
    >

      <TreeItem nodeId="1.0" label="Guaranteed Income Plans" className={classes.main}>
        <Divider />
        <TreeItem label="Savings Plan" className={classes.sub} />
        {/* <Divider /> */}
      </TreeItem>
      <Divider />
      <TreeItem nodeId="1.1" label="Insurance Plans" className={classes.main}>
        <Divider />
        <TreeItem nodeId="2" label="Unit Linked Insurance Plans (ULIP)" className={classes.sub}>
          <Divider />
          <Link to={process.env.PUBLIC_URL + '/ulip'}>
            <TreeItem label="ULIP" className={classes.sub} />
          </Link>
          <Divider />
          <TreeItem label="Investment Plans" className={classes.sub} />
          <Divider />
        </TreeItem>
        <Divider />
        <TreeItem nodeId="3" label="Term Insurance Plans" className={classes.sub}>
          <Divider />
          <TreeItem label="Protection and Term Insurance Plans" className={classes.sub} />
          <Divider />
        </TreeItem>
        <Divider />
        <TreeItem nodeId="4" label="Life Insurance" className={classes.sub}>
          <Divider />
          <TreeItem label="Life Insurance Plans" className={classes.sub} />
          {/* <Divider /> */}
        </TreeItem>
        {/* <Divider /> */}
      </TreeItem>
      <Divider />
      <TreeItem nodeId="1.2" label="About Us" className={classes.main}>
        <Divider />
        <TreeItem label="Life at Bharti AXA" className={classes.sub} />
        <Divider />
        <TreeItem label="Media Centre" className={classes.sub} />
        <Divider />
        <TreeItem label="Join Bharti AXA" className={classes.sub} />
        {/* <Divider /> */}
      </TreeItem>
      <Divider />
      <TreeItem nodeId="1.3" label="Support" className={classes.main}>
        <Divider />
        <TreeItem label="Legal" className={classes.sub} />
        <Divider />
        <TreeItem label="Glossary" className={classes.sub} />
        <Divider />
        <TreeItem label="Renew Your Policy" className={classes.sub} />
        <Divider />
        <TreeItem label="Customer" className={classes.sub} />
        <Divider />
        <TreeItem label="Register E-NACH" className={classes.sub} />
        <Divider />
        <TreeItem label="Claim Centre" className={classes.sub} />
        {/* <Divider /> */}
      </TreeItem>
    </TreeView >
  );
}
