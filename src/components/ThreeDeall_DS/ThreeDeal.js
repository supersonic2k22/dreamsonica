import React, { createRef, Component, forwardRef } from "react";
import {gsap,
        ScrollTrigger
    } from 'gsap/all'
import {Container, Row, Col} from "react-grid-system";
import {
    WrapperThreeDeal,
    ThreeDealTitle,
    ThreeDealText,
    ThreeDealBox
} from './style';

gsap.registerPlugin(ScrollTrigger)

export default class ThreeDeal extends Component {


    dealCard = createRef()

    render() {
        return (
            <WrapperThreeDeal>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ThreeDealTitle>
                                The three main our deal!
                            </ThreeDealTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} lg={9}>
                            <ThreeDealText styles={{fontFamily: 'Montserrat, sans-serif !important'}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Accusamus cupiditate earum fugit harum nostrum quibusdam quo repellat suscipit tempora unde.
                                Accusamus cupiditate earum fugit harum nostrum quibusdam quo repellat suscipit tempora unde.
                                Accusamus cupiditate earum fugit harum nostrum quibusdam quo repellat suscipit tempora unde.
                            </ThreeDealText>
                        </Col>
                    </Row>
                    <Row justify={"around"}>
                        <Col sm={12} md={4} ref={ item => { this.dealCard.current[0] = item }}>
                            <ThreeDealBox>
                                <div className="threeDeal_icon">
                                    <img src={require('../../static/images/thre_deal_Talent_ico.svg')} alt=""/>
                                </div>
                                <h3 className="threeDeal_title">Hello world</h3>
                                <p className="threeDeal_text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                                </p>
                            </ThreeDealBox>
                        </Col>
                        <Col sm={12} md={4} ref={item => { this.dealCard.current[1] = item }}>
                            <ThreeDealBox>
                                <div className="threeDeal_icon">
                                    <img src={require('../../static/images/three_deal_Advisory_ico.svg')} alt=""/>
                                </div>
                                <h3 className="threeDeal_title">Hello world</h3>
                                <p className="threeDeal_text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                                </p>
                            </ThreeDealBox>
                        </Col>
                        <Col sm={12} md={4} ref={item => { this.dealCard.current[2] = item }}>
                            <ThreeDealBox>
                                <div className="threeDeal_icon">
                                    <img src={require('../../static/images/three_deal_AI_insights.svg')} alt=""/>
                                </div>
                                <h3 className="threeDeal_title">Hello world</h3>
                                <p className="threeDeal_text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                                </p>
                            </ThreeDealBox>
                        </Col>
                    </Row>
                </Container>
            </WrapperThreeDeal>
        );
    }
}