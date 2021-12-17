/*
 * This file contains a component to render a single Hall of Fame entry 🏆
 */

import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons';

const md = new MarkdownIt({ breaks: true, linkify: true });

const ItemContainer = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  flex: 0 0 300px;
  position: relative;
  text-align: center;
`;

const ImgElem = styled.img`
  max-width: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.67;
  }
`;

const Controls = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 64px;
  color: #fff;
  filter: drop-shadow(10px 10px 15px rgba(0, 0, 0, 0.33));
  cursor: pointer;

  /*
   * Turn off pointer-events so clicks/hovers on the controls are actually
   * handled by the image below.  Display this element when the image is
   * hovered.
   */
  pointer-events: none;
  ${ImgElem}:hover ~ & {
    display: initial;
  }
`;

const InfoContainer = styled.div`
  margin-left: 32px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 40px;
`;

const DevelopersList = styled.h3`
  margin: 0;
  font-size: 24px;
`;

const Description = styled.p`
  font-size: 16px;
`;

function HoFItem({ title, developers, description, imageUrl, screencapUrl }) {
  const [ showScreencap, setShowScreencap ] = useState(false);

  return (
    <ItemContainer>
      <ImgContainer>
        <ImgElem
          alt={title}
          src={showScreencap ? screencapUrl : imageUrl}
          onClick={() => setShowScreencap(curr => !curr)}/>
        <Controls onClick={() => setShowScreencap(curr => !curr)}>
          <FontAwesomeIcon icon={showScreencap ? faStopCircle : faPlayCircle} />
        </Controls>
      </ImgContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <DevelopersList>{developers.join(', ')}</DevelopersList>
        <Description dangerouslySetInnerHTML={{ __html: md.renderInline(description) }} />
      </InfoContainer>
    </ItemContainer>
  );
}

HoFItem.propTypes = {
  title: PropTypes.string.isRequired,
  developers: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  screencapUrl: PropTypes.string.isRequired
};

export default HoFItem;
