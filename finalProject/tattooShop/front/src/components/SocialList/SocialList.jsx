import React from "react";
import { Link } from "react-router-dom";

import "./SocialList.scss";

const Social = () => {
  return (
    <div className="social">
      <Link to="/favorite" className="telephone">
        <i className="icon-Phone"></i>
        <span>8 800 600-61-91</span>
      </Link>
      <ul className="social__list">
        <li className="social__item">
          <Link to="#" className="icon icon-Telegram"></Link>
        </li>
        <li className="social__item">
          <Link to="#" className="icon icon-Phone"></Link>
        </li>
        <li className="social__item">
          <Link to="#" className="icon icon-viber"></Link>
        </li>
      </ul>
      <span className="time">Час роботи: з 9:00 до 20:00</span>
    </div>
  );
};

export default Social;
