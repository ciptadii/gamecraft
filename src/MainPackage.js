import React, { Component } from 'react';
import { Body } from './mainStyleComponent'

import PackHero from './PackHero'
import Navigation from './Navigation'


class MainPackage extends Component {
  render() {
    return (
      <Body>
        <Navigation />
        <PackHero />
      </Body>
    );
  }
}

export default MainPackage;
