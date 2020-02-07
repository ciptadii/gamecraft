import React, { Component } from 'react';
import { Body } from './mainStyleComponent'

import PackEquipment from './PackEquipment'
import Navigation from './Navigation'


class MainPackEquipment extends Component {
  render() {
    return (
      <Body>
        <Navigation />
        <PackEquipment />
      </Body>
    );
  }
}

export default MainPackEquipment;
