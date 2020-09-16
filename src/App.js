import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
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
        <AnimatePresence initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route path="/produkter" component={Products} />
            <Route path="/prosjekter" component={Projects} />
            <Route path="/kontakt" component={Kontaktinfo} />
            <Route path="/forretningsområder" component={BusinessArea} />
            <Route path="/om" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </AnimatePresence>
      )}
    />
    <Footer />
  </Router>
);

export default App;
