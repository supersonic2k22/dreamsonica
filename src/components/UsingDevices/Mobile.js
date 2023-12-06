import React from "react";
import Header from "../Header_DS";
import ThreeDeal from "../ThreeDeall_DS";
import GlobalFuture from "../GlobalFuture_DS";
import Service from "../Service_DS";
import FullStaff from "../FullStaff_DS";
import Form from "../Form_DS";
import Video from "../Video";


const Mobile = ({toScroll}) => {

    return (
        <>
            <Header toScroll={toScroll} />
            <GlobalFuture/>
            <Service/>
            <Video />
            <FullStaff/>
            <Form/>
        </>
    )
}

export default Mobile;