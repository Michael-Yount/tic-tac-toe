import React, { useEffect, useState } from 'react';
import Square from './Square';

function checkWinner(gameState) {
    // gameState is an array of 0 and 1 and null
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (gameState[a] === gameState[b] && gameState[a] === gameState[c] && gameState[a] != null) 
        return gameState[a] === 1 ? "X" : "O"; // return the winner (0 or 1)
    }
    return null;
  }


const Board = () => {
    const [player, setPlayer] = useState(1);
    const [state, setState] = useState([]);
    let status = `Player ${player}`;
    let winner = checkWinner(state);
    if(winner != null) status = `Player ${winner} wins`;
    
    // define newState function
    const newState = idOfSquare => {
        let thePlayer = player;
        state[idOfSquare] = player; // present player
        let nextPlayer = (player + 1) % 2;
        setPlayer(nextPlayer);
        setState(state); // state array ie 0 or 1
        return thePlayer;
    }

    function resetClicked () {
        console.log('clicked')
        setState([]);
    }
    

    function renderSquare(i) {
        return <Square id={i}player={player} newState={newState}></Square>
    }
    return (
        <> 
        <div className='container'>
        <div className='game-board'>
        <div className='grid-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        </div>
        <div className='grid-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        </div>
        <div className='grid-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        </div>
        <div id='info'>
        <h1>{status}</h1>
        </div>
        </div>
        <div>
            <button className='reset' onClick={resetClicked}>Reset Game</button>
        </div>
        </div>
        </>
        )
    }
  
export default Board;