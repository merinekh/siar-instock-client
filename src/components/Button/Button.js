import { Link } from "react-router-dom";

function Button({ children, to, type, secondary, red, onClick }) {
  const setClassName = () => {
    if (secondary) {
      return 'button button--secondary';
    }
    if (red) {
      return 'button button--red';
    }
    return 'button';
  };


  if (to) {
    return (
      <Link className={setClassName()} to={to} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={setClassName()} type={type ?? "button"} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
