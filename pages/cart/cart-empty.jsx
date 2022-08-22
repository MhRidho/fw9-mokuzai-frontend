import Main from '../../components/organisms/MainTemplate';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import ShoppingCart from '../../public/img-cart/shopping-cart.png'
import { FiChevronRight } from 'react-icons/fi';

const CartEmpty = () => {
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
        <Container className='text-center py-5'>
          <Row>
            <Col>
              <Image src={ShoppingCart} alt='ShoppingCart' />
            </Col>
          </Row>
          <Row className='py-4'>
            <h2>Your Cart is Empty</h2>
            <span className='mt-4'>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc<br /> vel diam auctor commodo. urabitur blandit ultri</span>
          </Row>
        </Container>

      </Main>
    </>
  )
}

export default CartEmpty;
