import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/ButtonsHome';
import BasicButtonGroup from '../Components/ButtonGroupHome';
import FloatingActionButtons from '../Components/FAButtonHome';
import ControlledAccordions from '../Components/ControlledAccordion';
import SimpleCard from '../Components/SimpleCard';
import TextMobileStepper from '../Components/TrendingNowHomeCarousel';
import SimpleBackdrop from '../Components/Backdrop';
import SimpleDialogDemo from '../Components/DialogBox';
import SimpleCard1 from '../Components/LifeInsurancePlanHomeCard';
import TextMobileStepper1 from '../Components/StoriesHomeCarousel';
import SimplePaper1 from '../Components/Paper(BIGquestions)';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                
            </p>
            <p>
            
            </p>
            <SimplePaper1/>
            <SimpleCard1/>
            <TextMobileStepper/>
            <TextMobileStepper1/>
            <SimpleCard/>
            <SimpleBackdrop/>
            <BasicButtonGroup/>
            <SimpleDialogDemo/>
            <ControlledAccordions/>
        </Container>
    </React.Fragment>
  );
}