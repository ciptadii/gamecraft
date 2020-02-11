import React from 'react'
import style from 'styled-components'
import { Grid, Row, Col, NavDropdown, MenuItem } from 'react-bootstrap'



const NavLog = style.div`
    background-color: #2f0202;
    font-size: 15px;
    width: 100%;
    position: fixed;
    z-index: 9999;
    opacity: 1.0;
    min-width: 768px;
    color: #ffd84f;
          
      @media only screen and (max-width: 1920px){
        .container{
            width: 970px;
            }
            @media only screen and (max-width: 768px){
              .container {
               width: 750px;
              }
    }
      }
`

const NavNoti = style.div`
    background-color: #5a7c0f;
    font-size: 15px;
    width: 100%;
    position: fixed;
    z-index: 10;
    opacity: 1.0;
    min-width: 768px;
    color: #c1f26b;
    top: 107px;
    min-height: 80px;
    @media only screen and (max-width: 1920px){
      .container{
          width: 970px;
          text-align: center;
          }
          @media only screen and (max-width: 768px){
            .container {
             width: 750px;
             text-align: center;
            }
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


class NavLogin extends React.Component {

  componentDidMount(){
    // this.getCookiePromptLogin("prompt")
    // if(document.getElementById("notiText").innerHTML==null){
    //   document.getElementById("notiBanner").style.visibility = "hidden "
    // }
  }

  // getCookiePromptLogin(cname) {
  //   var name = cname + "=";
  //   var decodedCookie = decodeURIComponent(document.cookie);
  //   var ca = decodedCookie.split(';');
  //   for(var i = 0; i < ca.length; i++) {
  //     var c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //     console.log(c.substring(name.length, c.length));
  //       if(c.substring(name.length, c.length)=="NotYet"){
  //           console.log('Buy ProdId1')
  //           document.getElementById("notiText").innerHTML = "You must login first before purchasing the item(s)."
  //           // this.LoggedInCont()
  //           // var d = document.getElementById("notiText").innerHTML;
  //           // document.getElementById("notiText").innerHTML = d + 'You are logged in!!'
  //           // setInterval(() => {
  //           //   $("#notiBanner").fadeOut()
  //           // }, 5000);
  //           // window.location.replace("/TopUp")
            
  //       }
  //     } else if (c.indexOf(name) !== 0) { 
  //       console.log('No cookie Buy ProdId1')
  //       document.getElementById("notiBanner").style.visibility = "hidden"
  //       // this.NotLoggedInCont()
  //       // this.setCookiePromptLogin("NotYet");
  //       // window.location.replace("/login");
  //   }
  //   }
  // }
  
    checkingDevice(){
      if (/Mobi|Android/i.test(navigator.userAgent)) {
          return (<> 
          <a href="/"><NavLog>
            <img style={{left:'10%', height: 80, width: 'auto', position: 'absolute', marginTop: 10}} src={require('./asset/left-arrow.png')}></img>
            <Grid>
              <Row style={{backgroundColor: `#2f0202`, backgroundSize: '100% 100%'}}>
                <Col xs={12} sm={12} md={12} style={{textAlign: 'center', alignContent: 'center', margin: '0 auto'}}>
                  <img style={{margin:'10px 0px'}} src={require('./asset/nav/logo giga Payment.png')}></img>
                </Col>
              </Row>
            </Grid>
          </NavLog></a>
          </>)
          ;}
          else{
            return (<> 
                <a href="/"><NavLog>
                <img style={{left:'10%', height: 80, width: 'auto', position: 'absolute', marginTop: 10}} src={require('./asset/left-arrow.png')}></img>
                    <Grid>
                    <Row style={{backgroundColor: `#2f0202`, backgroundSize: '100% 100%'}}>
                        <Col xs={12} sm={12} md={12} style={{textAlign: 'center', alignContent: 'center', margin: '0 auto'}}>
                        <img style={{margin:'10px 0px'}} src={require('./asset/nav/logo giga Payment.png')}></img>
                        </Col>
                    </Row>
                    </Grid>
                </NavLog></a>
                {/* <NavNoti id={"notiBanner"}>
                      <div id="notiText">
                    </div>
                    <Grid>
                      <Row style={{display: 'inline-block'}}>
                        <Col sm={12} md={12} style={{backgroundColor: '#5a7c0f'}}>
                            
                        </Col>
                        <Col sm={10} md={10}></Col>
                        <Col sm={2} md={2}>
                        </Col>
                      </Row>
                    </Grid>
                    <div style={{position: 'absolute', right: '6%', top: 10}}>
                    <img width={'100%'} src={require('./asset/Home/close.png')} style={{cursor: 'pointer', width: 50, height: 50, backgroundColor: 'transparent', border: 'transparent 20px'}} onClick={() => {document.getElementById("notiBanner").style.display = "none";}}></img> 
                    </div>
              </NavNoti> */}
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
  
  export default NavLogin