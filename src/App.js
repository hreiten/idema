import '@bekk/storybook/build/lib/constants/styles.css';
import '@bekk/storybook/build/lib/fonts/webfonts.css';

import React from 'react';
import styled  from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header, { RoutePaths } from './Menu/Header';
import LargeFooter from './components/LargeFooter';
import Home from './LandingPage/Home';
import Projects from './Projects/Projects';
import Kontakt from './About/Kontakt';
import About from './About/About';
import Helse from './Helse/Helse';
import Skole from './Skole/Skole';
import Barnehage from './Barnehage/Barnehage';
import Bygg from './Bygg/Bygg';
import ScrollToTop from './helpers/ScrollToTopController';
import { RootContainer } from './shared/StyledComponents';

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
`;


const App = () => (
  <div className="main-wrapper">
    <Router>
      <Header />
      <ScrollToTop />
      
      <Route
        render={({ location }) => (
          <Wrapper>
          <TransitionGroup>
            <CSSTransition
            key={location.pathname}
            timeout={{ enter: 300, exit: 300 }}
            classNames={'fade'}>
              <Switch location={location} key={location.pathname}>
                <Route exact path={RoutePaths.LANDING} component={Home} />
                <RootContainer>
                  <Route exact path={RoutePaths.HELSE} component={Helse} />
                  <Route exact path={RoutePaths.SKOLE} component={Skole} />
                  <Route exact path={RoutePaths.BARNEHAGE} component={Barnehage} />
                  <Route exact path={RoutePaths.BYGG} component={Bygg} />
                  <Route exact path={RoutePaths.PROJECTS} component={Projects} />
                  <Route exact path={RoutePaths.CONTACT} component={Kontakt} />
                  <Route exact path={RoutePaths.ABOUT} component={About} />
                </RootContainer>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          </Wrapper>
        )}
      />

      <LargeFooter />
    </Router>
  </div>
);

export default App;
