import styled from 'styled-components';

const NavBar = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  position: relative;
  z-index: 10;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  @media (max-width: 992px) {
    display: none;
  }
`;

const StyledUL = styled.ul`
  list-style-type: none;
  padding-inline-start: unset;
`;

const StyledLI = styled.li``;

const TopContent = styled.div`
  padding: 40px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 25px;
  margin-bottom: 2px;
  margin-top: 0;
  color: #008073;
  font-weight: 300;
  line-height: 30px;
`;

const Designation = styled.span`
  color: #757575;
`;

const StyledLink = styled.a`
  text-decoration: none;
  box-sizing: content-box;
  padding: 15px;
  color: ${(props) => props.color};
  padding-left: 20px;
  height: 1.5rem;
  line-height: 1.5rem;
  position: relative;
  cursor: pointer;
  display: block;
  overflow: hidden;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  z-index: 1;
  will-change: opacity, transform;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  &: hover {
    background-color: #fafafa;
    border-left: 3px solid;
  }
`;

const StyledSpan = styled.span`
  padding: 0 15px;
  color: #000;
`;

const Icon = styled.i`
  padding: 0 15px;
  position: relative;
  top: 5px;
`;

export {
  Icon,
  StyledSpan,
  StyledLink,
  StyledUL,
  StyledLI,
  Designation,
  Header,
  TopContent,
  NavBar,
};
