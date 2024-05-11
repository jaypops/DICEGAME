import Winsound from "../sound/mixkitWin.wav";
import Losssound from "../sound/mixkit-losing.wav";
import { useEffect } from "react";
export default function GameandWonLoss({ oncount, onhandleGame }) {
  useEffect(() => {
    const audio = new Audio(
      oncount === 0 ? Losssound : oncount === 20 ? Winsound : ""
    );
    audio.play();
  }, [oncount]);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-8xl font-black">
        {oncount === 0 ? "GAME OVER" : oncount === 20 ? "YOU WIN" : ""}
      </h1>
      <button
        className="bg-black text-white rounded-lg px-12 py-2"
        onClick={onhandleGame}
      >
        <h6 className="text-xs font-medium">play again</h6>
      </button>
    </div>
  );
}
