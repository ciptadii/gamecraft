import React, { Component } from 'react';
import { Body } from './mainStyleComponent';

import Navigation from './Navigation';
import Banner from './Banner';
import Home from './Home';
import Package from './Package';
import Event from './Event';
import Footer from './Footer';

class Main extends Component {
  render() {
    return (
      <>
      {/* <div className="opaWrapper"></div> */}
      <Body>
        <Navigation />
        <Banner />
        <Home />
        <Package />
        <Event />
        <Footer />
      </Body>
      </>
    );
  }
}

export default Main;
