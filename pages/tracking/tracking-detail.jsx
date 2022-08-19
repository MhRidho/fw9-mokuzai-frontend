import Main from '../../components/organisms/MainTemplate';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';
import TruckBlack from '../../public/img-trackingg/truckBlack.png';
import TruckGrey from '../../public/img-trackingg/truckGrey.png';
import Line from '../../public/img-trackingg/Line.png';

const TrackingDetails = () => {
  return (
    <>
      <Main>
        <Container fluid className='bg-profile fluid py-4 px-5'>
          <Row>
            <Col>
              <h6 className='cursor ms-sm-5'>Tracking <FiChevronRight className='ms-2' /> Tracking Detail</h6>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center my-5'>
              <h1>Tracking Detail</h1>
              <h6>Track where your order arrived</h6>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className='d-flex justify-content-center'>
            <Col className='bg-map'>
            </Col>
            <Col md={6} className='pe-sm-5'>
              <Row className='mx-sm-5 my-5'>
                <Col className='d-flex flex-column justify-content-center'>
                  <p>Order ID</p>
                  <h5 className='fw-bold'>ABCD-EFGH-W123</h5>
                </Col>
                <Col className='d-flex flex-column justify-content-center'>
                  <p>Order Item</p>
                  <h5 className='fw-bold'>Fabric Mid Century Chair</h5>
                </Col>
                <hr className='mt-4' />
              </Row>
              <Row className='mx-sm-5'>
                <Col className='mt-3 text-sm-center'>
                  <Image src={TruckBlack} alt='TruckBlack' title="Delivery" className='cursor' />
                </Col>
                <Col md={10} className='d-flex flex-column justify-content-center'>
                  <p>On Delivery</p>
                  <h5 className='fw-bold'>Kebun Jeruk, Jakarta Barat</h5>
                </Col>
              </Row>
              <Row>
                <Col className='mt-3 text-sm-center ms-sm-5'>
                  <Image src={Line} alt='Line' title="Line" className='cursor' />
                </Col>
                <Col md={9}>
                </Col>
              </Row>
              <Row className='mx-sm-5'>
                <Col className='mt-3 text-sm-center'>
                  <Image src={TruckGrey} alt='TruckGrey' title="Destination" className='cursor' />
                </Col>
                <Col md={10} className='d-flex flex-column justify-content-center'>
                  <p>Destination</p>
                  <h5 className='fw-bold text-secondary'>Kebun Mangga, Jakarta Selatan</h5>
                </Col>
              </Row>
              <Row className='mx-sm-5'>
                <Col className='my-5'>
                  <Button type='submit' className='rounded-0 size-btn-auth bgc-primary border-0 p-3 my-2'>
                    <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>Check on Map</span>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

      </Main>
    </>
  )
}

export default TrackingDetails;
