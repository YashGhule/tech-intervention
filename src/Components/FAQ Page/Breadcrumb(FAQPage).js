import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
// import { Link } from '@material-ui/core';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs2() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Home
      </Link>
      <Link color="inherit" href="/" onClick={handleClick}>
        ULIP
      </Link>
      <Typography color="textPrimary">FAQs</Typography>
    </Breadcrumbs>
  );
}
