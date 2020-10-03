import styled from "styled-components"
import { Col, Row } from "@bootstrap-styled/v4"

const CardContainer = styled.div`
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: 1280px;
`

const Wrapper = styled.div`
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
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`

const Content = styled.div`
  padding: 20px;
  -webkit-border-radius: 0 0 2px 2px;
  -moz-border-radius: 0 0 2px 2px;
  border-radius: 0 0 2px 2px;
  background-clip: padding-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

const Logo = styled.img`
  width: 70px;
`

const StyledRow = styled(Row)`
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`

const StyledHeader = styled(Col)`
  padding-top: 20px;
  @media (max-width: 575px) {
    padding: 0;
    text-align: left !important;
  }
`

const AlignRight = styled(StyledHeader)`
  text-align: right;
  color: #795548;
  font-size: large;
`

const CompanyName = styled(StyledHeader)`
  text-transform: uppercase;
  font-size: larger;
  color: #008073;
`

export {
  Content,
  CardContainer,
  CompanyName,
  AlignRight,
  Wrapper,
  StyledHeader,
  Logo,
  StyledRow,
}
