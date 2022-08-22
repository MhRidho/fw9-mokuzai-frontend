import Main from '../../components/organisms/MainTemplate';
import { Container, Row, Col, Navbar, Nav, Button, Card, Form } from 'react-bootstrap';
import Image from 'next/image';
import img from '../../public/img-cart/img.png'
import img1 from '../../public/img-cart/img (1).png'
import { FiChevronRight, FiX } from 'react-icons/fi';
import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const response = {
      success: true,
      message: 'List Products',
      'results': [
        {
          'id': 1,
          'img': img,
          'name': 'Fabric Mid Century Chair',
          'price': '$10.50',
          'quantity': '02',
          'status': 'Sent',
          'total': '$21.00'
        },
        {
          'id': 2,
          'img': img1,
          'name': 'Chair in Dark Grey',
          'price': '$10.50',
          'quantity': '02',
          'status': 'Processed',
          'total': '$21.00'
        }
      ]
    }
    setProducts(response.results);
  }
  const [count, setCount] = useState(Number);
  return (
    <>
      <Main>
        <Container fluid className='bg-profile fluid py-4 px-5'>
          <Row className='ms-sm-5'>
            <h6 className='cursor'>Cart <FiChevronRight className='ms-2' /></h6>
          </Row>
          <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center my-5'>
              <h1>Your Cart</h1>
              <h6>Buy everything in your cart now!</h6>
            </Col>
          </Row>
        </Container>
        <Container className='my-5'>
          <Row>
            <Col>
              <Navbar bg="white" expand="lg">
                <Container>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#features">PRODUCTS</Nav.Link>
                    </Nav>
                    <Nav>
                      <Nav.Link>PRICE</Nav.Link>
                      <Nav.Link className='mx-sm-5'>QUANTITY</Nav.Link>
                      <Nav.Link>TOTAL</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <Container className='py-5'>
                {products && products.map((prod, id) => (
                  // eslint-disable-next-line react/jsx-key
                  <Row key={prod.id}>
                    <Col>
                      <FiX className='cursor' />
                    </Col>
                    <Col md={2}>
                      <Image src={prod.img} alt='img' className='cursor' />
                    </Col>
                    <Col md={4}>
                      <h6 className='mt-4'>{prod.name}</h6>
                    </Col>
                    <Col>
                      <h6 className='mt-4'>{prod.price}</h6>
                    </Col>
                    <Col className='d-flex gap-3 align-items-center'>
                      <Button variant='white border-0' onClick={() => setCount(count - 1)} disabled={count < 1}>-</Button>
                      <h5>{count}</h5>
                      <Button variant='white border-0' onClick={() => setCount(count + 1)}>+</Button>
                    </Col>
                    <Col>
                      <h6 className='mt-4'>$21.00</h6>
                    </Col>
                  </Row>
                ))}
              </Container>
              <hr />
              <Row>
                <Col md={7} className='mt-3'>
                  <Row>
                    <Col>
                      <h6>Enter your coupon code</h6>
                    </Col>
                    <Col>
                      <h6 className='fw-bold'>Apply Coupon</h6>
                    </Col>
                  </Row>
                  <hr />
                </Col>
                <Col className='mt-3'>
                  <Row>
                    <Col>
                      <p>Clear Cart</p>
                    </Col>
                    <Col>
                      <h6 className='fw-bold'>Update Cart</h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Container bg={'light'}>
                <Card
                  bg={'light'}
                  text={'dark'}
                  className="border-sharp border-0"
                >
                  <Card.Body className='p-4'>
                    <Container>
                      <Row>
                        <h6>Cart Total</h6>
                      </Row>
                      <Row className='my-4'>
                        <Col md={9}><h6>Subtotal</h6></Col>
                        <Col><h6>$125</h6></Col>
                      </Row>
                      <Row>
                        <Col md={6}><h6>Shipping</h6></Col>
                        <Col>
                          <Row>
                            <Form.Check
                              type={'radio'}
                              id={'radio'}
                              label={'Flate rate: $10'}
                            />
                          </Row>
                          <Row>
                            <Form.Check
                              type={'radio'}
                              id={'radio'}
                              label={'Free Shipping'}
                            />
                          </Row>
                          <Row>
                            <Form.Check
                              type={'radio'}
                              id={'radio'}
                              label={'Local Pickup'}
                            />
                          </Row>
                        </Col>
                      </Row>
                      <hr />
                      <Row className='my-4'>
                        <Col md={9}><h6>Total Price</h6></Col>
                        <Col><h6>$125</h6></Col>
                      </Row>
                    </Container>
                  </Card.Body>
                  <Button className='btn btn-lg d-flex border-sharp justify-content-center' variant='dark'><h6 className='mt-2'>Procced To Check Out</h6></Button>
                </Card>
              </Container>
            </Col>
          </Row>
        </Container>

      </Main>
    </>
  )
}

export default Cart;
