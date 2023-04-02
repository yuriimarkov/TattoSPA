import NavButton from "../../NavButton/NavButton";
import NavList from "../../NavList/NavList";
import Social from "../../SocialList/SocialList";
import Basket from "../../Pages/Basket/BasketButton/BasketButton";
import Search from "../../search/Search";
import AuthButton from "../../Pages/Auth/AuthButton/AuthButton";
import FavoriteButton from "../../Pages/Favorite/FavoriteIcon/FavoriteButton";

export default function HeaderTablet({ updateMenu, navClass }) {
  return (
    <div className="header__container">
      <div className="header__nav-holder">
        <NavButton updateMenu={updateMenu} />
        <nav className={navClass}>
          <NavList />
          <Social />
        </nav>
      </div>
      <Search />
      <div className="header__icons">
        <Basket />
        <FavoriteButton />
        <AuthButton />
      </div>
    </div>
  );
}
