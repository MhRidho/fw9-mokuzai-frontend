import Main from '../../components/organisms/MainTemplate';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import Image from 'next/image';
import Visa from '../../public/img-cart/visa.png'
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

const CartEmpty = () => {
  return (
    <>
      <Main>
        <Container fluid className='bg-profile fluid py-4 px-5'>
          <Row className='ms-sm-5'>
            <Col>
              <h6 className='cursor ms-2'>Cart <FiChevronRight className='mx-2' />Checkout</h6>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center my-5'>
              <h1>Check Out</h1>
              <h6>Pay and get your ordered items</h6>
            </Col>
          </Row>
        </Container>
        <Container className='py-5'>
          <Row className='d-flex justify-content-center mb-5'>
            <Col md={6}>
              <h2>Self Information</h2>
              <Form noValidate className='d-flex flex-column gap-3 mt-4'>
                <div className='border bg-white p-4'>
                  <Form.Control name='email' className='p-0 bgc-unset border-0 shadow-none' type="text" placeholder="Your Name *" />
                </div>
                <div className='border bg-white p-4'>
                  <Form.Control name='address' className='p-0 bgc-unset border-0 shadow-none' type="text" placeholder="Address *" />
                </div>
                <InputGroup>
                  <Col md={2}>
                    <Form.Select as={Col} md={4} className='rounded-0 p-4 fw-bold shadow-none'>
                      <option>+62</option>
                      <option>+63</option>
                      <option>+64</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Control name='Phone' className='rounded-0 p-4 bgc-unset shadow-none' type="text" placeholder="Phone Number *" />
                  </Col>
                </InputGroup>
                <InputGroup className='my-5'>
                  <Col md={2} className='text-center border pt-4'>
                    <Image src={Visa} alt='visa' />
                  </Col>
                  <Col>
                    <Form.Select size="lg" className='rounded-0 shadow-none p-4 fw-bold'>
                      <option>Pay with Visa</option>
                      <option>ATM</option>
                      <option>BNI</option>
                      <option>BCA</option>
                    </Form.Select>
                  </Col>
                </InputGroup>
                <div>
                  <Button type='submit' className='rounded-0 size-btn-auth bgc-primary border-0 p-3 mt-2'>
                    <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>Check Out</span>
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>

      </Main>
    </>
  )
}

export default CartEmpty;
