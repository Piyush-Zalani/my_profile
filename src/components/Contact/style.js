import styled from 'styled-components';
import { Row } from '@bootstrap-styled/v4';

const Container = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  height: 100vh;
`;

const StyledRow = styled(Row)`
  padding: 10px;
  align-items: center;
  @media (max-width: 600px) {
    display: block;
    text-align: center;
    margin: 0 auto;
  }
`;

const StyledCol = styled.div`
  font-size: 1.6rem;
  line-height: 55.5px;
`;

const WrapperLink = styled.a`
  overflow: hidden;
  user-select: none;
  will-change: opacity, transform;
  background-color: #795548;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  margin-bottom: 15px;
  -moz-border-radius: 2px;
  text-transform: uppercase;
  border: none;
  outline: 0;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.5px;
  display: inline-block;
  color: #fff;
  position: relative;
  z-index: 1;
  line-height: 37px;
  padding: 0;
  border-radius: 50%;
  background-clip: padding-box;
  transition: 0.3s;
  cursor: pointer;
  width: 55.5px;
  height: 55.5px;
  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

const StyledLink = styled.a`
  &:hover {
    border-bottom: 3px solid #009688;
  }
  @media (max-width: 600px) {
    left: 0px;
    bottom: -5px;
  }
  border-bottom: 3px solid transparent;
  padding: 3px 3px 0 3px;
  transition: 0.25s all;
  -moz-transition: 0.25s all;
  -webkit-transition: 0.25s all;
  bottom: 10px;
  left: 20px;
  position: relative;
  color: #009688;
  text-decoration: none;
  font-weight: 800;
`;

export {
  Container, StyledCol, StyledRow, StyledLink, WrapperLink,
};
