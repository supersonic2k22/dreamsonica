import React, {Component} from "react";
import Slider from "react-slick";
import {
    WrapperServiceDescription,
    WrapperServiceCarousel,
    CarouselItem,

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
            dots: true,
            fade: true,
            arrows: false,
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
                                <img src={require('../../static/images/machine_point.svg')} alt=""/>
                            </div>
                                <h3 className="carousel_item_title">New title others</h3>
                                <p className="carousel_item_text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ab ad corporis culpa et fuga id illo, itaque libero quasi
                                    recusandae voluptate voluptates voluptatibus. Soluta, velit.
                                </p>
                        </CarouselItem>
                        <CarouselItem key={2}>
                            <div className="carousel_item_icon">
                                <img src={require('../../static/images/done_ico.svg')} alt=""/>
                            </div>
                                <h3 className="carousel_item_title">New title others</h3>
                                <p className="carousel_item_text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aut cupiditate debitis deserunt enim fugiat harum magni,
                                    neque non nulla, optio quibusdam reiciendis, tenetur totam voluptatum!
                                </p>
                        </CarouselItem>
                        <CarouselItem key={3}>
                            <div className="carousel_item_icon">
                                <img src={require('../../static/images/build_from_scratch_ico.svg')} alt=""/>
                            </div>
                                <h3 className="carousel_item_title">New title others</h3>
                                <p className="carousel_item_text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Autem eius, eos inventore laborum magni nesciunt perferendis sit?
                                    Ab blanditiis deleniti dignissimos laudantium perspiciatis reprehenderit ullam?
                                </p>
                        </CarouselItem>
                        <CarouselItem key={4}>
                            <div className="carousel_item_icon">
                                <img src={require('../../static/images/done_ico.svg')} alt=""/>
                            </div>
                                <h3 className="carousel_item_title">New title others</h3>
                                <p className="carousel_item_text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    A alias at corporis cum doloremque error exercitationem facilis fugiat,
                                    maiores mollitia nesciunt, nulla reiciendis sapiente suscipit!
                                </p>
                        </CarouselItem>
                        <CarouselItem key={5}>
                            <div className="carousel_item_icon">
                                <img src={require('../../static/images/build_from_scratch_ico.svg')} alt=""/>
                            </div>
                                <h3 className="carousel_item_title">New title others</h3>
                                <p className="carousel_item_text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laboriosam, repellendus!
                                    Aliquid at culpa et exercitationem expedita laboriosam molestiae nulla similique voluptas voluptatem!
                                    Nam, perferendis?
                                </p>
                        </CarouselItem>
                    </Slider>
                </WrapperServiceCarousel>
            </WrapperServiceDescription>
        );
    }
}