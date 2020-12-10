import React from "react";
import { useFormik, } from "formik";
import * as Yup from 'yup';
import {Element} from 'react-scroll'

import {
    Upload,
    Button,
    Checkbox,
    message
} from 'antd';
import { PaperClipOutlined } from '@ant-design/icons';

import {
    Container,
    Row,
    Col
} from "react-grid-system";

import {
    WrapperFrom
} from './style'


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Form = () =>{
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const phoneRegex = RegExp(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    );

    const formik = useFormik({
        initialValues: {
            text: '',
            firstName: '',
            secondName: '',
            email: '',
            phone: '',
            acceptedTerms: false
        },
        validationSchema: Yup.object({
            text: Yup.string()
                .min(15, 'Must be not less 15 characters or more')
                .required('Required'),
            firstName: Yup.string()
                .min(0, 'Field is empty')
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            secondName: Yup.string()
                .min(0, 'Field is empty')
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .min(0, 'Field is empty')
                .email('Invalid email address')
                .required('Required'),
            phone: Yup.string()
                .min(0, 'Field is empty')
                .matches(phoneRegex, 'Invalid phone')
                .required('Phone is Required'),
            acceptedTerms: Yup.boolean()
                .required('Required')
                .oneOf([true], 'You must accept the terms and conditions.')
        }),
        onSubmit: async (values, {setSubmitting, }) => {
            await sleep(500);
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
                        <h2 className="form_title" style={{textAlign: 'center'}}>
                            Let's Talk about something
                        </h2>
                        <form onSubmit={e => e.preventDefault()} noValidate>
                            <textarea className="form_input input_textarea"
                                      name="text"
                                      placeholder={'A new text area!'}
                                      style={{ width: '100%' , marginBottom: '1.5em',padding: "1em 0 4em 1em", fontSize:"1.5em", border: 'none', borderBottom: '1px solid grey'}}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.text}
                                      >
                            </textarea>
                            {
                                formik.touched.text && formik.errors.text ? (
                                    <div style={{marginBottom: '1em',color: 'red'}}>{formik.errors.text}</div>
                                ) : null
                            }
                            <Row justify={"between"}>
                                <Col md={12} lg={6}>
                                    <input className="form_input input_first-name"
                                           type="text"
                                           name="firstName"
                                           style={{width: '90%' , border: 'none', marginBottom: '2em',padding: "1em 0 1.5em 1em", fontSize:"1.2em",borderBottom: '1px solid grey'}}
                                           placeholder={'Your first name'}
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}
                                           value={formik.values.firstName}
                                            />
                                    {
                                        formik.touched.firstName && formik.errors.firstName ? (
                                            <div style={{marginBottom: '1em',color: 'red'}}>{formik.errors.firstName}</div>
                                        ) : null
                                    }
                                </Col>
                                <Col md={12} lg={6} >
                                    <input className="form_input"
                                           type="text"
                                           name="secondName"
                                           style={{width: '100%' , border: 'none', marginBottom: '2em',padding: "1em 0 1.5em 1em", fontSize:"1.2em", borderBottom: '1px solid grey'}}
                                           placeholder={'Your last name'}
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}
                                           value={formik.values.secondName}
                                            />
                                    {
                                        formik.touched.secondName && formik.errors.secondName ? (
                                            <div style={{marginBottom: '1em',color: 'red'}}>{formik.errors.secondName}</div>
                                        ) : null
                                    }
                                </Col>
                            </Row>
                            <input className="form_input"
                                   type="email"
                                   name="email"
                                   style={{width: '100%' , border: 'none', marginBottom: '2em',padding: "1em 0 1.5em 1em", fontSize:"1.2em", borderBottom: '1px solid grey'}}
                                   placeholder={'Your business email'}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.email}
                            />
                            {
                                formik.touched.email && formik.errors.email ? (
                                    <div style={{marginBottom: '1em',color: 'red'}}>{formik.errors.email}</div>
                                ) : null
                            }
                            <input className="form_input"
                                   type="phone"
                                   name="phone"
                                   style={{width: '100%' , border: 'none', marginBottom: '2em',padding: "1em 0 1.5em 1em", fontSize:"1.2em", borderBottom: '1px solid grey'}}
                                   placeholder={'Phone number'}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.phone}
                                    />
                            {
                                formik.touched.phone && formik.errors.phone ? (
                                    <div style={{marginBottom: '1em',color: 'red'}}>{formik.errors.phone}</div>
                                ) : null
                            }
                            <Upload {...props} >
                                <PaperClipOutlined style={{fontSize: '3em', color: 'orange',cursor: 'pointer',marginBottom: '0.5em',}}/>
                                <Button style={{fontSize: '1.3em',border: 'none'}}>Attache file...</Button>
                                <br/>
                                <span className="upload_span" style={{color: 'orange'}}>2mb max, .pdf,.jpg,.jpeg,.png,.xlsx,.xls,.doc,.docx,.ppt,.pptx formats.</span>
                            </Upload>
                            <Checkbox name="acceptedTerms"
                                    style={{marginTop: '3em', fontSize: '1.2em', fontWeight: '700'}}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      >
                                Yes, I've read and agree to the <a href="#">Privacy Policy</a>.
                            </Checkbox>
                            {
                                formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
                                    <div style={{marginBottom: '1em',color: 'red'}}>{formik.errors.acceptedTerms}</div>
                                ) : null
                            }
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

export default Form;