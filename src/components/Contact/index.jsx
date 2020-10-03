import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col } from "@bootstrap-styled/v4"
import {
  Container,
  StyledLink,
  StyledRow,
  StyledCol,
  WrapperLink,
} from "./style"

const Contact = () => (
  <Container>
    <StyledRow>
      <WrapperLink href="mailto:zalani.piyush@gmail.com" target="_blank">
        <StyledCol sm="2">
          <FontAwesomeIcon icon="envelope" />
        </StyledCol>
      </WrapperLink>
      <Col sm="9">
        <StyledLink href="mailto:zalani.piyush@gmail.com" target="_blank">
          zalani.piyush@gmail.com
        </StyledLink>
      </Col>
    </StyledRow>
    <StyledRow>
      <WrapperLink
        href="https://www.linkedin.com/in/piyush-zalani-829b1569/"
        target="_blank"
      >
        <StyledCol sm="2">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </StyledCol>
      </WrapperLink>
      <Col sm="9">
        <StyledLink
          href="https://www.linkedin.com/in/piyush-zalani-829b1569/"
          target="_blank"
        >
          https://www.linkedin.com/in/piyush-zalani-829b1569/
        </StyledLink>
      </Col>
    </StyledRow>
    <StyledRow>
      <WrapperLink href="https://github.com/Piyush-Zalani" target="_blank">
        <StyledCol sm="2">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </StyledCol>
      </WrapperLink>
      <Col sm="9">
        <StyledLink href="https://github.com/Piyush-Zalani" target="_blank">
          https://github.com/Piyush-Zalani
        </StyledLink>
      </Col>
    </StyledRow>
  </Container>
)

export default Contact
