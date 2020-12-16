import React from "react";
import { useFormik, } from "formik";
import {Element} from 'react-scroll'
import {Checkbox} from 'antd';
import {Container, Row, Col} from "react-grid-system";
import {WrapperFrom} from './style';

const ContactForm = () =>{
    const formik = useFormik({
        initialValues: {
            text: '',
            firstName: '',
            email: '',
            acceptedTerms: false
        },
        onSubmit: async (values, {setSubmitting}) => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2))
        },
        isInitialValid: true
    })

    return (
        <WrapperFrom>
            <Element id='same'/>
            <Container>
                <Row align={"center"} justify={"center"}>
                    <Col lg={7}>
                        <h2 className="form_title" style={{textAlign: 'center'}}>Contact Us</h2>
                        <form onSubmit={e => e.preventDefault()} noValidate>
                            <input className="form_input input_first-name"
                                   type="text"
                                   name="firstName"
                                   style={{width: '100%' , border: 'none', marginBottom: '2em',padding: "1em 0 1.5em 1em", fontSize:"1.2em",borderBottom: '1px solid grey'}}
                                   placeholder={'Your name'}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.firstName}
                            />
                            <input className="form_input"
                                   type="email"
                                   name="email"
                                   style={{width: '100%' , border: 'none', marginBottom: '2em',padding: "1em 0 1.5em 1em", fontSize:"1.2em", borderBottom: '1px solid grey'}}
                                   placeholder={'E-mail'}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.email}
                            />
                            <textarea className="form_input input_textarea"
                                      name="text"
                                      placeholder={'Message'}
                                      style={{ width: '100%' , marginBottom: '1.5em',padding: "1em 0 4em 1em", fontSize:"1.2em", border: 'none', borderBottom: '1px solid grey'}}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.text}
                            >
                            </textarea>
                            <Checkbox name="acceptedTerms"
                                      style={{marginTop: '3em', fontSize: '1.2em'}}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      >
                                Yes, I've read and agree to the <a href="#">Privacy Policy</a>.
                            </Checkbox>
                            <div className="wrapper_btn">
                                    <button className="form_submit_btn">Send</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </WrapperFrom>
    );
}

export default ContactForm;