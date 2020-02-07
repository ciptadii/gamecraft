import React, { Component } from 'react';
import { Body } from './mainStyleComponent'

import Navigation from './Navigation'
import Topup from './Topup'

class MainTopup extends Component {
  render() {
    return (
      <>
      {/* <div className="opaWrapper"></div> */}
      <Body>
        <Navigation />
        <Topup />
      </Body>
      </>
    );
  }
}

export default MainTopup;
