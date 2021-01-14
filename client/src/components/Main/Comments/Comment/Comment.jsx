import React from 'react';
import style from './Comment.module.css'
import ReactStars from "react-stars";

function Comment(props) {
    return (
            <div className={style.box} data-aos="fade-up">
                <div className={style.date}>{props.date}</div>
                <div className={style.userName}>{props.title}</div>
                <div className={style.ratingStar}>
                    <ReactStars
                    edit={false}
                    count={5}
                    value={props.ratingStar}
                    size={30}
                    color2={'orange'}
                    />
                <span>{props.ratingStar}</span>
                </div>

                <div className={style.message}>{props.message}</div>
            </div>
    )
}

export default Comment;
