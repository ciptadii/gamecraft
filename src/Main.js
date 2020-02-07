import React, { Component } from 'react';
import { Body } from './mainStyleComponent';

import Navigation from './Navigation';
import Banner from './Banner';
// import Banner2 from './Banner2';
import Home from './Home';
import Package from './Package';
import Event from './Event';

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
      </Body>
      </>
    );
  }
}

export default Main;
