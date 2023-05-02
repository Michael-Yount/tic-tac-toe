import React, { useState } from 'react';
import Square from './Square';


const Board = () => {
    const [player, setPlayer] = useState(1);
    let status = `Player ${player}`;
    function renderSquare(i) {
        return <Square id={i}></Square>
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
                <div id='info'>
                    <h1>{status}</h1>
                </div>
            </div>
        </div>
    </>
    )
}
export default Board;