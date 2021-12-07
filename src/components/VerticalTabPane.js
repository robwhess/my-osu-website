/*
 * This file contains a component with a vertical list of tabs, each with its
 * own associated content.  The content corresponding to the "active" tab
 * is displayed in a pane to the right of the tabs.
 */

import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';

import Button from './Button';

const VerticalTabPaneContainer = styled.div`
  display: flex;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabButtonContainer = styled.div`
  width: 100%;
  padding: 3px;
`;

const ContentPane = styled.div`
  margin: 0 10px;
`;

function VerticalTabPane({ tabs }) {
  const initialActiveTab = tabs.find(tab => tab.active) || tabs[0];
  const [ activeTab, setActiveTab ] = useState(initialActiveTab);

  return (
    <VerticalTabPaneContainer>
      <TabsContainer>
        {tabs.map(tab => (
          <TabButtonContainer key={tab.key}>
            <Button
              fullWidth
              tertiary={tab.key !== activeTab.key}
              borderless={tab.key !== activeTab.key}
              onClick={() => setActiveTab(tab)}
            >
              {tab.title}
            </Button>
          </TabButtonContainer>
        ))}
      </TabsContainer>
      <ContentPane>{activeTab.content}</ContentPane>
    </VerticalTabPaneContainer>
  );
}

VerticalTabPane.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    active: PropTypes.bool,
  })).isRequired,
};

export default VerticalTabPane;
