import styled from 'styled-components'

import background from './asset/bg/MAIN.png'
{var winHeight = window.screen.height;}


export const Section = styled.div`
    position: relative;
    // background-image: url(${background});
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    margin: 0 auto;
    width:100%;
    // height: 150%;
    // height: 1300px;
`

// export const BarBox = styled.div`
// ::-webkit-scrollbar {
//   width: 20px;
// }
// ::-webkit-scrollbar-track {
//   background-color: #121212;
//   border-radius: 10px;
//   border: 20px black;
// }
// ::-webkit-scrollbar-thumb {
//   background: white; 
//   border-radius: 10px;
// }
// ::-webkit-scrollbar-thumb:hover {
//   background: white; 
// }
// `

export const Content = styled.div`
    position: relative;
    margin: 0 auto;
    // height: ${winHeight*80/100}px;
    min-width: 768px;
    text-align:center;

    
    @media only screen and (max-width: 1920px){
      .container{
          width: 1329px !important;
          padding: 0;
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
        padding: 0 5.9px;
        border: none;
        background-clip: content-box;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
      .panel-group .panel-heading+.panel-collapse>.panel-body{
        padding: 0;
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

export const HeaderText = styled.div`
    height: 20%;
    width: 100%;
    margin: 0 auto;
    padding-top: 10%;
    padding-left: 10%;

    img{
        width: 80%;
    }
`;

export const Pic = styled.img`
    display: block;
    width: 30vw;
    height: 30vh;
    margin: 0 auto;
    background-size: fixed;
    background-repeat: no-repeat;
    object-fit: contain;
    margin-top: -0%;

    @media only screen and (max-width: 768px){
        height: 80vh;
        width: 80vw;
    }
`;

export const PicFacebookGoogle = styled.img`
    display: inline-block;
    width: 7vw;
    height: 7vh;
    margin: 5vh 1vw;
    background-size: fixed;
    background-repeat: no-repeat;
`;

export const InputBox = styled.input`
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
`;

export const InputButton = styled.input`
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    background-color: yellow;
`;

export const LoginBox = styled.div`
    margin: 0 auto;
    // border-style: groove;
    // border-width: medium;
    // border-radius: 15px;
    // width:30vw;
    // border-color: white;

    .abcRioButton{
        width: 400px !important;
        // height: 50px !important;
        margin: auto;
        border-radius: 10px;

        
    }

    @media only screen and (max-width: 768px){
        // width: 15.5%;
      }
`;

export const LoginBoxFB = styled.div`
    margin: 0 auto;
    // border-style: groove;
    // border-width: medium;
    // border-radius: 15px;
    // width: 42%;
    // border-color: rgb(66,103,178);
    // background-color: rgb(66,103,178);
`;