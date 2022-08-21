import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { FiEdit2 } from 'react-icons/fi'
import { Formik } from 'formik'
import Image from 'next/image'

const FormChange = ({errors, handleSubmit, handleChange})=> {
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
      <div className='border border-3 bg-white p-3'>
        <Form.Control name='picture' className='border-0 shadow-none' onChange={handleChange} type="file" placeholder="change username" />
      </div>
      <div className='d-flex justify-content-end'>
        <Button type='submit' className='rounded-0 size-btn-auth bgc-primary border-0'>
          <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>Change</span>
        </Button>
      </div>
    </Form>
  )
}

function ModalFormEditImage(props){
  return (
    <Modal
      {...props}
      // size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Change Image Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik initialValues={{picture: ''}}>
          {(props)=><FormChange {...props}/>}
        </Formik>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default function ModalChangeImage() {
  const [modal, setModal] = useState(false)
  return (
    <div className='d-flex flex-column gap-2 justify-content-center'>
      <div className='wrap-image-profile overflow-hidden'>
        <Image src={'/img-profile-seller/Ellipse-3.png'} width={100} height={100} alt='profile pic' />
      </div>
      <Button className='bgc-unset shadow-none border-0 mx-auto' onClick={()=> setModal(true)}>
        <div className='d-flex flex-row align-items-center gap-2'>
          <span className='c-primary font-size-mokuzai-18 font-weight-mokuzai-700'>EDIT</span>
          <FiEdit2 className='c-primary' />
        </div>
      </Button>
      <ModalFormEditImage show={modal} onHide={()=> setModal(false)} />
    </div>
  )
}
