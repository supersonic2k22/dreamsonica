import React, { Component } from 'react';
import HeaderLogo from '../logo/HeaderLogo';
import Promo from './Promo';
import NavBar from './Navbar';
import ReactPlayer from 'react-player/lazy';
import BurgerMenu from './BurgerMenu';

import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

import { WrapperPlayer, WrapperNavbar, TransitionNavbar } from './style';

class Header extends Component {
    state = {
        playing: false,
        show: true,
        scrollPos: 0,
        pointStyle: false,
    };

    componentDidMount() {
        this.updatePlayer();
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.fillNavbar);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.fillNavbar);
    }

    updatePlayer = () => {
        this.setState({
            playing: true,
        });
    };

    handleScroll = () => {
        const { scrollPos } = this.state;

        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > scrollPos,
        });
    };

    fillNavbar = () => {
        const initialPoint = 150;
        const currentPoint = window.scrollY;

        if (currentPoint > initialPoint) {
            this.setState({
                pointStyle: true,
            });
        }
        if (currentPoint < initialPoint) {
            this.setState({
                pointStyle: false,
            });
        }
    };
    render() {
        const { playing, show, pointStyle } = this.state;
        const { toScroll } = this.props;

        return (
            <WrapperPlayer>
                <ReactPlayer
                    className="react-player"
                    url={[
                        {
                            src:
                                'https://www.newfireglobal.com/wp-content/uploads/2020/08/New-Fire-Web_c.mp4',
                            type: 'video/mp4',
                        },
                    ]}
                    playing={playing}
                    loop={true}
                    playsinline={true}
                    valume="true"
                    muted={true}
                    width="100%"
                    height="100%"
                />
                <Container>
                    <TransitionNavbar pointStyle={pointStyle}>
                        <WrapperNavbar className={show ? 'active' : 'hidden'}>
                            <div className="container_navbar">
                                <Row justify={'between'}>
                                    <Col lg={4}>
                                        <HeaderLogo />
                                    </Col>
                                    <Col lg={8} style={{ alignSelf: 'center' }}>
                                        <Hidden xs sm md>
                                            <NavBar toScroll={toScroll} />
                                        </Hidden>
                                        <Visible xs sm md>
                                            <BurgerMenu toScroll={toScroll} />
                                        </Visible>
                                    </Col>
                                </Row>
                            </div>
                        </WrapperNavbar>
                    </TransitionNavbar>
                    <Row>
                        <Promo toScroll={toScroll} />
                    </Row>
                </Container>
            </WrapperPlayer>
        );
    }
}

export default Header;
