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

const CollapsibleSectionHeader = styled.button`
  display: table-row;
  padding: 0;
  border: none;
  text-align: left;
  font-size: 28px;
  color: inherit;
  background-color: inherit;
  cursor: pointer;
`;

const CollapsibleSectionHeaderItem = styled.span`
  display: table-cell;
  padding: 0 2px;
`;

const CollapsibleSectionToggleIndicator = styled.span`
  display: inline-block;
  margin-left: 5px;
  transform: ${props => props.collapsed ? 'rotate(-180deg)' : 'none'};
  transition: transform 150ms ease;
`;

const CollapsibleSectionChildrenContainer = styled.div`
  height: ${props => props.collapsed ? 0 : 'auto'};
  overflow: hidden;
  padding-left: 35px;
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
        <CollapsibleSectionHeader onClick={this.toggleCollapsed}>
          <CollapsibleSectionHeaderItem>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </CollapsibleSectionHeaderItem>
          <CollapsibleSectionHeaderItem>
            {this.props.title}
            &nbsp;
            <CollapsibleSectionToggleIndicator collapsed={this.state.collapsed}>
              <FontAwesomeIcon icon={faAngleDown} />
            </CollapsibleSectionToggleIndicator>
          </CollapsibleSectionHeaderItem>
        </CollapsibleSectionHeader>
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
