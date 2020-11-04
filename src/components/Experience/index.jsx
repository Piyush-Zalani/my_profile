import React from 'react';
import { Col } from '@bootstrap-styled/v4';
import {
  Content,
  CardContainer,
  CompanyName,
  AlignRight,
  Wrapper,
  Logo,
  StyledRow,
  CardAction,
  UL,
} from './style';
import { experience } from '../../utils/constants';

const Experience = () => (
  <CardContainer>
    {experience.map((exp) => (
      <Wrapper key={exp.src}>
        <Content>
          <StyledRow>
            <Col sm="2">
              <Logo src={exp.src} />
            </Col>
            <CompanyName sm="4">{exp.company}</CompanyName>
            <AlignRight sm="4">{exp.designation}</AlignRight>
          </StyledRow>
          <div>
            <UL>
              {exp.accomplishments.map((accomplishment) => (
                <li key={`${accomplishment} ${exp.company}`}>
                  {accomplishment}
                </li>
              ))}
            </UL>
          </div>
        </Content>
        <CardAction>
          <span>
            {exp.from}
            {' '}
            -
            {' '}
            {exp.to}
            {' '}
            |
            {' '}
            {exp.location}
          </span>
        </CardAction>
      </Wrapper>
    ))}
  </CardContainer>
);

export default Experience;
