import '@bekk/storybook/build/lib/constants/styles.css';
import '@bekk/storybook/build/lib/fonts/webfonts.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header, { RoutePaths } from './Menu/Header';
import Footer from './components/Footer';
import Home from './LandingPage/Home';
import Projects from './Projects/Projects';
import Kontakt from './About/Kontakt';
import About from './About/About';
import Helse from './Helse/Helse';
import { RootContainer } from './shared/StyledComponents';

const App = () => (
  <div className="main-wrapper">
    <Router>
      <Header />
      <RootContainer>
        <Route
          render={({ location }) => (
            <Switch location={location} key={location.pathname}>
              <Route exact path={RoutePaths.PRODUCTS} component={Helse} />
              <Route exact path={RoutePaths.PROJECTS} component={Projects} />
              <Route exact path={RoutePaths.CONTACT} component={Kontakt} />
              <Route exact path={RoutePaths.ABOUT} component={About} />
              <Route exact path={RoutePaths.LANDING} component={Home} />
            </Switch>
          )}
        />
      </RootContainer>
      <Footer />
    </Router>
  </div>
);

export default App;
