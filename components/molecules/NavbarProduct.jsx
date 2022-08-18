import { Container, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';
import Mask from '../../public/img-profile-seller/Mask.png'
import { FiEdit2, FiLogOut, FiCheckCircle } from 'react-icons/fi';

const NavbarProduct = () => {
  return (
    <>
      <Row>
        <Navbar bg="white" expand="lg" className='mt-5 d-flex gap-5 py-5'>
          <Container className='d-flex gap-5'>
            <Navbar.Brand href="/profile-seller/">Profile</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavDropdown title="My Product" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/profile-seller/my-product">All</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Archieve
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Sold Out
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='mx-sm-5' href="/profile-seller/selling-product">Selling Product</Nav.Link>
                <NavDropdown title="My Order" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/profile-seller/my-order">All</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Get Paid</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Processed</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Sent</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Completed</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Order Cancel</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </>
  )
}

export default NavbarProduct


