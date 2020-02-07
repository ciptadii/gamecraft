import React from 'react'
import axios from 'axios';
import ReactDOM from 'react-dom';
import _ from 'lodash'
import $ from 'jquery';
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
import TruIcon from './asset/Home/tru.png'

class RandomBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false, picOpen: false, contOpen: false, tabIndex: 1, pak: false, pack: false }
    }

    componentDidMount(){

    //     var d = "notlogin";
    //         console.log(d)
    //         if(localStorage.getItem("login")!==null){
    //         d = localStorage.getItem("login");
    //         }
    //         console.log(d)
    //     axios.post('https://3k-store-api.gigagames.co.th/products',{userId: d},
    // {
    //     auth: {
    //         username: '7b4d3863-9ad3-4d7f-9a18-cfa731911b20',
    //         password: 'c9747f17-0814-428f-b257-6ee7c62038e9'
    //     },
    //     responseType: 'json',
    //     headers: {'Content-Type': 'application/json'}
    // }).then(async response => {
    //     var res = await _.find(response.data, { "products" : [] });
    //     console.log(response.data)
    //     console.log(res)
    //     var prod = JSON.stringify(res.products)
    //     var prod_json = JSON.parse(prod)
    //     console.log(prod_json)

    //     var parseResult = {}, hero = [], equipment = [], item = []
    //          _.forEach(prod_json, function(value) {
    //             if(value.sectionId == 'hero'){
    //             hero.push(value)
    //         }
    //         if(value.sectionId == 'equipment'){
    //             equipment.push(value)
    //         }
    //         if(value.sectionId == 'item'){
    //             item.push(value)
    //         }
    //           });
    //             parseResult.hero = { data: hero }
    //             parseResult.equipment = { data: equipment }
    //             parseResult.item = { data: item }

    //     this.setState({
    //         pak: prod_json,
    //         pack: parseResult
    //     })
    //     console.log(this.state.pak)
    //     console.log(this.state.pak.length)
    // });
    }

