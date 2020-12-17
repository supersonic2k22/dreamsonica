import React, {createRef, Component} from "react";
import {Container, Row, Col} from "react-grid-system";
import {
    WrapperThreeDeal,
    ThreeDealTitle,
    ThreeDealText, HeroWrap, HeroBody
} from './style';
import ReactParticles from "react-particles-js";

const params = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: false,
                value_area: 600
            }
        },
        color: {
            value: '#000'
        },
        opacity: {
            value: 0.8,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: '#000',
            opacity: 0.7,
            width: 1
        }
    },
    retina_detect: true
};



const Particles = ({ children }) => {
    return (
        <div style={{ position: 'relative' }}>
            <ReactParticles
                params={params}
                style={{
                    position: 'absolute',
                    zIndex: -1,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0
                }}
                height={'100%'}
            />
            {children && <div style={{ position: 'relative' }}>{children}</div>}
        </div>
    );
}

const Hero = ({ children }) => {
    return (
        <HeroWrap className="hero">
            <HeroBody className="hero-body">{children}</HeroBody>
        </HeroWrap>
    );
}

export default class ThreeDeal extends Component {
    dealCard = createRef()

    render() {
        return (
            <WrapperThreeDeal>
                <Particles>
                    <Hero>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <ThreeDealTitle>WHO WE ARE</ThreeDealTitle>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <ThreeDealText>
                                        YOUR FULLY ASSEMBLED UA TEAM
                                    </ThreeDealText>
                                </Col>
                                <Col md={6}>
                                    <ThreeDealText style={{textAlign: 'left', lineHeight: '2.2em'}}>
                                        We provide a fully-managed user acquisition service for game\app developers.
                                        Since our founding, we have focused on two of the most important
                                        pieces of the user acquisition puzzle - ROI and Value.
                                    </ThreeDealText>
                                </Col>
                            </Row>
                        </Container>
                    </Hero>
                </Particles>
            </WrapperThreeDeal>
        );
    }
}