import React from "react";
import {FooterLogo} from "../Logo_DS";
import {
    InstagramOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    TwitterOutlined,
} from '@ant-design/icons'
import {
    WrapperFooterContent,
    WrapperSocialLinks,
    WrapperLogoFooter
} from './style'

import {
    Container,
    Row,
    Col
} from "react-grid-system";


const FooterContent = () => {
    return (
        <WrapperFooterContent>
            <Container>
                <Row justify={"between"} >
                    <Col md={12} lg={4} >
                        <WrapperLogoFooter>
                        </WrapperLogoFooter>
                    </Col>
                    <Col md={12} lg={4} style={{alignSelf: "center"}}>
                        <WrapperSocialLinks>
                            <div className="social_links_item">
                                    <a href="https://www.instagram.com/" target="_blank" title="Instagram">
                                        <InstagramOutlined />
                                    </a>
                            </div>
                            <div className="social_links_item">
                                <a href="https://www.facebook.com/" target="_blank" title="Facebook">
                                    <FacebookOutlined />
                                </a>
                            </div>
                            <div className="social_links_item">
                                <a href="https://www.linkedin.com/" target="_blank" title="LinkedIn">
                                    <LinkedinOutlined />
                                </a>
                            </div>
                            <div className="social_links_item">
                                <a href="https://twitter.com/?lang=en" target="_blank" title="Twitter">
                                    <TwitterOutlined />
                                </a>
                            </div>
                        </WrapperSocialLinks>
                    </Col>
                </Row>
            </Container>
        </WrapperFooterContent>
    )
}

export default FooterContent;