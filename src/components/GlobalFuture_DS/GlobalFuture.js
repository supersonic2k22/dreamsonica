import React from "react";

import {
    Container,
    Row,
    Col
} from "react-grid-system";

import {
    WrapperGlobalFuture,
    GlobalFutureTitle,
    GlobalFutureItem
} from './style'

const GlobalFuture = () => {
    return (
        <WrapperGlobalFuture>
            <Container>
                <Row >
                    <Col lg={12}>
                        <GlobalFutureTitle>
                            loremGlobalFutureTitle
                        </GlobalFutureTitle>
                    </Col>
                </Row>
                <Row justify={"center"}>
                    <Col sm={12} md={3}>
                        <GlobalFutureItem>
                            <div  className="future_item_header_start">
                                <img src={require('../../static/images/Casino_gambling_slots_games_fortune_seven_lucky_number_number_jackpot_777_win-512.png')} alt=""/>
                            </div>
                            <div className="future_item_footer_start">
                                <h3 className="future_item_header_start--title">Lorem ipsum dolor sit.</h3>
                            </div>
                        </GlobalFutureItem>
                    </Col>
                    <Col sm={12} md={3}>
                        <GlobalFutureItem>
                            <div className="future_item_header">
                                <img src={require('../../static/images/build_from_scratch_ico.svg')} alt=""/>
                            </div>
                            <div className="future_item_footer">
                                <div>
                                    <p className="future_item_footer--text">77</p>
                                </div>
                                <div>
                                    <h3 className="future_item_footer--title">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.</h3>
                                </div>
                            </div>
                        </GlobalFutureItem>
                    </Col>
                    <Col sm={12} md={3}>
                        <GlobalFutureItem>
                            <div className="future_item_header">
                                <img src={require('../../static/images/done_ico.svg')} alt=""/>
                            </div>
                            <div className="future_item_footer">
                                <div>
                                    <p className="future_item_footer--text">77</p>
                                </div>
                                <div>
                                    <h3 className="future_item_footer--title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                                </div>
                            </div>
                        </GlobalFutureItem>
                    </Col>
                    <Col sm={12} md={3}>
                        <GlobalFutureItem>
                            <div className="future_item_header">
                                <img src={require('../../static/images/machine_point.svg')} alt=""/>
                            </div>
                            <div className="future_item_footer">
                                <div>
                                    <p className="future_item_footer--text">99%</p>
                                </div>
                                <div>
                                    <h3 className="future_item_footer--title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                                </div>
                            </div>
                        </GlobalFutureItem>
                    </Col>
                </Row>
            </Container>
        </WrapperGlobalFuture>
    )
}

export default GlobalFuture;