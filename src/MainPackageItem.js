import React, { Component } from 'react';
import { Body } from './mainStyleComponent'

import PackageItem from './PackageItem'
import Navigation from './Navigation'


class MainPackageItem extends Component {
  render() {
    return (
      <Body>
        <Navigation />
        <PackageItem />
      </Body>
    );
  }
}

export default MainPackageItem;
