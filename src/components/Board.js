import React, { useState } from 'react';

const Board = () => {
    let player = 1;
    let status = `Player ${player}`;

    return (
        <div className='container'>
            <div className='game-board'>
                <div id='info'>
                    <h1>{status}</h1>
                </div>
            </div>
        </div>
    )
}
export default Board;