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


const Promo = ({toScroll}) => {
    return (
        <WrapperPromo className={'promo'}>
            <Row>
                <Col md={12} xl={10}>
                    <PromoTitle>
                        Promotion's  Dream Sonica
                    </PromoTitle>
                </Col>
            </Row>
            <Row>
                <Col  xl={12}>
                    <PromoText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                        at aut dicta ex exercitationem ipsam labore laborum minima modi
                        odit optio perferendis quos vitae! Culpa?
                    </PromoText>
                    <PromoButton  >
                        <button className='promo_btn' onClick={()=> toScroll('same')}>Let's Talk</button>
                    </PromoButton>

                </Col>
            </Row>
        </WrapperPromo>
    );
}

export default Promo;