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
        Mission-driven full stack developer with a passion for thoughtful UI
        design, collaboration, and teaching.
      </Quote>
    </StyledBlock>
    <StyledUL>
      <li>
        Over
        {' '}
        {round(moment(new Date(), 'YYYY-MM-DD')
          .diff(moment('2016-08-01', 'YYYY-MM-DD'), 'years', true), 1)}
        {' '}
        years of experience in Front-End development.
      </li>
      <li>Expertise in all phases of Software Development Life Cycle.</li>
      <li>Extensive experience as a React JS Developer.</li>
      <li>
        Experienced in working with Redux architecture using complex
        Object-Oriented concepts in improving the performance of the websites.
      </li>
      <li>
        Extensive experience in developing web pages using HTML/HTML5, CSS/CSS3,
        JavaScript, React JS, Redux, Axios, JQuery, JSON and Bootstrap.
      </li>
      <li>
        Good Experience in React.js for creating interactive UI's using One-way
        data flow, Virtual DOM, JSX concepts. Familiar with creating Custom
        Reusable React Components.
      </li>
      <li>
        Excellent communication, problem solving and planning skills with
        ability to work independently as well as in a team.
      </li>
    </StyledUL>
  </Wrapper>
);

export default About;
