import React from "react";
import HeroSlider from "react-slick";

//component
import {NextArrow,PrevArrow} from "./Arrows.component";


import { directive } from "@babel/types";



const HeroCarousal = () => {  
    const settingsLG = {
        arrows: true,
        centerMode: true,
        autoplay: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        NextArrow: <NextArrow />,
        PrevArrow: <PrevArrow />,
    };

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        NextArrow: <NextArrow />,
        PrevArrow: <PrevArrow />,
      };
      const images = [
            "https://in.bmscdn.com/promotions/cms/creatives/1625552417950_cinemaisbackcreativeadapts_webshowcase_1280x500.jpg",
            "https://in.bmscdn.com/promotions/cms/creatives/1625685026902_joboltahaiwohihotahaifeatharshgujral_webshowcase_1280x500.jpg",
            "https://in.bmscdn.com/promotions/cms/creatives/1626197859867_theultimatestartrekcollection_1280x500webbannerios.jpg",
            "https://in.bmscdn.com/promotions/cms/creatives/1625559912123_bsm_1280x500_chickflick.jpg",
    ];
    return (
        <>
           <div className="lg:hidden">
           <HeroSlider {...settings }> 
                {
                    images.map((image)=>(
                        <div className="w-full h-56 md:h-80 py-3">
                            <img src={image} alt="testing" className="w-full h-full rounded-md" />
                        </div>
                    ))
                }
            </HeroSlider>
           </div>
           <div className="hidden lg:block">
           <HeroSlider {...settingsLG }> 
                {
                    images.map((image)=>(
                        <div className="w-full h-90 px-2 py-3">
                            <img src={image} alt="testing" className="w-full h-full rounded-md" />
                        </div>
                    ))
                }
            </HeroSlider>
           </div>

        </>
    );
};

export default HeroCarousal;