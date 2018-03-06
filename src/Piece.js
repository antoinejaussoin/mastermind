import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Piece = styled.div`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0px solid black;
  border-radius: 24px;
  cursor: ${props => !!props.onClick ? 'pointer': 'none' }

  background-color: ${props => props.color};
`;

export default Piece;
