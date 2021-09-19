import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleCard6 from '../Components/Q1(FAQPage)';
import SimpleCard7 from '../Components/Q2(FAQPage)';
import SimpleCard8 from '../Components/Q3(FAQPage)';
import SimpleCard9 from '../Components/Q4(FAQPage)';
import SimpleCard10 from '../Components/Q5(FAQPage)';
import SimpleCard11 from '../Components/Q6(FAQPage)';
import SimpleCard12 from '../Components/Q7(FAQPage)';
import SimpleCard13 from '../Components/Q8(FAQPage)';
import SimpleCard14 from '../Components/Q9(FAQPage)';
import SimpleCard15 from '../Components/Q10(FAQPage)';
import SimpleBreadcrumbs2 from '../Components/Breadcrumb(FAQPage)';

export default function FAQ() {
  return (
    <React.Fragment>
      <Container fixed>
        <SimpleBreadcrumbs2 />
        <h2>
          FAQs
        </h2>
        <SimpleCard6 />
        <SimpleCard7 />
        <SimpleCard8 />
        <SimpleCard9 />
        <SimpleCard10 />
        <SimpleCard11 />
        <SimpleCard12 />
        <SimpleCard13 />
        <SimpleCard14 />
        <SimpleCard15 />
      </Container>
    </React.Fragment>
  );
}