import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import SimpleBreadcrumbs from '../Components/Breadcrumb';
import ScrollableTabsButtonForce from '../Components/Tab';
import FloatingActionButtons from '../Components/FAButtonHome';

export default function Jargon() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
            <p>
                To get started, edit <code>src/App.js</code>, save, and reload this page.
            </p>
            <SimpleBreadcrumbs/>
            <ScrollableTabsButtonForce/>
            <FloatingActionButtons/>
        </Container>
    </React.Fragment>
  );
}