import React from 'react';
import { Container, Header } from './style';

export default ({
  children, header, backgroundImage, isTop,
}) => (
  <Container backgroundImage={backgroundImage}>
    {header && <Header top={isTop && 'none'}>{header}</Header>}
    {children}
  </Container>
);
