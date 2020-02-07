import styled from 'styled-components'

import background from './asset/History/HISTORY-BG.png'
{var winHeight = window.screen.height;}


export const Section = styled.div`
    position: relative;
    // background-image: url(${background});
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    width:100%;
    height: 100%;
    // height: 1200px;
    // height: ${window.outerHeight}px;


    @media only screen and (max-width: 768px){
        min-width: 768px !important;
        min-height: 1024px !important;
      }
`

export const Content = styled.div`
    position: relative;
    margin: 0 auto;
    width: 70vw;
    min-width: 768px;
    height: ${winHeight*80/100}px;

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

export const Overline = styled.div`
    left:0px;
    width:100%;
    position: relative;
    box-sizing: border-box;
    display: block;
    border-top: 1px solid rgba(201, 185, 159, 1);
`;

export const TopicHeader = styled.div`
    position:relative;
    text-align:center;
    width:100%;
    left:0;
    top:50px;

    img{
        width: 100%;
        object-fit: contain;
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
`;

export const ContentContainerF = styled.div`
    display:table;
    width:100%;
    font-size: 2em;
    margin-left:0;
    margin-right:0;
    color: #F7DEC1;
    text-align: left;
    line-height: 150%;
`;

export const ContentContainer = styled.div`
    display:table;
    width:100%;
    font-size: 2em;
    margin-left:0;
    margin-right:0;
    color: #F7DEC1;
    text-align: left;
    line-height: 150%;
`;

export const ContentContained = styled.div`
    display:table-cell;
    width: 25%;
    margin: 10px auto;
`;

export const ContentContainedL = styled.div`
    display:inline-block;
    width: 16%;
    margin: 10px auto;
    left:0%;
`;

export const ContentContainedC = styled.div`
    display:inline-block;
    width: 16%;
    margin: 10px auto;
    left:100%;
`;

export const ContentContainedS = styled.div`
    display:inline-block;
    width: 16%;
    margin: 10px auto;
    left:100%;
`;

export const ContentContainedP = styled.div`
    display:inline-block;
    width: 16%;
    margin:10px auto;
    left:100%;
`;

export const ContentContainedB = styled.div`
    display:inline-block;
    width: 16%;
    margin:10px auto;
    left:100%;
`;

export const ContentContainedD = styled.div`
    display:inline-block;
    width: 16%;
    margin:10px auto;
    left:100%;
`;
