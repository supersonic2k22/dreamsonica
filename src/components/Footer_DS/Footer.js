import React from "react";
import FooterContent from "./FoterContent";
import FooterPrivacy from "./FooterPrivacy";

import {
    WrapperFooter
} from './style'

const Footer = () => {
    return(
        <WrapperFooter >
            <FooterContent/>
            <FooterPrivacy/>
        </WrapperFooter>
    )
}

export default Footer;