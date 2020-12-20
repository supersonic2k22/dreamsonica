import React from "react";
import {FullPage, Slide} from "react-full-page";
import Header from "../Header_DS";
import ThreeDeal from "../ThreeDeall_DS";
import GlobalFuture from "../GlobalFuture_DS";
import WorkTogetherContent from "../WorkTogether_DS";
import Service from "../Service_DS";
import FullStaff from "../FullStaff_DS";
import Form from "../Form_DS";


const DeskTop = ({toScroll}) => {

    return (
        <FullPage>
            <Slide>
                <Header toScroll={toScroll} />
            </Slide>
            <Slide>
                <ThreeDeal/>
            </Slide>
            <Slide>
                <GlobalFuture/>
            </Slide>
            <Slide>
                <WorkTogetherContent toScroll={toScroll}/>
            </Slide>
            <Slide>
                <Service/>
            </Slide>
            <Slide>
                <FullStaff/>
            </Slide>
            <Slide>
                <Form/>
            </Slide>
        </FullPage>
    )
}

export default DeskTop;