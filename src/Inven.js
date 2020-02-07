import React, { Component } from 'react'
import { Grid, Row, Col, Panel, PanelGroup } from 'react-bootstrap'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pagination from "react-js-pagination";

import { SectionContainer, SectionContainerExtension } from './mainStyleComponent'
import { Section, Content, HeaderText, Pic, PicFacebookGoogle, InputBox, InputButton, LoginBox, LoginBoxFB } from './homeStyleComponent'
import { ModalDiv, ModalBG} from './packageStyleComponent'
import Modal from './Modal'
import background from'./asset/Home/BG.png';
import BGItem from './asset/Home/BG-ITEM.png';
import ButtonName from './asset/Home/Button_NAME.png'
import ButtonNameBG from './asset/Home/BG-Button-Name.png'
import ButtonPicBG from './asset/Home/BG-ITEM-02.png'
import Hilight from './asset/Home/HILIGHT.png'
import NewTag from './asset/Home/NEW.png'
import HalfPrice from './asset/Home/Sale50p.png'
import TenPercent from './asset/Home/Sale10p.png'
import ThirtyPercent from './asset/Home/Sale30p.png'
import Hotitem from './asset/Home/HOT-New.png'
import TruIcon from './asset/Home/tru.png'
import rowBG from './asset/inven/BLACK TAP.png'

