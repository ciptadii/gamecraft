import React, { Component } from "react";
import Slider from "react-slick";
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import Artboard_1 from './Home/Artboard_1.png';
{ var winHeight = window.screen.height; }

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
        bottom: 15px;
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

export default class Banner2 extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <Content>
      <Row style={{ backgroundColor: 'white' }}>
        <Col sm={12} md={12} lg={12} style={{ height: 512 }}>
          <Slider {...settings}>
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
       </Content>
    );
  }
}