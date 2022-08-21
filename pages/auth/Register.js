import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import MainTemplateAuth from '../../components/organisms/MainTemplateAuth'
import LoginRegsiterLink from '../../components/molecules/LoginRegisterLink'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { registerCostumer, registerSeller } from '../../redux/asyncAction/auth'

const registerSechema  = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
  password: Yup.string().min(4).required()
})

const AuthRegister =({errors, handleSubmit, handleChange})=> {
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
      <div className='border border-3 bg-white p-4'>
        <Form.Control name='email' className='p-0 bgc-unset border-0 shadow-none' onChange={handleChange} type="email" placeholder="Email address*" isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </div>
      <div className='border border-3 bg-white p-4 mb-4'>
        <Form.Control name='password' className='p-0 bgc-unset border-0 shadow-none' onChange={handleChange} type="password" placeholder="Password *" isInvalid={!!errors.password} />
        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
      </div>
      <div className='d-flex flex-row gap-3 align-items-center mb-4'>
        <div className='d-flex flex-row gap-2 align-items-center'>
          <Form.Check onChange={handleChange} type='radio' name='roles' value='customer' />
          <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>I&apos;m Customer</span>
        </div>
        <div className='d-flex flex-row gap-2 align-items-center'>
          <Form.Check onChange={handleChange} type='radio' name='roles' value='seller' />
          <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>I&apos;m Seller</span>
        </div>
      </div>
      <div>
        <Button type='submit' className='rounded-0 size-btn-auth bgc-primary border-0'>
          <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>Register</span>
        </Button>
      </div>
    </Form>
  )
}

export default function Register() {
  const dispatch = useDispatch()
  const navigate = useRouter()
  const handelregister = async (value) => {
    console.log(value);
    if (value.roles === 'seller') {
      dispatch(registerSeller(value))
      navigate.push('/login')
    } else {
      dispatch(registerCostumer(value))
      navigate.push('/login')
    }
  }
  return (
    <MainTemplateAuth title='Login' titleBanner='My Account' descBanner='Register and log in with your account to be able to shop at will'>
      <Row className='gap-4 gap-md-0'>
        <LoginRegsiterLink />
        <Col md={7} className='d-flex flex-column gap-4'>
          <span className='c-black font-size-mokuzai-32 font-weight-mokuzai-400'>Create Account</span>
          <Formik initialValues={{email: '', password: '', roles: ''}} validationSchema={registerSechema} onSubmit={handelregister}>
            {(props)=><AuthRegister {...props}/>}
          </Formik>
        </Col>
      </Row>
    </MainTemplateAuth>
  )
}
