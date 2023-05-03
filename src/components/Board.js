import React, { useState } from 'react';
import Square from './Square';


const Board = () => {
    const [player, setPlayer] = useState(1);
    const [mounted, setMounted] = useState(true);
    let status = `Player ${player}`;
    const toggle = () => setMounted(!mounted);
    function renderSquare(i) {
        return <Square id={i}player={player}></Square>
    }
    return (
    <> 
        <div className='container'>
            <div className='game-board'>
                <div className='grid-row'>
                {mounted && renderSquare(0)}
                {mounted && renderSquare(1)}
                {mounted && renderSquare(2)}
                </div>
                <div id='info'>
                    <button onClick={toggle}>Show/Hide Row</button>
                    <h1>{status}</h1>
                </div>
            </div>
        </div>
    </>
    )
}
export default Board;