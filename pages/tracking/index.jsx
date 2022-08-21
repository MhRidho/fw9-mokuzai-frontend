import Main from '../../components/organisms/MainTemplate';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

const TrackingUpdate = () => {
  return (
    <>
      <Main>
        <Container fluid className='bg-profile fluid py-4 px-5'>
          <Row>
            <Col>
              <h6 className='cursor ms-5'>Tracking <FiChevronRight className='ms-2' /></h6>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center my-5'>
              <h1>Order Tracking</h1>
              <h6>Track where your order arrived</h6>
            </Col>
          </Row>
        </Container>
        <Container fluid className=''>
          <Row className='d-flex justify-content-center'>
            <Col className='bg-map'>
            </Col>
            <Col md={6} className='pe-sm-5'>
              <Row className='mx-sm-5 my-5'>
                <p className='text-center'>To track your order please enter your Order ID in the box below and press the Track button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                <Form noValidate className='d-flex flex-column gap-3 mt-4 justify-content-center'>
                  <Form.Label htmlFor="basic-url" className='fw-bold'>Order ID</Form.Label>
                  <div className='border bg-white p-4'>
                    <Form.Control name='email' className='p-0 bgc-unset border-0 shadow-none' type="text" placeholder="Found in your order confirmation email." />
                  </div>
                  <Form.Label htmlFor="basic-url" className='fw-bold'>Billing Email</Form.Label>
                  <div className='border bg-white p-4'>
                    <Form.Control name='address' className='p-0 bgc-unset border-0 shadow-none' type="text" placeholder="Email you used during checkout" />
                  </div>
                  <div className='text-center'>
                    <Button type='submit' className='rounded-0 size-btn-auth bgc-primary border-0 p-3 my-2'>
                      <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>Track Now</span>
                    </Button>
                  </div>
                </Form>
              </Row>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  )
}

export default TrackingUpdate;