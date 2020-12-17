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


export default class Home extends Component {

    state = {
        loading: true,
        currentPage: 0
    }


    componentDidMount() {
        this.fakeRequest().then(() => {
            return this.setState({
                loading: false
            })
        })

        this.handlePageChange();
    }


    fakeRequest = () => {
        return new Promise(resolve => setTimeout(()=>resolve(), 2000))
    }
    handlePageChange = number => {


        this.setState(()=> {
            return {
                currentPage: number
            }
        });
        console.log(number)
    };

    componentWillUnmount() {
        this.fakeRequest().then(null)
        this.handlePageChange();
    }

    render() {

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
                <ReactPageScroller
                    renderAllPagesOnFirstRender
                    customPageNumber={this.state.currentPage}
                >
                    <Header toScroll={this.handlePageChange} />
                    <ThreeDeal/>
                    <GlobalFuture/>
                    <WorkTogetherContent toScroll={this.handlePageChange}/>
                    <Service/>
                    <FullStaff/>
                    <Form/>
                </ReactPageScroller>
            </ScreenClassProvider>
        );
    }
}

