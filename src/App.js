import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import { getSecretCombination, getScore, getRandomColor } from './engine';
import colors from './colors';
import Piece from './Piece';
import ScorePiece from './ScorePiece';

const SecretContainer = styled.div`
  border: 1px solid black;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  width: 350px;
`;

const RowsContainer = styled.div`

`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const RowPieces = styled.div`
  border: 1px solid grey;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  width: 300px;
  height: 50px;
`;

const RowScore = styled.div`
  border: 1px solid grey;
  border-left: none;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 50px;
  height: 50px;
`;

const ColorsContainer = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 50px;
  border: 1px solid grey;
  justify-content: space-around;

  width: 500px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.selectColor = this.selectColor.bind(this);
    this.state = {
      secret: getSecretCombination(),
      rows: [ {
        pieces: [],
        scores: {
          correct: 0,
          misplaced: 0
        }
      } ]
    };
  }

  componentDidMount() {
    for (let i = 0; i < 40; i++) {
      this.selectColor(getRandomColor());
    }
  }

  selectColor(color) {
    const rows = this.state.rows;
    const lastRow = rows[0];
    if (lastRow.pieces.length < 4) {
      lastRow.pieces.push(color);
    }

    if (lastRow.pieces.length === 4) {
      lastRow.scores = getScore(lastRow.pieces, this.state.secret);
      rows.splice(0, 0, {
        pieces: [],
        scores: {
          correct: 0,
          misplaced: 0
        }
      });
    }

    this.setState({ rows });
  }

  render() {
    const { secret, rows } = this.state;
    return (
      <div>
        <RowsContainer>
          { rows.map(row => 
            <Row>
              <RowPieces>
              { row.pieces.map(color => <Piece color={color.color} />)}
              </RowPieces>
              <RowScore>
                { [...Array(row.scores.correct)].map(() => <ScorePiece color="red" />) }
                { [...Array(row.scores.misplaced)].map(() => <ScorePiece color="yellow" />) }
              </RowScore>
            </Row>
          )}
        </RowsContainer>
        <SecretContainer>
          { secret.map(color => <Piece color={color.color} />)}
        </SecretContainer>
        <ColorsContainer>
          { colors.map(color => <Piece color={color.color} onClick={() => this.selectColor(color)} />)}
        </ColorsContainer>
      </div>
    );
  }
}

export default App;
