import NavButton from "./../../NavButton/NavButton";
import Nav from "./../..//Nav/Nav";
import Basket from "../../Pages/Basket/BasketButton/BasketButton";

export default function HeaderMobile({updateMenu,navClass, total, count}) {
  return (
    <div className="header__container">
      <div className="header__nav-holder">
        <NavButton updateMenu={updateMenu} />
        <Nav navClass={navClass} />
      </div>
      <Basket total={total}  count={count} />
    </div>
  );
}
