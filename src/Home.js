import React, { Component } from 'react';
import { Grid, Row, Col, Panel, PanelGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import _ from 'lodash';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import Highlighter from "react-highlight-words";

import { SectionContainer, SectionContainerExtension } from './mainStyleComponent';
import { Section, Content, HeaderText, Pic, PicFacebookGoogle, InputBox, InputButton, LoginBox, LoginBoxFB } from './homeStyleComponent';
import { ModalDiv, ModalBG } from './packageStyleComponent';
import Modal from './Modal';
import background from './asset/Home/BG.png';
import BGItem from './Home/package_Frame.png';
import ButtonName from './Home/Price_button.png';
import ButtonNameBG from './asset/Home/BG-Button-Name.png';
import ButtonPicBG from './asset/Home/BG-ITEM-02.png';
import Hilight from './asset/Home/HILIGHT.png';
import NewTag from './asset/Home/NEW.png';
import HalfPrice from './asset/Home/Sale50p.png';
import TenPercent from './asset/Home/Sale10p.png';
import ThirtyPercent from './asset/Home/Sale30p.png';
import Hotitem from './asset/Home/HOT-New.png';
import Disc from './Item/item-7.png';
import TruIcon from './asset/Home/True-Button.png';

var redirr = []


var TRange = null;
var i
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, activeKey: null, reward: false, hot: false, hotTitle: false, hotAmount: false, hotId0: false, hotId1: false, hotId2: false, hotId3: false, hotChId0: false, hotChId1: false, hotChId2: false, hotChId3: false }
    this.handleSelect = this.handleSelect.bind(this);
  }


  componentDidMount() {
    // document.getElementById("hotButt0").style.pointerEvents = "none";
    // document.getElementById("hotButt1").style.pointerEvents = "none";
    // document.getElementById("hotButt2").style.pointerEvents = "none";
    // document.getElementById("hotButt3").style.pointerEvents = "none";

    axios.defaults.headers.post['Content-Type'] = 'application/json';
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
        var prod = JSON.stringify(res.products)
        var prod_json = JSON.parse(prod)

        var parseResult = {}, hot = []
        _.forEach(prod_json, function (value) {
          if (value.sectionId == 'hot') {
            hot.push(value)
          }
        });

        parseResult.hot = { data: hot }

        this.setState({
          hot: parseResult
        });
        if (typeof this.state.hot.hot.data[0].id !== 'undefined') {
          this.setState({
            hotId0: this.state.hot.hot.data[0].id
          })
          document.getElementById("hotTitle0").innerHTML = this.state.hot.hot.data[0].title
          document.getElementById("hotTitle00").innerHTML = this.state.hot.hot.data[0].title
          document.getElementById("hotPic0").srcset = this.state.hot.hot.data[0].url
          document.getElementById("hotPic00").srcset = this.state.hot.hot.data[0].url
          document.getElementById("hotPrice0").innerHTML = this.state.hot.hot.data[0].amount + " บาท"
          if (this.state.hot.hot.data[0].purchaseLimitReset !== null && this.state.hot.hot.data[0].purchaseLimitReset == "w") {
            document.getElementById("hotDes0").innerHTML = " " + this.state.hot.hot.data[0].description + " "
            document.getElementById("hotDes00").innerHTML = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้อาทิตย์ละครั้งเท่านั้น "
          } else if (this.state.hot.hot.data[0].purchaseLimitReset == null) {
            document.getElementById("hotDes0").innerHTML = " " + this.state.hot.hot.data[0].description + " "
            document.getElementById("hotDes00").innerHTML = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้ครั้งเดียวเท่านั้น "
          } else if (this.state.hot.hot.data[0].purchaseLimitReset !== null && this.state.hot.hot.data[0].purchaseLimitReset == "w") {
            document.getElementById("hotDes0").innerHTML = " " + this.state.hot.hot.data[0].description + " "
            document.getElementById("hotDes00").innerHTML = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้วันละครั้งเท่านั้น "
          }
          document.getElementById("hotButt0").style.pointerEvents = "auto";
          if (this.state.hot.hot.data[0].purchaseCount >= this.state.hot.hot.data[0].purchaseLimit && this.state.hot.hot.data[0].purchaseLimit !== null) {
            // document.getElementById(this.state.hotId0).style.visibility = "hidden"}
            // document.getElementById("FirstHotDiv").style.visibility = "hidden"
            this.setState({
              hotId0: null
            })
            document.getElementById("hotTitle0").innerHTML = " ซื้อแพ็คนี้ไปแล้ว "
            document.getElementById("hotTitle00").innerHTML = " ซื้อแพ็คนี้ไปแล้ว "
            document.getElementById("hotPic0").srcset = ""
            document.getElementById("hotPic00").srcset = ""
            document.getElementById("hotPrice0").innerHTML = ""
            document.getElementById("hotButt0").style.pointerEvents = "none";
          }
        } else { document.getElementById("FirstHotDiv").style.visibility = "hidden" }
        if (typeof this.state.hot.hot.data[1].id !== 'undefined') {
          this.setState({
            hotId1: this.state.hot.hot.data[1].id
          })
          document.getElementById("hotTitle1").innerHTML = this.state.hot.hot.data[1].title
          document.getElementById("hotTitle10").innerHTML = this.state.hot.hot.data[1].title
          document.getElementById("hotPic1").srcset = this.state.hot.hot.data[1].url
          document.getElementById("hotPic10").srcset = this.state.hot.hot.data[1].url
          document.getElementById("hotPrice1").innerHTML = this.state.hot.hot.data[1].amount + " บาท"
          if (this.state.hot.hot.data[1].purchaseLimitReset !== null && this.state.hot.hot.data[1].purchaseLimitReset == "w") {
            document.getElementById("hotDes1").innerHTML = " " + this.state.hot.hot.data[1].description + " "
            document.getElementById("hotDes11").innerHTML = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้อาทิตย์ละครั้งเท่านั้น "
          } else if (this.state.hot.hot.data[1].purchaseLimitReset == null) {
            document.getElementById("hotDes1").innerHTML = " " + this.state.hot.hot.data[1].description + " "
            document.getElementById("hotDes11").innerHTML = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้ครั้งเดียวเท่านั้น "
          } else if (this.state.hot.hot.data[1].purchaseLimitReset !== null && this.state.hot.hot.data[1].purchaseLimitReset == "w") {
            document.getElementById("hotDes1").innerHTML = " " + this.state.hot.hot.data[1].description + " "
            document.getElementById("hotDes11").innerHTML = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้วันละครั้งเท่านั้น "
          }
          document.getElementById("hotButt1").style.pointerEvents = "auto";
          if (this.state.hot.hot.data[1].purchaseCount >= this.state.hot.hot.data[1].purchaseLimit && this.state.hot.hot.data[1].purchaseLimit !== null) {
            // document.getElementById(this.state.hotId1).style.visibility = "hidden"}
            // document.getElementById("SecondHotDiv").style.visibility = "hidden"
            this.setState({
              hotId1: null
            })
            document.getElementById("hotTitle1").innerHTML = " ซื้อแพ็คนี้ไปแล้ว "
            document.getElementById("hotTitle10").innerHTML = " ซื้อแพ็คนี้ไปแล้ว "
            document.getElementById("hotPic1").srcset = ""
            document.getElementById("hotPic10").srcset = ""
            document.getElementById("hotPrice1").innerHTML = ""
            document.getElementById("hotButt1").style.pointerEvents = "none";
          }
        } else { document.getElementById("SecondHotDiv").style.visibility = "hidden" }
        if (typeof this.state.hot.hot.data[2].id !== 'undefined') {
          this.setState({
            hotId2: this.state.hot.hot.data[2].id
          })
          document.getElementById("hotTitle2").innerHTML = this.state.hot.hot.data[2].title
          document.getElementById("hotTitle20").innerHTML = this.state.hot.hot.data[2].title
          document.getElementById("hotPic2").srcset = this.state.hot.hot.data[2].url
          document.getElementById("hotPic20").srcset = this.state.hot.hot.data[2].url
          document.getElementById("hotPrice2").innerHTML = this.state.hot.hot.data[2].amount + " บาท"
          if (this.state.hot.hot.data[2].purchaseLimitReset !== null && this.state.hot.hot.data[2].purchaseLimitReset == "w") {
            document.getElementById("hotDes2").innerHTML = " " + this.state.hot.hot.data[2].description + " "
            document.getElementById("hotDes22").innerHTML = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้อาทิตย์ละครั้งเท่านั้น "
          } else if (this.state.hot.hot.data[2].purchaseLimitReset == null) {
            document.getElementById("hotDes2").innerHTML = " " + this.state.hot.hot.data[2].description + " "
            document.getElementById("hotDes22").innerHTML = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้ครั้งเดียวเท่านั้น "
          } else if (this.state.hot.hot.data[2].purchaseLimitReset !== null && this.state.hot.hot.data[2].purchaseLimitReset == "w") {
            document.getElementById("hotDes2").innerHTML = " " + this.state.hot.hot.data[2].description + " "
            document.getElementById("hotDes22").innerHTML = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้วันละครั้งเท่านั้น "
          }
          document.getElementById("hotButt2").style.pointerEvents = "auto";
          if (this.state.hot.hot.data[2].purchaseCount >= this.state.hot.hot.data[2].purchaseLimit && this.state.hot.hot.data[2].purchaseLimit !== null) {
            // document.getElementById(this.state.hotId2).style.visibility = "hidden"}
            // document.getElementById("ThirdHotDiv").style.visibility = "hidden"
            this.setState({
              hotId2: null
            })
            document.getElementById("hotTitle2").innerHTML = " ซื้อแพ็คนี้ไปแล้ว "
            document.getElementById("hotTitle20").innerHTML = " ซื้อแพ็คนี้ไปแล้ว "
            document.getElementById("hotPic2").srcset = ""
            document.getElementById("hotPic20").srcset = ""
            document.getElementById("hotPrice2").innerHTML = ""
            document.getElementById("hotButt2").style.pointerEvents = "none";
          }
        } else { document.getElementById("ThirdHotDiv").style.visibility = "hidden" }
        if (typeof this.state.hot.hot.data[3].id !== 'undefined') {
          this.setState({
            hotId3: this.state.hot.hot.data[3].id
          })
          document.getElementById("hotTitle3").innerHTML = this.state.hot.hot.data[3].title
          document.getElementById("hotTitle30").innerHTML = this.state.hot.hot.data[3].title
          document.getElementById("hotPic3").srcset = this.state.hot.hot.data[3].url
          document.getElementById("hotPic30").srcset = this.state.hot.hot.data[3].url
          document.getElementById("hotPrice3").innerHTML = this.state.hot.hot.data[3].amount + " บาท"
          if (this.state.hot.hot.data[3].purchaseLimitReset !== null && this.state.hot.hot.data[3].purchaseLimitReset == "w") {
            document.getElementById("hotDes3").innerHTML = " " + this.state.hot.hot.data[3].description + " "
            document.getElementById("hotDes33").innerHTML = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้อาทิตย์ละครั้งเท่านั้น "
          } else if (this.state.hot.hot.data[3].purchaseLimitReset == null) {
            document.getElementById("hotDes3").innerHTML = " " + this.state.hot.hot.data[3].description + " "
            document.getElementById("hotDes33").innerHTML = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้ครั้งเดียวเท่านั้น "
          } else if (this.state.hot.hot.data[3].purchaseLimitReset !== null && this.state.hot.hot.data[3].purchaseLimitReset == "w") {
            document.getElementById("hotDes3").innerHTML = " " + this.state.hot.hot.data[3].description + " "
            document.getElementById("hotDes33").innerHTML = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้วันละครั้งเท่านั้น "
          }
          document.getElementById("hotButt3").style.pointerEvents = "auto";
          if (this.state.hot.hot.data[3].purchaseLimit !== null && this.state.hot.hot.data[3].purchaseCount >= this.state.hot.hot.data[3].purchaseLimit) {
            // document.getElementById(this.state.hotId3).style.visibility = "hidden"}
            // document.getElementById("ForthHotDiv").style.visibility = "hidden"
            this.setState({
              hotId3: null
            })
            document.getElementById("hotTitle3").innerHTML = " ซื้อแพ็คนี้ไปแล้ว "
            document.getElementById("hotTitle30").innerHTML = " ซื้อแพ็คนี้ไปแล้ว "
            document.getElementById("hotPic3").srcset = ""
            document.getElementById("hotPic30").srcset = ""
            document.getElementById("hotPrice3").innerHTML = ""
            document.getElementById("hotButt3").style.pointerEvents = "none";
          }
        } else { document.getElementById("ForthHotDiv").style.visibility = "hidden" }
      }).catch(function (error) {
        console.log(error);
      });

    // var ab = window.location.hash
    // if (ab.length > 3) {
    //   setTimeout(() => {
    //     var abc = ab.substring(1)
    //     document.getElementById(abc).scrollIntoView({ block: "center", inline: "center" });
    //   })
    // }
  }

  sendOrder(n) {
    if (localStorage.getItem("login") !== null) {
      if (n == 0 && this.state.hotId0 !== null) {
        axios.post('https://pgw.gigagames.co.th/order',
          {
            "userId": localStorage.getItem("login"),
            "productId": this.state.hotId0,
            "channelId": "truewallet",
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
      } else if (n == 1 && this.state.hotId1 !== null) {
        axios.post('https://pgw.gigagames.co.th/order',
          {
            "userId": localStorage.getItem("login"),
            "productId": this.state.hotId1,
            "channelId": "truewallet",
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
            console.log(res)
            //   console.log(dat)
            //   var cutDat = dat.substring(32)
            //   console.log(cutDat)
            if (stat == "success") {
              // window.location.replace(dat);
              // console.log(res.data.data.url)
              var cut = res.data.data.url.substring(28)
              console.log(cut)
              // window.location.replace('http://192.168.100.121:3000/'+cut)
              window.location.replace('https://pay.gigagames.co.th/' + cut)
              // window.location.replace(res.data.data.url)
              console.log('Confirmed successfully')
            } else { alert("You have failed this transcation") }
          }).catch(function (error) {
            console.log(error);
          });
      } else if (n == 2 && this.state.hotId2 !== null) {
        axios.post('https://pgw.gigagames.co.th/order',
          {
            "userId": localStorage.getItem("login"),
            "productId": this.state.hotId2,
            "channelId": "truewallet",
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
            console.log(res)
            //   console.log(dat)
            //   var cutDat = dat.substring(32)
            //   console.log(cutDat)
            if (stat == "success") {
              // window.location.replace(dat);
              var cut = res.data.data.url.substring(28)
              console.log(cut)
              // window.location.replace('http://192.168.100.121:3000/'+cut)
              window.location.replace('https://pay.gigagames.co.th/' + cut)
              // window.location.replace(res.data.data.url)
              console.log('Confirmed successfully')
            } else { alert("You have failed this transcation") }
          }).catch(function (error) {
            console.log(error);
          });
      } else if (n == 3 && this.state.hotId3 !== null) {
        axios.post('https://pgw.gigagames.co.th/order',
          {
            "userId": localStorage.getItem("login"),
            "productId": this.state.hotId3,
            "channelId": "truewallet",
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
            console.log(res)
            //   console.log(dat)
            //   var cutDat = dat.substring(32)
            //   console.log(cutDat)
            if (stat == "success") {
              // window.location.replace(dat);
              var cut = res.data.data.url.substring(28)
              console.log(cut)
              // window.location.replace('http://192.168.100.121:3000/'+cut)
              window.location.replace('https://pay.gigagames.co.th/' + cut)
              // window.location.replace(res.data.data.url)
              console.log('Confirmed successfully')
            } else { alert("You have failed this transcation") }
          }).catch(function (error) {
            console.log(error);
          });
      }
    } else { window.location.replace("/login") }
  }

  productsTitle(num) {
    this.setState({ hotTitle: this.state.hot.hot.data[num].title, hotAmount: this.state.hot.hot.data[num].amount });
    return this.state.hotTitle
  }

  eventFire(el, etype) {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

  setCookieProdID(cname) {
    var d = new Date();
    d.setTime(d.getTime() + (15 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "prodId" + "= " + cname + ";" + expires + ";path=/";
  }

  setCookiePromptLogin(cname) {
    var d = new Date();
    d.setTime(d.getTime() + (10 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "prompt" + "= " + cname + ";" + expires + ";path=/";
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
    console.log(this.state.activeKey)
  }

  selectTrueW() {
    document.getElementsByClassName("sv").style.backgroundImage = `url(${TruIcon})`;
  }

  getCookieLogin(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        console.log(c.substring(name.length, c.length));
        if (c.substring(name.length, c.length) == "LoggedIn") {
          console.log('Logged in')

        }
      } else if (c.indexOf(name) !== 0) {
        console.log('No cookie')

      }
    }
  }

  getCookieProdID(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        console.log(c.substring(name.length, c.length));
        if (c.substring(name.length, c.length) == "ProdId1") {
          console.log('Logged in, Buy ProdId1')
          window.location.replace("/#packageHot")
          this.setState({ activeKey: "1" })
        }
      } else if (c.indexOf(name) !== 0) {
        console.log('No cookie, Buy ProdId1')
      }
    }
  }

  checkingDevice() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      return (
        <>
          <Row>
            <Col style={{ height: 0 }} xs={12} sm={12} md={12}></Col>
          </Row>
          <Row style={{ backgroundImage: `url(${background})` }}>
            <Col xs={3} sm={3} md={3} id="packageHot"><a href='/#event'><img style={{ width: 165, height: 50, marginTop: 18, marginBottom: 17 }} src={require('./asset/Home/EV.png')}></img></a></Col>
            <Col xs={3} sm={3} md={3}><a href='/#packageHero'><img style={{ width: 165, height: 50, marginTop: 18, marginBottom: 17 }} src={require('./asset/Home/HE.png')}></img></a></Col>
            <Col xs={3} sm={3} md={3}><a href='/#packageUpgrade'><img style={{ width: 165, height: 50, marginTop: 18, marginBottom: 17 }} src={require('./asset/Home/Button Equipment.png')}></img></a></Col>
            <Col xs={3} sm={3} md={3}><a href='/#packageItem'><img style={{ width: 165, height: 50, marginTop: 18, marginBottom: 17 }} src={require('./asset/Home/Button [ 3 ] item.png')}></img></a></Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} id="packageHero"><img src={require('./asset/Home/ITEM-HOT.png')}></img></Col>
          </Row>
          <PanelGroup accordion id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect} defaultActiveKey={this.state.activeKey}>
            <Row style={{ backgroundImage: `url(${background})` }}>
              <Col xs={3} sm={3} md={3} id={this.state.hotId0} id="FirstHotDiv"><Panel className="selectNbuy" eventKey="1">
                <Panel.Heading style={{ padding: 0, backgroundColor: '#121212' }}>
                  <Panel.Title toggle><div style={{ position: 'absolute', backgroundImage: `url(${Hotitem})`, width: 57, height: 18, left: 20, top: 24 }}></div><div id="hilight" style={{ position: 'absolute', backgroundImage: `url(${Hilight})`, backgroundSize: '100% 100%', width: '100%', height: 240, top: 0 }}><img id="hilightcover" src={require('./asset/Home/black.png')} style={{ height: 240, top: 0, zIndex: 110, left: -0, width: 750 }}></img><img id="hilightcover2" src={require('./asset/Home/black.png')} style={{ height: 242.5, top: 0, zIndex: 111, left: 187.5, width: 562.5 }}></img></div><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundSize: '100% 100%' }}><div style={{ margin: 'auto', marginTop: 20, width: 160, height: 160, backgroundImage: `url(${BGItem})`, marginLeft: 'auto', marginRight: 'auto', marginBottom: 10 }}><img style={{ width: 152, height: 142, zIndex: 100 }} srcset="" id="hotPic0" src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{ height: 39, width: 160, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: '0 auto', color: 'white' }}><p id="hotTitle0" style={{ fontSize: 25 }}>ซื้อแพ็คนี้ไปแล้ว</p></div></div></Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                  <>
                    <Row style={{ width: 750, left: 15, zIndex: '100', backgroundColor: "#121212", position: "absolute" }}>
                      <Col xs={4} sm={4} md={4}><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 43 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 43 }} srcset="" id="hotPic00" src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%' }}><div style={{ height: 39, width: 160, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white' }}><p id="hotTitle00" style={{ fontSize: 25 }}>ซื้อแพ็คนี้ไปแล้ว</p></div></div></Col>
                      <Col xs={8} sm={8} md={8}><div style={{ height: 15 }}></div><div id="itemlist" style={{ height: 200, overflowY: 'scroll', msScrollbarBaseColor: 'blue', msScrollbarArrowColor: 'red' }}><p id="hotDes0">ซื้อแพ็คนี้ไปแล้ว</p><h1 style={{ color: "red", fontSize: "20px" }} id="hotDes00"></h1></div></Col>
                      <Col xs={5} sm={5} md={5} style={{ height: 48 }}>
                        <select className="sv" id="sv" name="sv">
                          <option style={{ backgroundImage: `url(${TruIcon})`, background: '#230102 no-repeat 10% 50%', fontSize: 24 }} className="TrueW" id="TrueW" value="TrueW"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True Wallet</option>
                        </select>
                      </Col>
                      <Col xs={3} sm={3} md={3} style={{ height: 48, cursor: 'pointer' }} id={"hotButt0"} onClick={() => { this.sendOrder(0); }}><img style={{ position: 'absolute', left: 0, width: '100%', height: 48 }} src={require('./asset/Home/BUY Button.png')}></img><div style={{ zIndex: 666, position: 'absolute', textAlign: "center", alignContent: "center", width: '100%' }}><h1 id="hotPrice0" style={{ margin: "7px 0px" }}>BUY</h1></div></Col>
                    </Row>
                  </>
                </Panel.Body>
              </Panel>
              </Col>
              <Col xs={3} sm={3} md={3} id={this.state.hotId1} id="SecondHotDiv"><Panel className="selectNbuy" eventKey="2">
                <Panel.Heading style={{ padding: 0, backgroundColor: '#121212' }}>
                  <Panel.Title toggle><div style={{ position: 'absolute', backgroundImage: `url(${Hotitem})`, width: 57, height: 18, left: 20, top: 24 }}></div><div id="hilight" style={{ position: 'absolute', backgroundImage: `url(${Hilight})`, backgroundSize: '100% 100%', width: '100%', height: 240, top: 0 }}><img id="hilightcover" src={require('./asset/Home/black.png')} style={{ height: 240, top: 0, zIndex: 110, left: -182.5, width: 750 }}></img><img id="hilightcover2" src={require('./asset/Home/black.png')} style={{ height: 242.5, top: 0, zIndex: 111, left: 187.5, width: 365 }}></img><img id="hilightcover2" src={require('./asset/Home/black.png')} style={{ height: 242.5, top: 0, zIndex: 111, left: -187.5, width: 187.5 }}></img></div><div style={{ textAlign: "center", alignContent: "center", height: 220 }}><div style={{ margin: 'auto', marginTop: 20, width: 160, height: 160, backgroundImage: `url(${BGItem})`, marginLeft: 'auto', marginRight: 'auto', marginBottom: 10 }}><img style={{ width: 152, height: 142, zIndex: 100 }} srcset="" id="hotPic1" src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{ height: 39, width: 160, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white' }}><p id="hotTitle1" style={{ fontSize: 25 }}>ซื้อแพ็คนี้ไปแล้ว</p></div></div></Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                  <>
                    <Row style={{ width: 750, left: -172.5, zIndex: '100', backgroundColor: "#121212", position: "absolute" }}>
                      <Col xs={4} sm={4} md={4}><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 43 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 43 }} srcset="" id="hotPic10" src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%' }}><div style={{ height: 39, width: 160, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white' }}><p id="hotTitle10" style={{ fontSize: 25 }}>ซื้อแพ็คนี้ไปแล้ว</p></div></div></Col>
                      <Col xs={8} sm={8} md={8}><div style={{ height: 15 }}></div><div id="itemlist" style={{ height: 200, overflowY: 'scroll', msScrollbarBaseColor: 'blue', msScrollbarArrowColor: 'red' }}><p id="hotDes1">ซื้อแพ็คนี้ไปแล้ว</p><h1 style={{ color: "red", fontSize: "20px" }} id="hotDes11"></h1></div></Col>
                      <Col xs={5} sm={5} md={5} style={{ height: 48 }}>
                        <select className="sv" id="sv" name="sv">
                          <option style={{ backgroundImage: `url(${TruIcon})`, background: '#230102 no-repeat 10% 50%', fontSize: 24 }} className="TrueW" id="TrueW" value="TrueW"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True Wallet</option>
                        </select>
                      </Col>
                      <Col xs={3} sm={3} md={3} style={{ height: 48, cursor: 'pointer' }} id={"hotButt1"} onClick={() => { this.sendOrder(1); }}><img style={{ position: 'absolute', left: 0, width: '100%', height: 48 }} src={require('./asset/Home/BUY Button.png')}></img><div style={{ zIndex: 666, position: 'absolute', textAlign: "center", alignContent: "center", width: '100%' }}><h1 id="hotPrice1" style={{ margin: "7px 0px" }}>BUY</h1></div></Col>
                    </Row>
                  </>
                </Panel.Body>
              </Panel>
              </Col>
              <Col xs={3} sm={3} md={3} id={this.state.hotId2} id="ThirdHotDiv"><Panel className="selectNbuy" eventKey="3">
                <Panel.Heading style={{ padding: 0, backgroundColor: '#121212' }}>
                  <Panel.Title toggle><div id="hilight" style={{ position: 'absolute', backgroundImage: `url(${Hilight})`, backgroundSize: '100% 100%', width: '100%', height: 240, top: 0 }}><img id="hilightcover" src={require('./asset/Home/black.png')} style={{ height: 240, top: 0, zIndex: 110, left: -365, width: 750 }}></img><img id="hilightcover2" src={require('./asset/Home/black.png')} style={{ height: 242.5, top: 0, zIndex: 111, left: 187.5, width: 187.5 }}></img><img id="hilightcover2" src={require('./asset/Home/black.png')} style={{ height: 242.5, top: 0, zIndex: 111, left: -365, width: 365 }}></img></div><div style={{ position: 'absolute', backgroundImage: `url(${Hotitem})`, width: 57, height: 18, left: 20, top: 24 }}></div><div style={{ textAlign: "center", alignContent: "center", height: 220 }}><div style={{ margin: 'auto', marginTop: 20, width: 160, height: 160, backgroundImage: `url(${BGItem})`, marginLeft: 'auto', marginRight: 'auto', marginBottom: 10 }}><img style={{ width: 152, height: 142, zIndex: 100 }} srcset="" id="hotPic2" src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{ height: 39, width: 160, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white' }}><p id="hotTitle2" style={{ fontSize: 25 }}>ซื้อแพ็คนี้ไปแล้ว</p></div></div></Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                  <>
                    <Row style={{ width: 750, left: -360, zIndex: '100', backgroundColor: "#121212", position: "absolute" }}>
                      <Col xs={4} sm={4} md={4}><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 43 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 43 }} srcset="" id="hotPic20" src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%' }}><div style={{ height: 39, width: 160, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white' }}><p id="hotTitle20" style={{ fontSize: 25 }}>ซื้อแพ็คนี้ไปแล้ว</p></div></div></Col>
                      <Col xs={8} sm={8} md={8}><div style={{ height: 15 }}></div><div id="itemlist" style={{ height: 200, overflowY: 'scroll', msScrollbarBaseColor: 'blue', msScrollbarArrowColor: 'red' }}><p id="hotDes2">ซื้อแพ็คนี้ไปแล้ว</p><h1 style={{ color: "red", fontSize: "20px" }} id="hotDes22"></h1></div></Col>
                      <Col xs={5} sm={5} md={5} style={{ height: 48 }}>
                        <select className="sv" id="sv" name="sv">
                          <option style={{ backgroundImage: `url(${TruIcon})`, background: '#230102 no-repeat 10% 50%', fontSize: 24 }} className="TrueW" id="TrueW" value="TrueW"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True Wallet</option>
                        </select>
                      </Col>
                      <Col xs={3} sm={3} md={3} style={{ height: 48, cursor: 'pointer' }} id={"hotButt2"} onClick={() => { this.sendOrder(2); }}><img style={{ position: 'absolute', left: 0, width: '100%', height: 48 }} src={require('./asset/Home/BUY Button.png')}></img><div style={{ zIndex: 666, position: 'absolute', textAlign: "center", alignContent: "center", width: '100%' }}><h1 id="hotPrice2" style={{ margin: "7px 0px" }}>BUY</h1></div></Col>
                    </Row>
                  </>
                </Panel.Body>
              </Panel>
              </Col>
              <Col xs={3} sm={3} md={3} id={this.state.hotId3} id="ForthHotDiv"><Panel className="selectNbuy" eventKey="4">
                <Panel.Heading style={{ padding: 0, backgroundColor: '#121212' }}>
                  <Panel.Title toggle><div style={{ position: 'absolute', backgroundImage: `url(${Hotitem})`, width: 57, height: 18, left: 20, top: 24 }}></div><div id="hilight" style={{ position: 'absolute', backgroundImage: `url(${Hilight})`, backgroundSize: '100% 100%', width: '100%', height: 240, top: 0 }}><img id="hilightcover2" src={require('./asset/Home/black.png')} style={{ height: 240, top: 0, zIndex: 110, left: -547.5, width: 547.5 }}></img><img id="hilightcover" src={require('./asset/Home/black.png')} style={{ height: 242.5, top: 0, zIndex: 111, left: -547.5, width: 750 }}></img></div><div style={{ textAlign: "center", alignContent: "center", height: 220 }}><div style={{ margin: 'auto', marginTop: 20, width: 160, height: 160, backgroundImage: `url(${BGItem})`, marginLeft: 'auto', marginRight: 'auto', marginBottom: 10 }}><img style={{ width: 152, height: 142, zIndex: 100 }} srcset="" id="hotPic3" src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{ height: 39, width: 160, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white' }}><p id="hotTitle3" style={{ fontSize: 25 }}>ซื้อแพ็คนี้ไปแล้ว</p></div></div></Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                  <>
                    <Row style={{ width: 750, left: -547.5, zIndex: '100', backgroundColor: "#121212", position: "absolute" }}>
                      <Col xs={4} sm={4} md={4}><div style={{ textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72 }} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 43 }} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 43 }} srcset="" id="hotPic30" src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{ width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%' }}><div style={{ height: 39, width: 160, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white' }}><p id="hotTitle30" style={{ fontSize: 25 }}>ซื้อแพ็คนี้ไปแล้ว</p></div></div></Col>
                      <Col xs={8} sm={8} md={8}><div style={{ height: 15 }}></div><div id="itemlist" style={{ height: 200, overflowY: 'scroll', msScrollbarBaseColor: 'blue', msScrollbarArrowColor: 'red' }}><p id="hotDes3">ซื้อแพ็คนี้ไปแล้ว</p><h1 style={{ color: "red", fontSize: "20px" }} id="hotDes33"></h1></div></Col>
                      <Col xs={5} sm={5} md={5} style={{ height: 48 }}>
                        <select className="sv" id="sv" name="sv">
                          <option style={{ backgroundImage: `url(${TruIcon})`, background: '#230102 no-repeat 10% 50%', fontSize: 24 }} className="TrueW" id="TrueW" value="TrueW"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True Wallet</option>
                        </select>
                      </Col>
                      <Col xs={3} sm={3} md={3} style={{ height: 48, cursor: 'pointer' }} id={"hotButt3"} onClick={() => { this.sendOrder(3); }}><img style={{ position: 'absolute', left: 0, width: '100%', height: 48 }} src={require('./asset/Home/BUY Button.png')}></img><div style={{ zIndex: 666, position: 'absolute', textAlign: "center", alignContent: "center", width: '100%' }}><h1 id="hotPrice3" style={{ margin: "7px 0px" }}>BUY</h1></div></Col>
                    </Row>
                  </>
                </Panel.Body>
              </Panel>

              </Col>
            </Row>
          </PanelGroup>
          <Row>
            <Col xs={3} sm={3} md={3}></Col>
            <Col xs={3} sm={3} md={3}></Col>
            <Col xs={3} sm={3} md={3}></Col>
            <Col xs={3} sm={3} md={3}><a href='/packageHero'><img style={{ width: '100%' }} src={require('./asset/Home/more item.png')}></img></a></Col>
          </Row>
        </>
      );
    } else {
      return (
        <>
          <Row style={{ backgroundColor: 'white', color: 'black', fontSize: '24px', fontWeight: 'bold', margin: '20px 0', width: '1329px', height: '48px' }}>
            <Col sm={2} md={2} style={{ height: '100%', textAlign: 'center', lineHeight: '48px' }}>
              <p style={{ display: 'inline-block', margin: 0, verticalAlign: 'middle', lineHeight: 1.5 }}>โปรโมชั่นสุดฮิต</p>
            </Col>
            <Col sm={2} smOffset={10} md={2} mdOffset={8} style={{ height: '100%', textAlign: 'center', lineHeight: '48px' }}>
              <a href='/packageHero' style={{ color: 'black' }}><p style={{ display: 'inline-block', margin: 0, verticalAlign: 'middle', lineHeight: 1.5 }}>ดูเพิ่มเติม ></p></a>
            </Col>
          </Row>

          <PanelGroup accordion id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect} >
            {/* <Row style={{ backgroundImage: `url(${background})` }}> */}
            <Row style={{ margin: '0 -10%' }}>
              <Col sm={2} smOffset={1} md={2} mdOffset={1} id={this.state.hotId0} id="FirstHotDiv">
                <Panel eventKey="1">
                  <Panel.Heading style={{ padding: 0 }}>
                    <Panel.Title toggle id="ProdId1">
                      <div id="HotOne" style={{ height: '259px', width: '254px', textAlign: "center", alignContent: "center", backgroundSize: '100% 100%' }}>
                        <img style={{ zIndex: 100 }} srcset="" id="hotPic0" src={require('./Home/image_package.png')} />
                      </div>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body style={{ height: '119px', width: '254px', color: 'black', padding: 10 }}>
                    <div style={{ textAlign: "left" }}>
                      <p id="hotTitle0" style={{ fontSize: '20px', fontWeight: 'bold' }}>แพ็คเกจโกลด์แถมชิปโบนัส</p>
                      <p style={{ fontSize: '16px' }}>100 โกลด์ + โบนัส 100,000 ชิป</p>
                    </div>
                    <div style={{ height: 41, width: 152, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, marginLeft: 'auto', color: 'white' }}>
                      <p style={{ padding: '10px', lineHeight: '1', margin: 0, height: '100%', fontSize: '24px' }}>ดูเพิ่มเติม ></p>
                    </div>
                  </Panel.Body>
                </Panel>
              </Col>

              <Col xs={2} sm={2} md={2} id={this.state.hotId1} id="SecondHotDiv">
                <Panel eventKey="2">
                  <Panel.Heading style={{ padding: 0 }}>
                    <Panel.Title toggle>
                      <div id="HotTwo" style={{ height: '259px', width: '254px', textAlign: "center", alignContent: "center", backgroundSize: '100% 100%' }}>
                        <img style={{ zIndex: 100 }} srcset="" id="hotPic1" src={require('./Home/image_package.png')} />
                      </div>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body style={{ height: '119px', width: '254px', color: 'black', padding: 10 }}>
                    <div style={{ textAlign: "left" }}>
                      <p id="hotTitle1" style={{ fontSize: '20px', fontWeight: 'bold' }}>แพ็คเกจโกลด์แถมชิปโบนัส</p>
                      <p style={{ fontSize: '16px' }}>100 โกลด์ + โบนัส 100,000 ชิป</p>
                    </div>
                    <div style={{ height: 41, width: 152, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, marginLeft: 'auto', color: 'white' }}>
                      <p style={{ padding: '10px', lineHeight: '1', margin: 0, height: '100%', fontSize: '24px' }}>ดูเพิ่มเติม ></p>
                    </div>
                  </Panel.Body>
                </Panel>
              </Col>

              <Col xs={2} sm={2} md={2} id={this.state.hotId2} id="ThirdHotDiv">
                <Panel eventKey="3">
                  <Panel.Heading style={{ padding: 0 }}>
                    <Panel.Title toggle>
                      <div id="HotThree" style={{ height: '259px', width: '254px', textAlign: "center", alignContent: "center", backgroundSize: '100% 100%' }}>
                        <img style={{ zIndex: 100 }} srcset="" id="hotPic2" src={require('./Home/image_package.png')} />
                      </div>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body style={{ height: '119px', width: '254px', color: 'black', padding: 10 }}>
                    <div style={{ textAlign: "left" }}>
                      <p id="hotTitle2" style={{ fontSize: '20px', fontWeight: 'bold' }}>แพ็คเกจโกลด์แถมชิปโบนัส</p>
                      <p style={{ fontSize: '16px' }}>100 โกลด์ + โบนัส 100,000 ชิป</p>
                    </div>
                    <div style={{ height: 41, width: 152, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, marginLeft: 'auto', color: 'white' }}>
                      <p style={{ padding: '10px', lineHeight: '1', margin: 0, height: '100%', fontSize: '24px' }}>THB 139.00</p>
                    </div>
                  </Panel.Body>
                </Panel>
              </Col>

              <Col xs={2} sm={2} md={2} id={this.state.hotId3} id="ForthHotDiv">
                <Panel eventKey="4">
                  <Panel.Heading style={{ padding: 0 }}>
                    <Panel.Title toggle>
                      <div id="HotFour" style={{ height: '259px', width: '254px', textAlign: "center", alignContent: "center", backgroundSize: '100% 100%' }}>
                        <img style={{ zIndex: 100 }} srcset="" id="hotPic3" src={require('./Home/image_package.png')} />
                      </div>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body style={{ height: '119px', width: '254px', color: 'black', padding: 10 }}>
                    <div style={{ textAlign: "left" }}>
                      <p id="hotTitle3" style={{ fontSize: '20px', fontWeight: 'bold' }}>แพ็คเกจโกลด์แถมชิปโบนัส</p>
                      <p style={{ fontSize: '16px' }}>100 โกลด์ + โบนัส 100,000 ชิป</p>
                    </div>
                    <div style={{ height: 41, width: 152, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, marginLeft: 'auto', color: 'white' }}>
                      <p style={{ padding: '10px', lineHeight: '1', margin: 0, height: '100%', fontSize: '24px' }}>THB 249.00</p>
                    </div>
                  </Panel.Body>
                </Panel>
              </Col>

              <Col xs={2} sm={2} md={2} id={this.state.hotId3} id="FifthHotDiv">
                <div style={{ position: 'absolute', backgroundImage: `url(${Disc})`, width: 80, height: 92, right: 10, top: -20 }} />
                <Panel eventKey="5">
                  <Panel.Heading style={{ padding: 0 }}>
                    <Panel.Title toggle>
                      <div id="HotFour" style={{ height: '259px', width: '254px', textAlign: "center", alignContent: "center", backgroundSize: '100% 100%' }}>
                        <img style={{ zIndex: 100 }} srcset="" id="hotPic4" src={require('./Home/image_package.png')} />
                      </div>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body style={{ height: '119px', width: '254px', color: 'black', padding: 10 }}>
                    <div style={{ textAlign: "left" }}>
                      <p id="hotTitle4" style={{ fontSize: '20px', fontWeight: 'bold' }}>แพ็คเกจโกลด์แถมชิปโบนัส</p>
                      <p style={{ fontSize: '16px' }}>100 โกลด์ + โบนัส 100,000 ชิป</p>
                    </div>
                    <div style={{ height: 41, width: 152, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, marginLeft: 'auto', color: 'white' }}>
                      <p style={{ padding: '10px', lineHeight: '1', margin: 0, height: '100%', fontSize: '24px' }}>THB 599.00</p>
                    </div>
                  </Panel.Body>
                </Panel>
              </Col>
            </Row>
          </PanelGroup>
        </>
      );
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {



    return (
      <Section id='home'>
        <SectionContainer>
          <SectionContainerExtension>
            <Content>
              <Grid style={{ width: '100%' }}>
                {this.checkingDevice()}
              </Grid>
            </Content>
          </SectionContainerExtension>
        </SectionContainer>
      </Section>
    )
  }
}

export default Home;