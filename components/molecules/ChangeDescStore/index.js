import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { FiEdit2 } from 'react-icons/fi'
import { Formik } from 'formik'

const FormChange = ({errors, handleSubmit, handleChange})=> {
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
      <div className='border border-3 bg-white p-3'>
        <Form.Control name='store_desc' className='p-0 bgc-unset border-0 shadow-none' onChange={handleChange} as='textarea' placeholder="change description store" />
      </div>
      <div className='d-flex justify-content-end'>
        <Button type='submit' className='rounded-0 size-btn-auth bgc-primary border-0'>
          <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>Change</span>
        </Button>
      </div>
    </Form>
  )
}

function ModalFormEditDescStore(props){
  return (
    <Modal
      {...props}
      // size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Change Description Store
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik initialValues={{store_desc: ''}}>
          {(props)=><FormChange {...props}/>}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

export default function ModalChangeDescStore() {
  const [modal, setModal] = useState(false)
  return (
    <div>
      <Button className='bgc-unset shadow-none border-0' onClick={()=> setModal(true)}>
        <div className='d-flex flex-row align-items-center gap-2'>
          <span className='c-primary font-size-mokuzai-18 font-weight-mokuzai-700'>EDIT</span>
          <FiEdit2 className='c-primary' />
        </div>
      </Button>
      <ModalFormEditDescStore show={modal} onHide={()=> setModal(false)} />
    </div>
  )
}