class Inven extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false, activePage: 1 }
    }

    // handlePageChange(pageNumber) {
    //     console.log(`active page is ${pageNumber}`);
    //     this.setState({activePage: pageNumber});
    //   }

      checkingDevice(){
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            return (<>
            
                <Row>
                    <Col xs={12}>
                        <img src={require('./asset/COMINGSOON[750x700].png')}></img>
                    </Col>
                </Row>
            
            </>);
        } else {
            return (<>
            
                <Row>
                    <Col md={12} lg={12}>
                        {/* <img src={require('./asset/COMINGSOON[970x900].png')}></img> */}
                        <img src={require('./asset/Home/COMINGSOON[970x510].png')}></img>
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
                            <Grid id="BagContainer" style={{backgroundColor: 'black', fontSize: '1.65rem'}}>
                            <Row>
                                <Col xs={12} md={12} lg={12}>
                                    <img style={{width: '100%'}} src={require('./asset/inven/TAP TOP.png')}></img>
                                </Col>
                            </Row>
                            {/* <Row style={{backgroundImage: `url(${rowBG})`, backgroundRepeat: 'no-repeat', backgroundSize: '95% 100%', height: 75, margin: 'auto', backgroundPositionX: '80%', alignContent: 'center', textAlign: 'center'}}>
                                <Col xs={1} md={1} lg={1}></Col>
                                <Col xs={2} md={2} lg={2}>
                                <br/>ของรางวัลกิจกรรม<br/><span style={{color: '#ffc900'}}>เซียมซี</span>
                                </Col>
                                <Col xs={1} md={1} lg={1}>
                                <img style={{position: 'absolute', top: 10}} src={require('./asset/inven/BG-item.png')}></img><img id="rewardBag" style={{position: 'absolute', left: 44, top: 19}} src={require('./asset/inven/Icon_Diamond.png')}></img>
                                </Col>
                                <Col xs={5} md={5} lg={5}>
                                <br/>
                                <span style={{color: '#a741ed'}}>ผลึกมนตรา</span><span style={{color: '#00f303'}}> X 50000</span>
                                </Col>
                                <Col xs={2} md={2} lg={2}>
                                <img style={{paddingTop: 15}} src={require('./asset/inven/Button.png')}></img>
                                </Col>
                                <Col xs={1} md={1} lg={1}>
                                
                                </Col>
                            </Row>
                            <Row><Col style={{height: 10}} xs={12} md={12} lg={12}></Col></Row>
                            <Row style={{backgroundImage: `url(${rowBG})`, backgroundRepeat: 'no-repeat', backgroundSize: '95% 100%', height: 75, margin: 'auto', backgroundPositionX: '80%', alignContent: 'center', textAlign: 'center'}}>
                                <Col xs={1} md={1} lg={1}></Col>
                                <Col xs={2} md={2} lg={2}>
                                <br/>ของรางวัลกิจกรรม<br/><span style={{color: '#ffc900'}}>เซียมซี</span>
                                </Col>
                                <Col xs={1} md={1} lg={1}>
                                <img style={{position: 'absolute', top: 10}} src={require('./asset/inven/BG-item.png')}></img><img id="rewardBag" style={{position: 'absolute', left: 44, top: 19}} src={require('./asset/inven/Icon_Diamond.png')}></img>
                                </Col>
                                <Col xs={5} md={5} lg={5}>
                                <br/>
                                <span style={{color: '#a741ed'}}>ผลึกมนตรา</span><span style={{color: '#00f303'}}> X 50000</span>
                                </Col>
                                <Col xs={2} md={2} lg={2}>
                                <img style={{paddingTop: 15}} src={require('./asset/inven/Button.png')}></img>
                                </Col>
                                <Col xs={1} md={1} lg={1}>
                                
                                </Col>
                            </Row>
                            <Row><Col style={{height: 10}} xs={12} md={12} lg={12}></Col></Row>
                            <Row style={{backgroundImage: `url(${rowBG})`, backgroundRepeat: 'no-repeat', backgroundSize: '95% 100%', height: 75, margin: 'auto', backgroundPositionX: '80%', alignContent: 'center', textAlign: 'center'}}>
                                <Col xs={1} md={1} lg={1}></Col>
                                <Col xs={2} md={2} lg={2}>
                                <br/>ของรางวัลกิจกรรม<br/><span style={{color: '#ffc900'}}>เซียมซี</span>
                                </Col>
                                <Col xs={1} md={1} lg={1}>
                                <img style={{position: 'absolute', top: 10}} src={require('./asset/inven/BG-item.png')}></img><img id="rewardBag" style={{position: 'absolute', left: 44, top: 19}} src={require('./asset/inven/Icon_Diamond.png')}></img>
                                </Col>
                                <Col xs={5} md={5} lg={5}>
                                <br/>
                                <span style={{color: '#a741ed'}}>ผลึกมนตรา</span><span style={{color: '#00f303'}}> X 50000</span>
                                </Col>
                                <Col xs={2} md={2} lg={2}>
                                <img style={{paddingTop: 15}} src={require('./asset/inven/Button.png')}></img>
                                </Col>
                                <Col xs={1} md={1} lg={1}>
                                
                                </Col>
                            </Row>
                            <Row><Col style={{height: 10}} xs={12} md={12} lg={12}></Col></Row>
                            <Row style={{backgroundImage: `url(${rowBG})`, backgroundRepeat: 'no-repeat', backgroundSize: '95% 100%', height: 75, margin: 'auto', backgroundPositionX: '80%', alignContent: 'center', textAlign: 'center'}}>
                                <Col xs={1} md={1} lg={1}></Col>
                                <Col xs={2} md={2} lg={2}>
                                <br/>ของรางวัลกิจกรรม<br/><span style={{color: '#ffc900'}}>เซียมซี</span>
                                </Col>
                                <Col xs={1} md={1} lg={1}>
                                <img style={{position: 'absolute', top: 10}} src={require('./asset/inven/BG-item.png')}></img><img id="rewardBag" style={{position: 'absolute', left: 44, top: 19}} src={require('./asset/inven/Icon_Diamond.png')}></img>
                                </Col>
                                <Col xs={5} md={5} lg={5}>
                                <br/>
                                <span style={{color: '#a741ed'}}>ผลึกมนตรา</span><span style={{color: '#00f303'}}> X 50000</span>
                                </Col>
                                <Col xs={2} md={2} lg={2}>
                                <img style={{paddingTop: 15}} src={require('./asset/inven/Button.png')}></img>
                                </Col>
                                <Col xs={1} md={1} lg={1}>
                                
                                </Col>
                            </Row>
                            <Row><Col style={{height: 10}} xs={12} md={12} lg={12}></Col></Row>
                            <Row style={{backgroundImage: `url('./asset/inven/TAP DOWN.png')`}}>
                                <Col xs={12} md={12} lg={12} style={{marginTop:10}}>
                                    
                                    <Pagination
                                        firstPageText={<i className='glyphicon glyphicon-chevron-left'/>}
                                        lastPageText={<i className='glyphicon glyphicon-chevron-right'/>}
                                        prevPageText={<i className='glyphicon glyphicon-menu-left'/>}
                                        nextPageText={<i className='glyphicon glyphicon-menu-right'/>}
                                        activePage={this.state.activePage}
                                        itemsCountPerPage={10}
                                        totalItemsCount={450}
                                        pageRangeDisplayed={5}
                                        onChange={this.handlePageChange}
                                    />
                                </Col>
                            </Row> */}
                            {this.checkingDevice()}
                            </Grid>
                        </Content>
                    </SectionContainerExtension>
                </SectionContainer>
                {/* <Modal show={this.state.isOpen} onClose={this.toggleModal}>
                    <ModalBG>
                        <ModalDiv>
                            
                        </ModalDiv>
                    </ModalBG>
                </Modal> */}
            </Section>
        )
}
}


export default Inven