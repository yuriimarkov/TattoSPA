import React from "react";
import { Link } from "react-router-dom";

import './NavList.scss'

const NavList = () => (
    <ul className="nav__list">
       <li className="nav__item">
        <Link to="/" className="nav__link">
          Головна
        </Link>
      </li>
      <li className="nav__item active">
        <Link to="/catalog" className="nav__link">
          Каталог
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/contact" className="nav__link">
          Контакти
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/promo" className="nav__link">
          Промокоди
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/sale" className="nav__link">
          Знижки
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/blog" className="nav__link">
          Блог
        </Link>
      </li>
    </ul>
);

export default NavList;
