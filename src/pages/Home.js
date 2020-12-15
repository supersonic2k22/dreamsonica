import React, { Component } from 'react';
import { ScreenClassProvider } from 'react-grid-system';
import Header from '../components/header/Header';
import ThreeDeal from '../components/deals';
import { WorkTogetherContent } from '../components/work';
import { FullStaff } from '../components/clients';
import { Service } from '../components/service';
import ContactForm from '../components/form/ContactForm';
import { Footer } from '../components/footer';
import { Sugar } from 'react-preloaders';
import { Events, scroller } from 'react-scroll';
import Features from '../components/features/Features';

export default class Home extends Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', () => {
            return arguments;
        });
        Events.scrollEvent.register('end', () => {
            return arguments;
        });
    }
    scrollTo = id => {
        scroller.scrollTo(id, {
            duration: 1800,
            delay: 150,
            smooth: 'easeInSine',
        });
    };
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <ScreenClassProvider>
                <Sugar color={'orangered'} time={4000} />
                <Header toScroll={this.scrollTo} />
                <ThreeDeal />
                <Features />
                <WorkTogetherContent />
                <Service />
                <FullStaff />
                <ContactForm />
                <Footer />
            </ScreenClassProvider>
        );
    }
}
