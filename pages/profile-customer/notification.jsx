import Main from '../../components/organisms/MainTemplate';
import { Container, Row, Col, Button, ButtonGroup, Card, ListGroup } from 'react-bootstrap';
import Image from 'next/image';
import Ellipse3 from '../../public/img-profile-seller/Ellipse-3.png'
import RedCircle from '../../public/img-profile-seller/small-red-circle.png'
import { FiEdit2, FiLogOut } from 'react-icons/fi';

const index = () => {
  return (
    <>
      <Main>
        <Container className='bg-profile fluid'>
          <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center my-5'>
              <h1>Notification</h1>
              <h6>See your notifications for the latest updates</h6>
            </Col>
          </Row>
        </Container>
        <Container className='mt-5'>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item className='p-5 d-flex'>
                <Col className='d-flex flex-column justify-content-center'>
                  <h5 className='cursor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dapibus non elementum arcu tortor...</p>
                </Col>
                <Col className='d-flex justify-content-end align-items-center'>
                  <Image src={RedCircle} alt='RedCircle' title="notif" className='cursor' />
                </Col>
              </ListGroup.Item>
              <ListGroup.Item className='p-5 d-flex'>
                <Col className='d-flex flex-column justify-content-center'>
                  <h5 className='cursor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dapibus non elementum arcu tortor...</p>
                </Col>
              </ListGroup.Item>
              <ListGroup.Item className='p-5 d-flex'>
                <Col className='d-flex flex-column justify-content-center'>
                  <h5 className='cursor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dapibus non elementum arcu tortor...</p>
                </Col>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <Row className='my-5'>
            <Col md={3}>
              <ButtonGroup aria-label="Basic example" className='d-flex gap-3'>
                <Button variant="dark" className='border-sharp'>01</Button>
                <Button variant="light" className='border-sharp border'>02</Button>
                <Button variant="light" className='border-sharp border'>03</Button>
                <Button variant="light" className='border-sharp border'>04</Button>
                <Button variant="light" className='border-sharp border'>05</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  )
}

export default index
