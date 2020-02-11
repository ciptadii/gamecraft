import React, { Component } from 'react';
import { BodyLogin } from './mainStyleComponent'

import RePswd from './RePswd'
import NavLogin from './NavLogin'


class MainRePswd extends Component {
  render() {
    return (
      <BodyLogin>
        <NavLogin />
        <RePswd />
      </BodyLogin>
    );
  }
}

export default MainRePswd;