import React, { Component } from 'react';
import {Col, Hidden, Row, ScreenClassProvider, Visible} from "react-grid-system";
import Header from "../Header_DS/Header";
import ThreeDeal from "../ThreeDeall_DS";
import WorkTogetherContent from "../WorkTogether_DS";
import FullStaff from "../FullStaff_DS";
import Service from "../Service_DS";
import GlobalFuture from "../GlobalFuture_DS";
import Form from "../Form_DS";
import  gifLoader  from '../../static/video/right-left.gif.gif';
import ReactPageScroller from "react-page-scroller";
import {TransitionNavbar, WrapperNavbar} from "../Header_DS/style";
import HeaderLogo from "../Logo_DS/HeaderLogo";
import Navbar from "../Header_DS/Navbar";
import BurgerMenu from "../Header_DS/BurgerMenu";


export default class Home extends Component {

    state = {
        loading: true,
        currentPage: 0,
        show: true,
        goTo: 0,
        pointStyle: false
    }

    componentDidMount() {
        this.fakeRequest().then(() => {
            return this.setState({
                loading: false
            })
        })
    }


    fakeRequest = () => {
        return new Promise(resolve => setTimeout(()=>resolve(), 2000))
    }

    handlePageChange = number => {
        const {currentPage: prevPage} = this.state;
        const show = prevPage > number || prevPage === 0;

        const fillNavbar = (number !== 0 && number > 0);
        console.log('number ' + number)
        console.log('prev ' + prevPage)
        console.log('show ' + show)
        console.log( 'fillBar ' + fillNavbar)
        this.setState({
            currentPage: number,
            show,
            pointStyle: fillNavbar
        });
    };

    handleGoToChange = number => {
        this.setState(()=> {
            return {
                goTo: number
            }
        });
    };

    componentWillUnmount() {
        this.fakeRequest().then(null)
    }

    render() {
        const {show, pointStyle} = this.state;

        const stylePreloader = {
            position:"fixed",
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            width: '100%',
            height:'100%',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'
        }

        if(this.state.loading) {
            return (
                <div style={stylePreloader}>
                    <img src={gifLoader} alt='Loader' style={{width: '100%', height: 'auto'}}/>
                </div>
            )
        }

        return (
            <ScreenClassProvider>
                <TransitionNavbar pointStyle={pointStyle}>
                    <WrapperNavbar className={show ? 'active' : 'hidden'}>
                        <div className="container_navbar">
                            <Row justify={"between"}>
                                <Col lg={4} >
                                    <HeaderLogo/>
                                </Col>
                                <Col lg={8} style={{alignSelf: "center"}}>
                                    <Hidden xs sm md>
                                        <Navbar toScroll={this.handleGoToChange}/>
                                    </Hidden>
                                    <Visible xs sm md >
                                        <BurgerMenu toScroll={this.handleGoToChange}/>
                                    </Visible>
                                </Col>
                            </Row>
                        </div>
                    </WrapperNavbar>
                </TransitionNavbar>
                <ReactPageScroller
                    renderAllPagesOnFirstRender
                    customPageNumber={this.state.goTo}
                    pageOnChange={this.handlePageChange}
                >
                    <Header toScroll={this.handleGoToChange} />
                    <ThreeDeal/>
                    <GlobalFuture/>
                    <WorkTogetherContent toScroll={this.handleGoToChange}/>
                    <Service/>
                    <FullStaff/>
                    <Form/>
                </ReactPageScroller>
            </ScreenClassProvider>
        );
    }
}

