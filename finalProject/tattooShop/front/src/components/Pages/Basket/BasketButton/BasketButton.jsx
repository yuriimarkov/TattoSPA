import React from "react";

import "./BasketButton.scss";
import { Link } from "react-router-dom";

const BasketButton = ({total,count}) => {
  console.log(count);
  return (
      <Link to='/basket'>
        <div className="basket">
        <span className="basket__price">{total}</span>
        <div className="basket__icon-holder">
          <span className="icon icon-Basket"></span>
          <span className="count">{count}</span>
        </div>
      </div>
      </Link>
  );
};

export default BasketButton;
