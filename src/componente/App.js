import "../styles/index.css";
import "../styles/md.css";
import MainPageDice from "./MainPageDice";
import PlayGame from "./PlayGame";
import Score from "./Score";
import SelecteNum from "./SelceteNum";
import RollDice from "./RollDice";
import GameandWonLoss from "./GameandWonLoss";
import Rules from "./Rules";
import Back from "./Back";
import Error from "./Errors";
// import ErrorBoundary from "./ErrorBoundary";
import LossorWinRate from "./LossandWinRate";
// import LaptopOnlyPage from "./LaptopOnlyPage";
import { useState } from "react";
export default function App() {
  const [showGame, setshowGame] = useState(false);
  const [RemoveMainPage, setRemoveMainPage] = useState(true);
  const [number, setnumber] = useState();
  const [currentDice, setcurrenDice] = useState(1);
  const [count, setcount] = useState(0);
  const [Done, setDone] = useState(true);
  const [rulesExit, setrulesExit] = useState(false);
  const [GameLossorWin, setGameLossorWin] = useState(false);
  const [GameStarted, setGameStarted] = useState(false);
  const [GameEnded, setGameEnded] = useState(false);
  const [error, seterror] = useState("");
  const [possibleNumbers, setPossibleNumbers] = useState([]);
  const [diceRolled, setdiceRolled] = useState(false);
  function handleshowGame() {
    setshowGame((show) => !show);
    setRemoveMainPage((remove) => !remove);
  }
  function handlerule() {
    setrulesExit((exit) => !exit);
  }
  function handleGame() {
    setGameLossorWin(false);
    setDone(true);
    setnumber();
    setcurrenDice(1);
    setcount(0);
    setdiceRolled(false);
    setPossibleNumbers([]);
  }
  const CreateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  function handleGeneratedPossibleNumber() {
    const possible = [];
    for (let i = 0; i < 3; i++) {
      possible.push(CreateRandomNumber(1, 6));
    }
    setPossibleNumbers(possible);
  }

  return (
    <>
      {/* <LaptopOnlyPage /> */}
      {RemoveMainPage && (
        <div>
          <div className="flex items-center justify-between playgame_body ">
            <div>
              <MainPageDice />
            </div>
            <div className="font-sans">
              <PlayGame
                onhandleshowGame={handleshowGame}
                onhandlerule={handlerule}
              />
              {rulesExit && (
                <div className="relative">
                  <div className="absolute Gameplaybackground Mainpage">
                    <Rules
                      onhandleshowGame={handleshowGame}
                      onhandlerule={handlerule}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {showGame && (
        <div className="mt-10 relative">
          <div className="flex justify-between items-center px-12">
            <div>
              <Score
                oncount={count}
                onsetcount={setcount}
                onDone={Done}
                onsetDone={setDone}
                onsetGameLossorWin={setGameLossorWin}
                onGameStarted={GameStarted}
                onsetGameStarted={setGameStarted}
                onGameEnded={GameEnded}
                onsetGameEnded={setGameEnded}
              />
            </div>
            <div>
              <SelecteNum
                onnumber={number}
                onsetnumber={setnumber}
                onDone={Done}
                onerror={error}
                onseterror={seterror}
                diceRolled={diceRolled}
                setdiceRolled={setdiceRolled}
                onhandleGeneratedPossibleNumber={handleGeneratedPossibleNumber}
              />
            </div>
          </div>
          <div>
            <RollDice
              oncurrentDice={currentDice}
              onsetcurrentDice={setcurrenDice}
              onnumber={number}
              oncount={count}
              onsetcount={setcount}
              onsetnumber={setnumber}
              onpossibleNumbers={possibleNumbers}
              onCreateRandomNumber={CreateRandomNumber}
              setdiceRolled={setdiceRolled}
              onhandleGeneratedPossibleNumber={handleGeneratedPossibleNumber}
            />
          </div>
          {GameLossorWin && (
            <div className="relative">
              <div className="absolute flex justify-center items-center Gameplaybackground Gamepage">
                <GameandWonLoss oncount={count} onhandleGame={handleGame} />
              </div>
            </div>
          )}
          <div className="relative">
            <LossorWinRate
              oncount={count}
              onGameEnded={GameEnded}
              onGameStarted={GameStarted}
              onsetcount={setcount}
              onDone={Done}
            />
          </div>
          <div className="flex justify-between items-center mt-40 px-10">
            <div>
              <Back onhandleshowGame={handleshowGame} />
            </div>
            <div>
              <Error onerror={error} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
