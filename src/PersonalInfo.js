import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { SectionContainer, SectionContainerExtension, Body } from './mainStyleComponent'
import { Section, Content, UserInfo, ServerButton, ServerBox, ServerSelect, SelectionBox, SelectionContent } from './personalStyleComponent'

const servlist = [
    "SERVER : "+"TH01",
    "SERVER : "+"TH04",
    "SERVER : "+"TH08"
]

const username = [
    "USER : "+"PLAYERNUMPLAWAN",
    "USER : "+"PLAYERNAMPLATOO",
    "USER : "+"PLAYERNAMPLATREE"
]

const useridnum = [
    "UID : "+320317501,
    "UID : "+810342717,
    "UID : "+861670028
]

const pointgiga = [
    "GIGA POINT: "+30000,
    "GIGA POINT: "+30000,
    "GIGA POINT: "+30000
]

const pointevent = [
    "EVENT POINT: "+ 30000,
    "EVENT POINT: "+ 30000,
    "EVENT POINT: "+ 30000
]

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {serv: servlist[2], use : username[2], userid : useridnum[2], gigapoint : pointgiga[2], eventpoint: pointevent[2], value: '2'}
        this.mid = this.mid.bind(this);
    }

    mid(event){
        this.setState({serv: servlist[event.target.value],
            use: username[event.target.value],
            userid: useridnum[event.target.value],
            gigapoint: pointgiga[event.target.value],
            eventpoint: pointevent[event.target.value],
            value: event.target.value});
    }

    changingCont(){
        this.setState({cont: <React.Fragment><UserInfo>USER : {this.state.use} <br /></UserInfo><UserInfo>UID : {this.state.userid} <br /></UserInfo><UserInfo>GAME : RTK <br /></UserInfo><UserInfo>SERVER : {this.state.serv} <br /></UserInfo><UserInfo>GIGA POINT: {this.state.gigapoint}</UserInfo></React.Fragment>});
    }

    render() {

        return (
        <Body>
            {/* <div style={{width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.7, position: 'absolute'}}></div> */}
            <Section>
                <SectionContainer>
                    <SectionContainerExtension>
                        <Content>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                    <span><br /><br /><br /><br /></span>
                                        <UserInfo style={{color:'#ffd84f'}}>{this.state.use} <br /></UserInfo>
                                        <UserInfo>{this.state.userid} <br /></UserInfo>
                                        <UserInfo>{this.state.serv} <br /></UserInfo>
                                        <UserInfo><img src={require('./asset/nav/[P]-Giga.png')}></img> {this.state.gigapoint} <br /></UserInfo>
                                        <UserInfo><img src={require('./asset/nav/[P]-Ev.png')}></img> {this.state.eventpoint} <br /></UserInfo>
                                    </Col>
                                </Row>
                            <ServerSelect><h1>Please select the server you want to see.</h1></ServerSelect>
                            <SelectionBox>
                            <SelectionContent id='user' onChange={this.mid} value={this.state.value}>
                                <option value='0'>TH01</option>
                                <option value='1'>TH04</option>
                                <option selected value='2'>TH08</option>
                            </SelectionContent>
                            </SelectionBox>
                        </Content>
                    </SectionContainerExtension>
                </SectionContainer>
            </Section>
        </Body>
            );
    }
}
export default PersonalInfo