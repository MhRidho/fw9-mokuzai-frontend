import Main from '../../components/organisms/MainTemplate';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Image from 'next/image';
import Mask from '../../public/img-profile-seller/Mask.png'
import Goods from '../../public/img-profile-seller/goods.png'
import AddImg from '../../public/img-profile-seller/add-img.png'
import { FiEdit2, FiLogOut, FiCheckCircle } from 'react-icons/fi';
import NavbarProduct from '../../components/molecules/NavbarProduct';

const index = () => {
  return (
    <>
      <Main>
        <Container fluid className='bg-profile'>
          <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center mt-5'>
              <h1>Selling Product</h1>
              <h6>See your notifications for the latest updates</h6>
            </Col>
          </Row>
          <NavbarProduct />
        </Container>
        <Container>
          <Row className='d-flex justify-content-center'>
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label><h4 className='fw-bold'>Inventory</h4></Form.Label>
                  <Form.Control type="email" placeholder="Name of goods *" className='border-sharp p-3 shadow-none' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control placeholder="Description Product *" as="textarea" rows={3} className='border-sharp  p-3 shadow-none' />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center my-5'>
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label><h4 className='fw-bold'>Item Details</h4></Form.Label>
                  <Form.Control type="email" placeholder="Unit price *" className='border-sharp  p-3 shadow-none' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control type='text' placeholder="Unit Stock *" rows={3} className='border-sharp  p-3 shadow-none' />
                </Form.Group>
                <Form.Group as={Row} className="mt-5">
                  <Col>
                    <p>Stock Condition</p>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Check label="New Product" />
                  </Col>
                  <Col md={8}>
                    <Form.Check label="Second Product" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-5" controlId="exampleForm.ControlInput1">
                  <Form.Label><h4 className='fw-bold'>Photo of Goods</h4></Form.Label>
                  <Col><Image src={Goods} alt='goods' /></Col>
                  <Col md={7} ><Image src={AddImg} alt='AddImg' className='cursor' /></Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-5" controlId="exampleForm.ControlInput1">
                  <Col>
                    <Button variant="dark" className='btn btn-lg mt-4 mb-5 px-5 border-sharp'>Sell Product</Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  )
}

export default index
