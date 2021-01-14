import React, {useEffect} from 'react';
import style from './AboutUs.module.css';
import picture1 from '../../../images/gallery1.jpg';
import picture2 from '../../../images/gallery2.jpg';
import picture3 from '../../../images/gallery3.jpg';
import picture4 from '../../../images/gallery4.png';
import picture5 from '../../../images/gallery5.jpeg';
import picture6 from '../../../images/gallery6.jpg';
import Slider from "react-slick";
import Aos from 'aos';
import 'aos/dist/aos.css';

let dataAboutUs = {
    title: "WELCOME TO OUR COMPANY!",
    text: `WheelMasters is a crew of true auto enthusiast, all of whom are sincerely passionate \
           about enhancing the performance and looks of your car! All the creativity, craftsmanship, \
           and skill that each member of our crew has makes any car that we upgrade`,
    gallery: [picture1, picture2, picture3, picture4, picture5, picture6]
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                // background: "red",
                right: "0px",
                width: "30px"
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                // background: "green",
                left: "0px",
                zIndex: "1",
                width: "30px",
            }}
            onClick={onClick}
        />
    );
}

const AboutUs = (props) => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[]);
    return (
        <div className={style.section}>
            <div className={style.wrap}>
                <div className={style.wrapGallery} data-aos="fade-right">
                    {/* <img className={style.imgGallery} src={gallery1} alt="gallery" /> */}
                    <SliderGallery gallery={dataAboutUs.gallery} />
                </div>
                <div className={style.wrapInfo} data-aos="fade-left">
                    <div className={style.title}>
                        {dataAboutUs.title}
                    </div>
                    <div className={style.text}>
                        {dataAboutUs.text}
                    </div>
                </div>
            </div>
        </div>
    )
};

class SliderGallery extends React.Component {
    render() {
        var settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <Slider {...settings}>
              {this.props.gallery.map((value, index) => {
                    return (
                        <div key = {index}>
                            <img className={style.imgGallery} src={value} alt="gallery" />
                        </div>
                    )
                })}
            </Slider>
        );
    }
}


export default AboutUs;