import React, { Component } from 'react';
import { Body } from './mainStyleComponent'

import PackageUpgrade from './PackageUpgrade'
import Navigation from './Navigation'


class MainPackageUpgrade extends Component {
  render() {
    return (
      <Body>
        <Navigation />
        <PackageUpgrade />
      </Body>
    );
  }
}

export default MainPackageUpgrade;
