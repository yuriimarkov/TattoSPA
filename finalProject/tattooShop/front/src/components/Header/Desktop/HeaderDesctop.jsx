import NavButton from "../../NavButton/NavButton";
import NavList from "../../NavList/NavList";
import Social from "../../SocialList/SocialList";
import Basket from "../../Pages/Basket/BasketButton/BasketButton";
import Search from "../../search/Search";
import FavoriteButton from "../../Pages/Favorite/FavoriteIcon/FavoriteButton";
import AuthButton from "../../Pages/Auth/AuthButton/AuthButton";

import logo from "./../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function HeaderDesctop({ updateMenu, navClass }) {
  return (
    <div className="header__container">
      <div className="header__top">
        <Social />
        <Link to='/'>
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="header__icons">
          <Basket />
          <FavoriteButton />
          <AuthButton />
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__nav-holder">
          <nav>
            <NavList />
          </nav>
        </div>
        <Search />
      </div>
    </div>
  );
}
