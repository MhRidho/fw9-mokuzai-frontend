import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { FiEdit2 } from 'react-icons/fi'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { editProfile } from '../../../redux/asyncAction/auth'

const FormChange = ({errors, handleSubmit, handleChange})=> {
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
      <div className='border border-3 bg-white p-3'>
        {/* <Form.Control name='name' className='p-0 bgc-unset border-0 shadow-none' onChange={handleChange} type="text" placeholder="change username" /> */}
        <Form.Select className='shadow-none' name='gender' onChange={handleChange} aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Select>
      </div>
      <div className='d-flex justify-content-end'>
        <Button type='submit' className='rounded-0 size-btn-auth bgc-primary border-0'>
          <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>Change</span>
        </Button>
      </div>
    </Form>
  )
}

function ModalFormEditGender(props){
  const dispatch = useDispatch()
  const onChangeGender = (value) => {
    dispatch(editProfile(value))
    // console.log(value);
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
          Change Gender
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik initialValues={{gender: ''}} onSubmit={onChangeGender}>
          {(props)=><FormChange {...props}/>}
        </Formik>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default function ModalChangeGender() {
  const [modal, setModal] = useState(false)
  return (
    <div>
      <Button className='bgc-unset shadow-none border-0' onClick={()=> setModal(true)}>
        <div className='d-flex flex-row align-items-center gap-2'>
          <span className='c-primary font-size-mokuzai-18 font-weight-mokuzai-700'>EDIT</span>
          <FiEdit2 className='c-primary' />
        </div>
      </Button>
      <ModalFormEditGender show={modal} onHide={()=> setModal(false)} />
    </div>
  )
}
