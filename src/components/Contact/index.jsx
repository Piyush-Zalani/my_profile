import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { Col } from '@bootstrap-styled/v4';
import {
  Container,
  StyledLink,
  StyledRow,
  StyledCol,
  WrapperLink,
} from './style';

const Contact = () => {
  const [reputation, setReputation] = useState(null);
  useEffect(() => {
    fetch('https://api.stackexchange.com/2.2/me?key=mEHv3m0yO1G3WJeoFu6QNg((&site=stackoverflow&order=desc&sort=reputation&access_token=IdUYRveQKIfkpvX7gE6cLg))')
      .then((res) => res.json())
      .then(
        (result) => {
          setReputation(get(result, 'items.0.reputation'));
        },
      );
  }, []);
  return (
    <Container>
      <StyledRow>
        <WrapperLink href="mailto:zalani.piyush@gmail.com" target="_blank">
          <StyledCol sm="2">
            <i className="mdi-content-mail small" />
          </StyledCol>
        </WrapperLink>
        <Col sm="9">
          <StyledLink href="mailto:zalani.piyush@gmail.com" target="_blank">
            zalani.piyush@gmail.com
          </StyledLink>
        </Col>
      </StyledRow>
      <StyledRow>
        <WrapperLink
          href="https://www.linkedin.com/in/piyush-zalani-829b1569/"
          target="_blank"
        >
          <StyledCol sm="2">
            <i className="fa fa-linkedin" />
          </StyledCol>
        </WrapperLink>
        <Col sm="9">
          <StyledLink
            href="https://www.linkedin.com/in/piyush-zalani-829b1569/"
            target="_blank"
          >
            https://www.linkedin.com/in/piyush-zalani-829b1569/
          </StyledLink>
        </Col>
      </StyledRow>
      <StyledRow>
        <WrapperLink href="https://github.com/Piyush-Zalani" target="_blank">
          <StyledCol sm="2">
            <i className="fa fa-github" />
          </StyledCol>
        </WrapperLink>
        <Col sm="9">
          <StyledLink href="https://github.com/Piyush-Zalani" target="_blank">
            https://github.com/Piyush-Zalani
          </StyledLink>
        </Col>
      </StyledRow>
      <StyledRow>
        <WrapperLink href="https://stackoverflow.com/users/8904424/piyush-zalani" target="_blank">
          <StyledCol sm="2">
            <i className="fa fa-stack-overflow" />
          </StyledCol>
        </WrapperLink>
        <Col sm="9">
          <StyledLink href="https://stackoverflow.com/users/8904424/piyush-zalani" target="_blank">
            Stack Overflow Reputations: -
            {' '}
            <span>
            {reputation}
            </span>
          </StyledLink>
        </Col>
      </StyledRow>
    </Container>
  );
};

export default Contact;
