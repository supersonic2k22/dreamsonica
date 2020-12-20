import React, {createRef, Component} from "react";
import {Container, Row, Col} from "react-grid-system";
import {
    WrapperThreeDeal,
    ThreeDealTitle,
    ThreeDealText, HeroWrap, HeroBody
} from './style';
import ReactParticles from "react-particles-js";
import Fade from "react-reveal/Fade";

const params = {
    particles: {
        number: {
            value: 50
        },
        size: {
            value: 3
        },
        color: {
            value: '#000'
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: '#000',
            opacity: 0.7,
            width: 1
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            }
        }
    }
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
                            <Fade bottom>
                                <Row>
                                    <Col lg={12}>
                                        <ThreeDealTitle>WHO WE ARE</ThreeDealTitle>
                                    </Col>
                                </Row>
                                <Row justify={"center"}>
                                    <Col md={12}>
                                        <ThreeDealText>
                                            YOUR FULLY ASSEMBLED UA TEAM
                                        </ThreeDealText>
                                    </Col>
                                    <Col  md={12} lg={10} >
                                        <ThreeDealText style={{textAlign: 'center'}}>
                                            We provide a fully-managed user acquisition service for game\app developers.
                                            Since our founding, we have focused on two of the most important
                                            pieces of the user acquisition puzzle - ROI and Value.
                                        </ThreeDealText>
                                    </Col>
                                </Row>
                            </Fade>
                        </Container>
                    </Hero>
                </Particles>
            </WrapperThreeDeal>
        );
    }
}