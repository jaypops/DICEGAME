import "../styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function Error({ onerror }) {
  return (
    <div className="alert">
      <span>
        <FontAwesomeIcon icon={faCircleExclamation} className="ex same" />
      </span>
      <span class="write">Warning: {onerror} </span>
      <span>
        <FontAwesomeIcon icon={faXmark} className="close-btn" />
      </span>
    </div>
  );
}
