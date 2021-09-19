import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleBreadcrumbs1 from '../Components/Breadcrumb(JargonPage)';
import ScrollableTabsButtonForce from '../Components/Tab(JargonPage)';

export default function Jargon() {
  return (
    <React.Fragment>
      <Container fixed>
        <SimpleBreadcrumbs1 />
        <h2>
          Life Insurance Terms
        </h2>
        <ScrollableTabsButtonForce />
      </Container>
    </React.Fragment>
  );
}