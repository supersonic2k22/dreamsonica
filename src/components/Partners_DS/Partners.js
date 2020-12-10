import React from "react";
import ScrollButtonUp from 'react-scroll-up-button'
import {Container, Row, Col} from "react-grid-system";

import {
    WrapperPartners,
    PartnersTitle,
    PartnersText,
    PartnersBox,
} from './style'


const Partners = () => {

    return (
        <WrapperPartners>
            <Container>
                <Row>
                    <Col lg={7}>
                        <PartnersTitle>
                            Our Partners
                        </PartnersTitle>
                        <PartnersText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus cupiditate earum fugit harum nostrum quibusdam quo repellat suscipit tempora unde.
                            Accusamus cupiditate earum fugit harum nostrum quibusdam quo repellat suscipit tempora unde.
                        </PartnersText>
                    </Col>
                </Row>
                <Row justify={"around"}>
                    <Col sm={12} md={4}>
                        <PartnersBox>
                            <div className="partners_icon">
                                <img src={require('../../static/images/machine_point.svg')} alt=""/>
                            </div>
                            <h3 className="partners_title">Hello world</h3>
                            <p className="partners_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                            </p>
                        </PartnersBox>
                    </Col>
                    <Col sm={12} md={4}>
                        <PartnersBox>
                            <div className="partners_icon">
                                <img src={require('../../static/images/build_from_scratch_ico.svg')} alt=""/>
                            </div>
                            <h3 className="partners_title">Hello world</h3>
                            <p className="partners_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                            </p>
                        </PartnersBox>
                    </Col>
                    <Col sm={12} md={4}>
                        <PartnersBox>
                            <div className="partners_icon">
                                <img src={require('../../static/images/done_ico.svg')} alt=""/>
                            </div>
                            <h3 className="partners_title">Hello world</h3>
                            <p className="partners_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus facere inventore optio, quae rem.
                            </p>
                        </PartnersBox>
                    </Col>
                </Row>
                <ScrollButtonUp ShowAtPosition={1270}
                                AnimationDuration={1500}
                                style={{borderRadius: '1em', background: 'orange', zIndex:"1"}}
                />
            </Container>
        </WrapperPartners>
    );
}

export default Partners;