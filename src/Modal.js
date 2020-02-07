import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import closebutton from './asset/Popup/Close.png'

class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    const MediaFrame = styled.div`
        position: fixed;
        top: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
    `

    const MediaWrapper = styled.div`
        display: table;
        width: 100%;
        height: 100%;
    `

    const MediaWrapperExtension = styled.div`
        display: table-cell;
        vertical-align: middle;
    `

    const MediaBackground = styled.div`
        position: absolute;
        top: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.7;
    `

    const MediaSize = styled.div`
        position: relative;
        margin: auto;
        padding-bottom: 40.5%;
        width: 80%;
        height: 60%;

        .mobile & {
            padding-bottom: 50.625%;
            width: 90%;
        }
    `

    const MediaCenter = styled.div`
        position: absolute;
        margin: auto;
        width: 100%;
        height: 100%;
    `

    const ButtonClose = styled.div`
        position: absolute;
        background-image: url(${closebutton});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        top: 0%;
        right: 0%;
        padding-bottom: 4.17%;
        width: 10%;
        height: 10%;
        z-index: 10;

        :hover {
            cursor: pointer;
        }
    `

    return (
        <MediaFrame className='backdrop'>
            <MediaWrapper>
                <MediaWrapperExtension>
                    <MediaBackground />
                    <MediaSize>
                        <MediaCenter>
                            <ButtonClose onClick={this.props.onClose} />
                            {this.props.children}
                        </MediaCenter>
                    </MediaSize>
                </MediaWrapperExtension>
            </MediaWrapper>
        </MediaFrame>
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
}

export default Modal