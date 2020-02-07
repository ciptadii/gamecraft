import React, { Component } from 'react';
import { Body } from './mainStyleComponent'

import PersonalInfo from './PersonalInfo'
import Navigation from './Navigation'


class MainID extends Component {
  render() {
    return (
      <Body>
        <Navigation />
        <PersonalInfo />
      </Body>
    );
  }
}

export default MainID;
