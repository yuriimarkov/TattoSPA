import { Link } from "react-router-dom";

import NavList from "../NavList/NavList";
import Social from "../SocialList/SocialList";


import logo from "./../../assets/images/logo.svg";


import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__nav">
          <Link to='/' >
            <div className="footer__logo">
              <img src={logo} alt="img" />
            </div>
          </Link>
          <NavList />
        </div>
        <div className="footer__social">
          <Social />
        </div>
      </div>
    </footer>
  );
}
