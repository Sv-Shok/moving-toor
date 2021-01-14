import React from 'react';
import style from './Reviews.module.css';
import {NavLink} from "react-router-dom";
import Loader from "../Comments/Loader/Loader";
import ErrorIndicator from "../../ErrorIndicator/ErrorIndicator";
import ReactStars from "react-stars";
import 'aos/dist/aos.css';

const Reviews = (props) => {
    let usersComments = props.userReviews.map((item, index) => {
            return <div className={style.wrapItemUser} key={index} data-aos="fade-up">
                <div className={style.nameUser}><span>{item.title}</span></div>
                <div className={style.ratingStar}>
                    <ReactStars
                        edit={false} count={5}
                        value={item.ratingStar}
                        size={30} color2={'orange'}
                    />
                <span>{item.ratingStar}</span>
                </div>
                <div className={style.itemText}>{item.message}</div>
            </div>
        });
    return (
        <div className={style.section}>
            <div className={style.wrap}>
                <h1 className={style.title}>Відгуки наших клієнтів</h1>

                <div className={style.wrapItems}>
                    {props.userReviews.length !== 0
                    ? usersComments
                    : props.isErrorReviews ? <ErrorIndicator />: <div className={style.loader}><Loader /></div>
                    }
                </div>

                <NavLink  to={`/comments`} className={style.btn}>
                    Всі відгуки: ({props.reviewsCount})
                </NavLink>
            </div>
        </div>
    )
};

export default Reviews;