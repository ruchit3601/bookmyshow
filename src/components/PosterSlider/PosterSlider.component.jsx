import React from 'react';
import Slider from 'react-slick';


//component
import Poster from '../Poster/poster.component';

//configs
import PosterCarousalsettings from '../../config/PosterCarousal.config';


const PosterSlider = (props) => {

    const sliderConfig = props.config ? props.config : PosterCarousalsettings


    return (
        <div>
             <div className="flex flex-col items-start my-2 ">
            <h3 className={`text-2xl font-bold ${props.isDark ? "text-white":"text-gray-800"}`}>{props.title}</h3>
            <p className={`text-sm ${props.isDark ? "text-white":"text-gray-800"}`}>{props.subtitle}</p>
        </div>

            <Slider {...sliderConfig } />

            <Slider {...PosterCarousalsettings}>

                {props.images.map((image) => ( 
                <Poster {...image} isDark={props.isDark}/>
                ))}
            </Slider>
        </div>
    );
};

export default PosterSlider;