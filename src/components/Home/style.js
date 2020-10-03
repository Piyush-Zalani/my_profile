import styled from "styled-components"

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
`

const StyledH2 = styled.h2`
  font-size: 3rem;
  margin: 0;
  color: white;
  position: relative;
  font-weight: 300;
  line-height: 150%;
  padding: 0 30px;
  width: 70%;
  top: 3rem;
  font-family: monospace;
`

const StyledSpan = styled.span`
  background-color: #008073;
`

const StyledSpan2 = styled.span`
  border-bottom: 5px solid #009688;
`

export { StyledH2, StyledSpan, StyledSpan2, Overlay }
