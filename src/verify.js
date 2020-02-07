import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios';

import { SectionContainer, SectionContainerExtension } from './mainStyleComponent'
import { Section, Content } from './homeStyleComponent'

class Verify extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false, activePage: 1, getToken: false }
    }

    componentDidMount(){
        this.verify()
    }

    verify(){
        var path = window.location.pathname;
        var cut = path.substring(15);
        axios.post('https://user.gigagames.co.th/verify',
        {
            "token": cut
        },
          {
              auth: {
                  username: 'a54e8008-2f32-4c68-8532-15b1ed494b18',
                  password: '72c23230-b1e3-49f7-8dba-00a21c934dcd'
              },
              responseType: 'json',
              headers: {'Content-Type': 'application/json'}
          }).then(async res => {
              var stat = res.data.status;
              var gigaId = res.data.data.gigaId
              if(stat == "success"){
                localStorage.setItem("login", gigaId);
                localStorage.setItem("loginprompt", 'exist');
                window.location.replace("/")
              } else {alert("การยืนยันบัญชีผู้ใช้ล้มเหลว")}
          }).catch(function (error) {
            console.log(error);
          });
    }


      checkingDevice(){
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            return (<>
            
                <Row>
                    <Col xs={12}>
                        <div>
                            <h1>กรุณารอสักครู่ เรากำลังทำการนำท่านกลับไปยังเว็บหลัก</h1>
                        </div>
                    </Col>
                </Row>
            
            </>);
        } else {
            return (<>
            
                <Row>
                    <Col md={12} lg={12}>
                        <div>
                            <h1>กรุณารอสักครู่ เรากำลังทำการนำท่านกลับไปยังเว็บหลัก</h1>
                        </div>
                    </Col>
                </Row>
            
            </>);
        }
    }

    render() {
        return (
            <Section>
                <SectionContainer>
                    <SectionContainerExtension>
                        <Content>
                            <Grid>
                            <Row><Col style={{height: 95}} xs={12} md={12} lg={12}></Col></Row>
                            </Grid>
                            <Grid id="BagContainer" style={{ fontSize: '1.65rem'}}>
                            {this.checkingDevice()}
                            </Grid>
                        </Content>
                    </SectionContainerExtension>
                </SectionContainer>
            </Section>
        )
}
}


export default Verify