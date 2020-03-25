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

function Modal({ content, onClose }) {

  function close() {
    document.body.classList.remove('noscroll');
    onClose();
  }

  return (
    <t>
      <Backdrop onClick={close} />
      <ModalContainer>
        <ModalCloseButton onClick={close}>&times;</ModalCloseButton>
        <ModalContent dangerouslySetInnerHTML={{ __html: md.renderInline(content) }} />
      </ModalContainer>
    </t>
  );
}

Modal.propTypes = {
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Modal;
