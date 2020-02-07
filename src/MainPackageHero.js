import React, { Component } from 'react';
import { Body } from './mainStyleComponent'

import PackageHero from './PackageHero'
import Navigation from './Navigation'


class MainPackageHero extends Component {
  render() {
    return (
      <Body>
        <Navigation />
        <PackageHero />
      </Body>
    );
  }
}

export default MainPackageHero;
