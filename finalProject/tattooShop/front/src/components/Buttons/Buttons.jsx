import { Link } from "react-router-dom";

import "./Button.scss";

export function ButtonLink({ text, url, className }) {
    return (
      <div className="btn-holder">
        <Link to={url} className={className}>
          <span className="btn__text">{text}</span>
        </Link>
      </div>
    );
  }

export function Button({text, className , onClick}) {
  return (
    <div className="btn-holder">
      <button className={className} onClick={onClick}>{text}</button>
    </div>
  );
}
