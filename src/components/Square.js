import React, { useState } from "react";

const Square = ({id, player}) => {
    //const [color, setColor] = useState();
    //const palette = ['red', 'green', 'blue', 'yellow'];
    //const getRandomColor = () =>
    //    palette[Math.floor(Math.random() * 4)];
   // keep track of the square 
    return (
        //change color of square onClick
        <button className="btn" onClick={() => {
            alert(`I am square ${id}`)
            //setColor(getRandomColor());
            //e.target.style.background = color;
        }}>{player}</button>
    )
}

export default Square;