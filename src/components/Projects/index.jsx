import React, { useState } from 'react';
import { Col, Row } from '@bootstrap-styled/v4';
import { camelCase } from 'lodash';
import {
  CardContent,
  Card,
  Container,
  CardAction,
  CardImage,
  CardRevel,
  Description,
  Title,
  Image,
  StyledLink,
  CardTitle,
} from './style';
import { projects } from '../../utils/constants';

const Projects = () => {
  const [transform, setTransform] = useState({});
  return (
    <Container>
      <Row>
        {projects.map((project) => (
          <Col lg={4} sm={12} md={6} key={project.title}>
            <Card>
              <CardImage>
                <Image src={project.src} />
              </CardImage>
              <CardContent>
                <Title
                  onClick={() => setTransform({
                    ...transform,
                    [`is${camelCase(project.title)}Transform`]: true,
                  })}
                >
                  {project.title}
                  <i className="mdi-navigation-more-vert right" />
                </Title>
                <Description>{project.description}</Description>
              </CardContent>
              <CardRevel
                transform={transform[`is${camelCase(project.title)}Transform`]}
              >
                <CardTitle className="card-title brown-text">
                  Accomplishments
                  <i
                    className="mdi-navigation-close right"
                    onClick={() => setTransform({
                      ...transform,
                      [`is${camelCase(project.title)}Transform`]: false,
                    })}
                  />
                </CardTitle>
                <ul>
                  {project.accomplishments.map((accomplishment) => (
                    <li key={`${accomplishment} ${project.title}`}>
                      <strong>{accomplishment}</strong>
                    </li>
                  ))}
                </ul>
                <CardAction>
                  {project.url && (
                    <StyledLink
                      aria-label="Visit Interpol8r web app"
                      href={project.url}
                      target="_blank"
                      title="View Online"
                    >
                      <i className="fa fa-external-link" />
                    </StyledLink>
                  )}
                </CardAction>
              </CardRevel>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
