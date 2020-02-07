import React, { Component } from 'react';
import { Body } from './mainStyleComponent'

import PackAll from './PackAll'
import Navigation from './Navigation'


class MainPackAll extends Component {
  render() {
    return (
      <Body>
        <Navigation />
        <PackAll />
      </Body>
    );
  }
}

export default MainPackAll;
