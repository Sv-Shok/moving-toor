import React, { useState } from 'react';
import style from './Menu.module.css';
import Lang from '../Lang/Lang';
import Burger from 'react-css-burger';
import { NavLink } from 'react-router-dom';
// import {withGetScreen} from 'react-getscreen'
// import { Link, animateScroll as scroll } from "react-scroll";

let menus = [
    { name: "Головна", link: "main" },
    { name: "Калькулятор", link: "calculator" },
    { name: "Ціни", link: "prices" },
    { name: "Контакти", link: "contacts" },
]


const Menu = (props) => {
    const styleHideMenu = style.nav + ' ' + style.hide;
    const [active, setActive] = useState(false);
    return (
        <div className={style.menu}>
            <nav className={active ? style.nav : styleHideMenu}>
                <ul>
                    {menus.map((value, index) => {
                        return <li key={index} onClick={() => setActive(!active)}>
                            <NavLink
                                to={`/${value.link}`}
                                activeClassName={style.activeLink}>
                                {value.name}
                            </NavLink>
                        </li>
                    })}
                </ul>
            </nav>
            <div className={style.burger}>
                <Burg active={active} setActive={setActive} />
            </div>
            {/*<Lang />*/}
        </div>
    )
}


const Burg = (props) => {
    return (
        <Burger
            onClick={() => props.setActive(!props.active)}
            active={props.active}
            burger="slider"
            color="white"
            hoverOpacity={0.8}
            scale={1.2}
            marginTop='0px'
            marginLeft='0px'
        />
    );
}


export default Menu;