import React from 'react'
import style from 'styled-components'
// import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { Grid, Row, Col, NavDropdown, MenuItem } from 'react-bootstrap'
import $ from 'jquery';
import axios from 'axios';
import _ from 'lodash'
import UserIcon from './asset/Home/Untitled-2s.png';
import logo from './Home/game_icon.png';
import LoginPic from './asset/nav/Profile.png';
import blackBG from './asset/top750_50.png';
// import whiteBG from './asset/searchBar.png';
import PackNav from './asset/nav/Package.png';
// import okayButton from './asset/Home/close.png'


const Nav = style.div`
    background-color: #FFFFFFFF;
    font-size: 15px;
    width: 100vw;
    position: fixed;
    z-index: 9999;
    opacity: 1.0;
    min-width: 768px;
    color: black;
          
      @media only screen and (max-width: 1920px){
        .container{
            width: 1329px;
            }
        @media only screen and (max-width: 768px){
          .container {
            width: 750px;
          }
        }
      }

    #__react_bs_dd_menuItems_1{
      background-color: black !important;
    }

    @media (max-width: 1366px) {
      font-size: 16px;
    }

    @media (max-width: 960px) {
      font-size: 11px;
    }
    
    & a {
        text-decoration: none;
        color: black;
        display: inline-block;
        vertical-align: middle;

        @media (max-height: 768px) {

          @media all and (min-width: 200px) and (max-width: 770px) {
            padding-left: 10px;
            padding-right: 10px;
          }
        }
    }

    .dropbtn {
      // background-image: url(${PackNav});
      // background-size: 100% 100%;
      // background-repeat: no-repeat;
      background-color: transparent;
      color: white;
      padding: 10px;
      font-size: 16px;
      border: none;
    }
    
    /* The container <div> - needed to position the dropdown content */
    .dropdown {
      position: relative;
      display: inline-block;
    }
    
    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
      display: none;
      margin-top: 15px;
      position: absolute;
      background-color: #000000;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
    
    /* Links inside the dropdown */
    .dropdown-content a {
      color: white;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
    
    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {background-color: transparent;}
    
    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {display: block;}
    
    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown:hover .dropbtn {background-color: transparent;}

    a#basic-nav-dropdown.dropdown-toggle{
      width: 40px;
      height: 40px;
      display: inline-block;
      border: solid white 2px;
      background-image: url(${UserIcon});
      background-size: 100% 100%;
    }

    .caret{
      display:none;
    }

    .dropdown{
      width: 40px;
      height: 40px;
      display: inline-block;
    }

    .dropdown-menu{
      background-color: black;
      color: #ffffff
      border: 1px solid white;
      border-radius: 0px;
    }

    .dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover{
      color: #ffffff;
      text-decoration: none;
      background-color: #8b0013;
    }

    .dropdown-menu>li>a{
      color: #ffffff
    }


`

const NavNoti = style.div`
  background-color: transparent;
  font-size: 15px;
  width: 100%;
  position: fixed;
  z-index: 120;
  opacity: 1.0;
  min-width: 768px;
  min-height: 80px;
  color: #ffffff;
  top: 300px;

  @media only screen and (max-width: 1920px){
    .container{
      width: 1329px;
      text-align: center;
    }
    @media only screen and (max-width: 768px){
      .container {
        width: 750px;
        text-align: center;
      }
      top: 430px !important;
    }
  }


  button{
    background-color: black;
    color: white;
  }

  .hidden {
    // -webkit-animation: fadeOut 3s;
    // animation: fadeOut 3s;

    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 2s, opacity 2s linear;
  }

  @keyframes fadeOut {
    0% { opacity: 1;}
    50% { opacity: 0.5}
    100% { opacity: 0;}
  }
`

const NavNotiLogin = style.div`
  background-color: transparent;
  font-size: 15px;
  width: 100%;
  position: fixed;
  z-index: 120;
  opacity: 1.0;
  min-width: 768px;
  min-height: 80px;
  color: #ffffff;
  top: 300px;

  @media only screen and (max-width: 1920px){
    .container{
      width: 1329px;
      text-align: center;
    }
    @media only screen and (max-width: 768px){
      .container {
        width: 750px;
        text-align: center;
      }
      top: 430px !important;
    }
  }

  button{
    background-color: black;
    color: white;
  }

  .hidden {
    // -webkit-animation: fadeOut 3s;
    // animation: fadeOut 3s;

    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 2s, opacity 2s linear;
  }

  @keyframes fadeOut {
    0% { opacity: 1;}
    50% { opacity: 0.5}
    100% { opacity: 0;}
  }
`

