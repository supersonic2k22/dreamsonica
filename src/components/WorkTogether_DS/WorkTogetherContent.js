import React, {Component} from "react";
import WorkTogetherCarousel from "./WorkTogetherCarousel";
import InfoItemElement from "./infoItemEelement";
import {Element} from 'react-scroll'
import {
    Container,
    Row,
    Col,
    Visible,
    ScreenClassRender,
} from "react-grid-system";
import Fade from "react-reveal/Fade";
import {
    Wrapper,
    HelperElement
} from './style';
import ScrollButtonUp from "react-scroll-up-button";

export default class WorkTogetherContent extends Component {
    render() {

        const { toScroll } = this.props

        return (
            <Wrapper>
                <Element id='workflow'/>
                <Container>
                    <Fade bottom>
                        <Row>
                            <Col lg={12}>
                                <h2 className="content_title">Your special privilege by working
                                    <br/>
                                    with Dream Sonica
                                </h2>
                            </Col>
                        </Row>
                    </Fade>
                    <ScreenClassRender render={ screenClass => (
                        <Row style={{flexDirection:['xs', 'sm', 'md', 'lg'].includes(screenClass) ? 'column-reverse' : ''}}>
                            <Col xl={12} style={{alignSelf: "center"}}>
                                <WorkTogetherCarousel toScroll={toScroll}/>
                                <Visible xs sm md lg>
                                    <HelperElement>
                                        <InfoItemElement toScroll={toScroll}/>
                                    </HelperElement>
                                </Visible>
                            </Col>
                        </Row>
                    )}/>
                    <ScrollButtonUp ShowAtPosition={1270}
                                    AnimationDuration={1500}
                                    style={{borderRadius: '1em', background: 'orange', zIndex:"1", padding: 8}}
                    />
                </Container>
            </Wrapper>
        );

    }
}
