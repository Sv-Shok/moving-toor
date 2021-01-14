import React from 'react';
import style from './Lang.module.css';
import Iconflag from '../../../../images/ukFlag.png';
import Icon from '../../../Common/IcoMoon/IcoMoon';
import { Link } from 'react-router-dom';

const Lang = () => {
    return (
        <div className={style.dropdown}>
            <button className={style.dropbtn}>
                <img  src={Iconflag} alt="flag"/>
                <span>UA</span>
                <Icon icon="angle-down" size={20} color="white" />
            </button>
            <div className={style.dropdownContent}>
                <Link to={'#'}>Українська</Link>
                <Link to={'#'}>Русский</Link>
                <Link to={'#'}>English</Link>
            </div>
        </div>

    )
}

export default Lang;