import styled from "styled-components"

const Container = styled.section`
  position: relative;
  background: ${props =>
    props.backgroundImage
      ? `url(${props.backgroundImage}) no-repeat top center/cover`
      : "none"};
  height: ${props => (props.backgroundImage ? "100vh" : "inherit")};
`

const Header = styled.div`
  background-color: #008073;
  font-size: 2.92rem;
  font-weight: 100;
  margin-bottom: 60px;
  margin-top: ${props => props.top || "60px"};
  padding: 10px 40px;
  text-transform: uppercase;
  color: #fff;
`

export { Container, Header }
