import React, { Component } from "react";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined} from '@ant-design/icons';


import {
    WrapperCarousel,
    CarouselCard,
    CarouselBoxBtns
} from './style';

export default class WorkTogetherCarousel extends Component{

    render() {

        const { settingsCarousel, buttonNext, buttonPre } = this.props

        return (
                <WrapperCarousel>
                    <Slider ref={c => (this.slider = c)} {...settingsCarousel}>
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
                    <CarouselBoxBtns>
                        <button className="carousel_btn_pre" onClick={() => buttonPre()}>
                            <LeftOutlined />
                        </button>
                        <button className="carousel_btn_next" onClick={() => buttonNext()}>
                            <RightOutlined />
                        </button>
                    </CarouselBoxBtns>
                </WrapperCarousel>
        );
    }
}