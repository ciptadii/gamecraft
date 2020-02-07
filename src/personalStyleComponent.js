import styled from 'styled-components'

import background from './asset/bg/PROFILE-BG.png'
{var winHeight = window.screen.height;}

export const Section = styled.div`
    position: relative;
    // background-image: url(${background});
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    width: 100%;
    height: 100%;
    // height: 1365px;
    // height: ${window.outerHeight}px;

`

export const Content = styled.div`
    position: relative;
    margin: 0 auto;
    width: 70vw;
    height: ${winHeight*80/100}px;
    min-width: 768px;
    // text-align: right;

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

export const UserInfo = styled.span`
    font-size: 1.75em;
    // text-align: left;
    line-height: 150%;
    margin-left: 35vw !important;
    font-weight: bold;
    text-align: right;
`;

export const ServerButton = styled.button`
    width: 32%;
    margin: 0 auto;
    height: 100%;
    color: black;
    background-image: url('http://www.f-covers.com/cover/pikachu-facebook-cover-timeline-banner-for-fb.jpg');
    background-size: 100% 100%;
`;

export const ServerBox = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 10%
`;

export const ServerSelect = styled.span`
    text-align: center;
`;

export const SelectionBox = styled.div`
    margin: 30px auto;
    width: 200px;
    background-color: black;
    text-align: center;
`;

export const SelectionContent = styled.select`
    background-color: black;
    text-align: center;
    width: 100%;
    height: 30px;
`;