/*
 * This file contains a component representing a collabsible section.
 */

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDown, faLink } from '@fortawesome/free-solid-svg-icons';
import slugify from 'slugify';

const CollapsibleSectionContainer = styled.div`
  margin-top: 20px;
`;

const Header = styled.div`
  display: table-row;
  font-size: 28px;
`;

const HeaderItem = styled.span`
  display: table-cell;
  vertical-align: top;
  padding: 0 2px;
`;

const SlugLink = styled.a`
  color: inherit;
  font-size: 18px;
`;

const TitleButton = styled.button`
  font-size: inherit;
  padding: 0;
  border: 0;
  color: inherit;
  background: inherit;
  cursor: pointer;
  text-align: left;
  h3 {
    display: inline;
    font-size: inherit;
    color: inherit;
    text-align: left;
  }
`;

const ToggleIndicator = styled.span`
  display: inline-block;
  margin-left: 3px;
  font-size: 22px;
  transform: ${props => props.collapsed ? 'rotate(-180deg)' : 'none'};
  transition: transform 150ms ease;
`;

const ChildrenContainer = styled.div`
  height: ${props => props.collapsed ? 0 : 'auto'};
  overflow: hidden;
  padding-left: 35px;
`;

function CollapsibleSection({ title, children, collapsed: initCollapsed, setSlug }) {
  const { hash } = useLocation();
  const slug = slugify(title, { strict: true });
  const [ collapsed, setCollapsed ] = useState(!!initCollapsed);

  useEffect(() => {
    if (setSlug && slug === hash.replace(/^#/, '')) {
      setCollapsed(false);
    }
  }, [ hash, setSlug, slug ]);

  function toggleCollapsed() {
    setCollapsed(prevCollapsed => !prevCollapsed);
  }

  return (
    <CollapsibleSectionContainer>
      <Header>
        <HeaderItem>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </HeaderItem>
        {slug &&
          <HeaderItem>
            <SlugLink href={`#${slug}`}>
              <FontAwesomeIcon icon={faLink} />
            </SlugLink>
          </HeaderItem>
        }
        <HeaderItem>
          <TitleButton onClick={toggleCollapsed}>
            <h3 id={slug}>{title}</h3>
            &nbsp;
            <ToggleIndicator collapsed={collapsed}>
              <FontAwesomeIcon icon={faAngleDown} />
            </ToggleIndicator>
          </TitleButton>
        </HeaderItem>
      </Header>
      <ChildrenContainer collapsed={collapsed}>
        {collapsed || children}
      </ChildrenContainer>
    </CollapsibleSectionContainer>
  );
}

CollapsibleSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  collapsed: PropTypes.bool,
  setSlug: PropTypes.bool
};

CollapsibleSection.defaultProps = {
  collapsed: false,
  setSlug: false
};

export default CollapsibleSection;
