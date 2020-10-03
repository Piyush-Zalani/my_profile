import styled from "styled-components"
import { Col, Row } from "@bootstrap-styled/v4"

const StyledCol = styled(Col)``

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
`

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
`

const Header = styled.h4`
  font-size: 2.28rem;
  line-height: 2.508rem;
  margin: 1.14rem 0 0.912rem 0;
  color: #795548;
  font-weight: 300;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
  padding-bottom: 20px;
`

const StyledRow = styled(Row)`
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  text-align: center;
`

const Image = styled.img`
  margin: 0 auto;
  max-height: 100px;
  padding-bottom: 10px;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  max-width: 100%;
  height: 100px;
`

const Container = styled.div`
  width: 95%;
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: 1280px;
`

export { Container, Card, CardContent, StyledRow, StyledCol, Image, Header }
