/*
 * This file contains a component with a vertical list of tabs, each with its
 * own associated content.  The content corresponding to the "active" tab
 * is displayed in a pane to the right of the tabs.
 */

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from './Button';

import breakpoints from '../lib/breakpoints';

const VerticalTabPaneContainer = styled.div`
  display: flex;
  @media (max-width: ${breakpoints[0]}px) {
    flex-direction: column;
  }
`;

const TabsContainer = styled.div`
  flex: 1 0 15%;
  display: flex;
  flex-direction: column;
`;

const TabButtonContainer = styled.div`
  width: 100%;
  padding: 3px;
  button {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints[0]}px) {
    button {
      font-weight: 400;
    }
  }
`;

const ContentPane = styled.div`
  margin: 0 25px;
  @media (max-width: ${breakpoints[0]}px) {
    margin-top: 32px;
  }
`;

function VerticalTabPane({ tabs }) {
  const [ activeTab, setActiveTab ] = useState(tabs[0]);
  const navigate = useNavigate();

  /*
   * Set up an effect to change the active tab when the URL hash changes.  The
   * new active tab is the one whose key matches the URL hash.  Below, tab
   * button clicks are set to update the URL hash, thus triggering an update
   * to the active tab here.
   */
  const { hash } = useLocation();
  useEffect(() => {
    const key = hash.replace('#', '');
    const nextActiveTab = tabs.find(tab => key === tab.key);
    if (nextActiveTab) {
      setActiveTab(nextActiveTab);
    }
  }, [ hash, tabs ]);

  return (
    <VerticalTabPaneContainer>
      <TabsContainer>
        {tabs.map(tab => (
          <TabButtonContainer key={tab.key}>
            <Button
              fullWidth
              tertiary={tab.key !== activeTab.key}
              borderless={tab.key !== activeTab.key}
              onClick={() => navigate(`#${tab.key}`)}
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
    content: PropTypes.node.isRequired
  })).isRequired,
};

export default VerticalTabPane;
