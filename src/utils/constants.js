import backgroundImage from '../../static/home.jpg';
import tudip from '../../static/tudip.png';
import cybage from '../../static/cybage.jpg';
import zensar from '../../static/zensar.png';
import classy from '../../static/classy.png';
import oml from '../../static/oml.png';
import rbros from '../../static/rbros.png';
import lirio from '../../static/lirio.png';
import passionlist from '../../static/passionlist.png';
import searchnise from '../../static/searchnise.png';
import trastar from '../../static/trastar.png';
import zppr from '../../static/zppr.png';
import HTML from '../../static/html5.png';
import REACT from '../../static/react.png';
import CSS3 from '../../static/css3.png';
import SASS from '../../static/sass.png';
import Bootstrap from '../../static/bootstrap.png';
import Materialize from '../../static/materialize.png';
import javascript from '../../static/javascript.png';
import jquery from '../../static/jquery.png';
import angular from '../../static/angular.png';
import node from '../../static/nodejs.png';
import github from '../../static/github.png';
import meteor from '../../static/meteor.png';
import sails from '../../static/sails.png';
import nest from '../../static/nest.png';
import bulma from '../../static/bulma.png';
import mongo from '../../static/mongodb.png';
import mysql from '../../static/mysql.png';
import jira from '../../static/jira.png';
import bitbucket from '../../static/bitbucket.png';
import gitlab from '../../static/gitlab.png';
import graphQL from '../../static/graphql.png';
import stitches from '../../static/stitches.png';
import styledcomponents from '../../static/styledcomponents.png';

const menuItems = [
  {
    id: 1,
    background: backgroundImage,
    name: 'intro',
  },
  {
    id: 2,
    name: 'About',
    icon: 'mdi-social-person small',
    color: '#008073',
  },
  {
    id: 3,
    name: 'Experience',
    icon: 'mdi-action-trending-up small',
    color: '#00bcd4',
  },
  {
    id: 4,
    name: 'Projects',
    icon: 'mdi-av-web small',
    color: '#3f51b5',
  },
  {
    id: 5,
    name: 'Skills',
    icon: 'mdi-av-equalizer small',
    color: '#9c27b0',
  },
  {
    id: 6,
    name: 'Education',
    icon: 'mdi-social-school small',
    color: '#F44336',
  },
  {
    id: 7,
    name: 'Awards',
    icon: 'mdi-action-grade small',
    color: '#ffeb3b',
  },
  {
    id: 8,
    name: 'Contact',
    icon: 'mdi-content-mail small',
    color: '#ff9800',
  },
  {
    id: 9,
    name: 'Resume',
    icon: 'mdi-action-description small',
    color: '#795548',
  },
];

const experience = [
  {
    company: 'Zensar Technologies',
    src: zensar,
    designation: 'Full-Stack Developer (MERN)',
    from: 'April 2021',
    to: 'Present',
    location: 'Pune (MH), India',
    accomplishments: [
      'Experience in building cross-browser layouts with CSS and HTML, DOM structure.',
      'Knowledge of Object Oriented Javascript, libraries like ReactJs, Redux.',
      'Ability to streamline releases and maintain code quality.',
      'Comfortable working across the stack including prototyping, developing, testing and deployment.',
      'Developed a Single Page Application module using React JS',
      'Utilized Redux architecture to manage the UI state.',
      'Designed, developed and tested webpages using HTML5, CSS3, Bootstrap, JavaScript, jQuery and React JS to meet accessibility and web browser standards for website',
      'Used Object Oriented Programming concepts to develop UI components that could be reused across the Web Application',
      'Worked as a backend engineer to optimize existing API calls to create efficient APIs and deprecating unwanted API calls',
      'Interacted with Testing Team and Business Analysts for fixing of issues',
      'Communicated with the client to understand the requirement of various website.',
    ],
  },
  {
    company: 'Cybage Software Pvt. Ltd.',
    src: cybage,
    designation: 'Full-Stack Developer (MERN)',
    from: 'April 2019',
    to: 'April 2021',
    location: 'Pune (MH), India',
    accomplishments: [
      'Experience in building cross-browser layouts with CSS and HTML, DOM structure.',
      'Knowledge of Object Oriented Javascript, libraries like ReactJs, Redux.',
      'Ability to streamline releases and maintain code quality.',
      'Comfortable working across the stack including prototyping, developing, testing and deployment.',
      'Developed a Single Page Application module using React JS',
      'Utilized Redux architecture to manage the UI state.',
      'Designed, developed and tested webpages using HTML5, CSS3, Bootstrap, JavaScript, jQuery and React JS to meet accessibility and web browser standards for website',
      'Used Object Oriented Programming concepts to develop UI components that could be reused across the Web Application',
      'Worked as a backend engineer to optimize existing API calls to create efficient APIs and deprecating unwanted API calls',
      'Interacted with Testing Team and Business Analysts for fixing of issues',
      'Communicated with the client to understand the requirement of various website.',
    ],
  },
  {
    company: 'Tudip Technologies Pvt. Ltd.',
    src: tudip,
    designation: 'Full-Stack Developer (MERN)',
    from: 'August 2016',
    to: 'April 2019',
    location: 'Pune (MH), India',
    accomplishments: [
      'Involved in end to end development of the applications.',
      'Programmed in a functional programming language with an eye toward code abstraction and reuse.',
      'Involved in code review, debugging, bug fixing and documentation of the overall application.',
      'Developed new components and features for our frontend app(s).',
      'Profiled and improved our frontend performance.',
      'Involved in requirement gathering.',
      'Analyzed the requirements and develop Front end specific project solutions.',
    ],
  },
];

