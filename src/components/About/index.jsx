import React from 'react';
import moment from 'moment';
import {
  Quote,
  StyledBlock,
  StyledUL,
  Wrapper,
} from './style';

const round = (num, dec) => {
  const [sv, ev] = num.toString().split('e');
  return Number(`${Number(`${Math.round(parseFloat(`${sv}e${dec}`))}e-${dec}`)}e${ev || 0}`);
};

const About = () => (
  <Wrapper>
    <StyledBlock>
      <Quote>
        Full-Stack Developer (MERN) |  {' '}
        {round(moment(new Date(), 'YYYY-MM-DD')
          .diff(moment('2016-08-01', 'YYYY-MM-DD'), 'years', true), 1)}
        {' '} Years Experience
      </Quote>
    </StyledBlock>
    <StyledUL>
      <li>Expert in JavaScript & TypeScript with advanced proficiency in React.js, Node.js, and Next.js for building scalable applications.</li>
      <li>Strong architectural expertise, designing microservices-based, high-performance systems that handle billions of data points daily.</li>
      <li>
        Database expert with MySQL, MongoDB, and PostgreSQL, optimizing queries, indexing, and schema design for scalability.
      </li>
      <li>
        Real-time data processing experience with WebSocket, Kafka, and RabbitMQ for low-latency, high-traffic applications.
      </li>
      <li>
        Cloud-native development with AWS, Docker, and Kubernetes, ensuring high availability and fault tolerance.
      </li>
      <li>
        CI/CD implementation using Git, Jenkins, and Docker, streamlining deployments and improving DevOps efficiency.
      </li>
      <li>
        Leadership experience, mentoring teams, driving Agile methodologies, and leading architecture discussions for high-scale solutions.
      </li>
      <li>
        Strong problem-solving skills, optimizing performance, reducing latency, and enhancing application security.
      </li>
      <li>
        Passionate about clean code, maintainability, and scalability, ensuring long-term application success.
      </li>
    </StyledUL>
  </Wrapper>
);

export default About;
