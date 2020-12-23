import React, {Component} from "react";
import {GlobalFutureItem, WrapperCarouselGlobal} from "./style";
import Slider from "react-slick";

export default class MobileGlobalFuture extends Component {

    render() {

        const settings = {
            arrows: false,
            dots: false,
            speed: 500,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
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
            <WrapperCarouselGlobal>
                <Slider {...settings}>
                    <GlobalFutureItem >
                        <div className="future_item_header">
                            <img src={require('../../static/images/roi.png')} alt=""/>
                        </div>
                        <div className="future_item_footer">
                            <div>
                                <h3 className="future_item_footer--title">DIGITAL MARKETING LONG EXPERIENCE SINCE 2012</h3>
                            </div>
                        </div>
                    </GlobalFutureItem>
                    <GlobalFutureItem>
                        <div className="future_item_header">
                            <img src={require('../../static/images/sway.png')} alt=""/>
                        </div>
                        <div className="future_item_footer">
                            <div>
                                <h3 className="future_item_footer--title">CASUAL GAMES STRONG FOCUS</h3>
                            </div>
                        </div>
                    </GlobalFutureItem>
                    <GlobalFutureItem>
                        <div className="future_item_header">
                            <img src={require('../../static/images/jigsaw.png')} alt=""/>
                        </div>
                        <div className="future_item_footer">
                            <div>
                                <h3 className="future_item_footer--title">LAZER TARGETING</h3>
                            </div>
                        </div>
                    </GlobalFutureItem>
                    <GlobalFutureItem>
                        <div className="future_item_header">
                            <img src={require('../../static/images/return-of-investment.png')} alt=""/>
                        </div>
                        <div className="future_item_footer">
                            <div>
                                <h3 className="future_item_footer--title">ROI ORIENTED USER ACQUISITION</h3>
                            </div>
                        </div>
                    </GlobalFutureItem>
                </Slider>
            </WrapperCarouselGlobal>
        )
    }

}