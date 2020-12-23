import React, {Component} from "react";
import DesktopGlobalFuture from "./DesktopGlobalFuture";
import MobileGlobalFuture from "./MobileGlobalFuture";
import ScrollButtonUp from 'react-scroll-up-button'
import Fade from "react-reveal/Fade";
import {Element} from 'react-scroll'
import {
    Container,
    Row,
    Col,
    Visible,
    Hidden
} from "react-grid-system";

import {
    WrapperGlobalFuture,
    GlobalFutureTitle,
    GlobalFutureText,
} from './style'


export default class GlobalFuture extends Component{
    render() {
        return (
            <WrapperGlobalFuture>
                <Element id='why_choose_us'/>
                <Container>
                    <Fade bottom>
                        <Row >
                            <Col lg={12}>
                                <GlobalFutureTitle>
                                    WHY CHOOSE US
                                </GlobalFutureTitle>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <GlobalFutureText style={{alignText: 'center'}}>
                                    DreamSonica is a diverse team of talented, creative and thoughtful individuals, working together more 6 years. Whose expertise and experience in Game Marketing is trusted by the large and small game developers, already famous and startups.
                                </GlobalFutureText>
                            </Col>
                        </Row>
                    </Fade>
                    <Hidden xs sm md>
                       <DesktopGlobalFuture/>
                    </Hidden>
                    <Visible xs sm md>
                       <MobileGlobalFuture/>
                    </Visible>
                </Container>
                <ScrollButtonUp ShowAtPosition={1270}
                                AnimationDuration={1500}
                                style={{borderRadius: '1em', background: 'orange', zIndex:"1"}}
                />
            </WrapperGlobalFuture>
        )
    }
}

