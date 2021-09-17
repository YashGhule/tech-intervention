import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import ControlledAccordions from '../Components/ControlledAccordion';
import SimpleBreadcrumbs from '../Components/Breadcrumb';
import BasicButtonGroup from '../Components/ButtonGroupHome';
import SimplePaper from '../Components/Paper(BIGquestions)';
import ContainedButtons from '../Components/ButtonsHome';
import SimpleCard from '../Components/SimpleCard';
import TextMobileStepper from '../Components/TrendingNowHomeCarousel';
import SimpleBackdrop from '../Components/Backdrop';
import FloatingActionButtons from '../Components/FAButtonHome';
import SimpleDialogDemo from '../Components/DialogBox';
import SimplePaper1 from '../Components/Paper(BIGquestions)';
import SimpleCard1 from '../Components/LifeInsurancePlanHomeCard';

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
            <SimplePaper1/>
            <ContainedButtons/>
            <SimpleCard/>
            <TextMobileStepper/>
            <SimpleBackdrop/>
            <FloatingActionButtons/>
            <SimpleDialogDemo/>
        </Container>
    </React.Fragment>
  );
}