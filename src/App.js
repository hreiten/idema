import '@bekk/storybook/build/lib/constants/styles.css';
import '@bekk/storybook/build/lib/fonts/webfonts.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header, { RoutePaths } from './Menu/Header';
import Footer from './components/Footer';
import Home from './LandingPage/Home.tsx';
import Projects from './components/Projects';
import Kontaktinfo from './components/KontaktOss';
import BusinessArea from './components/Business';
import About from './components/About';
import Products from './components/Products';
import Helse from './Helse/Helse';
import LandingPage from './Landing/Landing';

const App = () => (
  <Router>
    <Header />
    <Route
      render={({ location }) => (
        <Switch location={location} key={location.pathname}>
          <Route exact path={RoutePaths.PRODUCTS} component={Products} />
          <Route exact path={RoutePaths.PROJECTS} component={Projects} />
          <Route exact path={RoutePaths.HELSE} component={Helse} />
          <Route exact path={RoutePaths.CONTACT} component={Kontaktinfo} />
          <Route exact path={RoutePaths.BUSINESS_AREAS} component={BusinessArea} />
          <Route exact path={RoutePaths.ABOUT} component={About} />
          <Route exact path={RoutePaths.LANDING} component={LandingPage} />
        </Switch>
      )}
    />
    <Footer />
  </Router>
);

export default App;
