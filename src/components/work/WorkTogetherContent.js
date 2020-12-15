import React, { Component } from 'react';
import WorkTogetherCarousel from './WorkTogetherCarousel';
import InfoItemElement from './infoItemEelement';
import { Element } from 'react-scroll';
import {
    Container,
    Row,
    Col,
    Visible,
    ScreenClassRender,
} from 'react-grid-system';
import Fade from 'react-reveal/Fade';
import { Wrapper, HelperElement } from './style';

export default class ciWorkTogetherContent extends Component {
    render() {
        return (
            <Wrapper>
                <Element id="workflow" />
                <Container>
                    <Fade bottom>
                        <Row>
                            <Col lg={12}>
                                <h2 className="content_title">
                                    Your special privilege by working
                                    <br />
                                    with Dream Sonica
                                </h2>
                            </Col>
                        </Row>
                    </Fade>
                    <ScreenClassRender
                        render={screenClass => (
                            <Row
                                style={{
                                    flexDirection: [
                                        'xs',
                                        'sm',
                                        'md',
                                        'lg',
                                    ].includes(screenClass)
                                        ? 'column-reverse'
                                        : '',
                                }}
                            >
                                <Col xl={12} style={{ alignSelf: 'center' }}>
                                    <WorkTogetherCarousel />
                                    <Visible xs sm md lg>
                                        <HelperElement>
                                            <InfoItemElement />
                                        </HelperElement>
                                    </Visible>
                                </Col>
                            </Row>
                        )}
                    />
                </Container>
            </Wrapper>
        );
    }
}
