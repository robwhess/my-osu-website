/*
 * This file contains a component representing the site footer.
 */

import React from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled/macro';
import FontAwesome from 'react-fontawesome';

import reactLogo from '../static/ReactLogo.svg';

const FooterContainer = styled.footer`
  box-sizing: border-box;
  width: 100%;
  padding: 5px 25px;
  font-size: 14px;
  color: #aaa;
  background-color: #333;
  text-align: center;
  a {
    color: #fff;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ReactLogoImg = styled.img`
  animation: ${spin} infinite 20s linear;
  vertical-align: middle;
  height: 24px;
`;

function Footer() {
  return (
    <FooterContainer>
      <ReactLogoImg src={reactLogo} alt="React logo" />
      This site is powered by <a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">React</a>.  It was bootstrapped with <a href="https://github.com/facebookincubator/create-react-app" target="_blank" rel="noopener noreferrer">Create React App</a>.
      The source code is <a href="https://github.com/robwhess/my-osu-website" target="_blank" rel="noopener noreferrer">on GitHub <FontAwesome name="github" /></a>.
    </FooterContainer>
  );
}

export default Footer;
