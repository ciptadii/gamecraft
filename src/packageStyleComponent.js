import styled from 'styled-components'

import prev from './asset/package/ARROW-LEFT.png'
import next from './asset/package/ARROW-RIGHT.png'
import bg from './asset/package/PACK_BG.png'
import wrapperBG from './asset/package/BG.png'
import wrapperBGABV from './asset/package/BG-abv.png'
import wrapperBGBLW from './asset/package/BG-blw.png'
import activeDots from './asset/package/TAP-NEW-SELECTED.png'
import inactiveDots from './asset/package/TAP-NEW.png'
import popupBG from './asset/Popup/BG-POPUP-00.png'
{var winHeight = window.screen.height;}


export const Section = styled.div`
    position: relative;
    // background-image: url(${bg});
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    width: 100%;
    margin: 0 auto;
    // height: 1000px;
    // color: white;

    @media (max-width: 768px) {
        // height: 125%;
    }

    .react-tabs__tab-list{
        border-bottom: none;
        margin: 0 auto;
    }

    .panel-title {
        background-color: white;
    }

    .panel-body {
        padding: 0px;
    }


.TabsHeader{
    display: inline-block;
    // border: 0px solid transparent;
    // border-bottom: none !important;
    // border-top: none;
    // bottom: -1px;
    position: relative;
    // list-style: none;
    cursor: pointer;
    color: #F7DEC1;
    width: 18vw;
    // height: 8vh;
    background-color: transparent;
    // background-image: url(${wrapperBG});
    background-size: 100% 100%;
    opacity: 0.4;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 20vw;
        height: 15%;
    }

    @media only screen and (max-width: 500px){
        width: 45vw;
    }
    
    @media only screen and (min-width: 1600px){
        width: 15vw;

    @media only screen and (min-width: 1920px){
        width: 12vw;
        }
    }

  }


  .ImgHeader{
      height: 100%;
      width: 100%;
  }
  
  .TabsHeader:hover{
    opacity: 1.0;
  }
  
  .TabsHeader:focus{
    opacity:1.0;
  }
  
  .react-tabs__tab--selected{
    background-image: url(${wrapperBG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;
    // border-color: rgb(124, 80, 35);
    // border-width: thick;
    // border-radius: 0px 0px 0 0;
    color: #F7DEC1;
    z-index: 10;
    opacity: 1.0 !important;
  }

  .alice-carousel__wrapper{
    // background-image: url(${wrapperBG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-left: 2%;
    // padding-right: 5%;
    padding-top: 2%;
    padding-bottom: 2%;
    -webkit-align-content: center;
    align-content: center;
    top: -1vh;
    margin: auto;

    @media only screen and (min-width: 1024px){
        width: 70vw;

        @media only screen and (min-width: 1366px){
            width: 60vw;

            @media only screen and (min-width: 1600px){
                width: 58vw;

                    @media only screen and (min-width: 1920px){
                    width: 48vw;
                    }
                
            }
        }
    }

    @media only screen and (max-width: 768px){
        width: 70vw;

        @media only screen and (max-width: 450px){
            width: 135vw;
        

        @media only screen and (max-width: 400px){
            width: 170vw;

        @media only screen and (max-width: 380px){
            width: 150vw;

            @media only screen and (width: 320px){
                width: 180vw;
            }
        }
    }
}
}


  }

  .alice-carousel__dots-item:hover, .alice-carousel__dots-item.__active{
    background-image: url(${activeDots});
    border-radius: 0% !important;
  }

  .alice-carousel__dots-item{
    background-image: url(${inactiveDots});
    border-radius: 0% !important;
  }

  .alice-carousel__prev-btn-item{
    display: inline-block;
    cursor: pointer;
    color: transparent;
    width:10%;
    height:30%;
    position: absolute !important;
    left: 0;
    top:25%;
    background-image: url(${prev});
    background-repeat: no-repeat;
    background-size: contain;
    // object-fit: contain;

    @media only screen and (width: 1366px){
        left: -10%;
    }

    @media only screen and (width: 1600px){
        left: -10%;
    }
  }
  .alice-carousel__prev-btn-item:hover{
    background-image: url(${prev});
    background-repeat: no-repeat;
    background-size: contain;
    width:10%;
    height:30%;
    left: 0;
    top:25%;
    position: absolute !important;
    color: transparent;
    // object-fit: contain;

    @media only screen and (width: 1366px){
        left: -10%;
    }

    @media only screen and (width: 1600px){
        left: -10%;
    }
  }
  .alice-carousel__next-btn-item{
    display: inline-block;
    cursor: pointer;
    color: transparent;
    width:10%;
    height:30%;
    right: 0;
    top:25%;
    position: absolute !important;
    background-image: url(${next});
    background-repeat: no-repeat;
    background-size: contain;
    // object-fit: contain;

    @media only screen and (width: 1366px){
        right: -10%;
    }

    @media only screen and (width: 1024px){
        right: -3%;
    }

    @media only screen and (width: 1600px){
        right: -17%;
    }
  }
  .alice-carousel__next-btn-item:hover{
    background-image: url(${next});
    background-repeat: no-repeat;
    background-size: contain;
    width:10%;
    height:30%;
    right: 0;
    top:25%;
    color: transparent;
    position: absolute !important;
    // object-fit: contain;

    @media only screen and (width: 1366px){
        right: -10%;
    }

    @media only screen and (width: 1024px){
        right: -3%;
    }

    @media only screen and (width: 1600px){
        right: -17%;
    }
  }
  
`

