import React from "react";
import Footer from "../Footer_DS";
import {Container, Row, Col} from "react-grid-system";
import {Formik} from "formik";
import * as Yup from 'yup'
import {Checkbox} from 'antd';
import {WrapperFrom} from './style';
import {Element} from 'react-scroll'


const ContactForm = () =>{

    return (
        <WrapperFrom>
            <Element id='contact_us'/>
            <Container>
                <Row align={"center"} justify={"center"}>
                    <Col lg={7}>
                        <h2 className="form_title" style={{textAlign: 'center'}}>Contact Us</h2>
                        <Formik
                            initialValues={{
                                firstName: '',
                                email: '',
                                text: '',
                                acceptedTerms: false
                            }}
                            validationSchema={Yup.object().shape({
                                firstName: Yup.string()
                                    .min(0, 'Field is empty')
                                    .max(15, 'Must be 15 characters or less')
                                    .required('Required'),
                                email: Yup.string()
                                    .min(0, 'Field is empty')
                                    .email('Invalid email address')
                                    .required('Required'),
                                text: Yup.string()
                                    .min(15, 'Must be not less 15 characters or more')
                                    .required('Required'),
                                acceptedTerms: Yup.boolean()
                                    .required('Required')
                                    .oneOf([true], 'You must accept the terms and conditions.')
                            })}
                            onSubmit={async value => {
                                await new Promise(resolve => setTimeout(resolve,500));
                                alert(JSON.stringify(value, null,2));
                                console.log(value)
                            }}

                            handleSubmit={ (values, { setSubmitting }) => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                }}
                        >
                        {
                            (props) => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                } = props;
                                return (
                                    <form onSubmit={handleSubmit} >
                                        <input className="form_input input_first-name"
                                               type="text"
                                               name="firstName"
                                               style={{width: '100%' , border: 'none', marginBottom: '2em',padding: "1em 0 1.5em 1em", fontSize:"1.2em",borderBottom: '1px solid grey'}}
                                               placeholder={ touched.fistName && errors.firstName ? errors.firstName : 'Your name'}
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.firstName}
                                        />
                                        <input className="form_input"
                                               type="email"
                                               name="email"
                                               style={{width: '100%' , border: 'none', marginBottom: '2em',padding: "1em 0 1.5em 1em", fontSize:"1.2em", borderBottom: '1px solid grey'}}
                                               placeholder={'E-mail'}
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.email}
                                        />
                                        <textarea className="form_input input_textarea"
                                                  name="text"
                                                  placeholder={'Message'}
                                                  style={{ width: '100%' , marginBottom: '1.5em',padding: "1em 0 4em 1em", fontSize:"1.2em", border: 'none', borderBottom: '1px solid grey'}}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  value={values.text}
                                        >
                            </textarea>
                                        <div className={'wrapper_checkbox'} >
                                            <Checkbox name="acceptedTerms"
                                                      style={{ fontSize: '1.2em'}}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      className={'form_checkbox'}
                                            >
                                                Yes, I've read and agree to the <a href="#">Privacy Policy</a>.
                                            </Checkbox>
                                            <div className="wrapper_btn">
                                                <button  type={"submit"} className="form_submit_btn">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                )
                            }
                        }
                        </Formik>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </WrapperFrom>
    );
}

export default ContactForm;