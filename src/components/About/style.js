import styled from "styled-components"

const Quote = styled.h2`
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
`

const StyledBlock = styled.blockquote`
  border-left: 5px solid #795548;
  color: #795548;
  font-size: 125%;
  font-weight: 400;
  padding-left: 1.5rem;
`

const Wrapper = styled.div`
  margin-right: 10%;
  margin-left: 7%;
`

const StyledUL = styled.ul`
  font-size: x-large;
  font-weight: 300;
`

export { Quote, StyledBlock, StyledUL, Wrapper }
