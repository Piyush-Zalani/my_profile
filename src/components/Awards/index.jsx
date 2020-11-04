import React from 'react';
import {
  Period,
  StyledRow,
  Container,
  Card,
  CardContent,
  UL,
} from './style';

export default () => (
  <Container>
    <StyledRow>
      <Card>
        <CardContent>
          <UL>
            <li>
              <Period>“Periodrio” project client appreciation on closure of project – 2017</Period>
            </li>
            <li><Period>Client appreciation of “The Review Agency” - 2018</Period></li>
            <li>
              <Period>Awarded by sincere employee in Tudip Technologies - 2019</Period>
            </li>
            <li><Period>Winner of Cybage Hackathon - 2019</Period></li>
          </UL>
        </CardContent>
      </Card>
    </StyledRow>
  </Container>
);
