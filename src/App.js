import '@bekk/storybook/build/lib/constants/styles.css';
import '@bekk/storybook/build/lib/fonts/webfonts.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header, { RoutePaths } from './Menu/Header';
import Footer from './components/Footer';
import LargeFooter from './components/LargeFooter';
import Home from './LandingPage/Home';
import Projects from './Projects/Projects';
import Kontakt from './About/Kontakt';
import About from './About/About';
import Helse from './Helse/Helse';
import Skole from './Skole/Skole';
import Barnehage from './Barnehage/Barnehage';
import Bygg from './Bygg/Bygg';
import { RootContainer } from './shared/StyledComponents';

const App = () => (
  <div className="main-wrapper">
    <Router>
      <Header />

      <Route
        render={({ location }) => (
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
        )}
      />

      <LargeFooter />
    </Router>
  </div>
);

export default App;
