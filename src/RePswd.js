import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios';

import BGRegis from './asset/regis/BG-Re.png';

class RePswd extends Component {

  constructor(props) {
    super(props);

    this.state = { pswd: false, repswd: false  }
}

  componentDidMount(){
    var boi
        boi=()=>{if(localStorage.getItem("login")!==null){
            return null
        } else {window.location.replace("/")}}
  }

  change(){
    document.getElementById("passChange").disabled = true;
    document.getElementById("passChange").style.opacity = "0.5";
    if(this.state.pswd == true&&this.state.repswd == true){
    var order = window.location.pathname;
    var ord = order.substring(16)
    axios.post('https://user.gigagames.co.th/password/change',
    {
        "token": ord,
        "password": document.getElementById("rePswd").value
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
  
          console.log(stat)
          // console.log(res.data.data.url)
  
          if(stat == "success"){
            // document.getElementById("pswdChanged").innerHTML = "ท่านได้เปลี่ยนรหัสผ่านของท่านเรียบร้อยแล้ว"
            alert("ท่านได้เปลี่ยนรหัสผ่านของท่านเรียบร้อยแล้ว");
            document.getElementById("passChange").disabled = false;
            document.getElementById("passChange").style.opacity = "1.0";
          } else {
            // document.getElementById("pswdChanged").innerHTML = "มีความผิดพลาดเกิดขึ้น กรุณาลองใหม่อีกครั้ง"
            alert("มีความผิดพลาดเกิดขึ้น กรุณาลองใหม่อีกครั้ง");
            document.getElementById("passChange").disabled = false;
            document.getElementById("passChange").style.opacity = "1.0";
          }
      }).catch(function (error) {
        console.log(error);
        document.getElementById("passChange").disabled = false;
        document.getElementById("passChange").style.opacity = "1.0";
      });}
       else {
        alert("รหัสผ่านไม่ตรงกัน กรุณาตรวจสอบรหัสผ่านอีกครั้ง");
        document.getElementById("passChange").disabled = false;
        document.getElementById("passChange").style.opacity = "1.0";
      }
  }

  onChangePswd(){
    var aa = /([*+?^=!:${}()``''"";|\[\]\/\\])/g;
    var bb = /([ก-๙\[\]\/\\])/g;
    console.log(document.getElementById("rePswd").value)
    if(document.getElementById("rePswd").value.length<6){
        document.getElementById("rePswdErr").innerHTML = "รหัสผ่านต้องมีความยาวไม่น้อยกว่า 6 ตัวอักษร แต่ไม่เกิน 12 ตัวอักษร"
        document.getElementById("rePswdErr").style.color = "red"
    if(aa.test(document.getElementById("rePswd").value)||bb.test(document.getElementById("rePswd").value)){
      document.getElementById("rePswdErr").innerHTML = "มีตัวอักษรที่ไม่สามารถใช้ได้ในรหัสผ่าน";
      document.getElementById("rePswdErr").style.color = "red";
      document.getElementById("rePswd").value = document.getElementById("rePswd").value.substring(0, document.getElementById("rePswd").value.length-1);
    }
} else if(document.getElementById("rePswd").value.length>=6||document.getElementById("rePswd").value.length<=0){
    document.getElementById("rePswdErr").innerHTML = ""
    this.setState({
      pswd: true
    })
    if(aa.test(document.getElementById("rePswd").value)||bb.test(document.getElementById("rePswd").value)){
      document.getElementById("rePswdErr").innerHTML = "มีตัวอักษรที่ไม่สามารถใช้ได้ในรหัสผ่าน";
      document.getElementById("rePswdErr").style.color = "red";
      document.getElementById("rePswd").value = document.getElementById("rePswd").value.substring(0, document.getElementById("rePswd").value.length-1);
    }
}
}
onChangeConfirmPswd(){
  console.log(document.getElementById("confirmRePswd").value)
    if(document.getElementById("confirmRePswd").value == document.getElementById("rePswd").value){
        document.getElementById("confirmRePswdErr").innerHTML = "";
        this.setState({
          repswd: true,
          pswd: true
        })
    } else {
        document.getElementById("confirmRePswdErr").innerHTML = "รหัสผ่านไม่ตรงกัน";
        document.getElementById("confirmRePswdErr").style.color = "red";
        this.setState({
          pswd: false
        })
    }
}

  render() {
    var order = window.location.pathname;
    var ord = order.substring(16)
    // document.getElementById("tokenPlaceholder").placeholder = ord
    return (
      <Grid style={{textAlign: 'center', alignContent: 'center', backgroundImage: `url(${BGRegis})`,backgroundSize: '50% 100%', marginTop: 250, backgroundPositionX: 'center', backgroundRepeat: 'no-repeat', fontSize: '2.2rem'}}>
          <Row>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <h1 style={{color: 'red'}}>ตั้งรหัสผ่านใหม่</h1>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
          </Row>
          <Row>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <input disabled id="tokenPlaceholder" className="Email" placeholder={ord} style={{margin: '10px 10px', borderRadius: '3px', width: '100%', color: 'black', textAlign: 'center', alignContent: 'center', height: 36}}></input>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
          </Row>
          <Row>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <input type="password" onChange={()=>{this.onChangePswd()}} id="rePswd" className="Email" placeholder="รหัสผ่านใหม่" style={{margin: '10px 10px', borderRadius: '3px', width: '100%', color: 'black', textAlign: 'center', alignContent: 'center', height: 36}}></input>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col id="rePswdErr" xs={12} md={12} lg={12}></Col>
          </Row>
          <Row>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <input type="password" onChange={()=>{this.onChangeConfirmPswd()}} id="confirmRePswd" className="Email" placeholder="ยืนยันรหัสผ่านใหม่" style={{margin: '10px 10px', borderRadius: '3px', width: '100%', color: 'black', textAlign: 'center', alignContent: 'center', height: 36}}></input>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col id="confirmRePswdErr" xs={12} md={12} lg={12}></Col>
          </Row>
          <Row>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <button id="passChange" onClick={()=>{this.change()}} style={{margin: '10px 10px', backgroundColor: '#12c6ff', borderRadius: '3px', fontWeight: 'bold' , height: 36, border: '1px solid transparent'}}>ยืนยัน</button>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col id="pswdChanged" style={{color: 'green'}} xs={12} md={12} lg={12}></Col>
          </Row>
      </Grid>
    );
  }
}

export default RePswd;
