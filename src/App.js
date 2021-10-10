import '@bekk/storybook/build/lib/constants/styles.css';
import '@bekk/storybook/build/lib/fonts/webfonts.css';

import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header, { RoutePaths } from './Menu/Header';
import LargeFooter from './components/LargeFooter';
import Home from './LandingPage/Home';
import Kontakt from './About/Kontakt';
import About from './About/About';
import Helse from './Helse/Helse';
import Skole from './Skole/Skole';
import Barnehage from './Barnehage/Barnehage';
import Bygg from './Bygg/Bygg';
import Jobb from './Jobb/Jobb';
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


const App = () => {

  const history = createBrowserHistory();

  history.listen(location => {
    ReactGA.initialize('G-MLYCZSWL7Q');
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  })

  return (
    <div className="main-wrapper">
      <Router history={history}>
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
                      <Route exact path={RoutePaths.CONTACT} component={Kontakt} />
                      <Route exact path={RoutePaths.ABOUT} component={About} />
                      <Route exact path={RoutePaths.JOBB} component={Jobb} />
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
};

export default App;
