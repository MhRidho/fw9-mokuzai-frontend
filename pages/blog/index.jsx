import Main from '../../components/organisms/MainTemplate';
import { Container, Row, Col, Form, ListGroup, InputGroup, Button, ButtonGroup } from 'react-bootstrap';
import Image from 'next/image';
import { FiChevronRight, FiClock, FiTag } from 'react-icons/fi';
import Link from 'next/link';
import BlogAsideMenu from './blog-aside-menu';
import Content2 from '../../public/img-blog/content2.png'
import Content3 from '../../public/img-blog/content3.png'
import Content4 from '../../public/img-blog/content4.png'
import Quote from '../../public/img-blog/quote.png'

const BlogContent = () => {
  return (
    <>
      <Main>
        <Container fluid className='bg-profile fluid py-4 px-sm-5'>
          <Row className='ms-sm-2'>
            <Col>
              <Link href={'/blog/blog-content-detail'}><h6 className='cursor ms-5'>Blog <FiChevronRight className='ms-2' /></h6></Link>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center my-5'>
              <h1>Our Blog</h1>
              <h6>Read and enjoy content from us</h6>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <BlogAsideMenu />
            <Col className='mt-5 bg-content-1'>
              <h2 className='margin-x font-size-mokuzai-32'>How to open interior shop?</h2>
              <p className='font-size-mokuzai-10 d-inline'><FiClock className='me-1' />24 Apr 2019, 45 mins ago, by Admin</p>
              <p className='font-size-mokuzai-10'><FiTag className='me-1' />Kids, Interior, Photos</p>
              <p className='font-size-mokuzai-14'>Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu</p>
              <Link href={'/blog/blog-content-detail'}><h6 className='fw-bold d-inline cursor'>Read More</h6></Link>
              <Container className='pt-4'>
                <Row>
                  <Col>
                    <Image src={Content2} alt='content2' />
                    <h2 className='font-size-mokuzai-32'>Scandinavian Style 2019</h2>
                    <p className='font-size-mokuzai-10 d-inline'><FiClock className='me-1' />24 Apr 2019, 45 mins ago, by Admin</p>
                    <p className='font-size-mokuzai-10'><FiTag className='me-1' />Kids, Interior, Photos</p>
                    <p className='font-size-mokuzai-14'>Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu</p>
                  </Col>
                </Row>
              </Container>
              <h6 className='fw-bold d-inline cursor'>Read More<hr /></h6>
              <Container className='pt-4'>
                <Row>
                  <Col>
                    <Image src={Content3} alt='content3' />
                    <h2 className='font-size-mokuzai-32'>Beautiful Workspace for Designer</h2>
                    <p className='font-size-mokuzai-10 d-inline'><FiClock className='me-1' />24 Apr 2019, 45 mins ago, by Admin</p>
                    <p className='font-size-mokuzai-10'><FiTag className='me-1' />Kids, Interior, Photos</p>
                    <p className='font-size-mokuzai-14'>Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu</p>
                  </Col>
                </Row>
              </Container>
              <h6 className='fw-bold d-inline cursor'>Read More<hr /></h6>
              <Container className='pt-4'>
                <Row>
                  <Col>
                    <Image src={Quote} alt='Quote' />
                    <h2 className='font-size-mokuzai-32'>26 Photos of Conner Kid</h2>
                    <p className='font-size-mokuzai-10 d-inline'><FiClock className='me-1' />24 Apr 2019, 45 mins ago, by Admin</p>
                    <p className='font-size-mokuzai-10'><FiTag className='me-1' />Kids, Interior, Photos</p>
                    <p className='font-size-mokuzai-14'>Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu</p>
                  </Col>
                </Row>
              </Container>
              <h6 className='fw-bold d-inline cursor'>Read More<hr /></h6>
              <Container className='pt-4'>
                <Row>
                  <Col>
                    <Image src={Content4} alt='content4' />
                    <h2 className='font-size-mokuzai-32'>Beautiful Corner</h2>
                    <p className='font-size-mokuzai-10 d-inline'><FiClock className='me-1' />24 Apr 2019, 45 mins ago, by Admin</p>
                    <p className='font-size-mokuzai-10'><FiTag className='me-1' />Kids, Interior, Photos</p>
                    <p className='font-size-mokuzai-14'>Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu</p>
                  </Col>
                </Row>
              </Container>
              <h6 className='fw-bold d-inline cursor'>Read More<hr /></h6>
              <Row className='my-5 pb-5'>
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
            </Col>

          </Row>

        </Container>
      </Main>
    </>
  )
}

export default BlogContent;
