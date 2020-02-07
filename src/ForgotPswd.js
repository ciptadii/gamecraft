import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios';

import BGRegis from './asset/regis/BG-Re.png';

class ForgotPswd extends Component {

  constructor(props) {
    super(props);

    this.state = { emailOut: false  }
    // this.handleSelect = this.handleSelect.bind(this);
}

  componentDidMount(){
    var woman
        woman=()=>{if(localStorage.getItem("login")!==null){
            return null
        } else {window.location.replace("/")}}
  }

  onChangeEmail(){
    var aa = /([=${}();:,<>()[|\[\]\/\\])/g;
    if(aa.test(document.getElementById("emailIn").value)){
        document.getElementById("emailInErr").innerHTML = "มีตัวอักษรที่ไม่สามารถใช้ได้ในอีเมล";
        document.getElementById("emailInErr").style.color = "red";
        document.getElementById("emailIn").value = document.getElementById("emailIn").value.substring(0, document.getElementById("emailIn").value.length-1);
    } else if(document.getElementById("emailIn").value!==null && document.getElementById("emailIn").value!=="") {
        document.getElementById("emailInErr").innerHTML = ""
        this.setState({
          emailOut: true
        })
    }
}

forget(){
  document.getElementById("forgotPass").disabled = true;
  document.getElementById("forgotPass").style.opacity = "0.5";
  if(this.state.emailOut == true){
  axios.post('https://user.gigagames.co.th/password/forget',
  {
      "email": document.getElementById("emailIn").value,
      "callbackUrl": "https://3k-store.gigagames.co.th/changePassword/"
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

        if(stat == "success"){
          // document.getElementById("successPrompt").innerHTML = "เราได้ส่งข้อความสำหรับการเปลี่ยนรหัสผ่านของท่าน โปรดกรุณาตรวจสอบอีเมลของท่าน"
          alert("เราได้ส่งข้อความสำหรับการเปลี่ยนรหัสผ่านของท่าน โปรดกรุณาตรวจสอบอีเมลของท่าน");
          document.getElementById("forgotPass").disabled = false;
          document.getElementById("forgotPass").style.opacity = "1.0";
        } else {
          // document.getElementById("successPrompt").innerHTML = "อีเมล์ไม่ถูกต้อง";
          alert("อีเมล์ไม่ถูกต้อง");
          document.getElementById("forgotPass").disabled = false;
          document.getElementById("forgotPass").style.opacity = "1.0";
        }
    }).catch(function (error) {
      console.log(error);
      alert("เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง")
      document.getElementById("forgotPass").disabled = false;
      document.getElementById("forgotPass").style.opacity = "1.0";
    });}  else {
      alert("กรุณากรอกอีเมล์ที่ถูกต้อง");
      document.getElementById("forgotPass").disabled = false;
      document.getElementById("forgotPass").style.opacity = "1.0";
  }
}

  render() {
    return (
      <Grid style={{textAlign: 'center', alignContent: 'center', backgroundImage: `url(${BGRegis})`,backgroundSize: '40% 100%', marginTop: 250, backgroundPositionX: 'center', backgroundRepeat: 'no-repeat'}}>
          <Row>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <h1 style={{color: 'red'}}>ลืมรหัสผ่าน</h1>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
          </Row>
          <Row>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <h4 style={{color: '#616161'}}>กรุณาใส่ E-mail ที่คุณใช้ในการสมัคร</h4>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
          </Row>
          <Row>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <input onChange={()=>{this.onChangeEmail()}} id="emailIn" className="Email" placeholder="อีเมล" style={{margin: '10px 10px', borderRadius: '3px', width: '100%', color: 'black', textAlign: 'center', alignContent: 'center', height: 36}}></input>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col id="emailInErr" xs={12} md={12} lg={12}></Col>
          </Row>
          <Row>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <button id="forgotPass" onClick={()=>{if(document.getElementById("emailIn").value !== null && document.getElementById("emailIn").value !== ""){this.forget();} else {alert("กรุณากรอกอีเมล์ที่ถูกต้อง")}}} style={{margin: '10px 10px', backgroundColor: '#12c6ff', width: '100%', border: '0px transparent', borderRadius: '3px', fontWeight: 'bold' , height: 36}}>ส่งรหัสผ่านสำรองไปทางอีเมล</button>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col id="successPrompt" style={{color: 'green'}} xs={12} md={12} lg={12}></Col>
          </Row>
      </Grid>
    );
  }
}

export default ForgotPswd;
