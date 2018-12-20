/*
 * This file contains a component representing a collabsible section.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import FontAwesome from 'react-fontawesome';

const CollapsibleSectionContainer = styled.div`
  margin-top: 20px;
`;

const CollapseButton = styled.button`
  display: inline-block;
  padding: 0;
  border: none;
  font-size: 28px;
  color: inherit;
  background-color: inherit;
  cursor: pointer;
  transform: ${props => props.collapsed ? 'rotate(-180deg)' : 'none'};
  transition: transform 150ms ease;
`;

const CollapsibleSectionTitle = styled(CollapseButton)`
  margin-right: 10px;
  transform: none;
  transition: none;
  &:focus {
    outline: none;
  }
`;

const CollapsibleSectionChildrenContainer = styled.div`
  height: ${props => props.collapsed ? 0 : 'auto'};
  overflow: hidden;
  padding-left: 24px;
`;

class CollapsibleSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: !!props.startCollapsed
    };
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <CollapsibleSectionContainer>
        <div>
          <CollapsibleSectionTitle tabIndex="-1" onClick={this.toggleCollapsed}>
            <FontAwesome name="angle-double-right" /> {this.props.title}
          </CollapsibleSectionTitle>
          <CollapseButton
            onClick={this.toggleCollapsed}
            collapsed={this.state.collapsed}>
            <FontAwesome name="angle-down" />
          </CollapseButton>
        </div>
        <CollapsibleSectionChildrenContainer collapsed={this.state.collapsed}>
          {this.state.collapsed ? null : this.props.children}
        </CollapsibleSectionChildrenContainer>
      </CollapsibleSectionContainer>
    );
  }
}

CollapsibleSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  startCollapsed: PropTypes.bool
};

CollapsibleSection.defaultProps = {
  startCollapsed: false
};

export default CollapsibleSection;
