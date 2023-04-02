import React from 'react';

import './NavButton.scss'

const NavButton = ({ updateMenu }) => (
        <div className="nav__btn-holder" onClick={updateMenu}>
            <span className="text">Меню</span>
            <div className="burger">
                <span></span>
            </div>
        </div>
);

export default NavButton;