import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
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
      <TreeItem nodeId="1" label="Guaranteed Income Plans">
      <Divider />
        <TreeItem nodeId="2" label="Calendar" />
        <Divider />
        <TreeItem nodeId="3" label="Chrome" />
        <Divider />
        <TreeItem nodeId="4" label="Webstorm" />
        <Divider />
      </TreeItem>
      <Divider />
      <TreeItem nodeId="5" label="Insurance Plans">
      <Divider />
        <TreeItem nodeId="10" label="OSS" />
        <Divider />
        <TreeItem nodeId="6" label="Material-UI">
        <Divider />
          <TreeItem nodeId="7" label="src">
          <Divider />
            <TreeItem nodeId="8" label="index.js" />
            <Divider />
            <TreeItem nodeId="9" label="tree-view.js" />
            <Divider />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
