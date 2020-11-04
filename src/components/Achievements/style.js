import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0.5rem 0 1rem 0;
  background-color: #fff;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  background-clip: padding-box;
  margin-bottom: 60px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;

const CardContent = styled.div`
  padding: 20px;
  -webkit-border-radius: 0 0 2px 2px;
  -moz-border-radius: 0 0 2px 2px;
  border-radius: 0 0 2px 2px;
  background-clip: padding-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding-bottom: 30px;
`;

const Container = styled.div`
  width: 90%;
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: 1280px;
`;

const StyledRow = styled.div`
  margin-left: -0.75rem;
  margin-right: -0.75rem;
`;

const Period = styled.p`
  color: #795548;
`;

const UL = styled.ul`
  display: block;
  list-style-type: disc !important;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px !important;
  & > li {
    list-style-type: disc !important;
  }
`;

export {
  Period,
  StyledRow,
  Container,
  Card,
  CardContent,
  UL,
};
