import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import Link from 'next/link'
import { Formik } from 'formik'
import * as Yup from 'yup'
import MainTemplateAuth from '../../components/organisms/MainTemplateAuth'
import LoginRegsiterLink from '../../components/molecules/LoginRegisterLink'

const loginSechema  = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
  password: Yup.string().min(4).required()
})

const AuthLogin =({errors, handleSubmit, handleChange})=> {
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
      <div className='border border-3 bg-white p-4'>
        <Form.Control name='email' className='p-0 bgc-unset border-0 shadow-none' onChange={handleChange} type="email" placeholder="User name or email address *" isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </div>
      <div className='border border-3 bg-white p-4 mb-4'>
        <Form.Control name='password' className='p-0 bgc-unset border-0 shadow-none' onChange={handleChange} type="password" placeholder="Password *" isInvalid={!!errors.password} />
        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
      </div>
      <div>
        <Button type='submit' className='rounded-0 size-btn-auth bgc-primary border-0'>
          <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>Login</span>
        </Button>
      </div>
      <div className='d-flex flex-row gap-3 align-items-center'>
        <div className='d-flex flex-row gap-2 align-items-center'>
          <Form.Check />
          <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Remember me</span>
        </div>
        <Link href='/forgot-password'>
          <a className='text-decoration-none text-danger'>
            <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Forget your password?</span>
          </a>
        </Link>
      </div>
    </Form>
  )
}


export default function Login() {
  return (
    <MainTemplateAuth title='Login' titleBanner='My Account' descBanner='Register and log in with your account to be able to shop at will'>
      <Row className='gap-4 gap-md-0'>
        <LoginRegsiterLink />
        <Col md={7} className='d-flex flex-column gap-4'>
          <span className='c-black font-size-mokuzai-32 font-weight-mokuzai-400'>Login</span>
          <Formik initialValues={{email: '', password: ''}} validationSchema={loginSechema}>
            {(props)=><AuthLogin {...props}/>}
          </Formik>
        </Col>
      </Row>
    </MainTemplateAuth>
  )
}
