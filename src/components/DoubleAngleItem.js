/*
 * This file contains a component to render a list element that has a
 * double-angle-style bullet.  Works best with lists with `list-style-type`
 * set to `none`.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import FontAwesome from 'react-fontawesome';

const ListItem = styled.li`
  text-indent: -0.67ch;
  padding-left: 0.67ch;
`

function DoubleAngleItem(props) {
  return (
    <ListItem>
      <FontAwesome name="angle-double-right" />
      &nbsp;
      {props.children}
    </ListItem>
  );
}

DoubleAngleItem.propTypes = {
  children: PropTypes.node
};

export default DoubleAngleItem;
