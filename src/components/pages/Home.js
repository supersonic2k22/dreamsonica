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
import {
    Events,
    scroller,
} from 'react-scroll'

export default class Home extends Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', () => {
            return arguments;
        });
        Events.scrollEvent.register('end', () => {
            return arguments;
        })
    }

    scrollTo = (id) => {
        scroller.scrollTo(id, {
            duration: 1800,
            delay: 150,
            smooth: 'easeInSine'
        })
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <ScreenClassProvider>
                <Sugar  color={'orangered'} time={4000}/>
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

