import "../styles/index.css";
import "../styles/md.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function LossorWinRate({ oncount, onDone }) {
  const [Wingame, setWingame] = useState(0);
  const [Lossgame, setLossgame] = useState(0);
  const [Hovered, setHovered] = useState(false);
  const [bodyWidth, setbodyWidth] = useState(() => {
    return localStorage.getItem("bodyWidth") || 400;
  });
  useEffect(() => {
    const SavedWins = parseInt(localStorage.getItem("Wingame")) || 0;
    const SavedLoss = parseInt(localStorage.getItem("Lossgame")) || 0;
    setWingame(SavedWins);
    setLossgame(SavedLoss);
  }, []);
  useEffect(() => {
    if (!onDone && oncount === 20) {
      setWingame((prevWinCount) => {
        const newWingame = prevWinCount + 1;
        localStorage.setItem("Wingame", newWingame);
        return newWingame;
      });
    }
    if (!onDone && oncount === 0) {
      setLossgame((prevLossCount) => {
        const newLossgame = prevLossCount + 1;
        localStorage.setItem("Lossgame", newLossgame);
        return newLossgame;
      });
    }
  }, [oncount, onDone]);
  function handlebodyWidth() {
    setbodyWidth((prevWidth) => {
      const newWidth = prevWidth === 30 ? 400 : 30;
      localStorage.setItem("bodyWidth", newWidth);
      return newWidth;
    });
  }
  return (
    <div
      className="scale"
      style={{ maxWidth: bodyWidth + "px" }}
    >
      <div className="inline-block">
        <FontAwesomeIcon
          icon={Hovered ? faChartSimple : faXmark}
          className="text-white cursor-pointer"
          onClick={handlebodyWidth}
          onMouseEnter={() => setHovered(false)}
          onMouseLeave={() => setHovered(true)}
        />
      </div>
      <div className="text-white pl-16">
        <span className="pr-4 font-bold">Win:{Wingame}</span>
        <span className="pr-2 font-bold">Loss:{Lossgame}</span>
      </div>
    </div>
  );
}
