import React from "react";
import style from './ErrorIndicator.module.css';

const ErrorIndicator = ()=>{
    return(
        <div className={style.error}>
            Упс!!! неможу загрузити  дані!
        </div>
    )
};

export default ErrorIndicator;
