import styled from 'styled-components'

import background from './asset/bg/BG-ALL.png'
import backgroundLogin from './asset/bg/BG-LOGIN.png'
import methodBut from './asset/Home/01-[01].png'
// import svBut from './asset/Home/01-[01].png'
import TruIcon from './asset/Home/True-Button.png'
import ConfirmBut from './asset/Home/confirm.png'
import searchIcon from './asset/nav/mobi/glass.png'
{var winHeight = window.screen.height;}

export const Portrait = styled.div`
  display: none;

  @media only screen and (max-width: ${props => props.width +'px'}) {
      display: block;
  }
`

export const Landscape = styled.div`
  display: table;
  background-color: black;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 5vw;
  text-align: center;
  
  @media only screen and (max-width: ${props => props.width + 'px'}) {
      display: none;    
  }
`

export const LandscapeContent = styled.div`
  display: table-cell;
  vertical-align: middle;
`


export const SectionContainer = styled.div`
    position: relative;
    display: table;
    // height: 100%;
    width: 100%;
    // padding-top: 4.4%;

    &.mobile {
      // padding-top: 8.5vh;
    }
`
export const SectionContainerEX = styled.div`
    position: relative;
    display: table;
    // height: 100%;
    width: 100%;
    padding-top: 0px;

    &.mobile {
      padding-top: 8.5vh;
    }
`

export const SectionContainerExtension = styled.div`
    display: table-cell;
    vertical-align: middle;

    ${SectionContainer}.mobile & {
      vertical-align: top;
    }
`

