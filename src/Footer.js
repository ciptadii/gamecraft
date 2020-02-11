import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { SectionContainerEX, SectionContainerExtension } from './mainStyleComponent';
import { Section, Content } from './eventStyleComponent';

class Footer extends Component {

  checkingDevice() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      return (
        <>
          <Grid>
            <Row style={{ margin: 0 }}>
              <Col xs={12}>
                <p>Mobile</p>
              </Col>
            </Row>
          </Grid>
        </>
      );
    } else {
      return (
        <>
          <Row style={{ marginTop: '50px' }}>
            <Col sm={12} md={12} lg={12} style={{ textAlign: 'center' }}>
              <div style={{ display: 'inline-block', fontSize: '20px' }}>
                <a href='/TermsofService' target='_blank' style={{ padding: '4px 10px 4px 0', color: 'black' }}>
                  เงื่อนไขและนโยบาย
                </a>
                <a href='/PrivacyPolicy' target='_blank' style={{ padding: '4px 10px', color: 'black', borderLeft: '1px solid black', borderRight: '1px solid black' }}>
                  นโยบายความเป็นส่วนตัว
                </a>
                <a href='/Help' target='_blank' style={{ padding: '4px 0 4px 10px', color: 'black' }}>
                  ช่วยเหลือ
                </a>
              </div>
            </Col>
          </Row>
          <Row style={{ marginBottom: '50px' }}>
            <Col sm={12} md={12} lg={12} style={{ textAlign: "center" }}>
              <div style={{ display: 'inline-block' }}>
                <div style={{ display: 'inline-block' }}>
                  <img src={require('./Home/company_logo.png')} style={{ maxWidth: '100%', maxheight: '100%' }} />
                </div>
                <div style={{ display: 'inline-block' }}>
                  <p style={{ padding: 10, margin: 0, fontSize: '16px' ,color: 'black' }}>© 2019 by GameCraft Company Limited. All Rights Reserved.</p>
                </div>
              </div>
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

export default Footer;
