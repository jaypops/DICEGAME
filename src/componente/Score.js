import { useEffect } from "react";
import "../styles/index.css";

export default function Score({
  oncount,
  onsetcount,
  onDone,
  onsetDone,
  onsetGameLossorWin,
  onGameStarted,
  onsetGameStarted,
  onGameEnded,
  onsetGameEnded,
}) {
  const maxNumber = 10;
  const minNumber = 0;
  useEffect(() => {
    if (
      !onDone &&
      (oncount === 0 || oncount === 20) &&
      (onGameStarted || onGameEnded)
    ) {
      onsetGameLossorWin(true);
    }
  }, [oncount, onGameStarted, onGameEnded, onsetGameLossorWin, onDone]);
  function handleIncrease() {
    if (oncount < maxNumber) {
      onsetcount(oncount + 2);
      onsetGameEnded(true);
      onsetGameStarted(true);
    }
  }
  function handleDecrease() {
    if (oncount > minNumber) {
      onsetcount(oncount - 2);
      onsetGameStarted(true);
      onsetGameEnded(true);
    }
  }
  function handleDone() {
    if (!oncount) return;
    onsetDone((hide) => !hide);
  }
  return (
    <>
      <div className="flex justify-center items-center">
        {onDone && (
          <button
            className="text-xl mr-4 mt-7 w-1/6 text-center border border-bg-white px-1.5 pad bg-black text-white rounded-md"
            onClick={handleDecrease}
          >
            -
          </button>
        )}
        <span>
          <h2 className="font-medium text-7xl">
            {Math.max(0, Math.min(oncount, 20))}
          </h2>
        </span>
        {onDone && (
          <button
            className="text-xl ml-4 mt-7 w-1/6 text-center border border-bg-white px-1 pad bg-black text-white rounded-md"
            onClick={handleIncrease}
          >
            +
          </button>
        )}
        {onDone && (
          <span className="pl-3 pt-7">
            <button
              className="font-medium text-center border border-bg-white bg-black text-white rounded-md text-sm px-2 py-1.5"
              onClick={handleDone}
            >
              Done
            </button>
          </span>
        )}
      </div>
      <span>
        <p className="font-bold">
          {onDone ? "Increase Chance" : "Total Score"}
        </p>
      </span>
    </>
  );
}
