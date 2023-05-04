import React, { useEffect, useState } from "react";

const Square = ({id, player, newState }) => {
    const [color, setColor] = useState();
    const [status, setStatus] = useState(null);
    const XorO = ["O", "X"];

    const palette = ['green', 'blue'];
    const getRandomColor = () =>
        palette[Math.floor(Math.random() * 2)];

        useEffect (() => {
            console.log(`Render ${id}`);
            return ()=> console.log(`unmounting Square ${id}`);
        });
   // keep track of the square 
    return (
        //change color of square onClick
        <button className="btn" onClick={(e) => {
            //alert(`I am square ${id}`)
            let col = getRandomColor();
            setColor(col);
            let nextPlayer = newState({ id:id, color:col });
            setStatus(nextPlayer);
            e.target.style.background = col;
        }}>
            <h1>{XorO[status]}</h1></button>
    )
}

export default Square;