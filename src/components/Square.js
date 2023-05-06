import React, { useEffect, useState } from "react";

const Square = ({id, player, newState }) => {
    const [color, setColor] = useState();
    const [status, setStatus] = useState(null);
    const XorO = ["O", "X",];

    const palette = ['#FDFAE2'];
    const getRandomColor = () =>
        palette[Math.floor(Math.random())];

      
   // keep track of the square 
    return (
        //change color of square onClick
        <button className="square" onClick={(e) => {
            //alert(`I am square ${id}`)
            let col = getRandomColor();
            setColor(col);
            let nextPlayer = newState(id);
            setStatus(nextPlayer);
            e.target.style.background = col;
        }}>
            <h1>{XorO[status]}</h1></button>
    )
}
  
export default Square;
