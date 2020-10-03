import React from "react"
import {
  Container,
  Card,
  CardContent,
  StyledRow,
  StyledCol,
  Image,
  Header,
} from "./style"
import { skills } from "../../utils/constants"

const Skills = () => (
  <Container>
    {Object.keys(skills).map(skill => (
      <Card key={skill}>
        <CardContent>
          <Header>{skill}</Header>
          <StyledRow>
            {skills[skill].map(framework => (
              <StyledCol sm="2" key={framework.src}>
                <Image alt={framework.alt} src={framework.src} />
                {framework.alt}
              </StyledCol>
            ))}
          </StyledRow>
        </CardContent>
      </Card>
    ))}
  </Container>
)

export default Skills
