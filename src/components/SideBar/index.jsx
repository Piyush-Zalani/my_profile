import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { menuItems } from '../../utils/constants';
import {
  Icon,
  StyledSpan,
  StyledLink,
  StyledUL,
  StyledLI,
  Designation,
  Header,
  TopContent,
  NavBar,
} from './style';

class SideBar extends React.PureComponent {
  render() {
    return (
      <div>
        <NavBar>
          <StyledUL>
            {menuItems.map((item, index) => {
              if (index === 0) {
                return (
                  <a
                    onClick={() => scrollTo(`#${item.name.toLowerCase()}`)}
                    key={item.id}
                  >
                    <TopContent>
                      <Header>Piyush Zalani</Header>
                      <Designation>Full Stack Developer</Designation>
                    </TopContent>
                  </a>
                );
              }
              if (menuItems.length === item.id) {
                return (
                  <StyledLI key={item.id}>
                    <StyledLink
                      href="https://drive.google.com/file/d/1ZtNjq47sf5YJqabB5vsToenCDMPeTbes/view?usp=sharing"
                      target="_blank"
                      color={item.color}
                    >
                      <Icon className={item.icon} />
                      <StyledSpan>{item.name}</StyledSpan>
                    </StyledLink>
                  </StyledLI>
                );
              }
              return (
                <StyledLI key={item.id}>
                  <StyledLink
                    onClick={() => scrollTo(`#${item.name.toLowerCase()}`)}
                    color={item.color}
                  >
                    <Icon className={item.icon} />
                    <StyledSpan>{item.name}</StyledSpan>
                  </StyledLink>
                </StyledLI>
              );
            })}
          </StyledUL>
        </NavBar>
      </div>
    );
  }
}

export default SideBar;
