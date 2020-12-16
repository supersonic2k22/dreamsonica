import React from "react";

import {
    WrapperFooterPrivacy,
    PrivacyBrandFooter,
    PrivacyPrivateFooter
} from './style'

import {
    Container,
    Row,
    Col
} from "react-grid-system";

const FooterPrivacy = () => {
    return (
        <WrapperFooterPrivacy>
            <Container>
                <Row justify={"between"}>
                    <Col md={12} lg={4}>
                        <PrivacyBrandFooter>
                            <p className="brand_footer_text" style={{margin: 'auto'}}>© 2020 Dream Sonica</p>
                        </PrivacyBrandFooter>
                    </Col>
                    <Col md={12} lg={4}>
                        <PrivacyPrivateFooter>
                            <a className="private_link" href="#" target="_blank" >Privacy Private</a>
                        </PrivacyPrivateFooter>
                    </Col>
                </Row>
            </Container>
        </WrapperFooterPrivacy>
    )
}

export default FooterPrivacy;