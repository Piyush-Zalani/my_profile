import React from 'react';
import Section from '../Section';
import { menuItems } from '../../utils/constants';
import Home from '../Home';
import Experience from '../Experience';
import About from '../About';
import Contact from '../Contact';
import Skills from '../Skills';
import Education from '../Education';
import Projects from '../Projects';
import Achievements from '../Achievements';
import { Main } from './style';

const renderComponent = {
  0: Home,
  1: About,
  2: Experience,
  3: Projects,
  4: Skills,
  5: Education,
  6: Achievements,
  7: Contact,
};

const Content = () => (
  <Main>
    {menuItems.splice(0, menuItems.length - 1).map((item, index) => (
      <div id={item.name && item.name.toLowerCase()} key={item.id}>
        <Section
          header={!!index && item.name}
          backgroundImage={item.background}
          isTop={item.id === 2}
        >
          {renderComponent[index]
            && React.createElement(renderComponent[index], {
              key: item.id,
              block: item,
            })}
        </Section>
      </div>
    ))}
  </Main>
);

export default Content;