const projects = [
  {
    title: 'Ritchie Bros',
    description: 'Ritchie Bros. Auctioneers, or simply Ritchie Bros., is industrial asset disposition & management\n'
      + 'company, selling heavy industrial equipment and trucks through live and online auctions, and\n'
      + 'other transactional channels.',
    src: rbros,
    accomplishments: [
      'Used Nx dev to generate libraries and components.',
      'Used stitches from creating styled-components.',
      'Used Radix UI for customized UI.',
      'Created storybook and jest test cases.',
      'Used cypress for end-to-end testing.',
    ],
    url: 'https://www.rbauction.com/',
  },
  {
    title: 'Old Mutual Limited',
    description: 'Old Mutual Limited (OML) is a premium African financial services group that offers a broad spectrum of financial solutions to retail and corporate customers across key markets in 14 countries.',
    src: oml,
    accomplishments: [
      'Worked on cross-browser compatibility and fixed the bugs for several browsers.',
      'Developed a Single Page Application module using React JS.',
      'Utilized Redux architecture to manage the UI state.',
      'Involved in end to end development of application.',
    ],
    url: 'https://www.oldmutual.com/',
  },
  {
    title: 'Classy',
    description: 'Create beautifully branded fundraising pages in minutes.',
    src: classy,
    accomplishments: [
      'Worked on cross-browser compatibility and fixed the bugs for several browsers.',
      'Developed a Single Page Application module using React JS.',
      'Utilized Redux architecture to manage the UI state.',
      'Involved in end to end development of application.',
    ],
    url: 'https://www.classy.org/',
  },
  {
    title: 'The Review Agency',
    description:
      'The Review Agency is a company based on review management organization.',
    src: trastar,
    accomplishments: [
      'Worked on cross-browser compatibility and fixed the bugs for several browsers.',
      'Developed a Single Page Application module using React JS.',
      'Utilized Redux architecture to manage the UI state.',
      'Profiled and improved our frontend performance',
    ],
  },
  {
    title: 'Lirio',
    description:
      'The project is website based on customer-facing applications in Energy Efficiency and e-commerce domain',
    src: lirio,
    accomplishments: [
      'Worked on cross-browser compatibility and fixed the bugs for several browsers.',
      'Developed a Single Page Application module using React JS.',
      'Utilized Redux architecture to manage the UI state.',
      'Profiled and improved our frontend performance',
    ],
    url: 'https://lirio.com/',
  },
  {
    title: 'Passion List',
    description:
      'PassionList sources the most interesting cars for sale, every day.',
    src: passionlist,
    accomplishments: [
      'Involved in implementing isomorphic application.',
      'Involved in migration process of meteor with graphql.',
      'Involved in implementation of redux store with meteor reactivity.',
      'Involved in integration of third party APIs.',
    ],
    url: 'http://www.passionlist.com/',
  },
  {
    title: 'ZPPR',
    description: 'ZPPR is a platform build for how media moves today.',
    src: zppr,
    accomplishments: [
      'Involved in end to end development of application ',
      'tInvolved in requirement gathering and client interaction.',
      'tInvolved in creating responsive design.',
      'Involved in implementing isomorphic design',
    ],
    url: 'https://zppr.io/',
  },
  {
    title: 'Searchanise',
    description:
      'Searchanise is the organization used to create e-commerce websites plugin.',
    src: searchnise,
    accomplishments: [
      'Involved in creating widget to render search functionality.',
      'Involved in creating configuration for filtering results.',
      'tInvolved in gathering requirements and analyzing it.',
    ],
  },
];

const skills = {
  HTML: [
    {
      src: HTML,
      alt: 'HTML5',
    },
    {
      src: REACT,
      alt: 'JSX',
    },
  ],
  CSS: [
    {
      src: CSS3,
      alt: 'CSS3',
    },
    {
      src: SASS,
      alt: 'SASS',
    },
    {
      src: Bootstrap,
      alt: 'Bootstrap',
    },
    {
      src: Materialize,
      alt: 'Materialize',
    },
    {
      src: bulma,
      alt: 'Bulma',
    },
    {
      src: stitches,
      alt: 'Stitches',
    },
    {
      src: styledcomponents,
      alt: 'Styled Components',
    },
  ],
  Javascript: [
    {
      src: REACT,
      alt: 'React',
    },
    {
      src: javascript,
      alt: 'Javascript',
    },
    {
      src: jquery,
      alt: 'JQuery',
    },
    {
      src: angular,
      alt: 'Angular',
    },
  ],
  BackEnd: [
    {
      src: node,
      alt: 'NodeJS',
    },
    {
      src: meteor,
      alt: 'MeteorJS',
    },
    {
      src: nest,
      alt: 'NestJS',
    },
    {
      src: sails,
      alt: 'SailsJS',
    },
  ],
  Database: [
    {
      src: mongo,
      alt: 'MongoDB',
    },
    {
      src: mysql,
      alt: 'MySQL',
    },
    {
      src: graphQL,
      alt: 'GraphQL',
    },
  ],
  Other: [
    {
      src: github,
      alt: 'Github',
    },
    {
      src: jira,
      alt: 'JIRA',
    },
    {
      src: gitlab,
      alt: 'Gitlab',
    },
    {
      src: bitbucket,
      alt: 'Bitbucket',
    },
  ],
};

export {
  menuItems,
  experience,
  projects,
  skills,
};
