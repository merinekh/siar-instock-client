import { Link } from "react-router-dom";
import ChevronIcon from "../Icons/ChevronIcon";

function TextLink({ children, to }) {

  if (!to) {
    return (
      <div className="text-link" to={to}>
        {children}

        <ChevronIcon />
      </div>
    )
  }

  return (
    <Link className="text-link" to={to}>
      {children}

      <ChevronIcon />
    </Link>
  );
}

export default TextLink;
