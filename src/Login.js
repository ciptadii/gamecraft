import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios';


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = { id: false, pwsd: false  }
}

  componentDidMount(){

  }

  login(){
    document.getElementById("logbutt").disabled = true;
    document.getElementById("logbutt").style.opacity = "0.5";
    var uid = document.getElementById("loginID").value;
    if(this.state.pwsd == true && this.state.id == true){
    axios.post('https://user.gigagames.co.th/login',
    {
        "username": document.getElementById("loginID").value,
        "password": document.getElementById("loginPSWD").value
    },
      {
          auth: {
              username: 'a54e8008-2f32-4c68-8532-15b1ed494b18',
              password: '72c23230-b1e3-49f7-8dba-00a21c934dcd'
          },
          responseType: 'json',
          headers: {
            'Content-Type': 'application/json',
        }
      }).then(async res => {
          var stat = res.data.status;
          var gigaId = res.data.data.gigaId
          
          if(stat == "success"){
            localStorage.setItem("login", gigaId);
            localStorage.setItem("loginprompt", 'exist');
            localStorage.setItem("uid", uid);
            window.location.replace("/")
          } else {
            document.getElementById("loginErr").style.color = "red";
            // document.getElementById("loginErr").innerHTML = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
            alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
            document.getElementById("logbutt").disabled = false;
            document.getElementById("logbutt").style.opacity = "1.0";
          }
      }).catch(function (error) {
        console.log(error);
        document.getElementById("loginErr").style.color = "red"
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        document.getElementById("logbutt").disabled = false;
        document.getElementById("logbutt").style.opacity = "1.0";
      });} else {
        alert("กรุณาใส่รหัสผู้ใช้และรหัสผ่านที่ถูกต้อง");
        document.getElementById("logbutt").disabled = false;
        document.getElementById("logbutt").style.opacity = "1.0";
      }
}

  getCookieLogin(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        if(c.substring(name.length, c.length)=="LoggedIn"){
            this.setCookieLoginNoti("LoggedIn");
            window.location.replace("/")
        }
      } else if (c.indexOf(name) !== 0) { 
    }
    }
  }

  setCookieLogin(cname) {
    var d = new Date();
    d.setTime(d.getTime() + (12*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "login" + "= " + cname + ";" + expires + ";path=/";
  }

  setCookieLoginNoti(cname) {
    var d = new Date();
    d.setTime(d.getTime() + (10000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "loginNoti" + "= " + cname + ";" + expires + ";path=/";
  }

  onChangePswd(){
    var aa = /([*+?^=!:${}()``''"";|\[\]\/\\])/g;
    var bb = /([ก-๙\[\]\/\\])/g;
    if(document.getElementById("loginPSWD").value.length<6){
        document.getElementById("pswdErr").innerHTML = "รหัสผ่านต้องมีความยาวไม่น้อยกว่า 6 ตัวอักษร แต่ไม่เกิน 12 ตัวอักษร"
        document.getElementById("pswdErr").style.color = "red"
    if(aa.test(document.getElementById("loginPSWD").value)||bb.test(document.getElementById("loginPSWD").value)){
        document.getElementById("pswdErr").innerHTML = "มีตัวอักษรที่ไม่สามารถใช้ได้ในรหัสผ่าน";
        document.getElementById("pswdErr").style.color = "red";
        document.getElementById("loginPSWD").value = document.getElementById("loginPSWD").value.substring(0, document.getElementById("loginPSWD").value.length-1);
    }
} else if(document.getElementById("loginPSWD").value.length>=6||document.getElementById("loginPSWD").value.length<=0){
  if(document.getElementById("loginPSWD").value !== null && document.getElementById("loginPSWD").value !== ""){
    document.getElementById("pswdErr").innerHTML = ""
    this.setState({
      pwsd: true
    })
  }
    if(aa.test(document.getElementById("loginPSWD").value)||bb.test(document.getElementById("loginPSWD").value)){
        document.getElementById("pswdErr").innerHTML = "มีตัวอักษรที่ไม่สามารถใช้ได้ในรหัสผ่าน";
        document.getElementById("pswdErr").style.color = "red";
        document.getElementById("loginPSWD").value = document.getElementById("loginPSWD").value.substring(0, document.getElementById("loginPSWD").value.length-1);
    }
}
}

  onChangeId(){
    var aa = /([*+?^=!:${}()``''"";|\[\]\/\\])/g;
    var bb = /([ก-๙A-Z\[\]\/\\])/g;
    if(aa.test(document.getElementById("loginID").value) || bb.test(document.getElementById("loginID").value)){
        document.getElementById("loginIdErr").innerHTML = "มีตัวอักษรที่ไม่สามารถใช้ได้ในชื่อผู้ใช้";
        document.getElementById("loginIdErr").style.color = "red";
        document.getElementById("loginIdErrr").innerHTML = "(ตัวอักษรตัวพิมพ์เล็กเท่านั้น)";
        document.getElementById("loginIdErrr").style.color = "red";
        document.getElementById("loginID").value = document.getElementById("loginID").value.substring(0, document.getElementById("loginID").value.length-1);
    } else if(document.getElementById("loginID").value !== null && document.getElementById("loginID").value !== ""){
      document.getElementById("loginIdErr").innerHTML = "";
      document.getElementById("loginIdErrr").innerHTML = ""
    this.setState({
      id: true
    })
  }
  }

  render() {
    return (
      <Grid style={{fontSize: '2.2rem'}}>
          <Row style={{textAlign: 'center', alignContent: 'center', marginTop: 250}}>
                <Col xs={1} md={1} lg={1}></Col>
                <Col xs={10} md={10} lg={10}>
                    <h1 style={{color: 'red', display: 'block'}}>ลงชื่อเข้าใช้</h1>
                </Col>
                <Col xs={1} md={1} lg={1}></Col>
          </Row>
          <Row style={{textAlign: 'center', alignContent: 'center', fontWeight: 'bold'}}>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <input onChange={()=>{this.onChangeId()}} type="text" id="loginID" className="loginID" placeholder="Username" style={{margin: '10px 10px', borderRadius: '3px', width: '100%', color: 'black', textAlign: 'center', alignContent: 'center', height: 36}}></input>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col id="loginIdErr" xs={12} md={12} lg={12}></Col>
                <Col id="loginIdErrr" xs={12} md={12} lg={12}></Col>
          </Row>
          <Row style={{textAlign: 'center', alignContent: 'center', fontWeight: 'bold'}}>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <input onChange={()=>{this.onChangePswd()}} type="password" id="loginPSWD" className="loginPSWD" placeholder="รหัสผ่าน" style={{margin: '10px 10px', borderRadius: '3px', width: '100%', color: 'black', textAlign: 'center', alignContent: 'center', height: 36}}></input>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col id="pswdErr" xs={12} md={12} lg={12}></Col>
          </Row>
          <Row style={{textAlign: 'center', alignContent: 'center', fontWeight: 'bold'}}>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <button id="logbutt" onClick={()=>{if(document.getElementById("loginID").value !== null && document.getElementById("loginPSWD").value.length >=6){this.login();} else {alert("กรุณาใส่รหัสผู้ใช้และรหัสผ่านที่ถูกต้อง");}}} style={{margin: '10px 10px', backgroundColor: '#12c6ff', width: '100%', border: '0px transparent', borderRadius: '3px', fontWeight: 'bold' , height: 36}}>ลงชื่อเข้าใช้</button>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col id="loginErr" xs={12} md={12} lg={12}></Col>
          </Row>
          <Row style={{textAlign: 'center', alignContent: 'center', fontWeight: 'bold'}}>
              <Col xs={12} md={12} lg={12}><img src={require('./asset/nav/OR.png')}></img></Col>
          </Row>
          <Row style={{textAlign: 'center', alignContent: 'center', fontWeight: 'bold'}}>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                <a href="/regis"><button style={{margin: '10px 10px', backgroundColor: '#0c0c0c', color: 'white', width: '100%', borderRadius: '3px', fontWeight: 'bold' , height: 36, border: '1px solid white'}}>ลงทะเบียนบัญชีใหม่</button></a>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
          </Row>
          <Row style={{textAlign: 'center', alignContent: 'center', fontWeight: 'bold'}}>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                <a href="/forgotpswd"><button style={{margin: '10px 10px', backgroundColor: '#0c0c0c', color: '#12c6ff', width: '100%', borderRadius: '3px', fontWeight: 'bold' , height: 36, border: '1px solid white'}}>ลืมรหัสผ่าน</button></a>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
          </Row>
      </Grid>
    );
  }
}

export default Login;
