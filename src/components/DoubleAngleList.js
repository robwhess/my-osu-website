/*
 * This file contains a component to render a list whose elements have a
 * double-angle-style bullet.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import FontAwesome from 'react-fontawesome';

const List = styled.ul`
  margin: 0;
  padding-left: 10px;
  list-style-type: none;
`;

const ListItem = styled.li`
  text-indent: -0.67ch;
  padding-left: 0.67ch;
`

function DoubleAngleList(props) {
  if (props.noOneElementList && props.items.length <= 1) {
    return (
      <div>
        {props.items[0]}
      </div>
    )
  } else {
    return (
      <List>
        {props.items.map((item, i) => (
          <ListItem key={i}>
            <FontAwesome name="angle-double-right" />
            &nbsp;
            {item}
          </ListItem>
        ))}
      </List>
    );
  }
}

DoubleAngleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  noOneElementList: PropTypes.bool
};

DoubleAngleList.defaultProps = {
  noOneElementList: false
}

export default DoubleAngleList;
