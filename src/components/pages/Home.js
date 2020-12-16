import React, { Component } from 'react';
import { ScreenClassProvider } from "react-grid-system";
import Header from "../Header_DS/Header";
import ThreeDeal from "../ThreeDeall_DS";
import WorkTogetherContent from "../WorkTogether_DS";
import FullStaff from "../FullStaff_DS";
import Service from "../Service_DS";
import GlobalFuture from "../GlobalFuture_DS";
import Form from "../Form_DS";
import Footer from "../Footer_DS";
import { Sugar } from 'react-preloaders';
import  gifLoader  from '../../static/video/right-left.gif.gif';
import {
    Events,
    scroller,
} from 'react-scroll'

export default class Home extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', () => {
            return arguments;
        });
        Events.scrollEvent.register('end', () => {
            return arguments;
        })

        this.fakeRequest().then(() => {
            return this.setState({
                loading: false
            })
        })
    }

    scrollTo = (id) => {
        scroller.scrollTo(id, {
            duration: 1800,
            delay: 150,
            smooth: 'easeInSine'
        })
    }

    fakeRequest = () => {
        return new Promise(resolve => setTimeout(()=>resolve(), 2000))
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
        this.fakeRequest().then(null)
    }

    render() {

        if(this.state.loading) {
            return (
                <div style={{position:"fixed", top: '0', bottom: '0', left: '0', right: '0', width: '100%', height:'100%'}}>
                    <img src={gifLoader} alt='Loader' style={{width: '100%', height: 'auto'}}/>
                </div>
            )
        }

        return (
            <ScreenClassProvider>
                    <Header toScroll={this.scrollTo} />
                    <ThreeDeal/>
                    <GlobalFuture/>
                    <WorkTogetherContent/>
                    <Service/>
                    <FullStaff/>
                    <Form/>
                    <Footer/>
            </ScreenClassProvider>
        );
    }
}

