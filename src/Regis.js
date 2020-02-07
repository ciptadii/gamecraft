import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios';

import BGRegis from './asset/regis/BG-Re.png';

class Regis extends Component {
    constructor(props) {
        super(props);

        this.state = { firstName: false, lastNameRegis: false, emailRegis: false, userIdRegis: false, passWd: false  }
        // this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount(){
        var man
        man=()=>{if(localStorage.getItem("login")!==null){
            return null
        } else {window.location.replace("/")}}
    }

    register(){
        if(document.getElementById("Name").value !== null && document.getElementById("LastName").value !== null && document.getElementById("Email").value !== null && document.getElementById("RegisID").value !== null && document.getElementById("RegisPSWD").value.length >=6 && document.getElementById("RegisPSWD").value !== null && document.getElementById("RegisPSWDConfirm").value == document.getElementById("RegisPSWD").value && document.getElementById("Name").value !== "" && document.getElementById("LastName").value !== "" && document.getElementById("Email").value !== "" && document.getElementById("RegisID").value !== "" && document.getElementById("RegisPSWD").value !== ""){
        console.log("Into regis func")
        document.getElementById("registerButton").disabled = true;
        document.getElementById("registerButton").style.opacity = "0.5";
        axios.post('https://user.gigagames.co.th/register',
        {
            "firstName": this.state.firstName,
            "lastName": this.state.lastNameRegis,
            "email": this.state.emailRegis,
            "username": this.state.userIdRegis,
            "password": this.state.passWd,
            "callbackUrl": "https://3k-store.gigagames.co.th/verifyAccount/"
        },
          {
              auth: {
                  username: 'a54e8008-2f32-4c68-8532-15b1ed494b18',
                  password: '72c23230-b1e3-49f7-8dba-00a21c934dcd'
              },
              responseType: 'json',
              headers: {
                'Content-Type': 'application/json'
            }
          }).then(async res => {
              var stat = res.data.status;
              console.log(stat)
              if(stat == "success"){
                localStorage.setItem("uid", this.state.userIdRegis);
                // document.getElementById("accCreated").innerHTML = "กรุณาเช็คอีเมล์และ";
                // document.getElementById("accCreated2").innerHTML = "กด ยืนยันบัญชี เพื่อเปิดใช้งาน";
                window.alert("กรุณาเช็คอีเมล์และ กดยืนยันบัญชีเพื่อเปิดใช้งาน")
                document.getElementById("registerButton").disabled = false;
                document.getElementById("registerButton").style.opacity = "1.0";
                window.location.replace("/")
              } else if(res.data.message == "User already exist."){
                // document.getElementById("accCreated").innerHTML = "อีเมล์นี้ได้มีการใช้งานแล้ว";
                // document.getElementById("accCreated2").innerHTML = "กรูณาใช้อีเมล์อื่น";
                window.alert("อีเมล์นี้ได้มีการใช้งานแล้ว กรุณาใช้อีเมล์อื่น")
                document.getElementById("registerButton").disabled = false;
                document.getElementById("registerButton").style.opacity = "1.0";
              } else {
                window.alert("ลงทะเบียนไม่สำเร็จ กรุณาตรวจสอบข้อมูลอีกครั้ง")
                document.getElementById("registerButton").disabled = false;
                document.getElementById("registerButton").style.opacity = "1.0";
                // document.getElementById("accCreated").innerHTML = "ลงทะเบียนไม่สำเร็จ";
                // document.getElementById("accCreated2").innerHTML = "กรุณาตรวจสอบข้อมูลอีกครั้ง";
            }
          }).catch(function (error) {
            console.log(error);
            console.log("API Error");
            window.alert("กรุณากรอกข้อมูลให้ครบถ้วน")
            document.getElementById("registerButton").disabled = false;
            document.getElementById("registerButton").style.opacity = "1.0";
          });
        } else {
            console.log("Condition Error");
            window.alert("กรุณากรอกข้อมูลให้ครบถ้วน")
            document.getElementById("registerButton").disabled = false;
            document.getElementById("registerButton").style.opacity = "1.0";
        }
    }

