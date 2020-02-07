import React, { Component } from 'react'
import { Grid, Row, Col, Panel, PanelGroup } from 'react-bootstrap'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

class Topup extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false, cont: false }
    }

    componentDidMount(){
        this.getCookieLogin("login")
    }

    loggedIN(){
        const con = <><Grid><Row><Col style={{height: 95}} sm={12} md={12}></Col></Row><Row><Col xs={12}>Main Topup</Col></Row><Row><Col xs={12}><form><div className="radio"><input type="radio" value="option1" checked={true} />Option 1<br></br><input type="radio" value="option2" />Option 2<br></br><input type="radio" value="option3" />Option 3<br></br></div><div><input type="submit" value="Submit"></input></div></form></Col></Row></Grid></>
        this.setState({ cont : con })
    }

    notLoggedIN(){
        window.location.replace("/")
    }

      getCookieLogin(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
          console.log(c.substring(name.length, c.length));
            if(c.substring(name.length, c.length)=="LoggedIn"){
                console.log('Logged in')
                this.loggedIN()
            }
          } else if (c.indexOf(name) !== 0) { 
            console.log('No cookie')
            this.notLoggedIN()
        }
        }
      }

    render() {

        return (
            <Section id='home'>
                <SectionContainer>
                    <SectionContainerExtension>
                        <Content>
                        {/* {this.getCookieLogin("login")} */}
                        {this.state.cont}
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


export default Topup