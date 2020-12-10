import React, {Component} from "react";
import Slider from "react-slick";
import {
    Container,
    Row,
    Col
} from "react-grid-system";
import {
    WrapperCustomerTestimonials,
    WrapperCustomerCarousel,
} from './style'


export default class CustomerTestimonials extends Component{

    render() {

        const settings = {
            adaptiveHeight: true,
            dots: true,
            arrows: false,
            speed: 555,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return(
            <WrapperCustomerTestimonials>
                <Container>
                    <WrapperCustomerCarousel>
                        <h2 className="customer_carousel--title">Customer Testimonials</h2>
                        <Slider {...settings}>
                            <div>
                                <Row>
                                    <Col md={12} lg={5} style={{marginRight: '-15px'}}>
                                        <div className="customer_carousel_label">
                                            <img src={require('../../static/images/customer/4ce00685b2284f8f0a6df328502571ab.jpg')} alt=""/>
                                        </div>
                                    </Col>
                                    <Col md={12} lg={7} style={{marginLeft: '-15px'}}>
                                        <div className="customer_carousel_testimonial">
                                            <div className="carousel_testimonial_info_commit">
                                                <h3 className="testimonial_info_commit--title">Buoy Health</h3>
                                                <p className="testimonial_info_commit--text">
                                                    “Our partnership with Newfire is so much more than simply filling our talent needs.
                                                    Newfire provides valuable expertise and are the advisors that we need to accelerate
                                                    solving some of healthcare’s toughest challenges. I trust our team at Newfire and am more
                                                    confident in our ability to produce high-quality output with them as our partner.”
                                                </p>
                                            </div>
                                            <div className="carousel_testimonial_author">
                                                <p className="testimonial_author_fio"><b>Greg Joondeph-Breidbart</b></p>
                                                <p>Senior VP of Engineering</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} lg={5} style={{marginRight: '-15px'}}>
                                        <div className="customer_carousel_label">
                                            <img src={require('../../static/images/customer/4ce00685b2284f8f0a6df328502571ab.jpg')} alt=""/>
                                        </div>
                                    </Col>
                                    <Col md={12} lg={7} style={{marginLeft: '-15px'}}>
                                        <div className="customer_carousel_testimonial">
                                            <div className="carousel_testimonial_info_commit">
                                                <h3 className="testimonial_info_commit--title">Digi International (NASDAQ:DGII)</h3>
                                                <p className="testimonial_info_commit--text">
                                                    “Our partnership with Newfire is so much more than simply filling our talent needs.
                                                    Newfire provides valuable expertise and are the advisors that we need to accelerate
                                                    solving some of healthcare’s toughest challenges. I trust our team at Newfire and am more
                                                    confident in our ability to produce high-quality output with them as our partner.”
                                                </p>
                                            </div>
                                            <div className="carousel_testimonial_author">
                                                <p className="testimonial_author_fio"><b>Kevin Riley</b></p>
                                                <p>President of IoT Solutions</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} lg={5} style={{marginRight: '-15px'}}>
                                        <div className="customer_carousel_label">
                                            <img src={require('../../static/images/customer/4ce00685b2284f8f0a6df328502571ab.jpg')} alt=""/>
                                        </div>
                                    </Col>
                                    <Col md={12} lg={7} style={{marginLeft: '-15px'}}>
                                        <div className="customer_carousel_testimonial">
                                            <div className="carousel_testimonial_info_commit">
                                                <h3 className="testimonial_info_commit--title">UptimeHealth</h3>
                                                <p className="testimonial_info_commit--text">
                                                    “Our partnership with Newfire is so much more than simply filling our talent needs.
                                                    Newfire provides valuable expertise and are the advisors that we need to accelerate
                                                    solving some of healthcare’s toughest challenges. I trust our team at Newfire and am more
                                                    confident in our ability to produce high-quality output with them as our partner.”
                                                </p>
                                            </div>
                                            <div className="carousel_testimonial_author">
                                                <p className="testimonial_author_fio"><b>Bill Olsen</b></p>
                                                <p>Chief Technology Officer</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} lg={5} style={{marginRight: '-15px'}}>
                                        <div className="customer_carousel_label">
                                            <img src={require('../../static/images/customer/4ce00685b2284f8f0a6df328502571ab.jpg')} alt=""/>
                                        </div>
                                    </Col>
                                    <Col md={12} lg={7} style={{marginLeft: '-15px'}}>
                                        <div className="customer_carousel_testimonial">
                                            <div className="carousel_testimonial_info_commit">
                                                <h3 className="testimonial_info_commit--title">PrismHR</h3>
                                                <p className="testimonial_info_commit--text">
                                                    “Our partnership with Newfire is so much more than simply filling our talent needs.
                                                    Newfire provides valuable expertise and are the advisors that we need to accelerate
                                                    solving some of healthcare’s toughest challenges. I trust our team at Newfire and am more
                                                    confident in our ability to produce high-quality output with them as our partner.”
                                                </p>
                                            </div>
                                            <div className="carousel_testimonial_author">
                                                <p className="testimonial_author_fio"><b>Gary Noke</b></p>
                                                <p>Chief Executive Officer</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} lg={5} style={{marginRight: '-15px'}}>
                                        <div className="customer_carousel_label">
                                            <img src={require('../../static/images/customer/4ce00685b2284f8f0a6df328502571ab.jpg')} alt=""/>
                                        </div>
                                    </Col>
                                    <Col md={12} lg={7} style={{marginLeft: '-15px'}}>
                                        <div className="customer_carousel_testimonial">
                                            <div className="carousel_testimonial_info_commit">
                                                <h3 className="testimonial_info_commit--title">Holmusk</h3>
                                                <p className="testimonial_info_commit--text">
                                                    “Our partnership with Newfire is so much more than simply filling our talent needs.
                                                    Newfire provides valuable expertise and are the advisors that we need to accelerate
                                                    solving some of healthcare’s toughest challenges. I trust our team at Newfire and am more
                                                    confident in our ability to produce high-quality output with them as our partner.”
                                                </p>
                                            </div>
                                            <div className="carousel_testimonial_author">
                                                <p className="testimonial_author_fio"><b>Paul Feldhausen</b></p>
                                                <p>Director of Strategic Partnerships</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} lg={5} style={{marginRight: '-15px'}}>
                                        <div className="customer_carousel_label">
                                            <img src={require('../../static/images/customer/4ce00685b2284f8f0a6df328502571ab.jpg')} alt=""/>
                                        </div>
                                    </Col>
                                    <Col md={12} lg={7} style={{marginLeft: '-15px'}}>
                                        <div className="customer_carousel_testimonial">
                                            <div className="carousel_testimonial_info_commit">
                                                <h3 className="testimonial_info_commit--title">AceUp</h3>
                                                <p className="testimonial_info_commit--text">
                                                    “Our partnership with Newfire is so much more than simply filling our talent needs.
                                                    Newfire provides valuable expertise and are the advisors that we need to accelerate
                                                    solving some of healthcare’s toughest challenges. I trust our team at Newfire and am more
                                                    confident in our ability to produce high-quality output with them as our partner.”
                                                </p>
                                            </div>
                                            <div className="carousel_testimonial_author">
                                                <p className="testimonial_author_fio"><b>Rohit Begani</b></p>
                                                <p>Chief Technology Officer</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} lg={5} style={{marginRight: '-15px'}}>
                                        <div className="customer_carousel_label">
                                            <img src={require('../../static/images/customer/4ce00685b2284f8f0a6df328502571ab.jpg')} alt=""/>
                                        </div>
                                    </Col>
                                    <Col md={12} lg={7} style={{marginLeft: '-15px'}}>
                                        <div className="customer_carousel_testimonial">
                                            <div className="carousel_testimonial_info_commit">
                                                <h3 className="testimonial_info_commit--title">Diameter Health</h3>
                                                <p className="testimonial_info_commit--text">
                                                    “Our partnership with Newfire is so much more than simply filling our talent needs.
                                                    Newfire provides valuable expertise and are the advisors that we need to accelerate
                                                    solving some of healthcare’s toughest challenges. I trust our team at Newfire and am more
                                                    confident in our ability to produce high-quality output with them as our partner.”
                                                </p>
                                                <div className="carousel_testimonial_author">
                                                    <p className="testimonial_author_fio"><b>Harvard Pan</b></p>
                                                    <p>Chief Technology Officer</p>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                    </WrapperCustomerCarousel>
                </Container>
            </WrapperCustomerTestimonials>
        )
    }
}