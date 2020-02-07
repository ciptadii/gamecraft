import React, { Component } from 'react';
import { Body } from './mainStyleComponent'

import Navigation from './Navigation'
import Inven from './Inven'

class MainInven extends Component {
  render() {
    return (
      <>
      {/* <div className="opaWrapper"></div> */}
      <Body>
        <Navigation />
        <Inven />
      </Body>
      </>
    );
  }
}

export default MainInven;
