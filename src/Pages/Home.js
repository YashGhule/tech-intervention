import React from 'react';
import Container from '@material-ui/core/Container';
import TextMobileStepper from '../Components/TrendingNowHomeCarousel';
import SimpleCard1 from '../Components/LifeInsurancePlanHomeCard';
import TextMobileStepper1 from '../Components/StoriesHomeCarousel';
import SimpleCard2 from '../Components/AnsYourQueriesCard1';
import ContainedButtons1 from '../Components/BuyNow(Home-GetCustomQuote)';
import ContainedButtons2 from '../Components/ReadMore(Home-AnsYourQueries)';
import SimpleCard3 from '../Components/AnsYourQueriesCard2';
import SimpleCard4 from '../Components/AnsYourQueriesCard3';
import SimpleCard5 from '../Components/AnsYourQueriesCard4';
import FloatingActionButtons from '../Components/FAButtonHome';

export default function Home() {
  return (
    <React.Fragment>
      <Container fixed>
        <h2>
          Are these your life's BIG questions?
        </h2>
        <SimpleCard1 />
        <h2>
          Trending Now!
        </h2>
        <TextMobileStepper />
        <TextMobileStepper1 />
        <h2>
          Answering your Queries
        </h2>
        <SimpleCard2 />
        <SimpleCard3 />
        <SimpleCard4 />
        <SimpleCard5 />
        <ContainedButtons2 />
        <h2>
          Get Customized Quote
        </h2>
        <p>
          With Bharti AXA Life Insurance guaranteed income pro, get insurance cover and assured returns on maturity
        </p>
        <ContainedButtons1 />
        <FloatingActionButtons />
      </Container>
    </React.Fragment>
  );
}