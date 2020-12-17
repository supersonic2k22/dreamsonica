import React, { Component } from "react";
import Slider from "react-slick";


import {
    WrapperCarousel,
    CarouselCard,
} from './style';



export default class CarouselComponent extends Component{

    next = () => {
        this.slider.slickNext();
    }

    previous = () => {
        this.slider.slickPrev()
    }

    render() {

        const {collectionSlider} = this.props;

        const settings = {
            dots: false,
            speed: 500,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <WrapperCarousel>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {collectionSlider.map((elem) => (
                            <CarouselCard key={elem.key} >
                                <img className="carousel_item_img" src={`${elem.image}`} alt=""/>
                            </CarouselCard>
                        )
                    )}
                </Slider>
            </WrapperCarousel>
        );
    }
}