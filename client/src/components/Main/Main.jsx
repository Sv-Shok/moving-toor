import React from 'react';
import IconsService from './IconsService/IconsService';
import AboutUs from './AboutUs/AboutUs';
import MenuService from './MenuService/MenuService';
import ReviewsContainer from "./Reviews/ReviewsContainer";
import HeaderBottom from "../Header/HeaderBottom/HeaderBottom";

const Main = () => {
    return (
        <div>
            <HeaderBottom />
            <MenuService />
            <IconsService />
            <AboutUs />
            <ReviewsContainer />

        </div>
    )
}

export default Main;