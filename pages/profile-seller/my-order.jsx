import Main from '../../components/organisms/MainTemplate';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Table, Button } from 'react-bootstrap';
import Image from 'next/image';
import img from '../../public/img-profile-seller/img.png'
import img1 from '../../public/img-profile-seller/img (1).png'
import { FiEdit2, FiLogOut, FiCheckCircle } from 'react-icons/fi';
import NavbarProduct from '../../components/molecules/NavbarProduct';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const MyOrder = () => {
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
  return (
    <>
      <Main>
        <Container className='bg-profile fluid'>
          <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center mt-5'>
              <h1>My Order</h1>
              <h6>See your notifications for the latest updates</h6>
            </Col>
          </Row>
          <NavbarProduct />
        </Container>
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
                <Nav.Link className='mx-sm-5'>STATUS ORDER</Nav.Link>
                <Nav.Link>TOTAL</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className='py-5'>
          {products && products.map((prod, id) => (
            // eslint-disable-next-line react/jsx-key
            <Row key={prod.id}>
              <Col md={2}>
                <Image src={prod.img} alt='img' className='cursor' />
              </Col>
              <Col md={5}>
                <h6>{prod.name}</h6>
              </Col>
              <Col>
                <h6>{prod.price}</h6>
              </Col>
              <Col>
                <h6>{prod.quantity}</h6>
              </Col>
              <Col md={2}>
                <h6><FiCheckCircle className='me-1' />{prod.status}</h6>
              </Col>
              <Col>
                <h6>$21.00</h6>
              </Col>
            </Row>
          ))}
        </Container>
        <hr className='mb-5' />
      </Main>
    </>
  )
}

export default MyOrder;
