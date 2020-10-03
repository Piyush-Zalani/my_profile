import styled from "styled-components"

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

const Heading = styled.p`
  padding: 5px 0 0;
  margin: 0;
  color: inherit;
`

const Link = styled.a`
  border-bottom: 3px solid transparent;
  padding: 3px 3px 0 3px;
  transition: 0.25s all;
  -moz-transition: 0.25s all;
  -webkit-transition: 0.25s all;
  margin-right: 20px;
  -webkit-transition: color 0.3s ease;
  -moz-transition: color 0.3s ease;
  -o-transition: color 0.3s ease;
  -ms-transition: color 0.3s ease;
  transition: color 0.3s ease;
  text-transform: uppercase;
  color: #008073;
  &:hover {
    border-bottom: 3px solid #009688;
  }
  text-decoration: none;
`

const CardTitle = styled.span`
  color: #fff;
  font-size: 24px;
  font-weight: 300;
  line-height: 2.5rem;
`

const Container = styled.div`
  width: 90%;
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: 1280px;
`

const StyledRow = styled.div`
  margin-left: -0.75rem;
  margin-right: -0.75rem;
`

const Period = styled.p`
  color: #795548;
`

export {
  Period,
  StyledRow,
  Container,
  Card,
  CardContent,
  CardTitle,
  Heading,
  Link,
}
