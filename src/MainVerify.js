import React, { Component } from 'react';
import { Body } from './mainStyleComponent'

import Navigation from './Navigation'
import Verify from './verify'

class MainVerify extends Component {
  render() {
    return (
      <>
      {/* <div className="opaWrapper"></div> */}
      <Body>
        <Navigation />
        <Verify />
      </Body>
      </>
    );
  }
}

export default MainVerify;
