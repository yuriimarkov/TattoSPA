import React from "react";

import "./BasketButton.scss";
import { Link } from "react-router-dom";

const BasketButton = () => {
  return (
      <Link to='/basket'>
        <div className="basket">
        <span className="basket__price">300$</span>
        <div className="basket__icon-holder">
          <span className="icon icon-Basket"></span>
          <span className="count">0</span>
        </div>
      </div>
      </Link>
  );
};

export default BasketButton;
