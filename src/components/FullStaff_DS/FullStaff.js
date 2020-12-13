import React, {Component} from "react";
import LeadShipCarousel from "./LeadShip";
import Talent from "./Talent";
import {Element} from 'react-scroll'

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
               <Element id="power_team"/>
               <Container>
                   <Row>
                       <Col md={12}>
                           <FullStaffContent>
                               <h2 className="full_staff_title">Our Clients</h2>
                           </FullStaffContent>
                       </Col>
                       <Col lg={12}>
                            <Talent/>
                       </Col>
                   </Row>
               </Container>
           </WrapperFullStaff>
        )
    }
}