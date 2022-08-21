import React from 'react';
import Image from 'next/image'
import {Row, Col, Form, Accordion} from 'react-bootstrap'
import MainTemplate from '../../components/organisms/MainTemplate'
import Banner from '../../components/organisms/ComBannerAuth'
import { Formik } from 'formik';
import * as Yup from 'yup'

const contactSchema  = Yup.object().shape({
  name: Yup.string().min(4).required(),
  email: Yup.string().email('Invalid email address format').required(),
})

const AuthLogin =({errors, handleSubmit, handleChange})=> {
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
      <div className='border border-3 bg-white p-4'>
        <Form.Control name='name' className='p-0 bgc-unset border-0 shadow-none contact-form' onChange={handleChange} type="text" placeholder="Name *" isInvalid={!!errors.name} />
        <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
      </div>
      <div className='border border-3 bg-white p-4'>
        <Form.Control name='email' className='p-0 bgc-unset border-0 shadow-none contact-form' onChange={handleChange} type="email" placeholder="Your Email *" isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </div>
      <div className='border border-3 bg-white p-4'>
        <Form.Control name='name' className='p-0 bgc-unset border-0 shadow-none contact-form' onChange={handleChange} type="text" placeholder="Your Website"/>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Business Plan</Accordion.Header>
          <Accordion.Body className='d-flex flex-column'>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className='border border-3 bg-white p-4 contact-form'>
        <Form.Control name='message' className='p-0 bgc-unset border-0 shadow-none contact-form' onChange={handleChange} type="text" placeholder="Message" as="textarea" rows={3}/>
      </div>
    </Form>
  )
}

export default function AboutUs() {
  return (
    <MainTemplate>
      <Banner title={'Contact Us'}/>

      <Row className='d-flex'>
        <Col md={4} className='map-contact'>
          <Image src='/contact-us/dummy-map.png' width={700} height={845} alt='map-dummy'/>
        </Col>

        <Col md={8} className=''>
          <div className='m-5 p-5'>
            <Formik initialValues={{name: '', email: ''}} validationSchema={contactSchema}>
              {(props)=><AuthLogin {...props}/>}
            </Formik>
          </div>
          
        </Col>
      </Row>
    </MainTemplate>
  )
}