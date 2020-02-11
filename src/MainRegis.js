import React, { Component } from 'react';
import { BodyLogin } from './mainStyleComponent'

import Regis from './Regis'
import NavLogin from './NavLogin'


class MainRegis extends Component {
  render() {
    return (
      <BodyLogin>
        <NavLogin />
        <Regis />
      </BodyLogin>
    );
  }
}

export default MainRegis;