import React, {Component, useRef, useState} from "react";
import {animated, useSpring} from "react-spring";
import {Col, Row} from "react-grid-system";
import {GlobalFutureItem} from "./style";


export default class DesktopGlobalFuture extends Component {

    render() {

        return(
            <Row justify={"center"}>
                <Col sm={12} md={3}>
                    <Card>
                        <GlobalFutureItem>
                            <div className="future_item_header">
                                <img src={require('../../static/images/roi.png')} alt=""/>
                            </div>
                            <div className="future_item_footer">
                                <div>
                                    <h3 className="future_item_footer--title">DIGITAL MARKETING LONG EXPERIENCE SINCE 2012</h3>
                                </div>
                            </div>
                        </GlobalFutureItem>
                    </Card>
                </Col>
                <Col sm={12} md={3}>
                    <Card>
                        <GlobalFutureItem>
                            <div className="future_item_header">
                                <img src={require('../../static/images/jigsaw.png')} alt=""/>
                            </div>
                            <div className="future_item_footer">
                                <div>
                                    <h3 className="future_item_footer--title">CASUAL GAMES STRONG FOCUS</h3>
                                </div>
                            </div>
                        </GlobalFutureItem>
                    </Card>
                </Col>
                <Col sm={12} md={3}>
                    <Card>
                        <GlobalFutureItem>
                            <div className="future_item_header">
                                <img src={require('../../static/images/sway.png')} alt=""/>
                            </div>
                            <div className="future_item_footer">
                                <div>
                                    <h3 className="future_item_footer--title">LAZER TARGETING</h3>
                                </div>
                            </div>
                        </GlobalFutureItem>
                    </Card>
                </Col>
                <Col sm={12} md={3}>
                    <Card>
                        <GlobalFutureItem>
                            <div className="future_item_header">
                                <img src={require('../../static/images/return-of-investment.png')} alt=""/>
                            </div>
                            <div className="future_item_footer">
                                <div>
                                    <h3 className="future_item_footer--title">ROI ORIENTED USER ACQUISITION</h3>
                                </div>
                            </div>
                        </GlobalFutureItem>
                    </Card>
                </Col>
            </Row>
        )
    }


}

const Card = ({ children }) => {
    const ref = useRef();

    const [isHovered, setHovered] = useState(false);
    const [animatedProps, setAnimatedProps] = useSpring(() => {
        return {
            xys: [0, 0, 1],
            // Setup physics
            config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
        };
    });

    return (
        <animated.div
            ref={ref}
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseMove={({ clientX, clientY }) => {
                // Get mouse x position within card
                const x =
                    clientX -
                    (ref.current.offsetLeft -
                        (window.scrollX || window.pageXOffset || document.body.scrollLeft));

                // Get mouse y position within card
                const y =
                    clientY -
                    (ref.current.offsetTop -
                        (window.scrollY || window.pageYOffset || document.body.scrollTop));

                // Set animated values based on mouse position and card dimensions
                const dampen = 230; // Lower the number the less rotation
                const xys = [
                    -(y - ref.current.clientHeight / 2) / dampen, // rotateX
                    (x - ref.current.clientWidth / 2) / dampen, // rotateY
                    1.03 // Scale
                ];

                // Update values to animate to
                setAnimatedProps({ xys });
            }}
            onMouseLeave={() => {
                setHovered(false);
                // Set xys back to original
                setAnimatedProps({ xys: [0, 0, 1] });
            }}
            style={{
                // If hovered we want it to overlap other cards when it scales up
                zIndex: isHovered ? 2 : 1,
                // Interpolate function to handle css changes
                transform: animatedProps.xys.interpolate(
                    (x, y, s) =>
                        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
                )
            }}
        >
            {children}
        </animated.div>
    );
}