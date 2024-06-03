import "../styles/index.css";
import "../styles/md.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorClosed, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Back({ onhandleshowGame }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div>
        {isHovered ? (
          <FontAwesomeIcon
            icon={faDoorOpen}
            className="w-10 h-10 back_size cursor-pointer"
            onClick={onhandleshowGame}
            onMouseLeave={() => setIsHovered(false)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faDoorClosed}
            className="w-10 h-10 back_size cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
          />
        )}
      </div>
    </div>
  );
}
