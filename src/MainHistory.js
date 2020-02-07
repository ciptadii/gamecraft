import React, { Component } from 'react';
import { Body } from './mainStyleComponent'

import History from './History'
import Navigation from './Navigation'


class MainID extends Component {
  render() {
    return (
      <Body>
        <Navigation />
        <History />
      </Body>
    );
  }
}

export default MainID;
