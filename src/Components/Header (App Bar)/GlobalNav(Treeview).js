import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    height: 340,
    flexGrow: 5,
    maxWidth: 400,
  },
});

export default function FileSystemNavigator() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1.0" label="Guaranteed Income Plans">
        <Divider />
        <TreeItem label="Savings Plan" />
        <Divider />
      </TreeItem>
      <Divider />
      <TreeItem nodeId="1.1" label="Insurance Plans">
        <Divider />
        <TreeItem nodeId="2" label="Unit Linked Insurance Plans (ULIP)" >
          <Divider />
          <Link to={process.env.PUBLIC_URL + '/ulip'}>
            <TreeItem label="ULIP" />
          </Link>
          <Divider />
          <TreeItem label="Investment Plans" />
          <Divider />
        </TreeItem>
        <Divider />
        <TreeItem nodeId="3" label="Term Insurance Plans">
          <Divider />
          <TreeItem label="Protection and Term Insurance Plans" />
          <Divider />
        </TreeItem>
        <Divider />
        <TreeItem nodeId="4" label="Life Insurance">
          <Divider />
          <TreeItem label="Life Insurance Plans" />
          <Divider />
        </TreeItem>
        <Divider />
      </TreeItem>
      <Divider />
      <TreeItem nodeId="1.2" label="About Us">
        <Divider />
        <TreeItem label="Life at Bharti AXA" />
        <Divider />
        <TreeItem label="Media Centre" />
        <Divider />
        <TreeItem label="Join Bharti AXA" />
        <Divider />
      </TreeItem>
      <Divider />
      <TreeItem nodeId="1.3" label="Support">
        <Divider />
        <TreeItem label="Legal" />
        <Divider />
        <TreeItem label="Glossary" />
        <Divider />
        <TreeItem label="Renew Your Policy" />
        <Divider />
        <TreeItem label="Customer" />
        <Divider />
        <TreeItem label="Register E-NACH" />
        <Divider />
        <TreeItem label="Claim Centre" />
        <Divider />
      </TreeItem>
    </TreeView >
  );
}
