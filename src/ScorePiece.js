import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Piece = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid black;
  border-radius: 9px;

  background-color: ${props => props.color};
`;

export default Piece;
