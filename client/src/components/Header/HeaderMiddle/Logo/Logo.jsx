import React from 'react';
import style from './Logo.module.css';
import logoImg from './logo.gif';
const Logo = ()=>{
    return(
        <div  className = {style.logo}>
            <a href = "/main" alt = "logo"><img src = {logoImg} alt = "logo"/></a>
            <span>Мувінг ТУР</span>
        </div>
    )
}

export default Logo;