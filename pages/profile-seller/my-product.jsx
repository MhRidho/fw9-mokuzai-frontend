import Main from '../../components/organisms/MainTemplate';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Table, Button } from 'react-bootstrap';
import Image from 'next/image';
import Mask from '../../public/img-profile-seller/Mask.png'
import { FiEdit2, FiLogOut, FiCheckCircle } from 'react-icons/fi';
import NavbarProduct from '../../components/molecules/NavbarProduct';
import React, { useState, useEffect } from 'react';

const MyProduct = () => {
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
          'img': Mask,
          'name': 'Dining Side Chair in Beige',
          'stock': '10 Stock',
          'price': '$765.99',
        },
        {
          'id': 2,
          'img': Mask,
          'name': 'Eugene Accent Table 18.9 inches Espresso',
          'stock': '10 Stock',
          'price': '$765.99',
        },
        {
          'id': 3,
          'img': Mask,
          'name': 'Dining Side Chair in Beige',
          'stock': '10 Stock',
          'price': '$765.99',
        }
      ]
    }
    setProducts(response.results);
  }
  return (
    <>
      <Main>
        <Container fluid className='bg-profile'>
          <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center mt-5'>
              <h1>My Product</h1>
              <h6>See your notifications for the latest updates</h6>
            </Col>
          </Row>
          <NavbarProduct />
        </Container>
        <Container>
          <hr />
          <Row className='fw-bold'>
            <Col md={6}>
              Product
            </Col>
            <Col>
              Stock Status
            </Col>
            <Col md={4}>
              Price
            </Col>
          </Row>
          <hr />
        </Container>
        <Container className='py-5'>
          {products && products.map((prod, id) => (
            // eslint-disable-next-line react/jsx-key
            <Row className='d-flex align-items-center my-4'>
              <Col md={3}>
                <Image src={Mask} alt='Mask' className='cursor' />
              </Col>
              <Col md={3}>
                <h6>Dining Side Chair in Beige</h6>
              </Col>
              <Col md={2}>
                <h6><FiCheckCircle className='me-1' />10 Stock</h6>
              </Col>
              <Col md={2}>
                <h6>$765.99</h6>
              </Col>
              <Col md={2}>
                <Button variant="danger" className='btn btn-lg px-5 border-sharp'>Delete</Button>
              </Col>
            </Row>
          ))}
        </Container>
      </Main>
    </>
  )
}

export default MyProduct;
