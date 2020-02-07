import styled from 'styled-components'

import prev from './asset/package/ARROW-LEFT.png'
import next from './asset/package/ARROW-RIGHT.png'
import wrapperBG from './asset/package/BG.png'
import activeDots from './asset/package/TAP-NEW-SELECTED.png'
import inactiveDots from './asset/package/TAP-NEW.png'
import background from './asset/bg/PROMOTION.png'
import center from './asset/event/in.png'
import spinn from './asset/event/Spin.png'
import frame from './asset/event/out.png'
{var winHeight = window.screen.height;}


export const Section = styled.div`
    position: relative;
    // background-image: url(${background});
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    width:100%;
    // height:  1200px;

    #event{
        height: auto;
    }

    
.TabsHeader{
    display: inline-block;
    border: 0px solid transparent;
    border-bottom: none;
    border-top: none;
    bottom: -1px;
    position: relative;
    list-style: none;
    cursor: pointer;
    color: #F7DEC1;
    width: 22vw;
    height: 15vh;
    background-color: transparent;
    opacity: 0.4;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 30%;
        height: 15%;
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
    background-color: transparent;
    border-color: #5a5a5a;
    border-radius: 0px 0px 0 0;
    color: #F7DEC1;
    opacity: 1.0 !important;
  }

  .alice-carousel__wrapper{
    background-image: url(${wrapperBG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
    background-image: url(${prev});
    background-repeat: no-repeat;
    background-size: contain;
    width:10%;
    height:30%;
    left: -5%;
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
    background-image: url(${next});
    background-repeat: no-repeat;
    background-size: contain;
    width:10%;
    height:30%;
    right: 0%;
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

export const Content = styled.div`
    position: relative;
    margin: 0 auto;
    width: 70vw;
    min-width: 768px;
    // height: ${winHeight*80/100}px;

    // @media only screen and (max-width: 768px){
    //     width: 768px;

    //     @media only screen and (max-width: 1600px){
    //         width: 900px;

    //         @media only screen and (max-width: 1920px){
    //             width: 1200px;
    //         }
    //     }
    // }

    @media only screen and (max-width: 1920px){
        .container{
            width: 970px;
            }
            @media only screen and (max-width: 768px){
              .container {
               width: 750px;
              }
    }
      }
`
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

export const PackageImage = styled.img`
    height:300px;

    :hover{
        opacity: 10;
        background:gray;
        white-space: normal;
    }
`;

export const WheelBase = styled.div`
    position: relative;
    display: inline-block;
    padding-bottom: 56.18%;
    width: 55.51%;
`

export const FrameWheels = styled.div`
    position: absolute;
    // display: inline-block;
    background-image: url(${frame});
    // background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 92%;
    margin-left: 4%;
    z-index: 5;
`
export const Wheels = styled.div`
    position: absolute;
    background-image: url(${center});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 0%;
    margin-left: 5%;
    padding-bottom: 91.42%;
    width: 91.42%;

    ${(props) => props.sliding ? 'animation:spin '+ props.timeSpin +'s ease-in-out both' : 'transform: rotate('+ props.result +'deg)'};

    @keyframes spin {
        ${(props) => {
            if (props.sliding) {
                return '0% { transform: rotateZ(0) } 100% { transform: rotateZ('+ props.result +'deg) }'
            }
        }}
    }
`

export const ButtonSpin = styled.div`
    margin-top: 100%;
    margin-left: auto;
    margin-right: 38%;
    width: 30%;
    height: 20%;
    text-align: center;
    padding-right:0px;
    padding-top:2px;
    background-image: url(${spinn});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    line-height: 6vw;
    font-family: PSL;
    font-size: 2.5vw;
    font-weight: bold;
    color: rgb(78,255,0);
    letter-spacing: 2px;
   text-shadow: 0px 0px 6px #000000, 0px 0px 8px #000000, 0px 0px 16px #000000, 0px 0px 8px #000000, 0px 0px 16px #000000;

    @media (max-width: 1024px) {
        line-height: 7vw;
    }

    :hover {
        cursor: pointer;
        color: rgb(78,255,0);
    }
`