    onChangeName(){
        var aa = /([*+?^=!:${}()``''"";|\[\]\/\\])/g;
        if(aa.test(document.getElementById("Name").value)){
            document.getElementById("nameErr").innerHTML = "ไม่สามารถใช้อักขระพิเศษได้";
            document.getElementById("nameErr").style.color = "red";
            document.getElementById("Name").value = document.getElementById("Name").value.substring(0, document.getElementById("Name").value.length-1);
        } else if(document.getElementById("Name").value!==null){
            document.getElementById("nameErr").innerHTML = ""
            this.setState({
                firstName: document.getElementById("Name").value
            })
        }
    }
    onChangeLastName(){
        var aa = /([*+?^=!:${}()``''"";|\[\]\/\\])/g;
        if(aa.test(document.getElementById("LastName").value)){
            document.getElementById("lastNameErr").innerHTML = "ไม่สามารถใช้อักขระพิเศษได้";
            document.getElementById("lastNameErr").style.color = "red";
            document.getElementById("LastName").value = document.getElementById("LastName").value.substring(0, document.getElementById("LastName").value.length-1);
        } else if(document.getElementById("LastName").value!==null) {
            document.getElementById("lastNameErr").innerHTML = ""
            this.setState({
                lastNameRegis: document.getElementById("LastName").value
            })
        }
    }
    onChangeEmail(){
        var aa = /([=${}();:,<>()[|\[\]\/\\])/g;
        var bb = /([ก-๙\[\]\/\\])/g;
        if(aa.test(document.getElementById("Email").value) || bb.test(document.getElementById("Email").value)){
            document.getElementById("emailErr").innerHTML = "ไม่สามารถใช้อักขระพิเศษได้";
            document.getElementById("emailErr").style.color = "red";
            document.getElementById("Email").value = document.getElementById("Email").value.substring(0, document.getElementById("Email").value.length-1);
        } else if(document.getElementById("Email").value!==null) {
            document.getElementById("emailErr").innerHTML = ""
            this.setState({
                emailRegis: document.getElementById("Email").value
            })
        }
    }
    onChangeId(){
        var aa = /([*+?^=!:${}()``''"";|\[\]\/\\])/g;
        var bb = /([ก-๙A-Z\[\]\/\\])/g;
        if(aa.test(document.getElementById("RegisID").value) || bb.test(document.getElementById("RegisID").value)){
            document.getElementById("userIdErr").innerHTML = "มีตัวอักษรที่ไม่สามารถใช้ได้ในชื่อผู้ใช้";
            document.getElementById("userIdErr").style.color = "red";
            document.getElementById("userIdErrr").innerHTML = "(ตัวอักษรตัวพิมพ์เล็กเท่านั้น)";
            document.getElementById("userIdErrr").style.color = "red";
            document.getElementById("RegisID").value = document.getElementById("RegisID").value.substring(0, document.getElementById("RegisID").value.length-1);
        } else if(document.getElementById("RegisID").value!==null) {
            document.getElementById("userIdErr").innerHTML = ""
            document.getElementById("userIdErrr").innerHTML = ""
            this.setState({
                userIdRegis: document.getElementById("RegisID").value
            })
        }
    }
    onChangePswd(){
        var aa = /([*+?^=!:${}()``''"";|\[\]\/\\])/g;
        var bb = /([ก-๙\[\]\/\\])/g;
        if(document.getElementById("RegisPSWD").value.length<6){
            document.getElementById("passLength1").innerHTML = "ต้องมีมากกว่า 6 และไม่เกิน 12 ตัวอักษร"
            document.getElementById("passLength1").style.color = "red"
            document.getElementById("passLength3").innerHTML = "(ตัวอักษรและตัวเลขเท่านั้น)"
            document.getElementById("passLength3").style.color = "red"
            console.log(document.getElementById("RegisPSWD").value)
        if(aa.test(document.getElementById("RegisPSWD").value)||bb.test(document.getElementById("RegisPSWD").value)){
            // alert('You cannot enter illegal character.')
            // document.getElementById("RegisPSWD").value = "";
            document.getElementById("passLength2").innerHTML = "ไม่สามารถใช้อักขระพิเศษได้";
            document.getElementById("passLength2").style.color = "red";
            document.getElementById("RegisPSWD").value = document.getElementById("RegisPSWD").value.substring(0, document.getElementById("RegisPSWD").value.length-1);
            console.log(document.getElementById("RegisPSWD").value)
        }
    } else if(document.getElementById("RegisPSWD").value.length>=6||document.getElementById("RegisPSWD").value.length<=0){
        document.getElementById("passLength1").innerHTML = ""
        document.getElementById("passLength2").innerHTML = ""
        document.getElementById("passLength3").innerHTML = ""
        console.log(document.getElementById("RegisPSWD").value)
        this.setState({
            passWd: document.getElementById("RegisPSWD").value
        })
        if(aa.test(document.getElementById("RegisPSWD").value)||bb.test(document.getElementById("RegisPSWD").value)){
            // alert('You cannot enter illegal character.')
            // document.getElementById("RegisPSWD").value = "";
            document.getElementById("passLength").innerHTML = "ไม่สามารถใช้อักขระพิเศษได้";
            document.getElementById("passLength").style.color = "red";
            document.getElementById("RegisPSWD").value = document.getElementById("RegisPSWD").value.substring(0, document.getElementById("RegisPSWD").value.length-1);
            console.log(document.getElementById("RegisPSWD").value)
        }
    }
    }
    onChangeConfirmPswd(){
        if(document.getElementById("RegisPSWDConfirm").value == document.getElementById("RegisPSWD").value){
            document.getElementById("confirmErr").innerHTML = "";
        } else {
            document.getElementById("confirmErr").innerHTML = "รหัสผ่านไม่ตรงกัน";
            document.getElementById("confirmErr").style.color = "red";
        }
    }

    setCookieLogin(cname) {
        var d = new Date();
        d.setTime(d.getTime() + (12*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = "login" + "= " + cname + ";" + expires + ";path=/";
        // window.location.replace("/")
      }


  render() {
    return (
      <Grid style={{backgroundImage: `url(${BGRegis})`,backgroundSize: '50% 100%', marginTop: 250, backgroundPositionX: 'center', backgroundRepeat: 'no-repeat', fontSize: '2.2rem'}}>
          <Row style={{textAlign: 'center', alignContent: 'center', fontWeight: 'bold'}}>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <h1 style={{color: '#616161'}}>ลงทะเบียน</h1>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
          </Row>
          <Row style={{textAlign: 'center', alignContent: 'center', fontWeight: 'bold'}}>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <input id="Name" onChange={()=>{this.onChangeName()}} placeholder="ชื่อ" style={{margin: '10px 10px', borderRadius: '3px', width: '100%', color: 'black', textAlign: 'center', alignContent: 'center', height: 36}}></input>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col id="nameErr" xs={12} md={12} lg={12}></Col>
          </Row>
          <Row style={{textAlign: 'center', alignContent: 'center', fontWeight: 'bold'}}>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <input id="LastName" onChange={()=>{this.onChangeLastName()}} placeholder="นามสกุล" style={{margin: '10px 10px', borderRadius: '3px', width: '100%', color: 'black', textAlign: 'center', alignContent: 'center', height: 36   }}></input>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col id="lastNameErr" xs={12} md={12} lg={12}></Col>
          </Row>
          <Row style={{textAlign: 'center', alignContent: 'center', fontWeight: 'bold'}}>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <input id="Email" onChange={()=>{this.onChangeEmail()}} placeholder="อีเมล" style={{margin: '10px 10px', borderRadius: '3px', width: '100%', color: 'black', textAlign: 'center', alignContent: 'center', height: 36    }}></input>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col id="emailErr" xs={12} md={12} lg={12}></Col>
          </Row>
          <Row style={{textAlign: 'center', alignContent: 'center', fontWeight: 'bold'}}>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <input id="RegisID" onChange={()=>{this.onChangeId()}} placeholder="Username" style={{margin: '10px 10px', borderRadius: '3px', width: '100%', color: 'black', textAlign: 'center', alignContent: 'center', height: 36   }}></input>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col id="userIdErr" xs={12} md={12} lg={12}></Col>
                <Col id="userIdErrr" xs={12} md={12} lg={12}></Col>
          </Row>
          <Row style={{textAlign: 'center', alignContent: 'center', fontWeight: 'bold'}}>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <input type="password" onChange={()=>{this.onChangePswd()}} id="RegisPSWD" maxLength="12" placeholder="รหัสผ่าน" style={{margin: '10px 10px', borderRadius: '3px', width: '100%', color: 'black', textAlign: 'center', alignContent: 'center', height: 36 }}></input>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col id="passLength1" xs={12} md={12} lg={12}></Col>
                <Col id="passLength3" xs={12} md={12} lg={12}></Col>
                <Col id="passLength2" xs={12} md={12} lg={12}></Col>
          </Row>
          <Row style={{textAlign: 'center', alignContent: 'center', fontWeight: 'bold'}}>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <input type="password" onChange={()=>{this.onChangeConfirmPswd()}} id="RegisPSWDConfirm" maxLength="12" placeholder="ยืนยันรหัสผ่าน" style={{margin: '10px 10px', borderRadius: '3px', width: '100%', color: 'black', textAlign: 'center', alignContent: 'center', height: 36    }}></input>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col id="confirmErr" xs={12} md={12} lg={12}></Col>
          </Row>
          <Row style={{textAlign: 'center', alignContent: 'center', fontWeight: 'bold'}}>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={4} md={4} lg={4}>
                    <button id="registerButton" onClick={()=>{if(document.getElementById("Name").value !== null && document.getElementById("LastName").value !== null && document.getElementById("Email").value !== null && document.getElementById("RegisID").value !== null && document.getElementById("RegisPSWD").value.length >=6 && document.getElementById("RegisPSWD").value !== null && document.getElementById("RegisPSWDConfirm").value == document.getElementById("RegisPSWD").value){this.register()} else {window.alert("กรุณากรอกข้อมูลให้ครบ")}}} style={{margin: '10px 10px', backgroundColor: '#12c6ff', width: '100%', border: '0px transparent', borderRadius: '3px', fontWeight: 'bold' , height: 36 }}>ลงทะเบียน</button>
                </Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}></Col>
                <Col id="accCreated" xs={12} md={12} lg={12} style={{color: 'green'}}></Col>
                <Col id="accCreated2" xs={12} md={12} lg={12} style={{color: 'green'}}></Col>
          </Row>
          <Row style={{height: 50}}><Col xs={12} md={12} lg={12}></Col></Row>
      </Grid>
    );
  }
}

export default Regis;
