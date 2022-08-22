import Main from '../../components/organisms/MainTemplate';
import { Container, Row, Col, Button, Form, Navbar, Nav, NavDropdown, Card, ListGroup } from 'react-bootstrap';
import Image from 'next/image';
import Ellipse3 from '../../public/img-profile-seller/Ellipse-3.png'
import { FiEdit2, FiLogOut } from 'react-icons/fi';
import ModalChangeGender from '../../components/molecules/ChangeGender';
import ModalChangeEmail from '../../components/molecules/ChangeEmail';
import ModalChangeDesc from '../../components/molecules/ChangeDesc';
import ModalChangeName from '../../components/molecules/ChangeName';
import ModalChangeImage from '../../components/molecules/ChangeImageProfile';

const index = () => {
  return (
    <>
      <Main>
        <Container fluid className='bg-profile'>
          <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center my-5'>
              <h1>Profile</h1>
              <h6>See your notifications for the latest updates</h6>
            </Col>
          </Row>

        </Container>
        <Container className='mt-5'>
        </Container>
        <Container>
          <Navbar expand="lg" bg="white">
            <Container>
              <Row>
                <Col>
                  <ModalChangeImage />
                </Col>
                <Col className='d-flex flex-column justify-content-center'>
                  <div className='d-flex'><h5 className='cursor'>Syifa</h5><ModalChangeName className='ms-3' /></div>
                  <p className='font-size-mokuzai-16'>as Customer</p>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </Container>
        <Container className='mt-3'>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item className='p-5 d-flex'>
                <Col className='d-flex flex-column justify-content-center'>
                  <p>Gender</p>
                  <h5 className='cursor'>Female</h5>
                </Col>
                <Col className='d-flex justify-content-end align-items-center'>
                  <ModalChangeGender />
                </Col>
              </ListGroup.Item>
              <ListGroup.Item className='p-5 d-flex'>
                <Col className='d-flex flex-column justify-content-center'>
                  <p>Your Email</p>
                  <h5 className='cursor'>syifa@gamil.com</h5>
                </Col>
                <Col className='d-flex justify-content-end align-items-center'>
                  <ModalChangeEmail />
                </Col>
              </ListGroup.Item>
              <ListGroup.Item className='p-5 d-flex'>
                <Col className='d-flex flex-column justify-content-center'>
                  <p>Store Description</p>
                  <h5 className='cursor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </Col>
                <Col className='d-flex justify-content-end align-items-center'>
                  <ModalChangeDesc />
                </Col>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <Button variant="danger" className='btn btn-lg mt-4 mb-5 px-5 border-sharp'><h6 className='mt-2'><FiLogOut className='me-2' />LOGOUT</h6></Button>
        </Container>
      </Main>
    </>
  )
}

export default index
