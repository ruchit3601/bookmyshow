import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
    return(
        <>
            <div className=" w-full h-29 px-2">
                <img src={props.src} className="w-full h-full rounded-xl" alt="Entertainment image" />
            </div>
        </>
    );
};

const EntertainmentCardSlider = () => {
    const EntertainmentImage = [
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjQwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/cooking-collection-202007222211.png",
    ];
    
    const settings ={
        Infinity: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        InitialSlide: 0,
        responsive:[{
            breakpoints: 1024,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
            }
        },
            {
                breakpoints: 600,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    InitialSlide: 1,
                },
        },
        {
            breakpoints: 480,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};
    return(
        <>
            <Slider {...settings} >
                {EntertainmentImage.map((image) =>(
                 <EntertainmentCard src={image} />
                 ))}
            </Slider>
        
        </>
    );
};
export default EntertainmentCardSlider;