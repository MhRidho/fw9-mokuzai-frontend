import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import MainTemplateAuth from '../../components/organisms/MainTemplateAuth'

const forgotPasswordSechema  = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
})

const AuthForgotPassword =({errors, handleSubmit, handleChange})=> {
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-5'>
      <div className='border border-3 bg-white p-4'>
        <Form.Control name='email' className='p-0 bgc-unset border-0 shadow-none' onChange={handleChange} type="email" placeholder="Your email address *" isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </div>
      <div>
        <Button type='submit' className='rounded-0 size-btn-auth bgc-primary border-0'>
          <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>Reset Password</span>
        </Button>
      </div>
    </Form>
  )
}

export default function ForgotPassword() {
  return (
    <MainTemplateAuth title='Reset Password' titleBanner='My Account' descBanner='Register and log in with your account to be able to shop at will'>
      <div className='d-flex flex-column mx-auto gap-5 size-box-reset-password'>
        <div className='d-flex flex-column gap-3'>
          <span className='c-black font-size-mokuzai-32 font-weight-mokuzai-400'>Forgot your Password?</span>
          <span className='c-black font-size-mokuzai-16 font-weight-mokuzai-400'>Don&apos;t worry! Just fill in your email and we&apos;ll send you a link</span>
        </div>
        <div>
          <Formik initialValues={{email: ''}} validationSchema={forgotPasswordSechema}>
            {(props)=><AuthForgotPassword {...props}/>}
          </Formik>
        </div>
      </div>
    </MainTemplateAuth>
  )
}
