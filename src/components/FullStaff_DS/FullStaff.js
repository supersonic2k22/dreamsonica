import React, {Component} from "react";
import Talent from "./Talent";
import {Element} from 'react-scroll'
import Fade from 'react-reveal/Fade';

import {
    Container,
    Row,
    Col
} from "react-grid-system";

import {
    WrapperFullStaff,
    FullStaffContent,
} from './style';

export default class FullStaff extends Component{
    render() {
        return(
           <WrapperFullStaff>
               <Element id="power_team" className={"power-team"}/>
                   <Container>
                       <Fade bottom>
                       <Row>
                           <Col md={12}>
                               <FullStaffContent>
                                   <h2 className="full_staff_title">Our Clients</h2>
                               </FullStaffContent>
                           </Col>
                               <Col lg={12}>
                                   <Talent className={'animate__fadeIn animate__fadeIn animate__delay-2s'}/>
                               </Col>
                       </Row>
                       </Fade>
                   </Container>
           </WrapperFullStaff>
        )
    }
}