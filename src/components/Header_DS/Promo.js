import React from "react";
import {pages} from '../../configs/app.config'
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
import {ThreeDealText} from "../ThreeDeall_DS/style";


const Promo = ({toScroll}) => {
    return (
        <WrapperPromo className={'promo'}>
            <Row>
                <Col md={12} xl={10}>
                    <PromoTitle>
                        Performance Advertising Service
                    </PromoTitle>
                </Col>
            </Row>
            <Row>
                <Col  xl={12}>
                    <PromoText>
                        We provide a fully-managed user acquisition service for game\app developers.
                        Since our founding, we have focused on two of the most important
                        pieces of the user acquisition puzzle - ROI and Value.
                    </PromoText>
                    <PromoButton  >
                        <button className='promo_btn' onClick={()=> toScroll('contact_us')}>Let's Talk</button>
                    </PromoButton>

                </Col>
            </Row>
        </WrapperPromo>
    );
}

export default Promo;