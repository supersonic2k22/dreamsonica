import React from "react";
import FooterContent from "./FoterContent";
import FooterPrivacy from "./FooterPrivacy";

import {
    WrapperFooter
} from './style'
import {
    isMobile, isTablet
} from "react-device-detect";

const Footer = () => {
    return(
        <WrapperFooter isDesktop={!isMobile && !isTablet}>
            <FooterContent/>
            <FooterPrivacy/>
        </WrapperFooter>
    )
}

export default Footer;