export const Body = styled.div`
    width: 100vw;
    height: 100vh;
    color: white;
    // overflow-y: scroll;
    // overflow-x: hidden;
    min-width: 768px !important;
    // -ms-overflow-style: none;
    // overflow: -moz-scrollbars-none;
    scrollbar-width: none;
    background-color: #F5F5F5;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-family: 'RSU';

    input {
      text-align: center;
      }

    #history{
      height: auto;   
    }

    @media only screen and (max-width: 768px){
      height: 200vh;
      // height: ${winHeight}px

      #history{
        min-height: 200vh;   
        height: auto;
      }
    }

    .Null-null{
      visibility: hidden;
    }

    a{
      pointer: cursor;
    }

    #itemlist{
      font-size: 25px;

      @media only screen and (max-width: 768px){
        font-size: 20px;
      }
    }

    @font-face {
      font-family: 'RSU';
      unicode-range: U+0E00–U+0E7F;
    }

    #allText{
      margin: 14px auto;
    width: 80%;
    left: 10%;
      @media only screen and (max-width: 768px){
        margin: 10px auto;
      }
    }
    
    #f1 input[type=submit] {
      display: none;
  }

  #searchBar{
    color:black;
    width: 100%;
    height: 60px;
    font-size: 20px;
    background-image: url(${searchIcon});
    background-size: 20px 20px;
    background-position: center right;
    background-repeat: no-repeat;
    

  }
  #searchBarr{
    color:black;
    width: 100%;
    height: 60px;
    font-size: 20px;
    background-image: url(${searchIcon});
    background-size: 20px 20px;
    background-position: center right;
    background-repeat: no-repeat;
    
  }

    .dropdown-content{
      min-width: inherit !important;
      width: inherit !important;
    }

    #notiBanner{
      z-index: 116;
      text-align: center;
    }
    #notiText{
      margin-left: 10px;
      margin-top: 180px;
      font-size: 2.5rem;
      user-select: text; /* supported by Chrome and Opera */
      -webkit-user-select: text; /* Safari */
      -khtml-user-select: text; /* Konqueror HTML */
      -moz-user-select: text; /* Firefox */
      -ms-user-select: text; /* Internet Explorer/Edge */
    }
    #notiTextLogin{
      margin-left: 10px;
      margin-top: 180px;
      font-size: 2.5rem;
    }

      @-webkit-viewport{width: device-width; initial-scale:1.0; minimum-scale: 1.0;}
      @-moz-viewport{width: device-width; initial-scale:1.0; minimum-scale: 1.0;}
      @-ms-viewport{width: device-width; initial-scale:1.0; minimum-scale: 1.0;}
      @-o-viewport{width: device-width; initial-scale:1.0; minimum-scale: 1.0;}
      @viewport{width: device-width; initial-scale:1.0; minimum-scale: 1.0;}

    @media only screen and (max-width: 768px){
      min-width: 768px;
      width: 768px;
      // min-height: ${winHeight}px;
      min-height: 1024px;
      height: 1366px;
      background-color: transparent;
      // min-height: 100vh;

      select.method option{
        width: 250px !important;
      }

      input.regisInput{
        border-radius: 5px;
      }

      ::-webkit-input-placeholder {
        text-align: center;
     }
     
     :-moz-placeholder { /* Firefox 18- */
        text-align: center;  
     }
     
     ::-moz-placeholder {  /* Firefox 19+ */
        text-align: center;  
     }
     
     :-ms-input-placeholder {  
        text-align: center; 
     }

      // select.method option[value="tru"]{
      //   background-image: url(${TruIcon});
      //   text-align: right;
      //   background-size: 20px 20px;
      //   background-repeat: no-repeat;
      //   background-position:bottom left;
      //   padding-left:30px;
      //   width: 250px;
      // }
  
      // select.method option[value="lin"]{
      //   background-image: url(${TruIcon});
      //   text-align: right;
      //   background-size: 20px 20px;
      //   background-repeat: no-repeat;
      //   background-position:bottom left;
      //   padding-left:30px;
      //   width: 250px;
      // }
      
      @-webkit-viewport{width: device-width; initial-scale:0.3; minimum-scale: 0.3;}
      @-moz-viewport{width: device-width; initial-scale:0.3; minimum-scale: 0.3;}
      @-ms-viewport{width: device-width; initial-scale:0.3; minimum-scale: 0.3;}
      @-o-viewport{width: device-width; initial-scale:0.3; minimum-scale: 0.3;}
      @viewport{width: device-width; initial-scale:0.3; minimum-scale: 0.3;}
    }

    input:focus {
      &.${Landscape} {
        display:none;
      }
    }
    scroll-behavior: smooth;

    .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9{
      padding-left: 0px;
      padding-right: 0px;
    }

    ::-webkit-scrollbar {display:none;}

    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */

    img {
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
      user-drag: none;
    }

    .method{
      display: none; 
      color: white; 
      margin: 0 auto; 
      height: 28px;
      width: 100%;
      background: #810102 url(${methodBut}) no-repeat 100% 1px;
      font-family: 'FontAwesome', 'Second Font name';
    }

    select.method option{
      width: 100%;
    }

    select.method option[value="tru"]{
      background-image: url(${TruIcon});
      text-align: right;
      background-size: 20px 20px;
      background-repeat: no-repeat;
      background-position:bottom left;
      padding-left:30px;
      width: 100%;
    }

    select.method option[value="lin"]{
      background-image: url(${TruIcon});
      text-align: right;
      background-size: 20px 20px;
      background-repeat: no-repeat;
      background-position:bottom left;
      padding-left:30px;
      width: 100%;
    }

    .uid{
      display: none; 
      color: white; 
      margin: 0 auto; 
      height: 53px;
      width: 100%;
      background: #810102 url(${ConfirmBut}) no-repeat 100% 10px;
    }

    // .panel-title #hilight{
    //   overflow: hidden;
    // }

    .panel-title .collapsed #hilight0{
      visibility: hidden;
    }

    .panel-title #hilight0{
      visibility: visible;
      opacity: 1.0 !important;
    }

    .panel-title .collapsed #hilight0 #hilightcover{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight0 #hilightcover2{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight0 #hilightcover3{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight1{
      visibility: hidden;
    }

    .panel-title #1{
      visibility: visible;
      opacity: 1.0 !important;
    }

    .panel-title .collapsed #hilight1 #hilightcover{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight1 #hilightcover2{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight1 #hilightcover3{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight2{
      visibility: hidden;
    }

    .panel-title #hilight2{
      visibility: visible;
      opacity: 1.0 !important;
    }

    .panel-title .collapsed #hilight2 #hilightcover{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight2 #hilightcover2{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight2 #hilightcover3{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight3{
      visibility: hidden;
    }

    .panel-title #hilight3{
      visibility: visible;
      opacity: 1.0 !important;
    }

    .panel-title .collapsed #hilight3 #hilightcover{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight3 #hilightcover2{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight3 #hilightcover3{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight4{
      visibility: hidden;
    }

    .panel-title #hilight4{
      visibility: visible;
      opacity: 1.0 !important;
    }

    .panel-title .collapsed #hilight4 #hilightcover{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight4 #hilightcover2{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight4 #hilightcover3{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight5{
      visibility: hidden;
    }

    .panel-title #hilight5{
      visibility: visible;
      opacity: 1.0 !important;
    }

    .panel-title .collapsed #hilight5 #hilightcover{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight5 #hilightcover2{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight5 #hilightcover3{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight{
      visibility: hidden;
    }

    .panel-title #hilight{
      visibility: visible;
      opacity: 1.0 !important;
    }

    .panel-title .collapsed #hilight #hilightcover{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight #hilightcover2{
      visibility: hidden;
    }

    .panel-title .collapsed #hilight #hilightcover3{
      visibility: hidden;
    }

    #rewardBag{
      @media only screen and (max-width: 768px){
      left: 35px !important;
      }
    }

    #panel-body-0{
      @media only screen and (max-width: 768px){
        left: 15px !important;
      }
    }

    #panel-body-1{
      left: -308.33px !important;
      @media only screen and (max-width: 768px){
        left: -240px !important;
      }
    }
    #panel-body-2{
      left: -631.66px !important;
      @media only screen and (max-width: 768px){
        left: -485px !important;
      }
    }
    #panel-body-3{
      @media only screen and (max-width: 768px){
        left: 15px !important;
      }
    }
    #panel-body-4{
      left: -308.33px !important;
      @media only screen and (max-width: 768px){
        left: -240px !important;
      }
    }
    #panel-body-5{
      left: -631.66px !important;
      @media only screen and (max-width: 768px){
        left: -485px !important;
      }
    }

    .panel-title #hilightcover{
      visibility: visible;
      opacity: 0.2;
      // height: 240px;
      width: 970px;
      left:0;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        width: 750px;
      }
    }

    .panel-title #hilightcover2{
      visibility: visible;
      opacity: 0.6;
      // height: 240px;
      width: 242.5px;
      left:0;
      top:0;
      position:absolute;
    }
    .panel-title #hilightcover3{
      visibility: visible;
      opacity: 0.6;
      // height: 240px;
      width: 242.5px;
      left:0;
      top:0;
      position:absolute;
    }

    .panel-title #hilight0 #hilightcover{
      visibility: visible;
      opacity: 0.2;
      // height: 240px;
      width: 970px;
      left:0 !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        width: 750px !important;
      }
    }

    .panel-title #hilight0 #hilightcover2{
      visibility: visible;
      opacity: 0.6;
      // height: 240px;
      width: 242.5px;
      left:323.33px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        left: 250px !important;
      }
    }
    .panel-title #hilight0 #hilightcover3{
      visibility: visible;
      opacity: 0.6;
      // height: 240px;
      width: 242.5px;
      left:646.66px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        left: 500px !important;
      }
    }

    .panel-title #hilight1 #hilightcover{
      visibility: visible;
      opacity: 0.2;
      // height: 240px;
      width: 970px;
      left: -323.33px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        width: 750px !important;
      }
    }

    .panel-title #hilight1 #hilightcover2{
      visibility: visible;
      opacity: 0.6;
      // height: 240px;
      width: 242.5px;
      left: -323.33px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        left: -250px !important;
      }
    }
    .panel-title #hilight1 #hilightcover3{
      visibility: visible;
      opacity: 0.6;
      // height: 240px;
      width: 242.5px;
      left: 323.33px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        left: 250px !important;
      }
    }

    .panel-title #hilight2 #hilightcover{
      visibility: visible;
      opacity: 0.2;
      // height: 240px;
      width: 970px;
      left: -646.7px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        width: 750px !important;
        left: -500px !important;
      }
    }

    .panel-title #hilight2 #hilightcover2{
      visibility: visible;
      opacity: 0.6;
      // height: 240px;
      width: 242.5px;
      left: -646.66px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        left: -250px !important;
      }
    }
    .panel-title #hilight2 #hilightcover3{
      visibility: visible;
      opacity: 0.6;
      // height: 240px;
      width: 242.5px;
      left: -323.33px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        left: -500px !important;
      }
    }

    .panel-title #hilight3 #hilightcover{
      visibility: visible;
      opacity: 0.2;
      // height: 240px;
      width: 970px;
      left:0 !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        width: 750px !important;
      }
    }

    .panel-title #hilight3 #hilightcover2{
      visibility: visible;
      opacity: 0.6;
      // height: 240px;
      width: 242.5px;
      left:323.33px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        left: 250px !important;
      }
    }
    .panel-title #hilight3 #hilightcover3{
      visibility: visible;
      opacity: 0.6;
      // height: 240px;
      width: 242.5px;
      left:646.66px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        left: 500px !important;
      }
    }

    .panel-title #hilight4 #hilightcover{
      visibility: visible;
      opacity: 0.2;
      // height: 240px;
      width: 970px;
      left: -323.33px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        width: 750px !important;
      }
    }

    .panel-title #hilight4 #hilightcover2{
      visibility: visible;
      opacity: 0.6;
      // height: 240px;
      width: 242.5px;
      left: -323.33px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        left: -250px !important;
      }
    }
    .panel-title #hilight4 #hilightcover3{
      visibility: visible;
      opacity: 0.6;
      // height: 240px;
      width: 242.5px;
      left: 323.33px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        left: 250px !important;
      }
    }

    .panel-title #hilight5 #hilightcover{
      visibility: visible;
      opacity: 0.2;
      // height: 240px;
      width: 970px;
      left: -646.7px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        width: 750px !important;
        left: -500px !important;
      }
    }

    .panel-title #hilight5 #hilightcover2{
      visibility: visible;
      opacity: 0.6;
      // height: 240px;
      width: 242.5px;
      left: -646.66px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        left: -250px !important;
      }
    }
    .panel-title #hilight5 #hilightcover3{
      visibility: visible;
      opacity: 0.6;
      // height: 240px;
      width: 242.5px;
      left: -323.33px !important;
      top:0;
      position:absolute;
      @media only screen and (max-width: 768px){
        left: -500px !important;
      }
    }



    .sv{
      display: block; 
      color: white; 
      margin: 0 auto; 
      height: 48px;
      font-size: 18px;
      width: 100%;
      background: #230102 url(${TruIcon}) no-repeat 5% 50%;
      font-family: 'FontAwesome', 'Second Font name';
    }

    .sv option[value="TrueW"]{
      background: #230102 url(${TruIcon}) no-repeat 5% 50%;
    }

    .TrueW{
      background: #230102 url(${TruIcon}) no-repeat 5% 50%;
    }

    // select.sv option[value="TrueW"]{
    //   background: url(${TruIcon});
    // }

    // #TrueW{
    //   background: #230102 url(${TruIcon}) no-repeat 10% 50%;
    // }

    // .sv option[value="TrueW"]{
    //   background: #230102 url(${TruIcon}) no-repeat 10% 50%;
    // }

      // @if .panel .collapse.in{
        
      // }

      // .panel-heading{
      //   opacity: 0.2;
      // }

    .collapse.in .panel-body{
      height: 269px;
      background-color: #121212;
    }

    .selectNbuy .panel-body{
      height: 260px !important;
      background-color: #121212;
    }
    .selectNbuy p{
      font-size: 20px !important;
    }

    .collapse.in{
      background-color: #121212;
    }

    .collapsing .panel-body {
      // display: none;
      background-color: #121212;
      visibility: hidden;
    }

    // .collapse.in>.panel-heading{
    //   opacity: 0.2;
    // }

    // .panel-collapse{
    //   opacity: 0.2;
    // }

    // .panel-heading! .collapse.in > .panel-heading {
    //   opacity: 0.2;
    // }

    // .panel > div.collapse.in ~ div.panel-heading{
    //   opacity: 0.2;
    // }

    .collapse.in ~ .panel-heading{
      opacity: 0.2;
    }

    // .collapse.in{
    //   background-color: #0C0C0C;
    //   background-size: 1000% 1000%;
    //   z-index: 9999;
    // }

    // .opaWrapper{
    //   background-color: #0C0C0C;
    //   background-size: 1000% 1000%;
    //   z-index: 9998;
    // }
`

