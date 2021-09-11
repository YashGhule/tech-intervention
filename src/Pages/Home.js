import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import ContainedButtons from '../Components/ButtonsHome';
import BasicButtonGroup from '../Components/ButtonGroupHome';
import Checkboxes from '../Components/CheckboxesHome';
import FloatingActionButtons from '../Components/FAButtonHome';
import SimpleBottomNavigation from '../Components/BottomNavigation';
import ControlledAccordions from '../Components/ControlledAccordion';
import MaterialUIPickers from '../Components/Datepicker';
import SimpleCard from '../Components/SimpleCard';
import DotsMobileStepper from '../Components/Stepper';
import TextMobileStepper from '../Components/CarouselCard';
import SimpleBackdrop from '../Components/Backdrop';
import SimplePaper from '../Components/Paper';
import SimpleDialogDemo from '../Components/DialogBox';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
            <p>
                To get started, edit <code>src/App.js</code>, save, and reload this page.
            </p>
            {/* <DatePickers/> */}
            <ContainedButtons/>
            {/* <Checkboxes/> */}
            <FloatingActionButtons/>
            {/* <MaterialUIPickers/> */}
            {/* <SimpleBottomNavigation/> */}
            <ControlledAccordions/>
            <SimpleCard/>
            <DotsMobileStepper/>
            <TextMobileStepper/>
            <SimpleBackdrop/>
            <BasicButtonGroup/>
            <SimplePaper/>
            <SimpleDialogDemo/>
        </Container>
    </React.Fragment>
  );
}