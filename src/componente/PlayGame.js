export default function PlayGame({ onhandleshowGame, onhandlerule }) {
  return (
    <>
      <div>
        <h1 className="text-7xl w-128 font-black mb-2">DICE GAME</h1>
      </div>
      <div className="flex justify-end pr-32 gap-2">
        <button
          className="bg-black text-white rounded-lg px-12 py-2"
          onClick={onhandlerule}
        >
          <h6 className="text-xs font-medium">Rules</h6>
        </button>
        <button
          onClick={onhandleshowGame}
          className="bg-black text-white rounded-lg px-12 py-2"
        >
          <h6 className="text-xs font-medium">play game</h6>
        </button>
      </div>
    </>
  );
}
