import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import SimpleCard from '../Components/SimpleCard';
import ImgMediaCard from '../Components/MediaCard';
import ContainedButtons from '../Components/ButtonsHome';
import FloatingActionButtons from '../Components/FAButtonHome';
import SimpleBreadcrumbs from '../Components/Breadcrumb';
import BasicButtonGroup from '../Components/ButtonGroupHome';

export default function InvestmentPlans() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
            <p>
                To get started, edit <code>src/App.js</code>, save, and reload this page.
            </p>
            <SimpleCard/>
            <ImgMediaCard/>
            <ContainedButtons/>
            <FloatingActionButtons/>
            <SimpleBreadcrumbs/>
            <BasicButtonGroup/>
        </Container>
    </React.Fragment>
  );
}