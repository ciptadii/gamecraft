import React, { Component } from 'react';
import { Body } from './mainStyleComponent'

import RandomBox from './RandomBox'
import Navigation from './Navigation'


class MainRandomBox extends Component {
  render() {
    return (
      <Body>
        <Navigation />
        <RandomBox />
      </Body>
    );
  }
}

export default MainRandomBox;
