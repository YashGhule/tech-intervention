import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import SimpleBreadcrumbs from '../Components/Breadcrumb';
import SimpleCard from '../Components/SimpleCard';
import SimplePaper from '../Components/Paper(BIGquestions)';
import FloatingActionButtons from '../Components/FAButtonHome';
import SimpleDialogDemo from '../Components/DialogBox';
import SimplePaper1 from '../Components/Paper(BIGquestions)';

export default function FAQ() {
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
            <SimpleCard/>
            <SimplePaper1/>
            <FloatingActionButtons/>
            <SimpleDialogDemo/>
        </Container>
    </React.Fragment>
  );
}