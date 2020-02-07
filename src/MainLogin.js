import React, { Component } from 'react';
import { BodyLogin } from './mainStyleComponent'

import Login from './Login'
import NavLogin from './NavLogin'


class MainLogin extends Component {
  render() {
    return (
      <BodyLogin>
        <NavLogin />
        <Login />
      </BodyLogin>
    );
  }
}

export default MainLogin;
