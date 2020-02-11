import styled from 'styled-components'

import background from '../src/Login/Asset4.png'
import footer from '../src/Login/Asset3.png'

export const Section = styled.div`

.wrapper-container {
  margin: 0 auto;
  width: 890px;
  height: 100%;
  padding-bottom: 35vh;
  font-family: 'RSU';
  background-image: url(${footer});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom center;
}
  .wrapper-Body{
      margin: 0 auto;
      width: 980px;
      background-image: url(${background});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom center;
    }
    

    .wrapper-wrapper-container {
      text-align: center;
      padding-top: 80px;
      margin: 0 auto;
      width: 550px;
    }

    #logo {
      width: 250px;
    }

    p {
      font-size: 20px;
      color: #9b9b9b;
      margin-top: 20px;
    }

    p.title {
      font-family: 'RSU-Bold';
      color: #9b9b9b;
    }

    p.divider {
        position: relative;
        width: 80%;
        margin: 0 auto;
        background-color: #ccc;
        border-bottom: 2px solid #666666; 
        margin-top: 25px;
        margin-bottom: 25px;
    }

    p.divider span {
      position: absolute;
      left: calc(50% - 40px);
      background: #fff;
      width: 70px;
      height: 24px;
      top: -12px;
    }

    .btn-google {
      border: none;
      width: 440px;
      background: #fff;
    }

    .btn-google img {
      width: 100%;
    }

    .btn-facebook {
      border: none;
      width: 440px;
      background: #fff;
    }

    .btn-facebook img {
      width: 100%;
    }

    .btn-line {
      border: none;
      width: 440px;
      background: #fff;
    }

    .btn-line img {
      width: 100%;
    }

    .policy-login-cancel {
      color: #808080;
      text-decoration: underline;
    }

    @media screen and (min-width: 768px) and (max-width: 1920px) {
      .container {
          padding-top: 50px;
        }
      }

    @media screen and (max-width: 767px) {

      .wrapper-wrapper-container {
        width: 400px;
  
      }

      .container {
          width: 220px;
          padding-top: 20px;
      }

      #logo {
          width: 150px;
      }

      h2 {
          font-size: 19px;
      }

      p {
          font-size: 17px;
          margin-top: 20px;
      }

      .btn-google {
          width: 330px;
      }

      .btn-facebook {
          width: 330px;
      }

      .btn-line {
          width: 330px;
      }

      .policy-login-cancel {
          color: #808080;
          text-decoration: underline;
      }

    }
  `