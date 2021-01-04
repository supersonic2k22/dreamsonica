import React from "react";
import {FullPage, Slide} from "react-full-page";
import Header from "../Header_DS";
import ThreeDeal from "../ThreeDeall_DS";
import GlobalFuture from "../GlobalFuture_DS";
import Service from "../Service_DS";
import FullStaff from "../FullStaff_DS";
import Form from "../Form_DS";

import styled from 'styled-components'

const WrapperDeskTop = styled.div `
    
    @media(min-height: 768px) {
      .custom_style {
        height: auto !important;
      }
    }
`;
const DeskTop = ({toScroll}) => {

    return (
        <WrapperDeskTop>
            <FullPage>
                <Slide>
                    <Header toScroll={toScroll} />
                </Slide>
                <Slide>
                    <GlobalFuture/>
                </Slide>
                <Slide>
                    <Service/>
                </Slide>
                <Slide>
                    <FullStaff/>
                </Slide>
                <Slide className={'custom_style'}>
                    <Form/>
                </Slide>
            </FullPage>
        </WrapperDeskTop>

    )
}

export default DeskTop;