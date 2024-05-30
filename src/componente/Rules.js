import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/md.css";
export default function Rules({ onhandleshowGame, onhandlerule }) {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <span>
          <h1 className=" text-3xl font-black rules_text_heading">
            RULES OF THE GAME
          </h1>
        </span>
        <span>
          {" "}
          <FontAwesomeIcon
            icon={faXmark}
            className="text-3xl cursor-pointer rules_toggle"
            onClick={onhandlerule}
          />
        </span>
      </div>
      <div>
        <ul className="list-disc pl-6">
          <li className="leading-loose font-medium rules_text ">
            Guessing Skill Bonus: Earn additional chances based on your guessing
            skill, up to a maximum of 10 extra chances.
          </li>
          <li className="leading-loose font-medium rules_text ">
            Roll the Dice: Pick a number between 1 and 6, then roll the dice.
          </li>
          <li className="leading-loose font-medium rules_text ">
            Matching Numbers: If your chosen number matches the number on the
            dice, you earn points.
          </li>
          <li className="leading-loose font-medium rules_text ">
            Scoring System: +2 points for a correct guess, -2 points for an
            incorrect guess.
          </li>
          <li className="leading-loose font-medium rules_text ">
            Hint Feature: Three numbers will be provided, one of which will be
            correct.
          </li>
          <li className="leading-loose font-medium rules_text ">
            Winning and Losing: Win by reaching 20 points, lose if your score
            reaches 0.
          </li>
        </ul>
      </div>
      <span className="flex justify-center items-center pt-1">
        <button
          onClick={onhandleshowGame}
          className="bg-black text-white rounded-lg px-12 py-2"
        >
          <h6 className="text-xs font-medium rules_text">play game</h6>
        </button>
      </span>
    </div>
  );
}
