import '@bekk/storybook/build/lib/constants/styles.css';
import '@bekk/storybook/build/lib/fonts/webfonts.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header, { RoutePaths } from './Menu/Header';
import Footer from './components/Footer';
import Home from './components/Home.tsx';
import Projects from './components/Projects';
import Kontaktinfo from './components/KontaktOss';
import BusinessArea from './components/Business';
import About from './components/About';
import Products from './components/Products';

const App = () => (
  <Router>
    <Header />
    <Route
      render={({ location }) => (
        <Switch location={location} key={location.pathname}>
          <Route exact path={RoutePaths.PRODUCTS} component={Products} />
          <Route exact path={RoutePaths.PROJECTS} component={Projects} />
          <Route exact path={RoutePaths.CONTACT} component={Kontaktinfo} />
          <Route exact path={RoutePaths.BUSINESS_AREAS} component={BusinessArea} />
          <Route exact path={RoutePaths.ABOUT} component={About} />
          <Route exact path={RoutePaths.LANDING} component={Home} />
        </Switch>
      )}
    />
    <Footer />
  </Router>
);

export default App;
