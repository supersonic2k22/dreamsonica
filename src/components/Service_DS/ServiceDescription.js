import React, {Component} from "react";
import Slider from "react-slick";
import { ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';
import {
    WrapperServiceDescription,
    WrapperServiceCarousel,
    CarouselItem,
    CarouselBoxBtns
} from './style'



export default class ServiceDescription extends Component{

    next = () => {
        this.slider.slickNext();
    }

    previous = () => {
        this.slider.slickPrev()
    }

    render() {

        const settings = {
            arrows: false,
            dots: false,
            fade: true,
            speed: 500,
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <WrapperServiceDescription>
                <WrapperServiceCarousel>
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <CarouselItem key={1}>
                            <div className="carousel_item_icon">
                                <img  src={require('../../static/images/sonica/logo/logo1.png')} alt=""/>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={2}>
                            <div className="carousel_item_icon">
                                <img  src={require('../../static/images/sonica/logo/logo2.png')} alt=""/>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={3}>
                            <div className="carousel_item_icon">
                                <img  src={require('../../static/images/sonica/logo/logo3.png')} alt=""/>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={4}>
                            <div className="carousel_item_icon">
                                <img  src={require('../../static/images/sonica/logo/logo4.png')} alt=""/>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={5}>
                            <div className="carousel_item_icon">
                                <img  src={require('../../static/images/sonica/logo/logo5.png')} alt=""/>
                            </div>
                        </CarouselItem>
                    </Slider>
                    <CarouselBoxBtns>
                        <button className="carousel_btn_pre" onClick={() => this.previous()}>
                            <ArrowLeftOutlined />
                        </button>
                        <button className="carousel_btn_next" onClick={() => this.next()}>
                            <ArrowRightOutlined />
                        </button>
                    </CarouselBoxBtns>
                </WrapperServiceCarousel>
            </WrapperServiceDescription>
        );
    }
}
