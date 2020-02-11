import React, { Component } from 'react';
import { BodyLogin } from './mainStyleComponent'

import Forgotpswd from './ForgotPswd'
import NavLogin from './NavLogin'


class MainForgotpswd extends Component {
  render() {
    return (
      <BodyLogin>
        <NavLogin />
        <Forgotpswd />
      </BodyLogin>
    );
  }
}

export default MainForgotpswd;