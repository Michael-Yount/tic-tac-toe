import React, { useEffect, useState } from "react";

const Square = ({id, player}) => {
    const [color, setColor] = useState();
    const palette = ['red', 'green', 'blue', 'yellow'];
    const getRandomColor = () =>
        palette[Math.floor(Math.random() * 4)];

        useEffect (() => {
            console.log(`Render ${id}`);
            return ()=> console.log(`unmounting Square ${id}`);
        });
   // keep track of the square 
    return (
        //change color of square onClick
        <button className="btn" onClick={(e) => {
            //alert(`I am square ${id}`)
            
            e.target.style.background = (getRandomColor());
        }}>{player}</button>
    )
}

export default Square;