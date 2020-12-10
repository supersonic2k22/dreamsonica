import React, {Component} from "react";
import WorkTogetherCarousel from "./WorkTogetherCarousel";
import WorkTogetherIcons from "./WorkTogetherIcons";
import InfoItemElement from "./infoItemEelement";
import Slider from 'react-slick';
import {Element} from 'react-scroll'
import {
    Container,
    Row,
    Col,
    Visible,
    ScreenClassRender,
} from "react-grid-system";

import {
    Wrapper,
    HelperElement
} from './style';


export default class WorkTogetherContent extends Component {

    slider = new Slider();

    state = {
     activeSlide: false,
    }
    settings = {
        dots: false,
        arrows: false,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: '',
        afterChange: (current, next) => { this.setState({activeSlide: next})},
    };

    next = () => {
        this.slider.slickNext();
    }

    previous = () => {
        this.slider.slickPrev();
    }

    goTo = () => {
        this.slider.slickGoTo(this.state.activeSlide);
        console.log(`go to is work ${this.state.activeSlide}`)
    }

    render() {
        return (
            <Wrapper>
                <Element id="workflow"/>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className="content_title">Your special privilege by working
                                <br/>
                                with Dream Sonica
                            </h2>
                        </Col>
                    </Row>
                    <ScreenClassRender render={ screenClass => (
                        <Row style={{flexDirection:['xs', 'sm', 'md', 'lg'].includes(screenClass) ? 'column-reverse' : ''}}>
                            <Col xl={7} style={{alignSelf: "center"}}>
                                <WorkTogetherCarousel
                                    settingsCarousel={this.settings}
                                    buttonNext={this.next}
                                    buttonPre={this.previous}
                                />
                                <Visible xs sm md lg>
                                    <HelperElement>
                                        <InfoItemElement/>
                                    </HelperElement>
                                </Visible>
                            </Col>
                            <Col xl={5}>
                                <WorkTogetherIcons indexCarouselCard={this.goTo}/>
                            </Col>
                        </Row>
                    )}/>
                </Container>
            </Wrapper>
        );

    }
}
