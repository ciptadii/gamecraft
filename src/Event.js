import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel';

import { SectionContainerEX, SectionContainerExtension } from './mainStyleComponent';
import { Section, Content, TopicHeader, PackageImage, WheelBase, FrameWheels, Wheels, ButtonSpin } from './eventStyleComponent';
import { ModalImage, ModalText, ModalDiv, ModalBG, ModalSubmitBox, ModalImgBox, ModalPackageInfo } from './packageStyleComponent';
import Modal from './Modal';

const picContent = [
  require('./asset/package/diamond.png'),
  require('./asset/package/diamond_stamina.png')
]


class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, picOpen: false }
    this.state = {
      sliding: false,
      status: false,
      result: 0,
      timeSpin: 0,
      winnerIs: false,
      toggleSpin: false,
      toggleLike: false,
      toggleJoingroup: false,
      wheelData: false,
      requiredRegister: false,
      responseJoinGroup: false,
      responseLikePage: false,
      winnerModal: false,
      email: false,
      mobileNumber: false,
      reward: false
    }
  }

  componentDidMount() {
    axios.get("https://havana-api.gigagames.co.th/" + 'wheels').then(async res => {
      this.setState({ wheelData: res.data })
    })
    this.setState({ toggleSpin: true })

    setInterval(() => {
      if (this.state.isOpen == true) {
        document.getElementById("spinningButt").style.pointerEvents = "none";
      } else if (this.state.isOpen == false) {
        document.getElementById("spinningButt").style.pointerEvents = "auto";
      }
    }
      , 100)
  }

  responsive = {
    0: { items: 1 },
    150: { items: 2 },
    300: { items: 3 },
    450: { items: 4 },
  };

  checkingDevice() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      return (
        <>
          <Row>
            <Col xs={12}>
              <img src={require('./asset/COMINGSOON[750x700].png')} />
            </Col>
          </Row>
          <Row>
            <Col style={{ height: 180 }} xs={12}></Col>
          </Row>
        </>
      );
    } else {
      return (
        <>
          <Row style={{ margin: '100px 0 0' }} >
            <Col md={12} lg={12} style={{ textAlign: 'center' }}>
              <div style={{ overflow: 'hidden', textAlign: 'center' }}>
                <img src={require('./Home/image_Footer.png')} style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
            </Col>
            {/* <Col md={12} lg={12} style={{textAlign:'center', height: 20}}></Col>
                <Col md={12} lg={12} style={{textAlign:'center'}}>
                    <img src={require('./asset/event/NAME.png')}></img>
                </Col>
                <Col md={12} lg={12} style={{textAlign:'center', height: 20}}></Col>
                <Col md={12} lg={12} id='event' style={{textAlign:'center'}}>
                  <WheelBase>
                    <FrameWheels>
                      <ButtonSpin id="spinningButt" onClick={ () => this.startSpin() }></ButtonSpin>
                    </FrameWheels>
                    <Wheels
                      timeSpin={ this.state.timeSpin }
                      sliding={ this.state.sliding } 
                      result={ this.state.result } 
                    />
                  </WheelBase>
                </Col> */}
          </Row>
        </>
      );
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  startSpin = () => {
    var random = this.getRandomInt(1, 4)
    var time = 3
    var spin = random + time
    var target = Math.floor(Math.random() * 360)
    var result = ((spin + 2) * 360) + target

    var numItem = 8
    var angle = 360 / numItem
    var offset = angle / 2
    var resultSpin = 360 - ((result - offset) % 360)
    var winner = Math.floor(resultSpin / angle)

    document.getElementById("spinningButt").style.pointerEvents = "none";

    this.setState({
      timeSpin: spin,
      result: result,
      sliding: true,
      winnerIs: winner,
      toggleSpin: false
    })

    axios.post('https://code.gigagames.co.th/create',
      {
        appId: 'a54e8008-2f32-4c68-8532-15b1ed494b18',
        value: this.state.wheelData[winner].values,
        target: 'preregister'
      },
      {
        auth: {
          username: 'bbe7f191-3250-4803-8473-ba802ca08a9e',
          password: '770bf158-4380-41d7-8e39-e6f240b55693'
        }
      }).then(res => {
        var code = res.data.data[0].code
        this.setState({ reward: code })
        localStorage.setItem('reward', code);
        localStorage.setItem('email', 'pat_pet_@hotmail.com');

        var email = localStorage.getItem('email')
        axios.get("https://havana-api.gigagames.co.th/" + 'players?email=' + email).then(res => {
          axios.put("https://havana-api.gigagames.co.th/" + 'players/' + res.data[0].id, {
            reward: code
          })
        })
      })

    setTimeout(() => {
      this.setState({
        sliding: false,
      })
      this.modalSpin()
      this.toggleModal()
    }, spin + '000')
  }

  modalSpin = () => {
    this.setState({
      status: !this.state.status
    });
  }

  render() {

    const { sliding, result, timeSpin, winnerIs, toggleLike, toggleJoingroup, toggleSpin, wheelData, requiredRegister, winnerModal, email, mobileNumber, reward } = this.state
    var winnerWheel = false
    if (wheelData[winnerIs] !== undefined) {
      winnerWheel = wheelData[winnerIs]
    }

    return (
      <Section>
        <SectionContainerEX>
          <SectionContainerExtension>
            <Content>
              {this.checkingDevice()}
            </Content>
          </SectionContainerExtension>
        </SectionContainerEX>
        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          <ModalBG>
            {console.log(this.state.isOpen)}
            <ModalDiv>
              <Grid>
                <Col xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'center', height: 35 }}>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'center' }}>
                  <img src={require('./asset/event/Popup/item.png')}></img>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'center', color: 'white', fontSize: 30 }}>
                  คุณได้รับ
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'center' }}>
                  <h1 style={{ color: 'white' }}>{this.state.winnerIs}</h1>
                </Col>
              </Grid>
            </ModalDiv>
          </ModalBG>
        </Modal>
      </Section>
    )
  }
}

export default Event