const NavMobi = style.div`
  background-color: #0e0000;
  font-size: 15px;
  width: 100vw;
  position: fixed;
  z-index: 9999;
  opacity: 1.0;
  min-width: 768px;
  color: black;
  bottom: 0vh;
  // top: 95%;

  @media only screen and (min-width: 768px){
    bottom: 44%;
  }
  @media only screen and (max-width: 1920px){
    .container{
      width: 1329px;
    }
    // bottom: 80vh;
    @media only screen and (max-width: 768px){
      .container {
        width: 750px;
      }
    }
  }
    
  #__react_bs_dd_menuItems_1{
    background-color: black !important;
  }

  @media (max-width: 1366px) {
    font-size: 27px;
  }

  @media (max-width: 960px) {
    font-size: 11px;
  }
  
  & a {
      text-decoration: none;
      color: black;
      display: inline-block;
      vertical-align: middle;

      @media (max-height: 768px) {

        @media all and (min-width: 200px) and (max-width: 770px) {
          padding-left: 10px;
          padding-right: 10px;
        }
      }
  }

  a#basic-nav-dropdown.dropdown-toggle{
    width: 40px;
    height: 40px;
    display: inline-block;
    background-image: url(${LoginPic});
    background-size: 100% 100%;
  }

  .caret{
    display:none;
  }

  .dropdown{
    width: 40px;
    height: 40px;
    display: inline-block;
  }

  .dropdown-menu{
    background-color: black;
    color: #ffffff
    border: 1px solid white;
    border-radius: 0px;
    top: -300%;
    left: -120px;

    @media only screen and (max-width: 768px){
      top: -235%;
      left: -260px;
      width: 300px;
      font-size: 25px;
    }
  }

  .dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover{
    color: #ffffff;
    text-decoration: none;
    background-color: #8b0013;
  }

  .dropdown-menu>li>a{
    color: #ffffff
  }
`

const HeaderTop = style.div`
  background-color: #212528;
  position: relative;
  width: 100%;
  min-width: 768px;
  min-height: 78px;
`

const Header = style.div`
  position: relative;
  margin: 0 auto;
  max-width: 1329px;
  min-width: 768px;
  // height: 4.375vw;
  min-height: 132px;
  vertical-align: middle;
`

// const LogoDiv = style.div`
//     display: inline-block;
//     width: 10%;
// `;

// const LogoLink = style.a`
//   width: 100%;
//   display: inline-block;
// `

// const Logo = style.img`
//   width: 100%;
//   padding: 5px 0;
//   display: inline-block;
// `

const NavbarContainer = style.div`
  width: 100%;
  display: inline-block;
`

// const NavBar = style.span`
//   display: inline-block;
//   text-align: center;
//   margin: 0 auto;
//   width: 90%;
//   padding-top: 13px;

//   .__react_bs_dd_menuItems_1{
//     left: 0px !important;
//     top: 50px !important;
//     min-width: 250px !important;
//   }

//   #__react_bs_dd_carat_1{
//     top: 8px;
//   }
// `

const NavBarTab = style.a`
  padding-top: 20px;
  margin: 0 8px;
  font-size: 24px;

  @media only screen and (max-width: 767px){
    margin: 0 -2px;
  }

`

const NotiCoverOne = style.img`
  position: absolute;
  width: 180vw;
  height: 190vh;
  z-index: 114;
  opacity: 0.8;
`

const NotiCoverTwo = style.img`
  position: absolute;
  width: 180vw;
  height: 190vh;
  z-index: 114;
  opacity: 0.8;
`

const NavBarTabDiv = style.a`
  margin: 0 8px;
  top: 10px;
  width: 124px !important;
  height: 41px !important;
  background-image: url(${PackNav});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media only screen and (max-width: 767px){
    margin: 0 -2px;
  }
`

const PointID = style.span`
  padding-top: 5px;
  color: black;
`

