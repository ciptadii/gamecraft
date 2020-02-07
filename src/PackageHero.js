import React from 'react'
import _ from 'lodash'
import { Grid, Row, Col, Panel, PanelGroup } from 'react-bootstrap'

import "react-alice-carousel/lib/alice-carousel.css";
import "react-tabs/style/react-tabs.css";

import { SectionContainer, SectionContainerExtension } from './mainStyleComponent'
import { Section, Content, ModalDiv, ModalBG } from './packageStyleComponent'
import Modal from './Modal'
import ButtonName from './asset/Home/Button_NAME.png'
import ButtonNameBG from './asset/Home/BG-Button-Name.png'
import ButtonPicBG from './asset/Home/BG-ITEM-02.png'
import BGTab from './asset/pack/BG-Button2.png'

const modContent = [
    <p>This is the first Modal.</p>,
    <p>This is the second Modal.</p>,
    <p>This is the third Modal.</p>
]

const picContent = [
    require('./asset/package/diamond.png'),
    require('./asset/package/diamond_stamina.png'),
    require('./asset/package/heropack.png')
]

class PackageHero extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false, picOpen: false, contOpen: false }
    }

    checkingDevice(){
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            return (<>
                <Row style={{backgroundImage: `url(${BGTab})`}}>
                    <Col xs={3} sm={3} md={3} style={{opacity: 0.4}}><a href="/package"><img width={'80%'} src={require('./asset/pack/packall/buttAll.png')}></img></a></Col>
                    <Col xs={3} sm={3} md={3}><a href="/packageHero"><img width={'80%'} src={require('./asset/pack/packall/buttHero.png')}></img></a></Col>
                    <Col xs={3} sm={3} md={3} style={{opacity: 0.4}}><a href="/packageUpgrade"><img width={'80%'} src={require('./asset/pack/packall/buttUp.png')}></img></a></Col>
                    <Col xs={3} sm={3} md={3} style={{opacity: 0.4}}><a href="/packageItem"><img width={'80%'} src={require('./asset/pack/packall/buttItem.png')}></img></a></Col>
                </Row>
                <Row style={{width: 750, zIndex: '100', backgroundColor: "#121212", position: "absolute"}}>
                <Col xs={12} sm={12} md={12} style={{height: 10}}></Col>
                <Col xs={4} sm={4} md={4}><div style={{textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}><img style={{position: "absolute", left: -5, top: 10}} src={require('./asset/Home/Up-Button.png')}></img><img style={{ margin: 'auto', marginTop: 20, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72}} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 20, left: 43}} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 20, position: 'absolute', left: 43}} src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% auto'}}><div style={{height: 39, width: 160, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white'}}><p style={{padding: '8px'}}>ItemHeroNo.1</p></div></div></Col>
                <Col xs={1} sm={1} md={1}></Col>
                <Col xs={7} sm={7} md={7}><div style={{height: 163, overflowY: 'scroll'}}><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img></div></Col>
                <Col xs={4} sm={4} md={4} style={{ height: 96}}>
                <select className="method" name="method">
                <option value="tru">True</option>
                <option value="lin">Line</option>
            </select>
            <input type="text" className="uid" name="uid" style={{width: '80%', display: 'inline-block'}}></input><img style={{width: '20%'}} src={require('./asset/Home/confirm.png')}></img>
            <select className="sv" name="sv">
                <option value="001">001TH</option>
                <option value="002">002TH</option>
            </select>
                </Col>
                <Col xs={4} sm={4} md={4} style={{height: 96}}><img style={{position: 'absolute', left: 0, width: '100%'}} src={require('./asset/Home/BUY-Button.png')}></img><div style={{zIndex: 666, position: 'absolute', textAlign: "center", alignContent: "center", width: '100%'}}><h1>BUY</h1></div></Col>
                </Row>
    </>);
        } else {
            return (       
            <>
            <Row style={{backgroundImage: `url(${BGTab})`}}>
                <Col sm={3} md={3} style={{opacity: 0.4}}><a href="/package"><img src={require('./asset/pack/packall/buttAll.png')}></img></a></Col>
                <Col sm={3} md={3}><a href="/packageHero"><img src={require('./asset/pack/packall/buttHero.png')}></img></a></Col>
                <Col sm={3} md={3} style={{opacity: 0.4}}><a href="/packageUpgrade"><img src={require('./asset/pack/packall/buttUp.png')}></img></a></Col>
                <Col sm={3} md={3} style={{opacity: 0.4}}><a href="/packageItem"><img src={require('./asset/pack/packall/buttItem.png')}></img></a></Col>
            </Row>
            <Row style={{width: 970, zIndex: '100', backgroundColor: "#121212", position: "absolute"}}>
            <Col sm={12} md={12} style={{height: 10}}></Col>
            <Col sm={4} md={4}><div style={{textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}><img style={{position: "absolute", left: 20, top: 10}} src={require('./asset/Home/Up-Button.png')}></img><img style={{ margin: 'auto', marginTop: 20, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72}} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 20, left: 81}} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 20, position: 'absolute', left: 81}} src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% auto'}}><div style={{height: 39, width: 160, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white'}}><p style={{padding: '8px'}}>ItemHotNo.1</p></div></div></Col>
            <Col sm={1} md={1}></Col>
            <Col sm={7} md={7}><div style={{height: 163, overflowY: 'scroll'}}><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img><img src={require('./asset/Home/ITEM-01[TEST].png')}></img></div></Col>
            <Col sm={4} md={4} style={{ height: 96}}>
            <select className="method" name="method">
                <option value="tru">True</option>
                <option value="lin">Line</option>
            </select>
            <input type="text" className="uid" name="uid" style={{width: '80%', display: 'inline-block'}}></input><img style={{width: '20%'}} src={require('./asset/Home/confirm.png')}></img>
            <select className="sv" name="sv">
                <option value="001">001TH</option>
                <option value="002">002TH</option>
            </select>
            </Col>
            <Col sm={4} md={4} style={{height: 96}}><img style={{position: 'absolute', left: 0}} src={require('./asset/Home/BUY-Button.png')}></img><div style={{zIndex: 666, position: 'absolute', textAlign: "center", alignContent: "center", width: '100%'}}><h1>BUY</h1></div></Col>
            </Row>
            </>);
        }
    }

    responsive = {
        0: { items: 1 },
        150: { items: 2 },
        300: { items: 3 },
        450: { items: 4 },
      };

      toggleModal = (data) => {
        data = data-1
        this.setState({
            picOpen: picContent[data],
            contOpen: modContent[data],
            isOpen: !this.state.isOpen
        });
    }

    render() {

        const handleOnDragStart = e => e.preventDefault()

        return (
            <Section id='package'>
                <SectionContainer>
                    <SectionContainerExtension>
                        <span><br /></span>
                        
                        <Content>
                        <Grid>
                        <Row><Col style={{height: 10}} xs={12} sm={12} md={12}></Col></Row>
                        {/* <Row>
                          <Col xs={3} sm={3} md={3}><img style={{height: 200}} src={require('./asset/3K-V5-PNG.png')}></img></Col>
                        </Row>
                        <Row><Col style={{height: 10}} xs={12} sm={12} md={12}></Col></Row> */}

                        {this.checkingDevice()}

                        <Row><Col style={{height: 10}} xs={12} sm={12} md={12}></Col></Row>
                                <Row>
                                    <Col xs={3} sm={3} md={3}></Col>
                                    <Col xs={3} sm={3} md={3}></Col>
                                    <Col xs={3} sm={3} md={3}></Col>
                                    <Col xs={3} sm={3} md={3}><img style={{width: '100%', height: 100}} src={require('./asset/facebook.png')}></img></Col>
                                </Row>

                        </Grid>
                        </Content>
                    </SectionContainerExtension>
                </SectionContainer>
                <Modal show={this.state.isOpen} onClose={this.toggleModal}>
                    <ModalBG>
                        <ModalDiv>
                            {this.checkingDevice()}
                        </ModalDiv>
                    </ModalBG>
                </Modal>
            </Section>
        )
    }
}

export default PackageHero