allTab(){
    var d = "notlogin";
    console.log(d)
    if(localStorage.getItem("login")!==null){
      d = localStorage.getItem("login");
    }
    console.log(d)
          axios.post('https://3k-store-api.gigagames.co.th/products',{userId: d},
        {
            auth: {
                username: '7b4d3863-9ad3-4d7f-9a18-cfa731911b20',
                password: 'c9747f17-0814-428f-b257-6ee7c62038e9'
            },
            responseType: 'json',
            headers: {'Content-Type': 'application/json'}
        }).then(async response => {
            var res = await _.find(response.data, { "products" : [] });
            console.log(response.data)
            console.log(res)
            var prod = JSON.stringify(res.products)
            var prod_json = JSON.parse(prod)

             _.forEach(prod_json, function(value, index) {
                if(value.sectionId == 'special'){
                 console.log(index)
                 var new_row = document.createElement('div');
                 new_row.className = value.sectionId;
                 new_row.setAttribute("id", value.id);
                 document.getElementById("contRow").appendChild(new_row);

                 var packId = value.id;
                 var channId = value.channels[0].id;
                 console.log(packId)
                 console.log(channId)
                 var texx
                 if(value.purchaseLimitReset!==null && value.purchaseLimitReset=="w"){
                     texx = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้อาทิตย์ละครั้งเท่านั้น "
                 } else if(value.purchaseLimitReset!==null && value.purchaseLimitReset=="d"){
                    texx = " หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้วันละครั้งเท่านั้น "
                } else if(value.purchaseLimitReset==null&&value.purchaseLimit==null){
                     texx = "หมายเหตุ: สินค้ามีจำนวนจำกัด (เติมได้ไม่จำกัด)"
                 } else if(value.purchaseLimitReset==null){
                    texx = "หมายเหตุ: หนึ่งไอดีสามารถเติมไอเทมได้ครั้งเดียวเท่านั้น"
                 }

                 if (/Mobi|Android/i.test(navigator.userAgent)) {
                    var packId = value.id;
                 var channId = value.channels[0].id; 
                    ReactDOM.render(
                     (<>
                     <Row style={{width: 750, zIndex: '100', backgroundColor: "#121212"}}>
    <Col xs={12} sm={12} md={12} style={{height: 10, backgroundColor: "black"}}></Col>
    <Col xs={4} sm={4} md={4}><div style={{textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}><img style={{ margin: 'auto', marginTop: 30, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72}} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 30, left: 43}} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 30, position: 'absolute', left: 43}} id={"Allpic"+index} srcSet={value.url} src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%', height: 36}}><div style={{paddingTop: 3}}><div style={{height: 36, width: 230, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white', backgroundSize: '100% auto'}}><div style={{display: 'table', width: '100%'}}><p id={"Alltitle"+index} style={{fontSize: 25, display: 'table-cell', margin: '0 auto', verticalAlign: 'middle', textAlign: 'center', lineHeight: "20px"}}>{value.title}</p></div></div></div></div></Col>
    <Col xs={8} sm={8} md={8}><div style={{height: 15}}></div><div id="itemlist" style={{height: 200, overflowY: 'scroll', msScrollbarBaseColor: 'blue', msScrollbarArrowColor: 'red'}}><p id={"Alldesc"+index}>{value.description}</p><h1 style={{color: "red", fontSize: "20px"}}>{texx}</h1></div></Col>
<Col xs={5} sm={5} md={5} style={{height: 48}}>
        <select className="sv" id="sv" name="sv">
                <option style={{backgroundImage: `url(${TruIcon})`,background: '#230102 no-repeat 10% 50%', fontSize: 24}} className="TrueW" id="TrueW" value="TrueW"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True Wallet</option>
            </select>
</Col>
<Col xs={3} sm={3} md={3} style={{height: 48, cursor: 'pointer'}} id={"Allbutt"+index} onClick={()=>{sendOrd(packId, channId)}}><img style={{position: 'absolute', left: 0, width: '100%', height: 54}} src={require('./asset/Home/BUY Button.png')}></img><div style={{zIndex: 666, position: 'absolute', textAlign: "center", alignContent: "center", width: '100%'}}><h1 id="hotPrice0" id={"Allprice"+index} style={{margin: "7px 0px"}}>{value.amount} บาท</h1></div></Col>
            </Row>
                     </>)
                     , document.getElementById(value.id));
                     } else {
                        var packId = value.id;
                 var channId = value.channels[0].id; 
                        ReactDOM.render(
                    (<>
                    <Row style={{width: 970, zIndex: '100', backgroundColor: "#121212"}}>
                <Col sm={12} md={12} style={{height: 32, backgroundColor: "black"}}></Col>
                <Col sm={4} md={4}><div style={{textAlign: "center", alignContent: "center", height: 220, backgroundImage: `url(${ButtonPicBG})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}><img style={{ margin: 'auto', marginTop: 20, width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, zIndex: 9, left: 72}} src={require('./asset/Home/BG-ITEM.png')}></img><img style={{ width: 160, height: 160, zIndex: 99, position: 'absolute', marginTop: 20, left: 81}} src={require('./asset/Home/BG-ITEM-03.png')}></img><img style={{ width: 160, height: 160, zIndex: 100, marginTop: 20, position: 'absolute', left: 81}} id={"Allpic"+index} srcSet={value.url} src={require('./asset/Home/PACK-[ITEM].png')}></img></div><div style={{width: '100%', backgroundImage: `url(${ButtonNameBG})`, backgroundSize: '100% 100%', height: 50}}><div style={{paddingTop: 6}}><div style={{height: 36, width: 230, textAlign: "center", alignContent: "center", backgroundImage: `url(${ButtonName})`, margin: 'auto', color: 'white', backgroundSize: '100% 100%'}}><div style={{display: 'table', width: '100%'}}><p id={"Alltitle"+index} style={{fontSize: 25, display: 'table-cell', margin: '0 auto', verticalAlign: 'middle', textAlign: 'center', lineHeight: "20px"}}>{value.title}</p></div></div></div></div></Col>
                <Col xs={8} sm={8} md={8}><div style={{height: 15}}></div><div id="itemlist" style={{height: 207, overflowY: 'scroll', msScrollbarBaseColor: 'blue', msScrollbarArrowColor: 'red'}}><p id={"Alldesc"+index}>{value.description}</p><h1 style={{color: "red", fontSize: "20px"}}>{texx}</h1></div></Col>
<Col xs={5} sm={5} md={5} style={{height: 48}}>
        <select className="sv" id="sv" name="sv">
                <option style={{backgroundImage: `url(${TruIcon})`,background: '#230102 no-repeat 10% 50%', fontSize: 24}} className="TrueW" id="TrueW" value="TrueW"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True Wallet</option>
            </select>
</Col>
<Col xs={3} sm={3} md={3} style={{height: 48, cursor: 'pointer'}} id={"Allbutt"+index} onClick={()=>{sendOrd(packId, channId)}}><img style={{position: 'absolute', left: 0, width: '100%', height: 54}} src={require('./asset/Home/BUY Button.png')}></img><div style={{zIndex: 666, position: 'absolute', textAlign: "center", alignContent: "center", width: '100%'}}><h1 id="hotPrice0" id={"Allprice"+index} style={{margin: "7px 0px"}}>{value.amount} บาท</h1></div></Col>
                </Row>
                </>)
                , document.getElementById(value.id));
            }
                if(value.purchaseCount>=value.purchaseLimit&&value.purchaseLimit!==null){
                    document.getElementById("Alltitle"+index).innerHTML = "ซื้อแพ็คนี้ไปแล้ว";
                    document.getElementById("Allpic"+index).srcSet = require('./asset/Home/PACK-[ITEM].png');
                    document.getElementById("Allprice"+index).innerHTML = "";
                    document.getElementById("Allbutt"+index).style.pointerEvents="none"
                }
            
             }
            });
            var ab = window.location.hash
            if(ab.length > 3){
                setTimeout(()=>{
                    var abc = ab.substring(1)
                    document.getElementById(abc).scrollIntoView({block: "center", inline: "center"});
                    var x = document.getElementsByClassName("hero").length;
                    var y = document.getElementsByClassName("equipment").length;
                    var z = document.getElementsByClassName("item").length;
                    var i;
                    var j;
                    var k;
                    for(k=0;k<z;k++){document.getElementById("contRow").getElementsByClassName("item")[k].style.opacity = "0.5";}
                    for(i=0;i<x;i++){document.getElementById("contRow").getElementsByClassName("hero")[i].style.opacity = "0.5";}
                    for(j=0;j<y;j++){document.getElementById("contRow").getElementsByClassName("equipment")[j].style.opacity = "0.5";}
                    document.getElementById(abc).style.opacity = "1.0";
                }, 600)
                setTimeout(()=>{
                    this.rmvHilight()
                }, 5600)
            }
            });

            var x = document.getElementsByClassName("hero").length;
            var y = document.getElementsByClassName("equipment").length;
            var z = document.getElementsByClassName("item").length;
            var i;
            var j;
            var k;
            for(k=0;k<z;k++){document.getElementById("contRow").getElementsByClassName("item")[k].style.display = "block";}
            for(i=0;i<x;i++){document.getElementById("contRow").getElementsByClassName("hero")[i].style.display = "block";}
            for(j=0;j<y;j++){document.getElementById("contRow").getElementsByClassName("equipment")[j].style.display = "block";}
    }

    rmvHilight(){
        var x = document.getElementsByClassName("hero").length;
        var y = document.getElementsByClassName("equipment").length;
        var z = document.getElementsByClassName("item").length;
        var i;
        var j;
        var k;
        for(k=0;k<z;k++){document.getElementById("contRow").getElementsByClassName("item")[k].style.opacity = "1.0";}
        for(i=0;i<x;i++){document.getElementById("contRow").getElementsByClassName("hero")[i].style.opacity = "1.0";}
        for(j=0;j<y;j++){document.getElementById("contRow").getElementsByClassName("equipment")[j].style.opacity = "1.0";}
    }

    checkingDevice(){
                return (<>{this.allTab()}</>);
    }

    responsive = {
        0: { items: 1 },
        150: { items: 2 },
        300: { items: 3 },
        450: { items: 4 },
      };

    render() {

        const handleOnDragStart = e => e.preventDefault()

        return (
            <Section id='packageAll'>
                <SectionContainer>
                    <SectionContainerExtension>
                        <span><br /></span>
                        <Content>
                        <Grid style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                        <Row><Col style={{height: 10}} xs={12} sm={12} md={12}></Col></Row>
                        {/* <input onChange={()=>{searchh()}} id="searchBarr"></input> */}
                        <Row style={{backgroundImage: `url(${BGTab})`}}>
                            <Col xs={3} sm={3} md={3}><div id="hero" onClick={() => window.location.replace("/packageHero")} style={{cursor: 'pointer', opacity: '0.4'}}><img style={{width: '90%'}} src={require('./asset/pack/packall/buttHero.png')}></img></div></Col>
                            <Col xs={3} sm={3} md={3}><div id="upgrade" onClick={() => window.location.replace("/packageEquipment")} style={{cursor: 'pointer', opacity: '0.4'}}><img style={{width: '90%'}} src={require('./asset/Home/Button Equipment.png')}></img></div></Col>
                            <Col xs={3} sm={3} md={3}><div id="item" onClick={() => window.location.replace("/packageItem")} style={{cursor: 'pointer', opacity: '0.4'}}><img style={{width: '90%'}} src={require('./asset/pack/packall/buttItem.png')}></img></div></Col>
                            <Col xs={3} sm={3} md={3}><div id="all" onClick={() => window.location.replace("/packageSpecial")} style={{cursor: 'pointer'}}><h1 id="allText" style={{position: 'absolute'}}></h1><img style={{width: '90%'}} src={require('./asset/Home/Button [ 2 ] Special.png')}></img></div></Col>
                        </Row>
                        {console.log(this.state.tabIndex)}
                        {this.checkingDevice()}
                        <div id="contRow"></div>

                        <Row><Col style={{height: 130}} xs={12} sm={12} md={12}></Col></Row>
                        </Grid>
                        </Content>
                    </SectionContainerExtension>
                </SectionContainer>
            </Section>
        )
    }
}

function sendOrd(packageId, channelId){
    if(localStorage.getItem("login")!==null){
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
          headers: {'Content-Type': 'application/json'}
      }).then(async res => {
          var stat = res.data.status;
          console.log(stat)
          console.log(res.data.data.url)
          if(stat == "success"){
            var cut = res.data.data.url.substring(28)
                console.log(cut)
                // window.location.replace('http://192.168.100.121:3000/'+cut)
                window.location.replace('https://pay.gigagames.co.th/'+cut)
            console.log('Confirmed successfully')
          } else {alert("You have failed this transcation")}
      }).catch(function (error) {
        console.log(error);
      });
} else { 
  window.location.replace("/login")
}
}
export default RandomBox