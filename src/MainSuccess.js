import React, { Component } from 'react';
import { Body } from './mainStyleComponent'

import Navigation from './Navigation'
import Success from './Success'

class MainSuccess extends Component {
  render() {
    return (
      <>
      {/* <div className="opaWrapper"></div> */}
      <Body>
        <Navigation />
        <Success />
      </Body>
      </>
    );
  }
}

export default MainSuccess;
