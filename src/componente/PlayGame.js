import "../styles/md.css";
export default function PlayGame({ onhandleshowGame, onhandlerule }) {
  return (
    <>
      <div className="playgame_btn_side ">
        <h1 className="text-7xl w-128 font-black mb-2 playgame_text">
          DICE GAME
        </h1>
      </div>
      <div className="flex justify-end pr-32 playgame_btn_side gap-2">
        <button
          className="bg-black text-white rounded-lg px-12 py-2 playgame_btn"
          onClick={onhandlerule}
        >
          <h6 className="text-xs font-medium playgame_btn_text">Rules</h6>
        </button>
        <button
          onClick={onhandleshowGame}
          className="bg-black text-white rounded-lg px-12 py-2 playgame_btn"
        >
          <h6 className="text-xs font-medium playgame_btn_text">play game</h6>
        </button>
      </div>
    </>
  );
}
