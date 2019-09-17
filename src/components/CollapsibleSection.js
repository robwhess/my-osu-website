/*
 * This file contains a component representing a collabsible section.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const CollapsibleSectionContainer = styled.div`
  margin-top: 20px;
`;

const CollapsibleSectionTitle = styled.button`
  display: inline-block;
  padding: 0;
  border: none;
  text-align: left;
  font-size: 28px;
  color: inherit;
  background-color: inherit;
  cursor: pointer;
`;


const CollapsibleSectionAngleIndicator = styled.span`
  display: inline-block;
  margin-left: 5px;
  transform: ${props => props.collapsed ? 'rotate(-180deg)' : 'none'};
  transition: transform 150ms ease;
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
      collapsed: !!props.collapsed
    };
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  /*
   * Since this component is re-used across pages, we need to make sure the current
   * state is synchronized with the incoming props before it is re-rendered.
   */
  componentDidUpdate(prevProps, prevState) {
    if (this.props.collapsed !== prevProps.collapsed || this.props.collapsed !== prevState.collapsed) {
      this.setState({
        collapsed: this.props.collapsed
      });
    }
  }

  render() {
    return (
      <CollapsibleSectionContainer>
        <CollapsibleSectionTitle onClick={this.toggleCollapsed}>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
          &nbsp;
          {this.props.title}
          &nbsp;
          <CollapsibleSectionAngleIndicator collapsed={this.state.collapsed}>
            <FontAwesomeIcon icon={faAngleDown} />
          </CollapsibleSectionAngleIndicator>
        </CollapsibleSectionTitle>
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
  collapsed: PropTypes.bool
};

CollapsibleSection.defaultProps = {
  collapsed: false
};

export default CollapsibleSection;
