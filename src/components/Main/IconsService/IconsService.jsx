import React from 'react';
import style from './IconsService.module.css';
import carImg from './ImagesIcon/car.png';
import panImg from './ImagesIcon/pan.png';
import handImg from './ImagesIcon/hand.png';
import moneyImg from './ImagesIcon/money.png';
import presentImg from './ImagesIcon/present.png';

let itemsIcon = [
    { iconItemImg: carImg, text: "Швидка робота" },
    { iconItemImg: panImg, text: "Надання консультації" },
    { iconItemImg: handImg, text: "Якість обслуговування" },
    { iconItemImg: moneyImg, text: "Економія вашого часу і сил" },
    { iconItemImg: presentImg, text: "Знижки постійним клієнтам" },
];

const IconsService = (props) => {
    return (
        <IconServiceItem itemsIcon={itemsIcon} />
    )
}

const IconServiceItem = (props) => {
    return (
        <div className={style.section}>
            <div className={style.wrap}>
                {props.itemsIcon.map((value, index) => {
                    return <div className={style.wrapItem} key={index}>
                        <div className={style.iconItem}><img src={value.iconItemImg} alt="" /></div>
                        <div className={style.textItem}>{value.text}</div>
                    </div>
                }
                )}
            </div>
        </div>
    )
}

export default IconsService;