export const BodyLogin = styled.div`
    width: 100vw;
    height: 100vh;
    color: white;
    overflow-y: scroll;
    // overflow-x: hidden;
    min-width: 768px !important;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
    background-color: black;
    background-image: url(${backgroundLogin});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-family: 'RSU';
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    @media only screen and (max-width: 768px){
      min-width: 768px;
      width: 768px;
      // min-height: ${winHeight}px;
      min-height: 1024px;
      height: 1366px;
      // min-height: 100vh;
      @font-face {
        font-family: 'RSU';
        unicode-range: U+0E00–U+0E7F;
      }
      input.regisInput{
        border-radius: 5px;
      }
      ::-webkit-input-placeholder {
        text-align: center;
     }
     
     :-moz-placeholder { /* Firefox 18- */
        text-align: center;  
     }
     
     ::-moz-placeholder {  /* Firefox 19+ */
        text-align: center;  
     }
     
     :-ms-input-placeholder {  
        text-align: center; 
     }
      
      @-webkit-viewport{initial-scale=0.3}
      @-moz-viewport{initial-scale=0.3}
      @-ms-viewport{initial-scale=0.3}
      @-o-viewport{initial-scale=0.3}
      @viewport{initial-scale=0.3}
    }
    input:focus {
      &.${Landscape} {
        display:none;
      }
    }
    scroll-behavior: smooth;
    .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9{
      padding-left: 0px;
      padding-right: 0px;
    }
    ::-webkit-scrollbar {display:none;}
    #home #accordian-controlled-example.panel-group{
      background-color: black;
      margin-bottom: 0px !important;
    }
    .method{
      display: block; 
      color: white; 
      margin: 0 auto; 
      height: 32px;
      width: 100%;
      background: #810102 url(${methodBut}) no-repeat 100% 100%;
    }
    .uid{
      display: none; 
      color: white; 
      margin: 0 auto; 
      height: 32px;
      width: 100%;
      background: #810102 url(${ConfirmBut}) no-repeat 100% 100%;
    }
    
    .sv{
      display: block; 
      color: white; 
      margin: 0 auto; 
      height: 32px;
      font-size: 18px;
      width: 100%;
      background: #230102 url(${TruIcon}) no-repeat 100% 100%;
    }
      // @if .panel .collapse.in{
        
      // }
      // .panel-heading{
      //   opacity: 0.2;
      // }
    .collapse.in .panel-body{
      height: 269px;
      background-color: transparent;
    }
    // .collapse.in>.panel-heading{
    //   opacity: 0.2;
    // }
    // .panel-collapse{
    //   opacity: 0.2;
    // }
    // .panel-heading! .collapse.in > .panel-heading {
    //   opacity: 0.2;
    // }
    // .panel > div.collapse.in ~ div.panel-heading{
    //   opacity: 0.2;
    // }
    .collapse.in ~ .panel-heading{
      opacity: 0.2;
    }
    // .collapse.in{
    //   background-color: #0C0C0C;
    //   background-size: 1000% 1000%;
    //   z-index: 9999;
    // }
    // .opaWrapper{
    //   background-color: #0C0C0C;
    //   background-size: 1000% 1000%;
    //   z-index: 9998;
    // }
`

