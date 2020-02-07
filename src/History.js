import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import _ from 'lodash'
import ReactDOM from 'react-dom';

import { SectionContainer, SectionContainerExtension } from './mainStyleComponent'
import { Section, Content, TopicHeader, TopicText, Overline, ContentContainer, ContentContainerF, ContentContainedS, ContentContainedB, ContentContainedC, ContentContainedD, ContentContainedL, ContentContainedP } from './historyStyleComponent'

class History extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        if(localStorage.getItem("login")!==null){
        axios.post('https://3k-store-api.gigagames.co.th/history',{userId: localStorage.getItem("login")},
        {
            auth: {
                username: '7b4d3863-9ad3-4d7f-9a18-cfa731911b20',
                password: 'c9747f17-0814-428f-b257-6ee7c62038e9'
            },
            responseType: 'json',
            headers: {'Content-Type': 'application/json'}
        }).then(async response => {
            var res = await _.find(response.data, { "histories" : [] });
            console.log(response.data)
            console.log(res)
            console.log(localStorage.getItem("login"))
            if(response.data.histories==null){
                document.getElementById("noRecord").innerHTML = "ไม่มีรายการ"
             } else {document.getElementById("noRecord").innerHTML = "";}
            var resp = JSON.stringify(res)
            var resp_json = JSON.parse(resp)
            // console.log(prod_json)
            var dateline

             _.forEach(resp_json.histories, function(value, index) {
                // dateline = value[index-1].date;
                var new_row = document.createElement('div');
                //  new_row.className = "Longer"+index;
                 new_row.setAttribute("id", "contHist"+index);
                 document.getElementById("showHistory").appendChild(new_row);
                 if(response.data.histories!==null){
                    document.getElementById("noRecord").innerHTML = "";
                 } else {document.getElementById("noRecord").innerHTML = "ไม่มีรายการ"}

                ReactDOM.render((
                    <>
                    <Row style={{fontSize: 18}}>
                        <Col xs={5} sm={5} md={5} lg={5} style={{textAlign: 'left'}} >{value.title}</Col>
                        <Col style={{userSelect: 'text', msUserSelect: 'text', MozUserSelect: 'text', WebkitUserSelect: 'text'}} xs={3} sm={3} md={3} lg={3} >{value.code}</Col>
                        {/* <Col xs={3} sm={3} md={3} lg={3} >{value.price}</Col>
                        <Col xs={3} sm={3} md={3} lg={3} >{value.point}</Col>
                        <Col style={{color: '#ffd84f'}} xs={2} sm={2} md={2} lg={2} >{value.date}</Col> */}
                        <Col xs={2} sm={2} md={2} lg={2} >{value.price}</Col>
                        {/* <Col xs={3} sm={3} md={3} lg={3} >{value.point}</Col> */}
                        <Col style={{color: '#ffd84f'}} xs={2} sm={2} md={2} lg={2}>{value.date}</Col>
                    </Row>
                    {/* <Row style={{borderBottom: '5px', borderBottomColor: '#ffd84f'}}><Col xs={12} sm={12} md={12} lg={12}></Col></Row> */}
                    {/* {()=>{if(dateline!==value.date){document.write("<Row style={{borderBottom: '5px', borderBottomColor: '#ffd84f'}}><Col xs={12} sm={12} md={12} lg={12}></Col></Row>")}}} */}
                    </>
                ), document.getElementById("contHist"+index));
        });
        
        }).catch(function (error) {
            console.log(error);
          });} else {window.location.replace("/")}
    }

    render() {
        return (
            <>
            {/* <div style={{width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.7, position: 'absolute'}}></div> */}
            <Section id='history'>
                <SectionContainer>
                    <SectionContainerExtension>
                    <span><br /></span>
                    <TopicHeader>
                            <img alt="" src={require('./asset/History/B-History.png')}></img>
                        </TopicHeader>
                        <Content>
                        <span><br /><br /><br /><br /></span>
                        <Overline></Overline>
                        <ContentContainerF>
                        <Grid style={{textAlign: 'center'}}>
                            <Row>
                                <Col xs={5} sm={5} md={5} lg={5}>สินค้า</Col>
                                <Col xs={3} sm={3} md={3} lg={3} >รหัส</Col>
                                {/* <Col xs={3} sm={3} md={3} lg={3} >Price</Col>
                                <Col xs={3} sm={3} md={3} lg={3} >Point</Col>
                                <Col style={{color: '#ffd84f'}} xs={2} sm={2} md={2} lg={2} >Date</Col> */}
                                <Col xs={2} sm={2} md={2} lg={2} >ราคา</Col>
                                {/* <Col xs={3} sm={3} md={3} lg={3} >Point</Col> */}
                                <Col style={{color: '#ffd84f'}} xs={2} sm={2} md={2} lg={2} >วันที่ซื้อ</Col>
                            </Row>
                            </Grid>
                        </ContentContainerF>
                        <Overline></Overline>
                        <ContentContainer>
                            <Grid style={{textAlign: 'center'}}>
                                <Col xs={12} sm={12} md={12} lg={12} id="noRecord"></Col>
                                <div id="showHistory"></div>
                                <div style={{height: 90}}></div>
                        </Grid>
                        </ContentContainer>
                        </Content>
                    </SectionContainerExtension>
                </SectionContainer>
            </Section>
            </>
        )
    }
}

export default History