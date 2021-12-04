/*
 * This file contains a component with a vertical list of tabs, each with its
 * own associated content.  The content corresponding to the "active" tab
 * is displayed in a pane to the right of the tabs.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

function VerticalTabPane() {

}

VerticalTabPane.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    active: PropTypes.bool,
  })).isRequired,
};

export default VerticalTabPane;
