import React, { Component } from 'react';
import { Body } from './mainStyleComponent'

import PackItem from './PackItem'
import Navigation from './Navigation'


class MainPackItem extends Component {
  render() {
    return (
      <Body>
        <Navigation />
        <PackItem />
      </Body>
    );
  }
}

export default MainPackItem;
