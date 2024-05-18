import "../styles/index.css";
import sound from "../sound/mixkit.wav";

export default function SelecteNum({
  onnumber,
  onsetnumber,
  onDone,
  onseterror,
  onhandleGeneratedPossibleNumber,
  diceRolled,
  setdiceRolled,
}) {
  function handleClick(num) {
    if (!diceRolled) {
      onhandleGeneratedPossibleNumber();
      setdiceRolled(true);
    }
    onsetnumber(num);
    if (onDone === true) {
      onsetnumber(null);
      onseterror("increase chance");
    }
    // onhandleGeneratedPossibleNumber();
    new Audio(sound).play();
  }
  return (
    <>
      <div className="flex justify-between w-full max-w-md mx-auto gap-3">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <span
            key={num}
            className={`w-1/6 text-center border border-gray-600 py-2 px-4 cursor-pointer rounded-md ${
              onnumber === num.toString() ? "white" : "black"
            }`}
            onClick={() => handleClick(num.toString())}
          >
            {" "}
            <h2 className="font-bold">{num}</h2>
          </span>
        ))}
      </div>
      <span className="flex justify-end mt-4">
        <p className="font-extrabold">Select a number</p>
      </span>
    </>
  );
}
