import React, { Component } from 'react';
import { BrowserRouter , Route, Link } from 'react-router-dom'
import $ from 'jquery';

import Main from './Main'
import MainHistory from './MainHistory'
import MainPackage from './MainPackage'
import MainPackItem from './MainPackItem'
import MainPackEquipment from './MainPackEquipment'
import MainRandomBox from './MainRandomBox'
import MainLogin from './MainLogin'
import MainRegis from './MainRegis'
import MainForgotpswd from './MainForgotpswd'
import MainRePswd from './MainRePswd'
import MainInven from './MainInven'
import MainSuccess from './MainSuccess'
import MainVerify from './MainVerify'

class App extends Component {
  componentDidMount(){
    var timerStart = Date.now();
    $(document).ready (function () {
      $('img').on('dragstart', function(event) { event.preventDefault(); });
      if (/Mobi|Android/i.test(navigator.userAgent)) {
      $('.container').css("width","750px");
      } else {
        $('.container').css("width","970px");
      }
  });
  var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
  console.log(loadTime);
  console.log(window.performance);
  }

  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <Route path="/" component={Main} exact />
        <Route path="/history" component={MainHistory} />
        <Route path="/packageHero" component={MainPackage} />
        <Route path="/packageItem" component={MainPackItem} />
        <Route path="/packageEquipment" component={MainPackEquipment} />
        <Route path="/packageSpecial" component={MainRandomBox} />
        <Route path="/login" component={MainLogin} />
        <Route path="/regis" component={MainRegis} />
        <Route path="/forgotpswd" component={MainForgotpswd} />
        <Route path="/changePassword/:tokenChange" component={MainRePswd} />
        <Route path="/inventory" component={MainInven} />
        <Route path="/purchase/success/:purchaseCode" component={MainSuccess} />
        <Route path="/verifyAccount/:token" component={MainVerify} />
      </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
