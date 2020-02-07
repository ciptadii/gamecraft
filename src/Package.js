import React from 'react'
import axios from 'axios';
import _ from 'lodash'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Grid, Row, Col, Panel, PanelGroup } from 'react-bootstrap'

import "react-alice-carousel/lib/alice-carousel.css";
import "react-tabs/style/react-tabs.css";

import { SectionContainerEX, SectionContainerExtension } from './mainStyleComponent'
import { Section, Content, ModalDiv, ModalBG } from './packageStyleComponent'
import Modal from './Modal'
import background from './asset/Home/BG.png';
import BGItem from './asset/Home/BG-ITEM.png';
import ButtonName from './asset/Home/Button_NAME.png'
import ButtonNameBG from './asset/Home/BG-Button-Name.png'
import ButtonPicBG from './asset/Home/BG-ITEM-02.png'
import TruIcon from './asset/Home/tru.png'
import Hotitem from './asset/Home/HOT-New.png'
import NewTag from './asset/Home/NEW.png'
import HalfPrice from './asset/Home/Sale50p.png'
import TenPercent from './asset/Home/Sale10p.png'
import ThirtyPercent from './asset/Home/Sale30p.png'
import Hilight from './asset/Home/HILIGHT.png'

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

class Package extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, picOpen: false, contOpen: false, pack: false, heroCont: false, equipmentCont: false, itemCont: false }
    // this.handleSelect = this.handleSelect.bind(this);
    this.handleSelectHero = this.handleSelectHero.bind(this);
    this.handleSelectUpgrade = this.handleSelectUpgrade.bind(this);
    this.handleSelectItem = this.handleSelectItem.bind(this);
  }

  selectTrueW() {
    document.getElementsByClassName("sv").style.backgroundImage = `url(${TruIcon})`;
  }

  setCookieTab(cname) {
    var d = new Date();
    d.setTime(d.getTime() + (5000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "tab" + "= " + cname + ";" + expires + ";path=/";
  }

  checkingDeviceHero() {
    return (<><PanelGroup accordion id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
      <Row style={{ backgroundImage: `url(${background})` }}><div id="heroContMobi0"></div><div id="heroContMobi1"></div><div id="heroContMobi2"></div>
      </Row><Row style={{ backgroundImage: `url(${background})` }}><div id="heroContMobi3"></div><div id="heroContMobi4"></div><div id="heroContMobi5"></div></Row>
    </PanelGroup><PanelGroup accordion id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
        <Row style={{ backgroundImage: `url(${background})` }}><div id="heroCont0"></div><div id="heroCont1"></div><div id="heroCont2"></div>
        </Row><Row style={{ backgroundImage: `url(${background})` }}><div id="heroCont3"></div><div id="heroCont4"></div><div id="heroCont5"></div></Row>
      </PanelGroup></>);
  }

  checkingDeviceItem() {
    return (<><PanelGroup accordion id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
      <Row style={{ backgroundImage: `url(${background})` }}><div id="itemContMobi0"></div><div id="itemContMobi1"></div><div id="itemContMobi2"></div>
      </Row><Row style={{ backgroundImage: `url(${background})` }}><div id="itemContMobi3"></div><div id="itemContMobi4"></div><div id="itemContMobi5"></div></Row>
    </PanelGroup><PanelGroup accordion id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
        <Row style={{ backgroundImage: `url(${background})` }}><div id="itemCont0"></div><div id="itemCont1"></div><div id="itemCont2"></div>
        </Row><Row style={{ backgroundImage: `url(${background})` }}><div id="itemCont3"></div><div id="itemCont4"></div><div id="itemCont5"></div></Row>
      </PanelGroup></>);
  }

  checkingDeviceUpgrade() {
    return (<><PanelGroup accordion id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
      <Row style={{ backgroundImage: `url(${background})` }}><div id="equipmentContMobi0"></div><div id="equipmentContMobi1"></div><div id="equipmentContMobi2"></div>
      </Row><Row style={{ backgroundImage: `url(${background})` }}><div id="equipmentContMobi3"></div><div id="equipmentContMobi4"></div><div id="equipmentContMobi5"></div></Row>
    </PanelGroup><PanelGroup accordion id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
        <Row style={{ backgroundImage: `url(${background})` }}><div id="equipmentCont0"></div><div id="equipmentCont1"></div><div id="equipmentCont2"></div>
        </Row><Row style={{ backgroundImage: `url(${background})` }}><div id="equipmentCont3"></div><div id="equipmentCont4"></div><div id="equipmentCont5"></div></Row>
      </PanelGroup></>);

  }

  responsive = {
    0: { items: 1 },
    150: { items: 2 },
    300: { items: 3 },
    450: { items: 4 },
  };

  toggleModal = (data) => {
    data = data - 1
    this.setState({
      picOpen: picContent[data],
      contOpen: modContent[data],
      isOpen: !this.state.isOpen
    });
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  handleSelectHero(heroCont) {
    this.setState({ heroCont });
  }

  handleSelectUpgrade(equipmentCont) {
    this.setState({ equipmentCont });
  }

  handleSelectItem(itemCont) {
    this.setState({ itemCont });
  }


  renderItemCont() {
    var d = "notlogin";
    console.log(d)
    if (localStorage.getItem("login") !== null) {
      d = localStorage.getItem("login");
    }
    console.log(d)
    axios.post('https://3k-store-api.gigagames.co.th/home', { userId: d },
      {
        auth: {
          username: '7b4d3863-9ad3-4d7f-9a18-cfa731911b20',
          password: 'c9747f17-0814-428f-b257-6ee7c62038e9'
        },
        responseType: 'json',
        headers: { 'Content-Type': 'application/json' }
      }).then(async response => {
        var res = await _.find(response.data, { "products": [] });
        console.log(response.data)
        console.log(res)
        var bannerUrl = JSON.stringify(res.banners)
        var bannerUrl_json = JSON.parse(bannerUrl)
        var prod = JSON.stringify(res.products)
        var prod_json = JSON.parse(prod)
        var i = 0;

        _.forEach(prod_json, function (value, index) {
          if (value.sectionId == 'item') {
            // item.push(value)
            var new_row = document.createElement('div');
            new_row.className = value.sectionId;
            new_row.setAttribute("id", "contIte" + index);
            document.getElementById("contIte").appendChild(new_row);

            var packId = value.id;
            var channId = value.channels[0].id;

            console.log(packId)
            console.log(channId)
            console.log(index)
            var texx
            if (value.purchaseLimitReset !== null && value.purchaseLimitReset == "w") {
              texx = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้อาทิตย์ละครั้งเท่านั้น "
            } else if (value.purchaseLimitReset !== null && value.purchaseLimitReset == "d") {
              texx = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้วันละครั้งเท่านั้น "
            } else if (value.purchaseLimitReset == null) {
              texx = "หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้ครั้งเดียวเท่านั้น"
            }
            if (/Mobi|Android/i.test(navigator.userAgent)) {
              ReactDOM.render(
                (<><Col id={packId} xs={4} sm={4} md={4} ><Panel className="selectNbuy" eventKey={index + 6}>
                  <Panel.Heading style={{ padding: 0, backgroundColor: '#121212' }}>
                    <Panel.Title toggle>
                      <div className={"Null-" + value.tagId} style={{ position: 'absolute', backgroundImage: `url(${NewTag})`, width: 57, height: 18, left: 1, top: 1, zIndex: 101 }}></div><div id={"panel-title-" + index} id={"hilight" + i} style={{ position: 'absolute', backgroundImage: `url(${Hilight})`, backgroundSize: '100% 100%', width: '100%', height: 256, top: 0 }}><img id="hilightcover" src={require('./asset/Home/black.png')} style={{ height: 256, top: 0, zIndex: 110, left: -0, width: 250 }}></img><img id="hilightcover3" src={require('./asset/Home/black.png')} style={{ height: 256, top: 0, zIndex: 110, left: -500, width: 250 }}></img><img id="hilightcover2" src={require('./asset/Home/black.png')} style={{ height: 256, top: 0, zIndex: 110, left: -500, width: 250 }}></img></div><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 46 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 46 }} id={"pic" + index} srcset={value.url} src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%' }}><div style={{ height: 36, width: 230, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white', backgroundSize: '100% 100%' }}><p id={"title" + index} style={{ fontSize: 20 }}>{value.title}</p></div></div>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                    <>
                      <Row id={"panel-body-" + i} style={{ width: 750, left: -485, zIndex: '100', backgroundColor: "#121212", position: "absolute" }}>
                        <Col xs={4} sm={4} md={4}><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 43 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 43 }} id={"subpic" + index} srcset={value.url} src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%' }}><div style={{ height: 36, width: 230, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white', backgroundSize: '100% 100%' }}><p id={"subtitle" + index} style={{ fontSize: 20 }}>{value.title}</p></div></div></Col>
                        <Col xs={8} sm={8} md={8}><div style={{ height: 15 }}></div><div id="itemlist" style={{ height: 200, overflowY: 'scroll', msScrollbarBaseColor: 'blue', msScrollbarArrowColor: 'red' }}><p id={"desc" + index}>{value.description}</p><h1 style={{ color: "red", fontSize: "20px" }}>{texx}</h1></div></Col>
                        <Col xs={5} sm={5} md={5} style={{ height: 48 }}>
                          <select className="sv" id="sv" name="sv">
                            <option style={{ backgroundImage: `url(${TruIcon})`, background: '#230102 no-repeat 10% 50%', fontSize: 24 }} className="TrueW" id="TrueW" value="TrueW"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True Wallet</option>
                          </select>
                        </Col>
                        <Col xs={3} sm={3} md={3} style={{ height: 48, cursor: 'pointer' }} id={"itembutt" + index} onClick={() => { sendOrderPack(packId, channId) }}><img style={{ position: 'absolute', left: 0, width: '100%', height: 54 }} src={require('./asset/Home/BUY Button.png')}></img><div style={{ zIndex: 666, position: 'absolute', textAlign: "center", alignContent: "center", width: '100%' }}><h1 id={"price" + index} style={{ margin: "7px 0px" }}>{value.amount} บาท</h1></div></Col>
                      </Row>
                    </>
                  </Panel.Body>
                </Panel>
                </Col>
                  {/* {()=>{if(value.purchaseCount>=value.purchaseLimit){
                document.getElementById(value.id).style.visibility = "hidden";
                }}} */}
                </>), document.getElementById("itemCont" + i));
            } else {
              ReactDOM.render(
                (<>
                  <Col id={packId} sm={4} md={4} ><Panel eventKey={index + 6}>
                    <Panel.Heading style={{ padding: 0, backgroundColor: '#121212' }}>
                      <Panel.Title toggle>
                        <div className={"Null-" + value.tagId} style={{ position: 'absolute', backgroundImage: `url(${NewTag})`, width: 57, height: 18, left: 1, top: 1, zIndex: 101 }}></div><div id={"panel-title-" + index} id={"hilight" + i} style={{ position: 'absolute', backgroundImage: `url(${Hilight})`, backgroundSize: '100% 100%', width: '100%', height: 270, top: 0 }}><img id="hilightcover" src={require('./asset/Home/black.png')} style={{ height: 270, width: 970, top: 0, zIndex: 110 }}></img><img id="hilightcover2" src={require('./asset/Home/black.png')} style={{ height: 270, top: 0, zIndex: 111, left: 323.3, width: 323.3 }}></img><img id="hilightcover3" src={require('./asset/Home/black.png')} style={{ height: 270, top: 0, zIndex: 111, left: 323.3, width: 323.3 }}></img></div><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 30, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 81 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 81 }} id={"pic" + index} srcset={value.url} src={require('./asset/Home/item(05).png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%', height: 50 }}><div style={{ paddingTop: 6 }}><div style={{ height: 36, width: 230, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white', backgroundSize: '100% 100%' }}><p id={"title" + index} style={{ fontSize: 20 }}>{value.title}</p></div></div></div>
                      </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                      <>
                        <Row id={"panel-body-" + i} style={{ width: 970, left: 15, zIndex: '100', backgroundColor: "#121212", position: "absolute" }}>
                          <Col sm={4} md={4}><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 81 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 81 }} id={"subpic" + index} srcset={value.url} src={require('./asset/Home/item(05).png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%', height: 50 }}><div style={{ paddingTop: 6 }}><div style={{ height: 36, width: 230, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white', backgroundSize: '100% 100%' }}><p id={"subtitle" + index} style={{ fontSize: 20 }}>{value.title}</p></div></div></div></Col>
                          <Col xs={8} sm={8} md={8}><div style={{ height: 15 }}></div><div id="itemlist" style={{ height: 207, overflowY: 'scroll', msScrollbarBaseColor: 'blue', msScrollbarArrowColor: 'red' }}><p id={"desc" + index}>{value.description}</p><h1 style={{ color: "red", fontSize: "20px" }}>{texx}</h1></div></Col>
                          <Col xs={5} sm={5} md={5} style={{ height: 48 }}>
                            <select className="sv" id="sv" name="sv">
                              <option style={{ backgroundImage: `url(${TruIcon})`, background: '#230102 no-repeat 10% 50%', fontSize: 24 }} className="TrueW" id="TrueW" value="TrueW"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True Wallet</option>
                            </select>
                          </Col>
                          <Col xs={3} sm={3} md={3} style={{ height: 48, cursor: 'pointer' }} id={"itembutt" + index} onClick={() => { sendOrderPack(packId, channId) }}><img style={{ position: 'absolute', left: 0, width: '100%', height: 54 }} src={require('./asset/Home/BUY Button.png')}></img><div style={{ zIndex: 666, position: 'absolute', textAlign: "center", alignContent: "center", width: '100%' }}><h1 id={"price" + index} style={{ margin: "7px 0px" }}>{value.amount} บาท</h1></div></Col>
                        </Row>
                      </>
                    </Panel.Body>
                  </Panel>
                  </Col>
                  {/* {()=>{if(value.purchaseCount>=value.purchaseLimit){
                document.getElementById(value.id).style.visibility = "hidden";
                }}} */}
                </>)
                , document.getElementById("itemCont" + i));
            }
            i++;
            if (value.purchaseCount >= value.purchaseLimit && value.purchaseLimit !== null) {
              document.getElementById("title" + index).innerHTML = "ซื้อแพ็คนี้ไปแล้ว";
              document.getElementById("pic" + index).srcset = require('./asset/Home/PACK-[ITEM].png');
              document.getElementById("subtitle" + index).innerHTML = "ซื้อแพ็คนี้ไปแล้ว";
              document.getElementById("subpic" + index).srcset = require('./asset/Home/PACK-[ITEM].png');
              document.getElementById("price" + index).innerHTML = "";
              document.getElementById("itembutt" + index).style.pointerEvents = "none";
              // $("#itembutt"+index).off();
              // $( "body" )
              //     .off( "click", "#itembutt"+index, sendOrderPack );
            }
          }
          // if(value.purchaseCount>=value.purchaseLimit){
          //     document.getElementById(value.id);
          // }
        });
      });
  }

  renderHeroCont() {
    var d = "notlogin";
    console.log(d)
    if (localStorage.getItem("login") !== null) {
      d = localStorage.getItem("login");
    }
    console.log(d)
    axios.post('https://3k-store-api.gigagames.co.th/home', { userId: d },
      {
        auth: {
          username: '7b4d3863-9ad3-4d7f-9a18-cfa731911b20',
          password: 'c9747f17-0814-428f-b257-6ee7c62038e9'
        },
        responseType: 'json',
        headers: { 'Content-Type': 'application/json' }
      }).then(async response => {
        var res = await _.find(response.data, { "products": [] });
        console.log(response.data)
        console.log(res)
        var bannerUrl = JSON.stringify(res.banners)
        var bannerUrl_json = JSON.parse(bannerUrl)
        var prod = JSON.stringify(res.products)
        var prod_json = JSON.parse(prod)
        var i = 0;

        // var parseResult = {}, hero = [], equipment = [], item = []
        _.forEach(prod_json, function (value, index) {
          if (value.sectionId == 'hero') {
            // hero.push(value)
            var new_row = document.createElement('div');
            new_row.className = value.sectionId;
            new_row.setAttribute("id", "contHer" + index);
            document.getElementById("contHer").appendChild(new_row);

            var packId = value.id;
            var channId = value.channels[0].id;
            console.log(packId)
            console.log(channId)
            var texx
            if (value.purchaseLimitReset !== null && value.purchaseLimitReset == "w") {
              texx = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้อาทิตย์ละครั้งเท่านั้น "
            } else if (value.purchaseLimitReset !== null && value.purchaseLimitReset == "d") {
              texx = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้วันละครั้งเท่านั้น "
            } else if (value.purchaseLimitReset == null) {
              texx = "หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้ครั้งเดียวเท่านั้น"
            }

            if (/Mobi|Android/i.test(navigator.userAgent)) {
              ReactDOM.render(
                (<><Col id={packId} xs={4} sm={4} md={4} ><Panel className="selectNbuy" eventKey={index + 6}>
                  <Panel.Heading style={{ padding: 0, backgroundColor: '#121212' }}>
                    <Panel.Title toggle>
                      <div className={"Null-" + value.tagId} style={{ position: 'absolute', backgroundImage: `url(${NewTag})`, width: 57, height: 18, left: 1, top: 1, zIndex: 101 }}></div><div id={"panel-title-" + index} id={"hilight" + i} style={{ position: 'absolute', backgroundImage: `url(${Hilight})`, backgroundSize: '100% 100%', width: '100%', height: 256, top: 0 }}><img id="hilightcover" src={require('./asset/Home/black.png')} style={{ height: 256, top: 0, zIndex: 110, left: -0, width: 250 }}></img><img id="hilightcover3" src={require('./asset/Home/black.png')} style={{ height: 256, top: 0, zIndex: 110, left: -500, width: 250 }}></img><img id="hilightcover2" src={require('./asset/Home/black.png')} style={{ height: 256, top: 0, zIndex: 110, left: -500, width: 250 }}></img></div><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 46 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 46 }} id={"pic" + index} srcset={value.url} src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%' }}><div style={{ height: 36, width: 230, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white', backgroundSize: '100% 100%' }}><p id={"title" + index} style={{ fontSize: 20 }}>{value.title}</p></div></div>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                    <>
                      <Row id={"panel-body-" + i} style={{ width: 750, left: -485, zIndex: '100', backgroundColor: "#121212", position: "absolute" }}>
                        <Col xs={4} sm={4} md={4}><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 43 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 43 }} id={"subpic" + index} srcset={value.url} src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%' }}><div style={{ height: 36, width: 230, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white', backgroundSize: '100% 100%' }}><p id={"subtitle" + index} style={{ fontSize: 20 }}>{value.title}</p></div></div></Col>
                        <Col xs={8} sm={8} md={8}><div style={{ height: 15 }}></div><div id="itemlist" style={{ height: 200, overflowY: 'scroll', msScrollbarBaseColor: 'blue', msScrollbarArrowColor: 'red' }}><p id={"desc" + index}>{value.description}</p><h1 style={{ color: "red", fontSize: "20px" }}>{texx}</h1></div></Col>
                        <Col xs={5} sm={5} md={5} style={{ height: 48 }}>
                          <select className="sv" id="sv" name="sv">
                            <option style={{ backgroundImage: `url(${TruIcon})`, background: '#230102 no-repeat 10% 50%', fontSize: 24 }} className="TrueW" id="TrueW" value="TrueW"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True Wallet</option>
                          </select>
                        </Col>
                        <Col xs={3} sm={3} md={3} style={{ height: 48, cursor: 'pointer' }} id={"herobutt" + index} onClick={() => { sendOrderPack(packId, channId) }}><img style={{ position: 'absolute', left: 0, width: '100%', height: 54 }} src={require('./asset/Home/BUY Button.png')}></img><div style={{ zIndex: 666, position: 'absolute', textAlign: "center", alignContent: "center", width: '100%' }}><h1 id={"price" + index} style={{ margin: "7px 0px" }}>{value.amount} บาท</h1></div></Col>
                      </Row>
                    </>
                  </Panel.Body>
                </Panel>
                </Col>
                  {/* {()=>{if(value.purchaseCount>=value.purchaseLimit){
                document.getElementById(value.id).style.visibility = "hidden";
                }}} */}
                </>), document.getElementById("heroCont" + i));
            } else {
              ReactDOM.render(
                (<>
                  <Col id={packId} sm={4} md={4} ><Panel eventKey={index + 12}>
                    <Panel.Heading style={{ padding: 0, backgroundColor: '#121212' }}>
                      <Panel.Title toggle>
                        <div className={"Null-" + value.tagId} style={{ position: 'absolute', backgroundImage: `url(${NewTag})`, width: 57, height: 18, left: 1, top: 1, zIndex: 101 }}></div><div id={"panel-title-" + index} id={"hilight" + i} style={{ position: 'absolute', backgroundImage: `url(${Hilight})`, backgroundSize: '100% 100%', width: '100%', height: 270, top: 0 }}><img id="hilightcover" src={require('./asset/Home/black.png')} style={{ height: 270, width: 970, top: 0, zIndex: 110 }}></img><img id="hilightcover2" src={require('./asset/Home/black.png')} style={{ height: 270, top: 0, zIndex: 111, left: 323.3, width: 323.3 }}></img><img id="hilightcover3" src={require('./asset/Home/black.png')} style={{ height: 270, top: 0, zIndex: 111, left: 323.3, width: 323.3 }}></img></div><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 30, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 81 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 81 }} id={"pic" + index} srcset={value.url} src={require('./asset/Home/item(05).png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%', height: 50 }}><div style={{ paddingTop: 6 }}><div style={{ height: 36, width: 230, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white', backgroundSize: '100% 100%' }}><p id={"title" + index} style={{ fontSize: 20 }}>{value.title}</p></div></div></div>
                      </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                      <>
                        <Row id={"panel-body-" + i} style={{ width: 970, left: 15, zIndex: '100', backgroundColor: "#121212", position: "absolute" }}>
                          <Col sm={4} md={4}><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 81 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 81 }} id={"subpic" + index} srcset={value.url} src={require('./asset/Home/item(05).png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%', height: 50 }}><div style={{ paddingTop: 6 }}><div style={{ height: 36, width: 230, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white', backgroundSize: '100% 100%' }}><p id={"subtitle" + index} style={{ fontSize: 20 }}>{value.title}</p></div></div></div></Col>
                          <Col xs={8} sm={8} md={8}><div style={{ height: 15 }}></div><div id="itemlist" style={{ height: 207, overflowY: 'scroll', msScrollbarBaseColor: 'blue', msScrollbarArrowColor: 'red' }}><p id={"desc" + index}>{value.description}</p><h1 style={{ color: "red", fontSize: "20px" }}>{texx}</h1></div></Col>
                          <Col sm={5} md={5} style={{ height: 48 }}>
                            <select className="sv" id="sv" name="sv">
                              <option style={{ backgroundImage: `url(${TruIcon})`, background: '#230102 no-repeat 10% 50%', fontSize: 24 }} className="TrueW" id="TrueW" value="TrueW"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True Wallet</option>
                            </select>
                          </Col>
                          <Col sm={3} md={3} style={{ height: 48, cursor: 'pointer' }} id={"herobutt" + index} onClick={() => { sendOrderPack(packId, channId) }}><img style={{ position: 'absolute', left: 0, width: '100%', height: 54 }} src={require('./asset/Home/BUY Button.png')}></img><div style={{ zIndex: 666, position: 'absolute', textAlign: "center", alignContent: "center", width: '100%' }}><h1 id={"price" + index} style={{ margin: "7px 0px" }}>{value.amount} บาท</h1></div></Col>
                        </Row>
                      </>
                    </Panel.Body>
                  </Panel>
                  </Col>
                  {/* {()=>{if(value.purchaseCount>=value.purchaseLimit){
                document.getElementById(value.id).style.visibility = "hidden";
                }}} */}
                </>)
                , document.getElementById("heroCont" + i));
            }
            i++;
            if (value.purchaseCount >= value.purchaseLimit && value.purchaseLimit !== null) {
              document.getElementById("title" + index).innerHTML = "ซื้อแพ็คนี้ไปแล้ว";
              document.getElementById("pic" + index).srcset = require('./asset/Home/PACK-[ITEM].png');
              document.getElementById("subtitle" + index).innerHTML = "ซื้อแพ็คนี้ไปแล้ว";
              document.getElementById("subpic" + index).srcset = require('./asset/Home/PACK-[ITEM].png');
              document.getElementById("price" + index).innerHTML = "";
              document.getElementById("herobutt" + index).style.pointerEvents = "none"
              // $("#herobutt"+index).off();
              // $( "body" )
              //     .off( "click", "#herobutt"+index, sendOrderPack );
            }
          }
          // if(value.purchaseCount>=value.purchaseLimit){
          //     document.getElementById(value.id);
          // }
        });
      });
  }

  renderUpgradeCont() {
    var d = "notlogin";
    console.log(d)
    if (localStorage.getItem("login") !== null) {
      d = localStorage.getItem("login");
    }
    console.log(d)
    axios.post('https://3k-store-api.gigagames.co.th/home', { userId: d },
      {
        auth: {
          username: '7b4d3863-9ad3-4d7f-9a18-cfa731911b20',
          password: 'c9747f17-0814-428f-b257-6ee7c62038e9'
        },
        responseType: 'json',
        headers: { 'Content-Type': 'application/json' }
      }).then(async response => {
        var res = await _.find(response.data, { "products": [] });
        console.log(response.data)
        console.log(res)
        var bannerUrl = JSON.stringify(res.banners)
        var bannerUrl_json = JSON.parse(bannerUrl)
        var prod = JSON.stringify(res.products)
        var prod_json = JSON.parse(prod)
        console.log(prod_json)
        var i = 0;

        _.forEach(prod_json, function (value, index) {
          if (value.sectionId == 'equipment') {
            // equipment.push(value)
            var new_row = document.createElement('div');
            new_row.className = value.sectionId;
            new_row.setAttribute("id", "contUpg" + index);
            document.getElementById("contUpg").appendChild(new_row);

            var packId = value.id;
            var channId = value.channels[0].id;
            console.log(packId)
            console.log(channId)
            var texx
            if (value.purchaseLimitReset !== null && value.purchaseLimitReset == "w") {
              texx = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้อาทิตย์ละครั้งเท่านั้น "
            } else if (value.purchaseLimitReset !== null && value.purchaseLimitReset == "d") {
              texx = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้วันละครั้งเท่านั้น "
            } else if (value.purchaseLimitReset == null) {
              texx = "หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้ครั้งเดียวเท่านั้น"
            }

            if (/Mobi|Android/i.test(navigator.userAgent)) {
              ReactDOM.render(
                (<><Col id={packId} xs={4} sm={4} md={4} ><Panel className="selectNbuy" eventKey={index + 6}>
                  <Panel.Heading style={{ padding: 0, backgroundColor: '#121212' }}>
                    <Panel.Title toggle>
                      <div className={"Null-" + value.tagId} style={{ position: 'absolute', backgroundImage: `url(${NewTag})`, width: 57, height: 18, left: 1, top: 1, zIndex: 101 }}></div><div id={"panel-title-" + index} id={"hilight" + i} style={{ position: 'absolute', backgroundImage: `url(${Hilight})`, backgroundSize: '100% 100%', width: '100%', height: 256, top: 0 }}><img id="hilightcover" src={require('./asset/Home/black.png')} style={{ height: 256, top: 0, zIndex: 110, left: -0, width: 250 }}></img><img id="hilightcover3" src={require('./asset/Home/black.png')} style={{ height: 256, top: 0, zIndex: 110, left: -500, width: 250 }}></img><img id="hilightcover2" src={require('./asset/Home/black.png')} style={{ height: 256, top: 0, zIndex: 110, left: -500, width: 250 }}></img></div><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 46 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 46 }} id={"pic" + index} srcset={value.url} src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%' }}><div style={{ height: 36, width: 230, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white', backgroundSize: '100% 100%' }}><p id={"title" + index} style={{ fontSize: 20 }}>{value.title}</p></div></div>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                    <>
                      <Row id={"panel-body-" + i} style={{ width: 750, left: -485, zIndex: '100', backgroundColor: "#121212", position: "absolute" }}>
                        <Col xs={4} sm={4} md={4}><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 43 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 43 }} id={"subpic" + index} srcset={value.url} src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%' }}><div style={{ height: 36, width: 230, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white', backgroundSize: '100% 100%' }}><p id={"subtitle" + index} style={{ fontSize: 20 }}>{value.title}</p></div></div></Col>
                        <Col xs={8} sm={8} md={8}><div style={{ height: 15 }}></div><div id="itemlist" style={{ height: 200, overflowY: 'scroll', msScrollbarBaseColor: 'blue', msScrollbarArrowColor: 'red' }}><p id={"desc" + index}>{value.description}</p><h1 style={{ color: "red", fontSize: "20px" }}>{texx}</h1></div></Col>
                        <Col xs={5} sm={5} md={5} style={{ height: 48 }}>
                          <select className="sv" id="sv" name="sv">
                            <option style={{ backgroundImage: `url(${TruIcon})`, background: '#230102 no-repeat 10% 50%', fontSize: 24 }} className="TrueW" id="TrueW" value="TrueW"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True Wallet</option>
                          </select>
                        </Col>
                        <Col xs={3} sm={3} md={3} style={{ height: 48, cursor: 'pointer' }} id={"equipbutt" + index} onClick={() => { sendOrderPack(packId, channId) }}><img style={{ position: 'absolute', left: 0, width: '100%', height: 54 }} src={require('./asset/Home/BUY Button.png')}></img><div style={{ zIndex: 666, position: 'absolute', textAlign: "center", alignContent: "center", width: '100%' }}><h1 id={"price" + index} style={{ margin: "7px 0px" }}>{value.amount} บาท</h1></div></Col>
                      </Row>
                    </>
                  </Panel.Body>
                </Panel>
                </Col>
                  {/* {()=>{if(value.purchaseCount>=value.purchaseLimit){
                document.getElementById(value.id).style.visibility = "hidden";
                }}} */}
                </>), document.getElementById("equipmentCont" + i));

            } else {
              ReactDOM.render(
                (<>
                  <Col id={packId} sm={4} md={4} ><Panel eventKey={index}>
                    <Panel.Heading style={{ padding: 0, backgroundColor: '#121212' }}>
                      <Panel.Title toggle>
                        <div className={"Null-" + value.tagId} style={{ position: 'absolute', backgroundImage: `url(${NewTag})`, width: 57, height: 18, left: 1, top: 1, zIndex: 101 }}></div><div id={"panel-title-" + index} id={"hilight" + i} style={{ position: 'absolute', backgroundImage: `url(${Hilight})`, backgroundSize: '100% 100%', width: '100%', height: 270, top: 0 }}><img id="hilightcover" src={require('./asset/Home/black.png')} style={{ height: 270, width: 970, top: 0, zIndex: 110 }}></img><img id="hilightcover2" src={require('./asset/Home/black.png')} style={{ height: 270, top: 0, zIndex: 111, left: 323.3, width: 323.3 }}></img><img id="hilightcover3" src={require('./asset/Home/black.png')} style={{ height: 270, top: 0, zIndex: 111, left: 323.3, width: 323.3 }}></img></div><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 30, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 81 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 81 }} id={"pic" + index} srcset={value.url} src={require('./asset/Home/item(05).png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%', height: 50 }}><div style={{ paddingTop: 6 }}><div style={{ height: 36, width: 230, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white', backgroundSize: '100% 100%' }}><p id={"title" + index} style={{ fontSize: 20 }}>{value.title}</p></div></div></div>
                      </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                      <>
                        <Row id={"panel-body-" + i} style={{ width: 970, left: 15, zIndex: '100', backgroundColor: "#121212", position: "absolute" }}>
                          <Col sm={4} md={4}><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 81 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 81 }} id={"subpic" + index} srcset={value.url} src={require('./asset/Home/item(05).png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%', height: 50 }}><div style={{ paddingTop: 6 }}><div style={{ height: 36, width: 230, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white', backgroundSize: '100% 100%' }}><p id={"subtitle" + index} style={{ fontSize: 20 }}>{value.title}</p></div></div></div></Col>
                          <Col xs={8} sm={8} md={8}><div style={{ height: 15 }}></div><div id="itemlist" style={{ height: 207, overflowY: 'scroll', msScrollbarBaseColor: 'blue', msScrollbarArrowColor: 'red' }}><p id={"desc" + index}>{value.description}</p><h1 style={{ color: "red", fontSize: "20px" }}>{texx}</h1></div></Col>
                          <Col sm={5} md={5} style={{ height: 48 }}>
                            <select className="sv" id="sv" name="sv">
                              <option style={{ backgroundImage: `url(${TruIcon})`, background: '#230102 no-repeat 10% 50%', fontSize: 24 }} className="TrueW" id="TrueW" value="TrueW"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True Wallet</option>
                            </select>
                          </Col>
                          <Col sm={3} md={3} style={{ height: 48, cursor: 'pointer' }} id={"equipbutt" + index} onClick={() => { sendOrderPack(packId, channId) }}><img style={{ position: 'absolute', left: 0, width: '100%', height: 54 }} src={require('./asset/Home/BUY Button.png')}></img><div style={{ zIndex: 666, position: 'absolute', textAlign: "center", alignContent: "center", width: '100%' }}><h1 id={"price" + index} style={{ margin: "7px 0px" }}>{value.amount} บาท</h1></div></Col>
                        </Row>
                      </>
                    </Panel.Body>
                  </Panel>
                  </Col>
                  {/* {()=>{if(value.purchaseCount>=value.purchaseLimit){
                document.getElementById(value.id).style.visibility = "hidden";
                }}} */}
                </>)
                , document.getElementById("equipmentCont" + i));
            }
            i++;
            if (value.purchaseCount >= value.purchaseLimit && value.purchaseLimit !== null) {
              document.getElementById("title" + index).innerHTML = "ซื้อแพ็คนี้ไปแล้ว";
              document.getElementById("pic" + index).srcset = require('./asset/Home/PACK-[ITEM].png');
              document.getElementById("subtitle" + index).innerHTML = "ซื้อแพ็คนี้ไปแล้ว";
              document.getElementById("subpic" + index).srcset = require('./asset/Home/PACK-[ITEM].png');
              document.getElementById("price" + index).innerHTML = "";
              document.getElementById("equipbutt" + index).style.pointerEvents = "none"
              // $("#equipbutt"+index).off();
              // $( "body" )
              //     .off( "click", "#equipbutt"+index, sendOrderPack );
            }
          }
        });
      });
  }

  componentDidMount() {
    this.renderHeroCont();
    this.renderItemCont();
    this.renderUpgradeCont();

  }

  render() {

    const handleOnDragStart = e => e.preventDefault()

    return (
      <>
        <Section>
          <SectionContainerEX>
            <SectionContainerExtension>
              <Content>
                <Grid style={{ backgroundColor: 'rgba(0, 0, 0, 1.0)' }}>
                  <Row><Col style={{ height: 20 }} xs={12} sm={12} md={12}></Col></Row>
                  <Row style={{ backgroundColor: 'black' }}>
                    <Col xs={4} sm={4} md={4} id="packageHero" style={{ backgroundColor: '#3b0000', margin: '0 auto', textAlign: 'center' }}><img src={require('./asset/pack/mobi/BUtton[1]Hero.png')}></img></Col>
                    <Col xs={4} sm={4} md={4}></Col>
                    <Col xs={4} sm={4} md={4}></Col>
                  </Row>
                  <div id="contHer"></div>

                  {this.checkingDeviceHero()}

                  <Row><Col style={{ height: 10 }} xs={12} sm={12} md={12}></Col></Row>
                  <Row>
                    <Col xs={4} sm={4} md={4}></Col>
                    <Col xs={4} sm={4} md={4}></Col>
                    <Col xs={4} sm={4} md={4}><a href='/packageHero' onClick={() => { this.setCookieTab(2) }}><div style={{ width: '100%', height: 70, color: 'white' }}><h2 style={{ position: 'absolute', width: '100%', margin: '15px auto', textAlign: 'center' }}>ดูไอเทมทั้งหมด..</h2><img style={{ width: '100%', height: 60 }} src={require('./asset/pack/[B]Button.png')}></img></div></a></Col>
                  </Row>

                </Grid>
              </Content>
            </SectionContainerExtension>
          </SectionContainerEX>
        </Section>



        <Section>
          <SectionContainerEX>
            <SectionContainerExtension>
              <Content>
                <Grid style={{ backgroundColor: 'rgba(0, 0, 0, 1.0)' }}>
                  <Row><Col style={{ height: 20 }} xs={12} sm={12} md={12}></Col></Row>
                  <Row style={{ backgroundColor: 'black' }}>
                    <Col xs={4} sm={4} md={4} id="packageUpgrade" style={{ backgroundColor: '#3b0000', margin: '0 auto', textAlign: 'center' }}><img src={require('./asset/Home/Button Equipment.png')}></img></Col>
                    <Col xs={4} sm={4} md={4}></Col>
                    <Col xs={4} sm={4} md={4}></Col>
                  </Row>
                  <div id="contUpg"></div>

                  {this.checkingDeviceUpgrade()}

                  <Row><Col style={{ height: 10 }} xs={12} sm={12} md={12}></Col></Row>
                  <Row>
                    <Col xs={4} sm={4} md={4}></Col>
                    <Col xs={4} sm={4} md={4}></Col>
                    <Col xs={4} sm={4} md={4}><a href='/packageEquipment' onClick={() => { this.setCookieTab(3) }}><div style={{ width: '100%', height: 70, color: 'white' }}><h2 style={{ position: 'absolute', width: '100%', margin: '15px auto', textAlign: 'center' }}>ดูไอเทมทั้งหมด..</h2><img style={{ width: '100%', height: 60 }} src={require('./asset/pack/[B]Button.png')}></img></div></a></Col>
                  </Row>
                </Grid>
              </Content>
            </SectionContainerExtension>
          </SectionContainerEX>
        </Section>


        <Section>
          <SectionContainerEX>
            <SectionContainerExtension>
              <Content>
                <Grid style={{ backgroundColor: 'rgba(0, 0, 0, 1.0)' }}>
                  <Row><Col style={{ height: 20 }} xs={12} sm={12} md={12}></Col></Row>
                  <Row style={{ backgroundColor: 'black' }}>
                    <Col xs={4} sm={4} md={4} id="packageItem" style={{ backgroundColor: '#3b0000', margin: '0 auto', textAlign: 'center' }}><img src={require('./asset/pack/mobi/BUtton[3]item.png')}></img></Col>
                    <Col xs={4} sm={4} md={4}></Col>
                    <Col xs={4} sm={4} md={4}></Col>
                  </Row>
                  <div id="contIte"></div>

                  {this.checkingDeviceItem()}

                  <Row><Col style={{ height: 10 }} xs={12} sm={12} md={12}></Col></Row>
                  <Row>
                    <Col xs={4} sm={4} md={4}></Col>
                    <Col xs={4} sm={4} md={4}></Col>
                    <Col xs={4} sm={4} md={4}><a href='/packageItem' onClick={() => { this.setCookieTab(4) }}><div style={{ width: '100%', height: 70, color: 'white' }}><h2 style={{ position: 'absolute', width: '100%', margin: '15px auto', textAlign: 'center' }}>ดูไอเทมทั้งหมด..</h2><img style={{ width: '100%', height: 60 }} src={require('./asset/pack/[B]Button.png')}></img></div></a></Col>
                  </Row>
                </Grid>
              </Content>
            </SectionContainerExtension>
          </SectionContainerEX>
        </Section>
      </>
    )
  }
}
function sendOrderPack(packageId, channelId) {
  if (localStorage.getItem("login") !== null) {
    axios.post('https://pgw.gigagames.co.th/order',
      {
        "userId": localStorage.getItem("login"),
        "productId": packageId,
        "channelId": channelId,
        "currency": "THB",
        "callbackUrl": "https://3k-store.gigagames.co.th/purchase/success/"
      },
      {
        auth: {
          username: '7b4d3863-9ad3-4d7f-9a18-cfa731911b20',
          password: 'c9747f17-0814-428f-b257-6ee7c62038e9'
        },
        responseType: 'json',
        headers: { 'Content-Type': 'application/json' }
      }).then(async res => {
        var stat = res.data.status;
        //   var dat = res.data.data.url;
        console.log(stat)
        console.log(res.data.data.url)
        //   console.log(dat)
        //   var cutDat = dat.substring(32)
        //   console.log(cutDat)
        if (stat == "success") {
          // window.location.replace(dat);
          var cut = res.data.data.url.substring(28)
          console.log(cut)
          // window.location.replace('http://192.168.100.121:3000/'+cut)
          window.location.replace('https://pay.gigagames.co.th/' + cut)
          console.log('Confirmed successfully')
        } else { alert("You have failed this transcation") }
      }).catch(function (error) {
        console.log(error);
      });

  } else {
    window.location.replace("/login")
  }
}

export default Package