export const TabsBox = styled.div`
    width: 100%;
    text-align: center;
`;

export const Content = styled.div`
    position: relative;
    margin: 0 auto;
    min-width: 768px;
    // height: ${winHeight*80/100}px;
    text-align:center;

    .panel-group {
      margin: 0;
    }

    @media only screen and (max-width: 1920px){
        .container{
            width: 1329px !important;
            padding: 0;
            }
            @media only screen and (max-width: 768px){
              .container {
               width: 750px;
               background-color: transparent !important
              }
    }
      }

      .panel{
        padding: 0 5.9px;
        border: none;
        background-clip: content-box;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .panel-group .panel-heading+.panel-collapse>.panel-body{
        padding: 0px;
        border: none;
    }

    #scroll{
        height: 200;
        overflow-y: scroll;
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
    }
`
export const Overline = styled.div`
    left:0px;
    width:100%;
    position: relative;
    box-sizing: border-box;
    display: block;
    border-top: 1px solid rgba(201, 185, 159, 1);
`;

export const TabHeadPic = styled.img`
    width: 30% !important;
    object-fit: contain;
`;

export const TopicHeader = styled.div`
    position:relative;
    text-align:center;
    width:100%;
    left:0;

    img{
        width: 100%;
        // height: 125px;
    }

    .TabsHeader{
        width:50px;
    }
`;

export const TopicText = styled.h1`
    position:absolute; 
    top:30%; 
    left:50%;
    transform: translate(-50%,-50%);
    font-size: 4vh;

    @media (max-width: 768px) {
        font-size: 2vh;
    }
`;

export const ContentContainer = styled.div`
    display:table;
    width:100%;
    height:100%;
    font-size: 2em;
    margin-left:0;
    margin-right:0;
    color: #F7DEC1;
    text-align: left;
    line-height: 150%;
`;

export const PackageImage = styled.img`
    height:300px;

    @media only screen and (max-width: 768px){
        width: 150px;
    }

    :hover{
        opacity: 10;
        background:gray;
        white-space: normal;
    }
`;


export const ModalImgBox = styled.div`
    width:45%;
    height:80%;
    display: inline-block;
    // left: 10%;
    // top: 10%;
    position: relative;
    -webkit-align-content: center;
    align-content: center;
    margin: 0 auto;
`;

export const ModalImgBoxMobile = styled.div`
    width:40%;
    height:44%;
    display: block;
    position: relative;
    -webkit-align-content: center;
    align-content: center;
    margin: 0 auto;
`;

export const ModalImage = styled.img`
    // width: 60%;
    height: 100%;
    left: 0%;
    display: inline-block;
    position: absolute;
    -webkit-align-content: center;
    align-content: center;

    @media only screen and (max-width: 768px){
        width: 22vw;
      }
    `;

    export const ModalImageMobile = styled.img`
    width: 100%;
    // height: 100%;
    display: block;
    position: absolute;
    margin: 0 auto;
    -webkit-align-content: center;
    align-content: center;

    @media only screen and (max-width: 768px){
        width: 22vw;
      }
    `;

export const ModalDiv = styled.div`
    display: inline-block;
    margin: 7% 10%;
    top:0;
    right: 0;
    width: 80%;
    height: 100%;
    background-color: transparent;
    color: black;
`;

export const ModalBG = styled.div`
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.8);
    // background-image: url(${popupBG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;

`;

