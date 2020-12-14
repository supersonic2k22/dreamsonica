import React, { Component } from "react";
import Slider from "react-slick";

import {
    WrapperCarousel,
    CarouselCard
} from './style';
import WorkTogetherIcons from "./WorkTogetherIcons";
import {Col, Row} from "react-grid-system";

export default class WorkTogetherCarousel extends React.Component{

    state = {
        activeSlide: false,
    }

    render() {

        const settings = {
            dots: false,
            arrows: false,
            speed: 500,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: '',
            afterChange: (current, next) => { this.setState({activeSlide: next})},
        };

        return (
                <WrapperCarousel>
                    <Row>
                        <Col md={7} xl={7} style={{alignSelf: "center"}}>
                            <Slider ref={c => (this.slider = c)} {...settings}>
                                <CarouselCard key={1}>
                                    <h3 className="carousel_card_title">Something 1</h3>
                                    <p className="carousel_card_text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, harum.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, harum.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, harum.
                                    </p>
                                </CarouselCard>
                                <CarouselCard key={2}>
                                    <h3 className="carousel_card_title">Something 2</h3>
                                    <p className="carousel_card_text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, itaque!
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, itaque!
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, itaque!
                                    </p>
                                </CarouselCard>
                                <CarouselCard key={3}>
                                    <h3 className="carousel_card_title">Something 3</h3>
                                    <p className="carousel_card_text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quod.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quod.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quod.
                                    </p>
                                </CarouselCard>
                            </Slider>
                        </Col>

                        <Col md={5} xl={5}>
                            <WorkTogetherIcons goToSlide={slideNum => this.slider.slickGoTo(slideNum)}/>
                        </Col>
                    </Row>
                </WrapperCarousel>
        );
    }
}