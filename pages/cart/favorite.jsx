import Main from '../../components/organisms/MainTemplate';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Table, Button } from 'react-bootstrap';
import Image from 'next/image';
import Mask from '../../public/img-profile-seller/Mask.png'
import { FiCheckCircle, FiHeart, FiChevronRight } from 'react-icons/fi';
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
        <Container fluid className='bg-profile fluid py-4 px-5'>
          <Row className='ms-sm-5'>
            <h6 className='cursor'>Favorite <FiChevronRight className='ms-2' /></h6>
          </Row>
          <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center my-5'>
              <h1>Favorite</h1>
              <h6>Pay and get your ordered items</h6>
            </Col>
          </Row>
        </Container>
        <Container className='mt-5 px-5'>
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
        <Container className='pt-1 pb-5 px-5'>
          {products && products.map((prod, id) => (
            // eslint-disable-next-line react/jsx-key
            <Row className='d-flex align-items-center my-4' key={prod.id}>
              <Col>
                <FiHeart className='ms-2' />
              </Col>
              <Col md={3}>
                <Image src={prod.img} alt='Mask' className='cursor' />
              </Col>
              <Col md={2}>
                <h6>{prod.name}</h6>
              </Col>
              <Col md={2}>
                <h6><FiCheckCircle className='me-1' />{prod.stock}</h6>
              </Col>
              <Col md={2}>
                <h6>{prod.price}</h6>
              </Col>
              <Col md={2}>
                <Button variant="dark" className='btn btn-lg px-4 border-sharp'>Add to cart</Button>
              </Col>
            </Row>
          ))}
        </Container>
      </Main>
    </>
  )
}

export default MyProduct;