export const ModalText = styled.div`
    width: 45%;
    height: 80%;
    background-color: black;
    border-color: rgb(207,184,123);
    border-width: thick; 
    border-style: groove;
    display: inline-block;
    text-align: center;
    position: absolute;
    margin: 0 auto;

    img{
        position: relative
        width: 100%;
        height: 100%;
    }

    #selectDropdown{
        position: relative;
        width: 70%;
        height: 30px;
        text-align: center;
        align-content: center;
        text-align-last:center;
    }

    @media only screen and (max-width: 768px;){
        display: block;
        width: 70%;
        margin: 0 auto;
    }
`;

export const ModalTextMobile = styled.div`
    width: 80%;
    height: 90%;
    background-color: black;
    border-color: rgb(207,184,123);
    border-width: thick; 
    border-style: groove;
    display: block;
    text-align: center;
    position: absolute;
    margin: 0 auto;

    img{
        position: relative
        width: 20%;
        height: 20%;
    }

    #selectDropdown{
        position: relative;
        width: 70%;
        height: 70px;
        font-size: 2.75em;
        font-weight: bold;
        margin-top: 5%;
        text-align: center;
        align-content: center;
        text-align-last:center;
    }
`;

export const ModalSubmitBox = styled.div`
    display:block;
    margin: 0 auto;
    position: relative;
    // height: 50%;

    img{
        width: 40% !important;
        object-fit: contain;
    }
`;

export const ModalSubmitBoxMobile = styled.div`
    display:block;
    margin: auto;
    position: relative;
    height: 50%;

    img{
        height: 228px;
        width: 328px;
        object-fit: contain;
        // top: -5%;
        position: absolute;
        bottom: 5%;
        left: 25%;
    }
`;

export const ModalPackageInfoMobile = styled.div`
    width:90%;
    height:45%;
    position: relative;
    display: block;
    margin: auto;
    margin-top: 10%;

    img{
        height: 355px;
        width: 511px;
    }
`;

export const ModalPackageInfo = styled.div`
    width:100%;
    height:50%;
    position: relative;
    display: block;

    img{
        margin-top: 5%;
        width: 80%;
        height: 90%;
    }
`;

export const LeftBox = styled.div`
    position: absolute;
    display: block;
    left: 30%;
    width: 20vw;
    height: 1vh;
`;

export const HotItem = styled.div`
.alice-carousel__wrapper{
    background-image: url(${wrapperBGABV});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-bottom: 0% !important;
    -webkit-align-content: center;
    align-content: center;
    top: 0;
    margin: auto;

    @media only screen and (min-width: 1024px){
        width: 70vw;

        @media only screen and (min-width: 1366px){
            width: 56vw;

            @media only screen and (min-width: 1600px){
                width: 48vw;

                    @media only screen and (min-width: 1920px){
                    width: 40vw;
                    }
                
            }
        }
    }

    @media only screen and (max-width: 768px){
        width: 70vw;

        @media only screen and (max-width: 450px){
            width: 135vw;
        

        @media only screen and (max-width: 400px){
            width: 170vw;

        @media only screen and (max-width: 380px){
            width: 150vw;

            @media only screen and (width: 320px){
                width: 180vw;
            }
        }
    }
}

}


  }

  .alice-carousel__dots-item:hover, .alice-carousel__dots-item.__active{
    // background-image: url(${activeDots});
    display: none;
    border-radius: 0% !important;
  }

  .alice-carousel__dots{
      display: none;
  }

  .alice-carousel__dots-item{
    // background-image: url(${inactiveDots});
    display: none;
    border-radius: 0% !important;
  }

  .alice-carousel__prev-btn{
      display: none;
  }

  .alice-carousel__prev-btn-item{
    // display: inline-block;
    display: none;
    cursor: pointer;
    color: transparent;
    width:10%;
    height:30%;
    position: absolute !important;
    left: 0;
    top:25%;
    // background-image: url(${prev});
    background-repeat: no-repeat;
    background-size: contain;
    // object-fit: contain;

    @media only screen and (width: 1366px){
        left: -10%;
    }

    @media only screen and (width: 1600px){
        left: -10%;
    }
  }
  .alice-carousel__prev-btn-item:hover{
    // background-image: url(${prev});
    background-repeat: no-repeat;
    background-size: contain;
    width:10%;
    height:30%;
    left: 0;
    top:25%;
    position: absolute !important;
    color: transparent;
    // object-fit: contain;

    @media only screen and (width: 1366px){
        left: -10%;
    }

    @media only screen and (width: 1600px){
        left: -10%;
    }
  }


  .alice-carousel__next-btn{
      display: none;
  }

  .alice-carousel__next-btn-item{
    // display: inline-block;
    display: none;
    cursor: pointer;
    color: transparent;
    width:10%;
    height:30%;
    right: 0;
    top:25%;
    position: absolute !important;
    // background-image: url(${next});
    background-repeat: no-repeat;
    background-size: contain;
    // object-fit: contain;

    @media only screen and (width: 1366px){
        right: -10%;
    }

    @media only screen and (width: 1024px){
        right: -3%;
    }

    @media only screen and (width: 1600px){
        right: -17%;
    }
  }
  .alice-carousel__next-btn-item:hover{
    // background-image: url(${next});
    background-repeat: no-repeat;
    background-size: contain;
    width:10%;
    height:30%;
    right: 0;
    top:25%;
    color: transparent;
    position: absolute !important;
    // object-fit: contain;

    @media only screen and (width: 1366px){
        right: -10%;
    }

    @media only screen and (width: 1024px){
        right: -3%;
    }

    @media only screen and (width: 1600px){
        right: -17%;
    }
  }
`;

