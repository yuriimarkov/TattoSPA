import { useState,useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import "./../../assets/styles/icomoon/icomoon.css";
import HeaderDesctop from "./Desktop/HeaderDesctop";
import "./Header.scss";
import HeaderMobile from "./Mobile/HeaderMobile";
import HeaderTablet from "./Tablet/HeaderTablet";

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const basketData = localStorage.getItem("basket");
  const basket = basketData ? JSON.parse(basketData) : 0;
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  console.log(basket)
  useEffect(() => {
    if(basket.length > 0) {
      const newCount = basket?.reduce((sum, item) => sum + item.count, 0);
    setCount(newCount);
     
    const newTotal = basket?.reduce((sum,item) => sum + item.price,0);
    setTotal(newTotal);
    }
  }, [basket]);

  const [burgerClass, setBurgerClass] = useState("header");
  const [navClass, setNavClass] = useState("nav");
  const [isClick, setIsClick] = useState(false);

  const updateMenu = () => {
    if (!isClick) {
      setBurgerClass("header active");
      setNavClass("nav active");
      setIsClick(true);
    } else {
      setBurgerClass("header");
      setNavClass("nav");
      setIsClick(false);
    }
  };
  

  return (
    <header className={burgerClass}>
      {isMobile && <HeaderMobile updateMenu={updateMenu} navClass={navClass} total={total} count={count}/>}
      {isTablet && <HeaderTablet updateMenu={updateMenu} navClass={navClass} total={total} count={count}/>}
      {isDesktop && (
        <HeaderDesctop updateMenu={updateMenu} navClass={navClass} total={total} count={count}/>
      )}
    </header>
  );
}
