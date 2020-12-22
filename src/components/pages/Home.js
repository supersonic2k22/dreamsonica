import React, { Component } from 'react';
import { ScreenClassProvider} from "react-grid-system";
import  gifLoader  from '../../static/video/Dream Sonica.gif';
import Fade from "react-reveal/Fade";
import {
    isMobile, isTablet
} from "react-device-detect";
import {
    Events,
    scroller,
} from 'react-scroll'
import {DeskTop, Mobile} from "../UsingDevices";


export default class Home extends Component {

    state = {
        loading: true,
    }

    componentDidMount() {
        this.fakeRequest().then(() => {
            return this.setState({
                loading: false
            })
        })

        Events.scrollEvent.register('begin', () => {
            return arguments;
        });
        Events.scrollEvent.register('end', () => {
            return arguments;
        })
    }


    fakeRequest = () => {
        return new Promise(resolve => setTimeout(()=>resolve(), 3500))
    }

    scrollTo = (id) => {
        scroller.scrollTo(id, {
            duration: 1800,
            delay: 150,
            smooth: 'easeInSine'
        })
    }

    componentWillUnmount() {
        this.fakeRequest().then(null);
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
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
                        <img src={gifLoader} alt='Loader' style={{width: '100%', height: 'auto', margin: 'auto'}}/>
                    </div>
            )
        }

        return (
            <ScreenClassProvider>
                <Fade>
                    { !isMobile && !isTablet ? (
                        <DeskTop toScroll={this.scrollTo} />
                    ) : (
                        <Mobile toScroll={this.scrollTo}/>
                    )}
                </Fade>
            </ScreenClassProvider>
        );
    }
}

