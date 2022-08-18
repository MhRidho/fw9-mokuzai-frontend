import Main from '../../components/organisms/MainTemplate';
import { Container, Row, Col, Button, Card, ListGroup, Form } from 'react-bootstrap';
import Image from 'next/image';
import Ellipse2 from '../../public/img-chat/Ellipse2.png'
import Ellipse31 from '../../public/img-chat/Ellipse3.png';
import Ellipse31 from '../../public/img-chat/Ellipse3.png'
import Ellipse4 from '../../public/img-chat/Ellipse4.png'
import { FiChevronRight } from 'react-icons/fi';

const index = () => {
  return (
    <>
      <Main>
        <Container className='bg-profile fluid'>
          <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center my-5'>
              <h1>Chat</h1>
              <h6>See your notifications for the latest updates</h6>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className='mt-5'>
            <Col>
              <Card bg={'dark'} text={'white'} className="mb-2 border-sharp">
                <Container>
                  <Row>
                    <Col md={5}>
                      <Row className='p-3'>
                        <Col className='mt-3'>
                          <Image src={Ellipse2} alt='Ellipse2' title="Profile" className='cursor' />
                        </Col>
                        <Col md={10} className='d-flex flex-column justify-content-center mt-3'>
                          <h5 className='cursor fw-bold'>Syifa Guys</h5>
                          <p className='font-size-mokuzai-16'>Online</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row className='p-3'>
                        <Col className='mt-3'>
                          <Image src={Ellipse31} alt='Ellipse31' title="Profile" className='cursor' />
                        </Col>
                        <Col md={10} className='d-flex flex-column justify-content-center mt-3'>
                          <h5 className='cursor fw-bold'>Aisyah 12</h5>
                          <p className='font-size-mokuzai-16'>Online</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
          </Row>
          <Row className='mb-5'>
            <Col md={5}>
              <Card className='border-sharp'>
                <ListGroup variant="flush">
                  <ListGroup.Item className='px-4 d-flex'>
                    <Container>
                      <Row>
                        <Col className='mt-3'>
                          <Image src={Ellipse31} alt='Ellipse31' title="Profile" className='cursor' />
                        </Col>
                        <Col md={8} className='d-flex flex-column justify-content-center mt-3'>
                          <h5 className='cursor fw-bold'>Aisyah 12</h5>
                          <p className='font-size-mokuzai-16'>Lorem ipsum dolor sit amet... </p>
                        </Col>
                        <Col className='d-flex justify-content-end align-items-center'>
                          <h5 className='cursor font-size-mokuzai-24'><FiChevronRight className='ms-2' /></h5>
                        </Col>
                      </Row>
                    </Container>
                  </ListGroup.Item>
                  <ListGroup.Item className='px-4 d-flex'>
                    <Container>
                      <Row>
                        <Col className='mt-3'>
                          <Image src={Ellipse4} alt='Ellipse4' title="Profile" className='cursor' />
                        </Col>
                        <Col md={8} className='d-flex flex-column justify-content-center mt-3'>
                          <h5 className='cursor fw-bold'>Aisyah 13</h5>
                          <p className='font-size-mokuzai-16'>Lorem ipsum dolor sit amet... </p>
                        </Col>
                        <Col className='d-flex justify-content-end align-items-center'>
                          <h5 className='cursor font-size-mokuzai-24'><FiChevronRight className='ms-2' /></h5>
                        </Col>
                      </Row>
                    </Container>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col>
              <Card className='border-sharp'>
                <ListGroup variant='flush'>
                  <ListGroup.Item >
                    <p className='padding-y-200px py-5'>

                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Container>
                      <Row>
                        <Col md={9} className='mt-4'>
                          <Form.Control name='password' className='p-0 bgc-unset border-0 shadow-none' type="text-area" placeholder="Write Your Message..." /></Col>
                        <Col>
                          <Button variant="dark" className='btn btn-lg my-3 px-5 border-sharp'>Send</Button>
                        </Col>
                      </Row>
                    </Container>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>   
      </Main>
    </>
  )
}

export default index
