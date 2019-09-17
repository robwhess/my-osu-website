/*
 * This file contains a component to render a list whose elements have an
 * angle-style bullet.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const List = styled.ul`
  margin: 0;
  padding-left: 15px;
  list-style-type: none;
`;

const ListItem = styled.li`
  text-indent: -0.67ch;
  padding-left: 0.67ch;
`

function AngleList(props) {
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
            <FontAwesomeIcon name={props.singleAngle ? faAngleRight : faAngleDoubleRight} />
            &nbsp;
            {item}
          </ListItem>
        ))}
      </List>
    );
  }
}

AngleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  noOneElementList: PropTypes.bool,
  singleAngle: PropTypes.bool
};

AngleList.defaultProps = {
  noOneElementList: false,
  singleAngle: false
}

export default AngleList;
