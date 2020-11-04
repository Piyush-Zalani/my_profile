import React from 'react';
import {
  Period,
  StyledRow,
  Container,
  Card,
  CardContent,
  CardTitle,
  Heading,
  Link,
} from './style';

const Education = () => (
  <Container>
    <StyledRow>
      <Card>
        <CardContent>
          <Heading>
            <CardTitle className="card-title">
              <Link href="http://www.lnctindore.com/LNCTS" target="_blank">
                Rishiraj Institute of Technologies (RIT)
              </Link>
            </CardTitle>
          </Heading>
          <Period>Indore, Madhya Pradesh 453111</Period>
          <ul>
            <li>Bachelor of Engineering (B.E.)</li>
          </ul>
        </CardContent>
      </Card>
    </StyledRow>
  </Container>
);

export default Education;
