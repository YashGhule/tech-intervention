import React from 'react';
import Container from '@material-ui/core/Container';
import ControlledAccordions2 from '../Components/Accordion(ULIPPage)';
import TextMobileStepper1 from '../Components/StoriesHomeCarousel';
import SimpleCard6 from '../Components/Q1(FAQPage)';
import SimpleCard7 from '../Components/Q2(FAQPage)';
import SimpleCard9 from '../Components/Q4(FAQPage)';
import SimpleCard8 from '../Components/Q3(FAQPage)';
import ContainedButtons3 from '../Components/ReadMore(ULIP-AnsYourQueries)';
import ContainedButtons4 from '../Components/ViewAllJargon(ULIPPage)';
import SimpleBreadcrumbs3 from '../Components/Breadcrumb(ULIPPage)';

export default function ULIP() {
  return (
    <React.Fragment>
      <Container fixed>
        <SimpleBreadcrumbs3 />
        <h2>
          Unit Linked Insurance Plan
        </h2>
        <p>
          Unit linked insurance plan is an insurance plan that provides dual benefits in one policy. It is a mix of insurance and investment policy that helps to achieve the goal of life cover with wealth creation and along with life cover.
          The investment fund in the Top ULIP plan is collected based on debt or equity, or both. It matches the policyholder’s long-term goals like children’s education, retirement planning, buying a house, etc.
          You can switch your ULIP portfolio between debt and equity-based on your knowledge of market performance as well as risk appetite.
          In a ULIP investment, the number of units credited to the policyholder depends on the prevailing NAV as per that date and the premium amount paid.
          Under a ULIP policy, the nominee receives death benefit- in case of the policyholder’s demise during the term of the ULIP. If the policyholder survives the term of ULIP, he/she can receive the maturity value of the ULIP plan.
          The policyholder of ULIP is typically allowed to choose ULIP funds and assets to generate the returns. Even if the value of the ULIP investment falls below the sum assured, the nominee of the policyholder will be paid the death benefit.
        </p>
        <ControlledAccordions2 />
        <TextMobileStepper1 />
        <h2>
          ULIP - Answering Your Queries
        </h2>
        <SimpleCard6 />
        <SimpleCard7 />
        <SimpleCard8 />
        <SimpleCard9 />
        <ContainedButtons3 />
        <ContainedButtons4 />
        <p>
          Disclaimer: IN THIS POLICY, THE INVESTMENT RISK IN INVESTMENT PORTFOLIO IS BORNE BY THE POLICYHOLDER
          Note: During the settlement period, the investment risk in the investment portfolio is borne by the beneficiary.
          Note: Tax benefits are as per the Income Tax Act, 1961, and are subject to any amendments made thereto from time to time

          For more details on risk factors, terms and conditions, please read sales brochure carefully before concluding a sale
          BEWARE OF SPURIOUS PHONE CALLS AND FICTIOUS /  FRADULENT OFFERS

          • IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.
        </p>
      </Container>
    </React.Fragment>
  );
}