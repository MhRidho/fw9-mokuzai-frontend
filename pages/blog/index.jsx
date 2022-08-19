import Main from '../../components/organisms/MainTemplate';
import { Container, Row, Col, Form, ListGroup, InputGroup, Button } from 'react-bootstrap';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import BlogAsideMenu from './blog-aside-menu';

const BlogContent = () => {
  return (
    <>
      <Main>
        <Container fluid className='bg-profile fluid py-4 px-5'>
          <Row>
            <Col>
              <h6 className='cursor ms-5'>Blog <FiChevronRight className='ms-2' /></h6>
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
            <Col className='border mt-5 bg-content-1'>
            </Col>
          </Row>

        </Container>
      </Main>
    </>
  )
}

export default BlogContent;