// const LoggedInCont = <NavDropdown eventKey={8} title="" id="basic-nav-dropdown"><MenuItem eventKey={8.1} href='/id'>ข้อมูลส่วนตัว</MenuItem><MenuItem eventKey={8.2} href='/history'>ประวัติการซื้อขาย</MenuItem><MenuItem eventKey={8.3} href='/history'>กระเป๋า</MenuItem><MenuItem eventKey={8.4} href='#' onClick={()=>{this.deleteCookieLogin("LoggedIn"); window.location.replace("/")}}><i className="glyphicon glyphicon-log-out"></i> &nbsp;ออกจากระบบ</MenuItem></NavDropdown>
// const NotLoggedInCont = <NavDropdown eventKey={8} title="" id="basic-nav-dropdown"><MenuItem eventKey={8.1} href='/login'>ลงชื่อเข้าใช้</MenuItem><MenuItem eventKey={8.2} href='/regis'>สร้างบัญชี</MenuItem></NavDropdown>

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = { navmenu: false }
  }

  componentDidMount() {
    this.getCookieLogin();
    this.getCookieLoginNoti();
    if (localStorage.getItem("success") !== null) {
      document.getElementById("notiBanner").style.visibility = "visible"
      document.getElementById("notiCoverOne").style.visibility = "visible"
      document.getElementById("notiText").innerHTML = "คุณได้ซื้อสินค้าสำเร็จ รหัสสินค้าของคุณคือ: " + localStorage.getItem("success");
    }
  }

  logout() {
    localStorage.clear();
    window.location.replace("/");
  }

  LoggedInCont() {
    document.getElementById("pointDisplay").style.display = 'inline-block'
    document.getElementById("textPrompt").style.display = 'none'
    // document.getElementById("notiBanner").style.visibility = "visible"
    document.getElementById("notiCoverTwo").style.visibility = "visible"
    const loggedmenu = <NavDropdown eventKey={8} title="" id="basic-nav-dropdown"><MenuItem eventKey={8.2} href='/history'>ประวัติการซื้อขาย</MenuItem><MenuItem eventKey={8.3} href='/inventory'>กระเป๋า</MenuItem><MenuItem eventKey={8.4} href='#' onClick={() => { this.logout(); }}><i className="glyphicon glyphicon-log-out"></i> &nbsp;ออกจากระบบ</MenuItem></NavDropdown>
    // <MenuItem eventKey={8.1} href='/id'>ข้อมูลส่วนตัว</MenuItem>
    this.setState({ navmenu: loggedmenu })
  }

  NotLoggedInCont() {
    document.getElementById("pointDisplay").style.display = 'none'
    document.getElementById("textPrompt").innerHTML = 'กรุณาล็อคอิน'
    const notloggedmenu = <NavDropdown eventKey={8} title="" id="basic-nav-dropdown"><MenuItem eventKey={8.1} href='/login'>ลงชื่อเข้าใช้</MenuItem><MenuItem eventKey={8.2} href='/regis'>สร้างบัญชี</MenuItem></NavDropdown>
    this.setState({ navmenu: notloggedmenu })
  }

  setCookieTab(cname) {
    var d = new Date();
    d.setTime(d.getTime() + (60000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "tab" + "= " + cname + ";" + expires + ";path=/";
  }

  deleteCookieLogin(cname) {
    var d = new Date();
    d.setTime(d.getTime() - (30 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + 'Thu, 01 Jan 1970 00:00:01 GMT';
    document.cookie = "login" + "= " + cname + ";" + expires + ";path=/";
  }

  getCookieLogin() {
    if (localStorage.getItem("login") !== null) {
      this.LoggedInCont()
    } else {
      this.NotLoggedInCont()
    }
  }

  getCookieLoginNoti() {
    if (localStorage.getItem("login") !== null) {
      if (localStorage.getItem("loginprompt") !== null) {
        // document.getElementById("#notiBannerLogin").style.visibility = "visible";
        $("#notiBannerLogin").css("visibility", "visible");
        var d = document.getElementById("notiTextLogin").innerHTML;
        document.getElementById("notiTextLogin").innerHTML = d + 'ท่านได้ลงชื่อเข้าใช้แล้ว'
        setInterval(() => {
          $("#notiBannerLogin").fadeOut();
          $("#notiCoverTwo").fadeOut();
          localStorage.removeItem('loginprompt');
        }, 5000);
      } else {
        $("#notiBannerLogin").fadeOut()
        $("#notiCoverTwo").fadeOut();
        localStorage.removeItem('loginprompt');
      }
    } else {
      $("#notiBannerLogin").fadeOut()
      $("#notiCoverTwo").fadeOut();
      localStorage.removeItem('loginprompt');
    }
  }



  checkingDevice() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      return (<>
        <NotiCoverOne id="notiCoverOne" style={{ visibility: "hidden" }} src={require('./asset/Home/black.png')}></NotiCoverOne>
        <NotiCoverTwo id="notiCoverTwo" style={{ visibility: "hidden" }} src={require('./asset/Home/black.png')}></NotiCoverTwo>
        <Nav>
          <Grid>
            <Row style={{ backgroundImage: `url(${blackBG})` }}>
              <input onChange={() => { search() }} id="searchBar"></input>
            </Row>
          </Grid>
        </Nav>
        <NavMobi>
          <Header>
            <NavbarContainer>

              <Grid style={{ textAlign: 'center', alignContent: 'center' }}>
                <Row>
                  <Col xs={9} sm={9} md={9}>
                    <NavBarTab href='/#home'><img alt='Button Home' src={require('./asset/nav/mobi/Button-HOME.png')} /></NavBarTab>
                    <NavBarTab href='/#packageHot'><img alt='Button Hot' src={require('./asset/nav/mobi/Button-Hot.png')} /></NavBarTab>
                    {/* <NavBarTab href='/package'><img src={require('./asset/nav/mobi/Button-Package.png')} /></NavBarTab> */}
                    <NavBarTab href='/packageHero'><img alt='Button Package' src={require('./asset/nav/mobi/Button-Package.png')} /></NavBarTab>
                    <NavBarTab href='/#event'><img alt='Button Event' src={require('./asset/nav/mobi/Button-Event.png')} /></NavBarTab>
                  </Col>
                  <Col xs={2} sm={2} md={2}>
                    <div id="textPrompt" style={{ display: 'inline-block', textAlign: 'center', lineHeight: 1, paddingTop: 20, fontSize: 18 }}></div>
                    <div id="pointDisplay" style={{ display: 'inline-block', textAlign: 'center', lineHeight: 1, paddingTop: 20, fontSize: 18 }}>
                      <PointID>UID: {localStorage.getItem("uid")} </PointID><br />
                      {/* <img src={require('./asset/nav/[P]-Giga.png')}></img>30000 <br />
                  <img src={require('./asset/nav/[P]-Ev.png')}></img>30000 <br /> */}
                    </div>
                  </Col>
                  <Col xs={1} sm={1} md={1} style={{ margin: '20px 0px' }}>
                    {/* <NavDropdown eventKey={8} title="" id="basic-nav-dropdown">
                  <MenuItem eventKey={8.1} href='/id'>ข้อมูลส่วนตัว</MenuItem>
                  <MenuItem eventKey={8.2} href='/history'>ประวัติการซื้อขาย</MenuItem>
                  <MenuItem eventKey={8.3} href='/history'>กระเป๋า</MenuItem>
                  <MenuItem eventKey={8.4} href='/' onClick={()=>{this.deleteCookieLogin("LoggedIn")}}><i className="glyphicon glyphicon-log-out"></i> &nbsp;ออกจากระบบ</MenuItem>
                </NavDropdown> */}
                    {this.state.navmenu}
                  </Col>
                </Row>
              </Grid>

            </NavbarContainer>
          </Header>
        </NavMobi>
        <NavNoti style={{ visibility: "hidden" }} id={"notiBanner"}>
          {/* <div id="notiText">
      <p>This is Noti</p>
      </div> */}
          <Grid style={{ backgroundColor: 'black', height: 460, zIndex: 121 }}>
            <Row>
              <Col sm={2} md={2}></Col>
              <Col sm={8} md={8} style={{ backgroundColor: '#000', width: '100%', height: '100%' }}>
                <div id="notiText" style={{ backgroundColor: '#000', width: '100%', height: '100%' }}>

                </div>
              </Col>
              <Col sm={2} md={2}></Col>
              <Col sm={8} md={8}></Col>
              <Col sm={4} md={4}>
                <div style={{ position: 'absolute', right: '5%', top: -190 }}>
                  <img width={'100%'} src={require('./asset/Home/close.png')} style={{ cursor: 'pointer', width: 50, height: 50, backgroundColor: 'transparent', border: 'transparent 20px' }} onClick={() => { document.getElementById("notiBanner").style.display = "none"; localStorage.removeItem('success'); document.getElementById("notiCoverOne").style.display = "none"; }} alt='Button Close'></img>
                </div>
              </Col>
            </Row>
          </Grid>
        </NavNoti>
        <NavNotiLogin style={{ visibility: "hidden" }} id={"notiBannerLogin"}>
          {/* <div id="notiText">
      <p>This is Noti</p>
      </div> */}
          <Grid style={{ backgroundColor: 'black', height: 460, zIndex: 120 }}>
            <Row>
              <Col sm={12} md={12} style={{ backgroundColor: '#000', width: '100%', height: '100%' }}>
                <div id="notiTextLogin" style={{ backgroundColor: '#000000', width: '100%', height: '100%', color: 'white' }}>

                </div>
              </Col>
              <Col sm={8} md={8}></Col>
              <Col sm={4} md={4}>
                <div style={{ position: 'absolute', right: '5%', top: -190 }}>
                  <img width={'100%'} src={require('./asset/Home/close.png')} style={{ cursor: 'pointer', width: 50, height: 50, backgroundColor: 'transparent', border: 'transparent 20px' }} onClick={() => { document.getElementById("notiBannerLogin").style.display = "none"; localStorage.removeItem('loginprompt'); document.getElementById("notiCoverTwo").style.display = "none"; }} alt='Button Close'></img>
                </div>
              </Col>
            </Row>
          </Grid>
        </NavNotiLogin>
      </>)
        ;
    }
    else {
      return (<>
        <NotiCoverOne id="notiCoverOne" style={{ visibility: "hidden" }} src={require('./asset/Home/black.png')}></NotiCoverOne>
        <NotiCoverTwo id="notiCoverTwo" style={{ visibility: "hidden" }} src={require('./asset/Home/black.png')}></NotiCoverTwo>
        <Nav>
          <Header>
            <NavbarContainer>
              <Grid style={{ textAlign: 'center', alignContent: 'center' }}>
                <Row>
                  <Col sm={2} md={2}><a href="/"><img style={{ paddingTop: 6 }} src={logo}></img></a></Col>
                  <Col sm={7} md={7}>
                    <NavBarTab href='/#home'><img src={require('./asset/nav/Button - 01.png')} /></NavBarTab>
                    <NavBarTab href="/#packageHot"><img src={require('./asset/nav/Hot.png')} /></NavBarTab>
                    <NavBarTabDiv className="dropdown" href='/packageHero'>
                      <button class="dropbtn"></button>
                      <div class="dropdown-content">
                        <a href="/packageHero">Hero</a>
                        <a href="/packageEquipment">Equipment</a>
                        <a href="/packageItem">Item</a>
                        <a href="/packageSpecial">Special</a>
                        {/* <a href="/package" onClick={()=>{this.setCookieTab('2')}}>Hero</a>
                        <a href="/package" onClick={()=>{this.setCookieTab('3')}}>Equipment</a>
                        <a href="/package" onClick={()=>{this.setCookieTab('4')}}>Item</a> */}
                      </div>
                    </NavBarTabDiv>
                    <NavBarTab href='/#event'><img src={require('./asset/nav/Event.png')} /></NavBarTab>
                  </Col>
                  <Col sm={2} md={2}>
                    <div id="textPrompt" style={{ display: 'inline-block', lineHeight: '13px', paddingTop: 35, textAlign: 'center' }}></div>
                    <div id="pointDisplay" style={{ display: 'inline-block', lineHeight: '13px', paddingTop: 20, textAlign: 'center' }}>
                      <PointID>UID: {localStorage.getItem("uid")} </PointID><br />
                      {/* <div style={{color: '#ff2200'}}><img src={require('./asset/nav/[P]-Giga.png')}></img>30000<br /></div>
                  <div style={{color: '#009bff'}}><img src={require('./asset/nav/[P]-Ev.png')}></img>30000<br /></div> */}
                    </div>
                  </Col>
                  <Col sm={1} md={1} style={{ paddingTop: 20 }}>
                    {/* <NavDropdown eventKey={8} title="" id="basic-nav-dropdown">
                  <MenuItem eventKey={8.1} href='/id'>ข้อมูลส่วนตัว</MenuItem>
                  <MenuItem eventKey={8.2} href='/history'>ประวัติการซื้อขาย</MenuItem>
                  <MenuItem eventKey={8.3} href='/history'>กระเป๋า</MenuItem>
                  <MenuItem eventKey={8.4} href='/' onClick={()=>{this.deleteCookieLogin("LoggedIn")}}><i class="glyphicon glyphicon-log-out"></i> &nbsp;ออกจากระบบ</MenuItem>
                </NavDropdown> */}
                    {this.state.navmenu}
                    {/* {this.getCookieLogin("login")} */}
                  </Col>
                </Row>
              </Grid>

            </NavbarContainer>
          </Header>
        </Nav>
        <NavNoti style={{ visibility: "hidden" }} id={"notiBanner"}>
          {/* <div>
      <p>This is Noti</p>
      </div> */}
          <Grid style={{ backgroundColor: 'black', height: 460, zIndex: 121 }}>
            <Row style={{ display: 'inline-block' }}>
              <Col sm={2} md={2}></Col>
              <Col sm={8} md={8} style={{ backgroundColor: '#000', width: '100%', height: '100%' }}>
                <div id="notiText" style={{ backgroundColor: '#000000', width: '100%', height: '100%', color: 'white' }}>

                </div>
              </Col>
              <Col sm={2} md={2}></Col>
              <div style={{ position: 'absolute', right: '27%', top: 15 }}>
                <img src={require('./asset/Home/close.png')} alt='Button Close' style={{ cursor: 'pointer', width: 50, height: 50, backgroundColor: 'transparent', border: 'transparent 20px' }} onClick={() => { document.getElementById("notiBanner").style.display = "none"; localStorage.removeItem('success'); document.getElementById("notiCoverOne").style.display = "none"; }}></img>
              </div>
              <Col sm={8} md={8}></Col>
              <Col sm={4} md={4}>
                {/* <button onClick={() => {document.getElementById("notiBanner").style.display = "none";}}>Okay</button>  */}
              </Col>
            </Row>
          </Grid>
          {/* <div style={{position: 'absolute', right: '30%', top: 15}}>
      <img src={require('./asset/Home/close.png')} style={{cursor: 'pointer', width: 50, height: 50, backgroundColor: 'transparent', border: 'transparent 20px'}} onClick={() => {document.getElementById("notiBanner").style.display = "none";}}></img> 
      </div> */}
        </NavNoti>
        <NavNoti style={{ visibility: "hidden" }} id={"notiBannerLogin"}>
          {/* <div>
      <p>This is Noti</p>
      </div> */}
          <Grid style={{ backgroundColor: 'black', height: 460, zIndex: 120 }}>
            <Row style={{ display: 'inline-block' }}>
              <Col sm={2} md={2}></Col>
              <Col sm={8} md={8} style={{ backgroundColor: '#000000', width: '100%', height: '100%' }}>
                <div id="notiTextLogin" style={{ backgroundColor: '#000000', width: '100%', height: '100%', color: 'white' }}>

                </div>
              </Col>
              <Col sm={2} md={2}></Col>
              <div style={{ position: 'absolute', right: '27%', top: 15 }}>
                <img src={require('./asset/Home/close.png')} alt='Button Close' style={{ cursor: 'pointer', width: 50, height: 50, backgroundColor: 'transparent', border: 'transparent 20px' }} onClick={() => { document.getElementById("notiBannerLogin").style.display = "none"; localStorage.removeItem('loginprompt'); document.getElementById("notiCoverTwo").style.display = "none"; }}></img>
              </div>
              <Col sm={8} md={8}></Col>
              <Col sm={4} md={4}>
              </Col>
            </Row>
          </Grid>
        </NavNoti>
      </>);
    }
  }

  render() {
    return (
      <>
        {this.checkingDevice()}
      </>
    )
  }
}

function search() {
  var d = document.getElementById("searchBar").value;
  // $(window).scrollTop($("*:contains("+d+"):last").offset().top);
  // window.find(d);
  // console.log(window.find(d))
  // $('input#searchBar').quicksearch('table tbody tr')
  axios.post('https://3k-store-api.gigagames.co.th/products', { userId: '1232' },
    {
      auth: {
        username: '7b4d3863-9ad3-4d7f-9a18-cfa731911b20',
        password: 'c9747f17-0814-428f-b257-6ee7c62038e9'
      },
      responseType: 'json',
      headers: { 'Content-Type': 'application/json' }
    }).then(async response => {
      var res = await _.find(response.data, { "products": [] });
      console.log(response.data)
      console.log(res)
      var prod = JSON.stringify(res.products)
      var prod_json = JSON.parse(prod)

      _.forEach(prod_json, function (value, index) {
        if (value.title.includes(d) === true) {
          // window.location.hash = value.id;
          document.getElementById(value.id).scrollIntoView({ block: "center", inline: "center" });
        }
      })
    }).catch(function (error) {
      console.log(error);
    });
}

export default Navigation
