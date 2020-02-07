import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Slider from "react-slick";
import axios from 'axios';
import _ from 'lodash';
import Artboard_1 from './Home/Artboard_1.png';
{ var winHeight = window.screen.height; }

var bannn = []

const settings = {
  className: 'center',
  centerMode: true,
  // centerPadding: '60px',
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  focusOnSelect: false,
  pauseOnHover: true,
  variableWidth: true
};
axios.defaults.headers.post['Content-Type'] = 'application/json';

const Content = styled.div`
    position: relative;
    margin: 0 auto;
    padding-top: 10%;
    // width: 70vw;
    // height: ${winHeight * 80 / 100}px;
    min-width: 768px;
    text-align:center;

    
    @media only screen and (max-width: 1920px){
      .container{
        width: 1920px;
      }
      .slick-slide {
        width: 1044px;
        padding: 0 10px;
      }
      @media only screen and (max-width: 768px){
        .container {
          width: 750px;
          background-color: transparent !important;
        }
        .container#BagContainer {
          width: 750px;
          background-color: black !important;
        }
      }
    }


    @media only screen and (max-width: 768px){
        margin: 0% auto;
      }


      .slick-dots li button:before{
        color: white;
        opacity: 0.6;
        font-size: 10px;
      }
      
      .slick-dots li {
        width: 15px;
        margin: 0 3px;
      }


      .slick-next, .slick-prev{
        display: none !important;
      }
      .slick-dots li.slick-active button:before{
        color: white;
        opacity: 1.0;
        font-size: 15px;
      }
      .panel{
          border: none;
          background-color: rgb(18, 18, 18);
      }
      .panel-group .panel-heading+.panel-collapse>.panel-body{
          padding: 0px;
          border: none;
      }

      .slick-dots{
        bottom: 10px;
      }

      ::-webkit-scrollbar {
        width: 20px;
      }
      ::-webkit-scrollbar-track {
        background-color: #121212;
        border-radius: 10px;
        border: 20px black;
      }
      ::-webkit-scrollbar-thumb {
        background: white; 
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: white; 
      }
`

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bannerState: false, bann: false }
    // this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
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
        var bannerUrl = JSON.stringify(res.banners)
        var bannerUrl_json = JSON.parse(bannerUrl)
        console.log(bannerUrl_json)
        bannn = bannerUrl_json
        console.log(bannn)

        const banana = bannerUrl_json.map(function (slide) {
          return (
            <div>
              <a href={slide.redirect}>
                <img style={{ height: 512 }} src={slide.url}></img>
              </a>
            </div>
          );
        })

        var parseResult = {}, banner = [], parseBanner = {}
        _.forEach(bannerUrl_json, function (value) {
          banner.push(value)
        });

        parseBanner.banner = { data: banner }

        this.setState({
          bannerState: parseBanner
        });
        console.log(this.state.bannerState)
      }).catch(function (error) {
        console.log(error);
      });

    var ab = window.location.hash
    if (ab.length > 3) {
      setTimeout(() => {
        var abc = ab.substring(1)
        document.getElementById(abc).scrollIntoView({ block: "center", inline: "center" });
      })
    }
  }


  bannerLoad() {
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

        var parseResult = {}, hot = [], banner = []
        _.forEach(bannerUrl_json, function (value, index) {
          return (
            <div>
              <a href={value.redirect} ><img style={{ height: 512 }} src={value.url}></img></a>
            </div>
          );
        }
        );
      });
  }

  returnBanner() {
    this.state.bannerState.banner.data.map(function (slide) {
      return (
        <div>
          <a href={slide.redirect} ><img style={{ height: 512 }} src={slide.url}></img></a>
        </div>
      );
    })
  }

  checkingDevice() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      return (
        <>
          <Row style={{ backgroundColor: 'black' }}>
            <Col xs={12} sm={12} md={12} style={{ height: 512 }}>
              {/* <Slider id="bannerSlide" {...settings}>
                {bannn.map(ban => { return (<div><a href={ban.redirect}><img style={{ height: 433 }} src={ban.url}></img></a></div>) })}
              </Slider> */}
              <Slider id="bannerSlide" {...settings}>
                <div>
                  <a href='/packageItem'>
                    <img src={Artboard_1} alt='Banner' />
                  </a>
                </div>
                <div>
                  <a href='/packageItem'>
                    <img src={Artboard_1} alt='Banner' />
                  </a>
                </div>
                <div>
                  <a href='/packageItem'>
                    <img src={Artboard_1} alt='Banner' />
                  </a>
                </div>
                <div>
                  <a href='/packageItem'>
                    <img src={Artboard_1} alt='Banner' />
                  </a>
                </div>
                <div>
                  <a href='/packageItem'>
                    <img src={Artboard_1} alt='Banner' />
                  </a>
                </div>
                <div>
                  <a href='/packageItem'>
                    <img src={Artboard_1} alt='Banner' />
                  </a>
                </div>
              </Slider>
            </Col>
          </Row>
        </>
      );
    }
    else {
      return (
        <>
          <Row>
            <Col sm={12} md={12} style={{ height: 512 }}>
              {/* real banner with API consumption */}
              {/* <Slider id="bannerSlide" {...settings}>
                {
                  bannn.map(ban => {
                    return (
                      <div>
                        <a href={ban.redirect}>
                          <img style={{ height: 512 }} src={ban.url} />
                        </a>
                      </div>
                    )
                  })
                }
              </Slider> */}

              {/* this banner just for temporary */}
              <Slider id="bannerSlide" {...settings}>
                <div>
                  <a href='/packageItem'>
                    <img src={Artboard_1} alt='Banner' />
                  </a>
                </div>
                <div>
                  <a href='/packageItem'>
                    <img src={Artboard_1} alt='Banner' />
                  </a>
                </div>
                <div>
                  <a href='/packageItem'>
                    <img src={Artboard_1} alt='Banner' />
                  </a>
                </div>
                <div>
                  <a href='/packageItem'>
                    <img src={Artboard_1} alt='Banner' />
                  </a>
                </div>
                <div>
                  <a href='/packageItem'>
                    <img src={Artboard_1} alt='Banner' />
                  </a>
                </div>
                <div>
                  <a href='/packageItem'>
                    <img src={Artboard_1} alt='Banner' />
                  </a>
                </div>
              </Slider>
            </Col>
          </Row>
        </>
      );
    }
  }

  render() {
    return (
      <>
        <Content>
          {this.checkingDevice()}
        </Content>
      </>
    )
  }
}

export default Banner;