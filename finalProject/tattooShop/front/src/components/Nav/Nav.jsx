import Search from "../search/Search";
import NavList from "../NavList/NavList";
import Social from "../SocialList/SocialList";

import './Nav.scss'



const Nav = ({ navClass }) => (
    <nav className={navClass}>
      <NavList />
      <Search />
      <Social />
    </nav>
  );
  
  export default Nav;