import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import MainTempalteAuth from '../../components/organisms/MainTemplateAuth'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { updateCheckout } from '../../redux/asyncAction/auth'

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
      {/* <div className='border border-3 bg-white p-4'>
        <Form.Control name='payment' className='p-0 bgc-unset border-0 shadow-none' onChange={handleChange} type="text" placeholder="Payment *" isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </div> */}
      <div className='border border-3 bg-white p-4'>
        <Form.Select className='shadow-none border-0' name='metode_trans' onChange={handleChange} aria-label="Default select example">
          <option>Select Payment Method</option>
          <option value="visa">Pay with Visa</option>
          <option value="gopay">Pay with Gopay</option>
          <option value="fazzpay">Pay with Fazzpay</option>
        </Form.Select>
      </div>
      <div>
        <Button type='submit' className='rounded-0 size-btn-auth bgc-primary border-0'>
          <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>Check Out</span>
        </Button>
      </div>
    </Form>
  )
}

export default function Checkout() {
  const dispatch = useDispatch()
  const navigate = useRouter()
  const userId = useSelector((state) => state.auth.dataCheckout)
  console.log(userId);
  const onPayment = (value) => {
    // console.log(value);
    const param = {name: value.name, address: value.address, phone: value.phone, metode_trans: value.metode_trans, id: userId[0].id}
    // console.log(param);
    dispatch(updateCheckout(param))
  }
  return (
    <MainTempalteAuth title='Check Out' titleBanner='Check Out' descBanner='Pay and get your ordered items'>
      <Formik initialValues={{name: '', address: '', phone: '', metode_trans: ''}} onSubmit={onPayment}>
        {(props)=><CheckoutForm {...props}/>}
      </Formik>
    </MainTempalteAuth>
  )
}
