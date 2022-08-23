import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { FiEdit2 } from 'react-icons/fi'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { editEmail } from '../../../redux/asyncAction/auth'

const changeSechema  = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
})

const FormChange = ({errors, handleSubmit, handleChange})=> {
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
      <div className='border border-3 bg-white p-3'>
        <Form.Control name='email' className='p-0 bgc-unset border-0 shadow-none' onChange={handleChange} type="email" placeholder="change your email" isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </div>
      {/* <div className='border border-3 bg-white p-3'>
        <Form.Control name='name' className='p-0 bgc-unset border-0 shadow-none' onChange={handleChange} as='textarea' placeholder="change username" />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </div> */}
      <div className='d-flex justify-content-end'>
        <Button type='submit' className='rounded-0 size-btn-auth bgc-primary border-0'>
          <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>Change</span>
        </Button>
      </div>
    </Form>
  )
}

function ModalFormEditEmail(props){
  const dispatch = useDispatch()
  const onChangeEmail = (value) => {
    // console.log(value);
    dispatch(editEmail(value))
  }
  return (
    <Modal
      {...props}
      // size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Change Email
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik initialValues={{email: ''}} validationSchema={changeSechema} onSubmit={onChangeEmail}>
          {(props)=><FormChange {...props}/>}
        </Formik>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default function ModalChangeEmail() {
  const [modal, setModal] = useState(false)
  return (
    <div>
      <Button className='bgc-unset shadow-none border-0' onClick={()=> setModal(true)}>
        <div className='d-flex flex-row align-items-center gap-2'>
          <span className='c-primary font-size-mokuzai-18 font-weight-mokuzai-700'>EDIT</span>
          <FiEdit2 className='c-primary' />
        </div>
      </Button>
      <ModalFormEditEmail show={modal} onHide={()=> setModal(false)} />
    </div>
  )
}
