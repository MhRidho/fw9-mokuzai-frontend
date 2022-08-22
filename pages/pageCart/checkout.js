import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import MainTempalteAuth from '../../components/organisms/MainTemplateAuth'
import { Formik } from 'formik'

const CheckoutForm = ({errors, handleSubmit, handleChange}) => {
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-3 mx-auto w-50'>
      <span>Self Information</span>
      <div className='border border-3 bg-white p-4'>
        <Form.Control name='name' className='p-0 bgc-unset border-0 shadow-none' onChange={handleChange} type="text" placeholder="Your Name *" isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </div>
      <div className='border border-3 bg-white p-4'>
        <Form.Control name='address' className='p-0 bgc-unset border-0 shadow-none' onChange={handleChange} type="text" placeholder="Address *" isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </div>
      <div className='border border-3 bg-white p-4'>
        <Form.Control name='phone' className='p-0 bgc-unset border-0 shadow-none' onChange={handleChange} type="text" placeholder="Phone Number *" isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </div>
      <div className='border border-3 bg-white p-4'>
        <Form.Control name='payment' className='p-0 bgc-unset border-0 shadow-none' onChange={handleChange} type="text" placeholder="Payment *" isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </div>
      <div>
        <Button type='submit' className='rounded-0 size-btn-auth bgc-primary border-0'>
          <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>Login</span>
        </Button>
      </div>
    </Form>
  )
}

export default function checkout() {
  return (
    <MainTempalteAuth title='Check Out' titleBanner='Check Out' descBanner='Pay and get your ordered items'>
      <Formik initialValues={{name: '', address: '', phoneNumber: '', payment: ''}}>
        {(props)=><CheckoutForm {...props}/>}
      </Formik>
    </MainTempalteAuth>
  )
}
