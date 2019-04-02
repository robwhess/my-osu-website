/*
 * This file contains a small component for rendering a popup modal with a
 * backdrop.  The component supports markdown in all fields.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import MarkdownIt from 'markdown-it';

import SectionBox from './SectionBox';
import breakpoints from '../lib/breakpoints';

const md = new MarkdownIt({ breaks: true, linkify: true });

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.85);
`;

const ModalContainer = styled(SectionBox)`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  max-width: 75%;
  max-height: 75%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
  overflow-wrap: break-word;

  @media (max-width: ${breakpoints[0]}px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 32px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  padding: 25px;
`;

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({ visible: true });
    document.body.classList.add('noscroll');
  }

  hide() {
    this.setState({ visible: false });
    document.body.classList.remove('noscroll');
  }

  render() {
    return this.state.visible ?
      <React.Fragment>
        <Backdrop onClick={this.hide} />
        <ModalContainer>
          <ModalCloseButton onClick={this.hide}>&times;</ModalCloseButton>
          <ModalContent dangerouslySetInnerHTML={{ __html: md.renderInline(this.props.content) }} />
        </ModalContainer>
      </React.Fragment> :
      null;
  }

}

Modal.propTypes = {
  content: PropTypes.string.isRequired
};

export default Modal;
