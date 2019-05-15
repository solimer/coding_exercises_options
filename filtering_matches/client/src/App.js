import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Matches from './components/Matches';

const App = () => (
  <Fragment>
    <Header />
    <Matches />
    <Footer />
  </Fragment>
);

export default App;
