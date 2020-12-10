import React from "react";

import {
    Col,
    Row
} from 'react-grid-system'
import {
 WrapperPromo,
 PromoTitle,
 PromoText,
 PromoButton
} from './style';


const Promo = ({toScroll}) => {

    return (
        <WrapperPromo>
            <Row>
                <Col md={12} xl={10}>
                    <PromoTitle>
                        Promotion's  Dream Sonica
                    </PromoTitle>
                </Col>
            </Row>
            <Row>
                <Col md={12} xl={10}>
                    <PromoText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                        at aut dicta ex exercitationem ipsam labore laborum minima modi
                        odit optio perferendis quos vitae! Culpa?
                    </PromoText>
                    <PromoButton  onClick={()=> toScroll('same')}>
                        Let's Talk
                    </PromoButton>
                </Col>
            </Row>
        </WrapperPromo>
    );
}

export default Promo;