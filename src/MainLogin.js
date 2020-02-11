import React, { Component } from 'react'
import { Section } from './LoginStyle'
import { Navbar } from 'react-bootstrap'
import logo from '../src/Login/logo.png'
import google from '../src/Login/login-google.png'
import Facebook from '../src/Login/Login-Facebook.png'
import Line from '../src/Login/Login-Line.png'
import background2 from '../src/Login/Asset5.png'
import HeaderFB from '../src/Login/Login Header/Asset20.png'

// import GoogleLogin from 'react-google-login';
import FacebookLogin from './LoginFacebook'

export class Login extends Component {
  state = {
    username: null
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.props.history.push('/')
      this.setState({
        username: resultObject.user.name
        
      });
    }
  }

  // responseGoogle = (response) => {
  //   console.log(response);
  //   if (this.state.isLoggedIn === true ) {
  //     axios.post('https://my-json-server.typicode.com/Diwang81/API-test/',
  //     ).then(async res => {
  //     var stat = res.data.status;
  //     var wp = res.data.data.wp

  //     if (stat === "success") {
  //       localStorage.setItem("login", wp);
  //       window.location.replace("/")
  //       }
  //     }
  //   )};
  // }

  render() {
    const { username } = this.state;
    return (
      <Section style={{ backgroundImage: "url(" + background2 + ")" }}>
        <Navbar inverse fixedTop />
        <div className="wrapper-Body">
          <div className="wrapper-container">
            <div className="wrapper-wrapper-container">
              <img id="logo" src={logo} alt="logo" />
              <p className="title">เข้าสู่ระบบ</p>
              <p>โปรดล็อคอินด้วยช่องทางที่ผูกกับบัญชีเกมของท่าน</p>
              {/* <GoogleLogin
                  clientId="313869649394-rejfkeuinfiknt5ekr6j7gq9mloe0vr0.apps.googleusercontent.com"
                  render={renderProps => ( */}
              <a
                // onClick={renderProps.onClick}
                // disabled={renderProps.disabled}
                href="javascript:void(0);" ><img className="btn-google" src={google} /></a>
              {/* )}
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  cookiePolicy={'single_host_origin'}
                /> */}
              <p className="divider"><span>หรือ</span></p>
              {!username &&
                <a href="javascript:void(0);"
                >
                  <FacebookLogin onLogin={this.onFacebookLogin}>
                    <img className="btn-facebook" src={Facebook} />
                  </FacebookLogin>
                </a>
              }
              {username &&
                <a>
                  <img src={HeaderFB} />
                  เข้าสู่ระบบ
                </a>
              }
              <p className="divider"><span>หรือ</span></p>
              <a href="javascript:void(0);" ><img className="btn-line" src={Line} /></a>
              <p>
                <a href="/" className="policy-login-cancel" >ยกเลิก</a>
              </p>

            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default Login;
