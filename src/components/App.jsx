import React, { useState } from "react"

function App(){

    const random1 = Math.round(Math.random()*5);
    const random2 = Math.round(Math.random()*5);

    const dice1Roll = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
    const dice2Roll = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

    const [startingDice1, setDice1] = useState("images/dice6.png");
    const [startingDice2, setDice2] = useState("images/dice6.png");
    const [startingH1] = useState("Refresh to roll!");
    const [startingParagraph, setParagraph] = useState("");

  window.addEventListener("load", (event) => {
    setDice1(dice1Roll[random1]);
    setDice2(dice2Roll[random2]);
    if (random1 > random2) {
        setParagraph("Player 1 Wins")
      }
      if (random1 < random2) {
        setParagraph("Player 2 Wins")
      }else if (random1 === random2){
        setParagraph("Tis A Draw")
      };    
  });

    return(

        <>
          
          <h1>{startingH1}</h1>

  <div className="dice">
    <p>Player 1</p>
    <img className="img1" name="diceimg1" src={startingDice1} />
  </div>

  <div className="dice">
    <p>Player 2</p>
    <img className="img2" name="diceimg2" src={startingDice2} />
  </div>

  <p>{startingParagraph}</p>

  </>

          )    
};

export default App