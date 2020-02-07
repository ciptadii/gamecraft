import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import { SectionContainer, SectionContainerExtension } from './mainStyleComponent'
import { Section, Content } from './homeStyleComponent'

class Success extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false, activePage: 1 }
    }

    componentDidMount(){
        var path = window.location.pathname;
        var cut = path.substring(18);
        localStorage.setItem("success", cut);
        document.getElementById("notiText").innerHTML = "คุณได้ซื้อสินค้าสำเร็จ รหัสสินค้าของคุณคือ: "+localStorage.getItem("success");
        this.redirect();
        // ()=>{window.location.replace("/");}
        // localStorage.setItem("success", cut);
        // document.getElementById("showCode").innerHTML = cut;
    }

    redirect(){
        window.location.replace("/");
    }

      checkingDevice(){
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            return (<>
            
                <Row>
                    <Col xs={12}>
                        {/* <img src={require('./asset/COMINGSOON[750x700].png')}></img> */}
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
                        {/* <img src={require('./asset/COMINGSOON[970x900].png')}></img> */}
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
            <Section id='home'>
                <SectionContainer>
                    <SectionContainerExtension>
                        <Content>
                            <Grid>
                            <Row><Col style={{height: 95}} xs={12} md={12} lg={12}></Col></Row>
                            </Grid>
                            <Grid id="BagContainer" style={{ fontSize: '1.65rem'}}>
                            {/* <Row>
                                <Col xs={12} md={12} lg={12}>
                                    <img style={{width: '100%'}} src={require('./asset/inven/TAP TOP.png')}></img>
                                </Col>
                            </Row> */}
                            {this.checkingDevice()}
                            </Grid>
                        </Content>
                    </SectionContainerExtension>
                </SectionContainer>
            </Section>
        )
}
}


export default Success