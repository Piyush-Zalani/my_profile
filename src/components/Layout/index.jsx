import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import scrollTo from 'gatsby-plugin-smoothscroll';
import SideBar from '../SideBar';
import Content from '../Content';
import { menuItems } from '../../utils/constants';
import {
  SlideOut,
  Designation,
  FlexGrid,
  Name,
  NameTitle,
  Nav,
  GlobalStyle,
} from './style';

class Layout extends React.Component {
  componentDidMount() {
    import('materialize-css/dist/js/materialize.min').then((M) => {
      const sidenav = document.querySelector('#slide-out');
      M.Sidenav.init(sidenav, {});
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Nav>
          <a
            href="#"
            data-target="slide-out"
            className="sidenav-trigger show-on-large"
          >
            <i className="material-icons">menu</i>
          </a>
          <NameTitle>
            <Name id="name" onClick={() => scrollTo('#intro')}>
              Piyush Zalani
            </Name>
            <Designation className="brown-text light">
              Full Stack Developer
            </Designation>
          </NameTitle>
        </Nav>
        <SlideOut id="slide-out" className="sidenav">
          {menuItems.map((item, index) => {
            if (index === 0) {
              return <div key={item.id} />;
            }
            if (menuItems.length === item.id) {
              return (
                <li key={item.id}>
                  <a
                    href="https://drive.google.com/file/d/1ZtNjq47sf5YJqabB5vsToenCDMPeTbes/view?usp=sharing"
                    target="_blank"
                  >
                    <i className="mdi-social-person small" />
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            }
            return (
              <li key={item.id}>
                <a onClick={() => scrollTo(`#${item.name.toLowerCase()}`)}>
                  <i className={item.icon} />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </SlideOut>
        <FlexGrid>
          <GlobalStyle theme="purple" />
          <SideBar />
          <Content />
          {children}
        </FlexGrid>
      </div>
    );
  }
}

export default Layout;
