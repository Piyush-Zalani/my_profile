import React from 'react';
import {
  StyledH2, StyledSpan, StyledSpan2, Overlay,
} from './style';

const Home = () => (
  <>
    <Overlay />
    <StyledH2>
      I want to
      {' '}
      <StyledSpan>make things</StyledSpan>
      {' '}
      that
      {' '}
      <StyledSpan2>make a difference</StyledSpan2>
      .
    </StyledH2>
  </>
);

export default Home;
