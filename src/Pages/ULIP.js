import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import ControlledAccordions from '../Components/ControlledAccordion';
import SimpleBreadcrumbs from '../Components/Breadcrumb';
import BasicButtonGroup from '../Components/ButtonGroupHome';
import SimplePaper from '../Components/Paper';
import ContainedButtons from '../Components/ButtonsHome';
import SimpleCard from '../Components/SimpleCard';
import DotsMobileStepper from '../Components/Stepper';
import TextMobileStepper from '../Components/CarouselCard';
import SimpleBackdrop from '../Components/Backdrop';
import FloatingActionButtons from '../Components/FAButtonHome';

export default function ULIP() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
            <p>
                To get started, edit <code>src/App.js</code>, save, and reload this page.
            </p>
            <ControlledAccordions/>
            <SimpleBreadcrumbs/>
            <BasicButtonGroup/>
            <SimplePaper/>
            <ContainedButtons/>
            <SimpleCard/>
            <DotsMobileStepper/>
            <TextMobileStepper/>
            <SimpleBackdrop/>
            <FloatingActionButtons/>
        </Container>
    </React.Fragment>
  );
}