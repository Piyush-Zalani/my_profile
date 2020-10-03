import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;   
    overflow: hidden;  
    margin: 0px;  
    display: flex; 
    box-sizing: border-box;
    font-family: "Roboto",sans-serif;
  }
  html {
    height: 100%;
  }
  body > div {
    width: 100%;
    -webkit-font-smoothing: none;
  }
`

const FlexGrid = styled.div`
  display: flex;
  margin: auto -1rem 1rem;
  margin: auto;
  line-height: 1.5;
  @media only screen and (max-width: 992px) {
    padding-top: 56px;
  }
`

const Nav = styled.nav`
  background-color: #fff;
  position: absolute;
  z-index: 10;
  @media only screen and (min-width: 992px) {
    z-index: 10;
    display: none;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  & > a > i {
    color: #009688;
    height: 56px;
    line-height: 56px;
  }
`

const NameTitle = styled.div`
  display: block;
  height: 100%;
  padding-top: 8px;
  text-align: center;
  width: 100%;
  position: absolute;
`

const Name = styled.a`
  font-size: 24px;
  display: block;
  position: relative;
  line-height: 27px;
  color: #008073;
`

const Designation = styled.span`
  display: block;
  font-size: 14px;
  line-height: 1;
`

const SlideOut = styled.ul`
  width: 200px;
`

export { SlideOut, Designation, FlexGrid, Name, NameTitle, Nav, GlobalStyle }
