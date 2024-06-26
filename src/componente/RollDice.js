import React, { useState } from "react";
import dice1 from "../images/dice_1.png";
import dice2 from "../images/dice_2.png";
import dice3 from "../images/dice_3.png";
import dice4 from "../images/dice_4.png";
import dice5 from "../images/dice_5.png";
import dice6 from "../images/dice_6.png";
import sound from "../sound/MOREDICE.WAV";
import "../styles/md.css";

export default function RollDice({
  oncurrentDice,
  onsetcurrentDice,
  onnumber,
  oncount,
  onsetcount,
  onsetnumber,
  onpossibleNumbers,
  setdiceRolled,
}) {
  const [trap, setTrap] = useState(false);

  const rollDice = () => {
    if (!onnumber || oncount === 0) return;
    onsetnumber();
    const randomNumber =
      onpossibleNumbers[Math.floor(Math.random() * onpossibleNumbers.length)];
    onsetcurrentDice(randomNumber);
    if (onnumber === randomNumber.toString()) {
      onsetcount(oncount + 2);
    } else {
      onsetcount(oncount - 2);
    }
    setdiceRolled(false);
    new Audio(sound).play();
  };

  const getDiceNumber = (diceNumber) => {
    switch (diceNumber) {
      case 1:
        return dice1;
      case 2:
        return dice2;
      case 3:
        return dice3;
      case 4:
        return dice4;
      case 5:
        return dice5;
      case 6:
        return dice6;
      default:
        return null;
    }
  };
  function handleStrap() {
    setTrap((show) => !show);
  }
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div
        className="cursor-pointer"
        onClick={!onnumber ? null : rollDice}
        disabled={!onnumber || oncount === 0}
      >
        <img
          className="w-36 h-36 mt-20 rolldice_size"
          src={getDiceNumber(oncurrentDice)}
          alt="Dice"
        />
      </div>
      <h3 className="mt-2 font-bold text-sm">Click the dice to roll</h3>
      <div className="flex justify-between items-center">
        {trap && (
          <span>
            <p>
              {onpossibleNumbers.map((number, index) => (
                <span key={index} className="text-sm pe-2 font-bold">
                  {index > 0 && ", "}
                  {number}
                </span>
              ))}
            </p>
          </span>
        )}
        <span className="bg-black text-white rounded-lg px-6 py-0.5 rolldice_btn">
          <button onClick={handleStrap}>
            <h2 className="text-sm">{trap ? "Hide" : "Hint"}</h2>
          </button>
        </span>
      </div>
    </div>
  );
}