export const LowerBox = styled.div`
.alice-carousel__wrapper{
    background-image: url(${wrapperBGBLW}) !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-bottom: 2% !important;
    -webkit-align-content: center;
    align-content: center;
    top: 0;
    margin: auto;

    @media only screen and (min-width: 1024px){
        width: 70vw;

        @media only screen and (min-width: 1366px){
            width: 56vw;

            @media only screen and (min-width: 1600px){
                width: 48vw;

                    @media only screen and (min-width: 1920px){
                    width: 40vw;
                    }
                
            }
        }
    }

    @media only screen and (max-width: 768px){
        width: 70vw;

        @media only screen and (max-width: 450px){
            width: 135vw;
        

        @media only screen and (max-width: 400px){
            width: 170vw;

        @media only screen and (max-width: 380px){
            width: 150vw;

            @media only screen and (width: 320px){
                width: 180vw;
            }
        }
    }
}

}


  }

  .alice-carousel__dots-item:hover, .alice-carousel__dots-item.__active{
    // background-image: url(${activeDots});
    display: none;
    border-radius: 0% !important;
  }

  .alice-carousel__dots{
      display: none;
  }

  .alice-carousel__dots-item{
    // background-image: url(${inactiveDots});
    display: none;
    border-radius: 0% !important;
  }

  .alice-carousel__prev-btn{
      display: none;
  }

  .alice-carousel__prev-btn-item{
    // display: inline-block;
    display: none;
    cursor: pointer;
    color: transparent;
    width:10%;
    height:30%;
    position: absolute !important;
    left: 0;
    top:25%;
    // background-image: url(${prev});
    background-repeat: no-repeat;
    background-size: contain;
    // object-fit: contain;

    @media only screen and (width: 1366px){
        left: -10%;
    }

    @media only screen and (width: 1600px){
        left: -10%;
    }
  }
  .alice-carousel__prev-btn-item:hover{
    // background-image: url(${prev});
    background-repeat: no-repeat;
    background-size: contain;
    width:10%;
    height:30%;
    left: 0;
    top:25%;
    position: absolute !important;
    color: transparent;
    // object-fit: contain;

    @media only screen and (width: 1366px){
        left: -10%;
    }

    @media only screen and (width: 1600px){
        left: -10%;
    }
  }


  .alice-carousel__next-btn{
      display: none;
  }

  .alice-carousel__next-btn-item{
    // display: inline-block;
    display: none;
    cursor: pointer;
    color: transparent;
    width:10%;
    height:30%;
    right: 0;
    top:25%;
    position: absolute !important;
    // background-image: url(${next});
    background-repeat: no-repeat;
    background-size: contain;
    // object-fit: contain;

    @media only screen and (width: 1366px){
        right: -10%;
    }

    @media only screen and (width: 1024px){
        right: -3%;
    }

    @media only screen and (width: 1600px){
        right: -17%;
    }
  }
  .alice-carousel__next-btn-item:hover{
    // background-image: url(${next});
    background-repeat: no-repeat;
    background-size: contain;
    width:10%;
    height:30%;
    right: 0;
    top:25%;
    color: transparent;
    position: absolute !important;
    // object-fit: contain;

    @media only screen and (width: 1366px){
        right: -10%;
    }

    @media only screen and (width: 1024px){
        right: -3%;
    }

    @media only screen and (width: 1600px){
        right: -17%;
    }
  }
`;