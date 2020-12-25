import React from "react";
import axios from "axios";
import Footer from "../Footer_DS";
import {Container, Row, Col} from "react-grid-system";
import {Formik} from "formik";
import * as Yup from 'yup'
import {Checkbox} from 'antd';
import {WrapperFrom} from './style';
import {Element} from 'react-scroll'
import Fade from "react-reveal/Fade";


const ContactForm = () =>{

    return (
        <WrapperFrom>
            <Element id='contact_us'/>
            <Container>
                <Row align={"center"} justify={"center"}>
                    <Col lg={7}>
                        <h2 className="form_title" style={{ textAlign: "center" }}>
                            Contact Us
                        </h2>
                        <Formik
                            initialValues={{
                                firstName: "",
                                email: "",
                                text: "",
                                acceptedTerms: false
                            }}
                            validationSchema={Yup.object().shape({
                                firstName: Yup.string()
                                    .min(0, "Field is empty")
                                    .required("Required"),
                                email: Yup.string()
                                    .min(0, "Field is empty")
                                    .email("Invalid email address")
                                    .required("Required"),
                                text: Yup.string()
                                    .min(0, "Field is empty")
                                    .required("Required"),
                                acceptedTerms: Yup.boolean()
                                    .required("Required")
                                    .oneOf([true], "You must accept the terms and conditions.")
                            })}
                            onSubmit={async (values, actions) => {
                                actions.setSubmitting(true);

                                try {
                                    const emailFunctionUrl = "https://submit-form.com/e2tu4lkO";
                                    const data = `&FirstName=${values.firstName}
                                                    &Email=${values.email}
                                                    &Message=${values.text}`;

                                    await axios.post(`${emailFunctionUrl}`, data, {
                                        headers: {
                                            "Content-Type": "application/x-www-form-urlencoded"
                                        }
                                    });
                                } catch (err) {
                                } finally {
                                    actions.resetForm();
                                    actions.setSubmitting(false);
                                }
                            }}
                            handleSubmit={(values, { setSubmitting }) => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }}
                        >
                            {(props) => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    dirty,
                                    isSubmitting,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    handleReset
                                } = props;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            className="form_input input_first-name"
                                            type="text"
                                            name="firstName"
                                            autoComplete={'false'}
                                            style={{
                                                width: "100%",
                                                border: "none",
                                                marginBottom: "2em",
                                                padding: "1em 0 1.5em 1em",
                                                fontSize: "1.2em",
                                                borderBottom: `1px solid grey`
                                            }}
                                            placeholder={
                                                touched.fistName && errors.firstName
                                                    ? errors.firstName
                                                    : "Your name"
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                        />
                                        {
                                            touched.firstName && errors.firstName ? (
                                                <Fade>
                                                    <div style={{marginBottom: '1em',color: 'red'}}>{errors.firstName}</div>
                                                </Fade>
                                            ) : null
                                        }
                                        <input
                                            className="form_input"
                                            type="email"
                                            name="email"
                                            style={{
                                                width: "100%",
                                                border: "none",
                                                marginBottom: "2em",
                                                padding: "1em 0 1.5em 1em",
                                                fontSize: "1.2em",
                                                borderBottom: `1px solid grey`
                                            }}
                                            placeholder={"E-mail"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {
                                            touched.email && errors.email ? (
                                                <Fade>
                                                    <div style={{marginBottom: '1em',color: 'red'}}>{errors.email}</div>
                                                </Fade>
                                            ) : null
                                        }
                                        <textarea
                                            className="form_input input_textarea"
                                            name="text"
                                            placeholder={"Message"}
                                            style={{
                                                width: "100%",
                                                marginBottom: "1.5em",
                                                padding: "1em 0 4em 1em",
                                                fontSize: "1.2em",
                                                border: "none",
                                                borderBottom: "1px solid grey"
                                            }}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.text}
                                        ></textarea>
                                        {
                                            touched.text && errors.text ? (
                                                <Fade>
                                                    <div style={{marginBottom: '1em',color: 'red'}}>{errors.text}</div>
                                                </Fade>
                                            ) : null
                                        }
                                        <div className="wrapper_checkbox">
                                            <Checkbox
                                                className={'form_checkbox'}
                                                name="acceptedTerms"
                                                style={{
                                                    fontSize: "1.2em",
                                                    color:
                                                        touched.acceptedTerms && touched.errors
                                                            ? "red"
                                                            : "black"
                                                }}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            >
                                                Yes, I've read and agree to the{" "}
                                                <a href="#">Privacy Policy</a>.
                                                {
                                                    touched.acceptedTerms && errors.acceptedTerms ? (
                                                        <Fade>
                                                            <div style={{marginBottom: '1em',color: 'red'}}>{errors.acceptedTerms}</div>
                                                        </Fade>
                                                    ) : null
                                                }
                                            </Checkbox>
                                            <div className="wrapper_btn">
                                                <button type={"submit"} className="form_submit_btn">
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                );
                            }}
                        </Formik>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </WrapperFrom>
    );
}

export default ContactForm;