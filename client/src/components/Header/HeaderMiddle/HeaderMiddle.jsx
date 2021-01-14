import React from 'react';
import style from './HeaderMiddle.module.css';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';


const HeaderMiddle = () => {
    return (
        <div className={style.headerMiddle}>
            <Logo />
            <Menu />
        </div>
    )
}

export default HeaderMiddle;