import { Container, Row, Col, Form, ListGroup, InputGroup, Button } from 'react-bootstrap';
import Image from 'next/image';
import { FiChevronRight, FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import News1 from '../../public/img-blog/news1.png';
import News2 from '../../public/img-blog/news2.png';
import News3 from '../../public/img-blog/news3.png';
import News4 from '../../public/img-blog/news4.png';
import AdBanner from '../../public/img-blog/adBanner.png';

const BlogAsideMenu = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    const response = {
      success: true,
      message: 'List Categories',
      'results': [
        {
          'id': 1,
          'category': 'Furniture',
          'quantity': 3
        },
        {
          'id': 2,
          'category': 'Interior',
          'quantity': 4
        },
        {
          'id': 3,
          'category': 'Real Estate',
          'quantity': 5
        },
        {
          'id': 4,
          'category': 'Construction',
          'quantity': 8
        },
        {
          'id': 5,
          'category': 'Business',
          'quantity': 2
        },
        {
          'id': 6,
          'category': 'Industrial',
          'quantity': 6
        },
        {
          'id': 7,
          'category': 'Furnitue',
          'quantity': 7
        }
      ]
    }
    setCategories(response.results);
  }
  return (
    <>
      <Col md={4} className='pe-sm-5 mt-5'>
        <InputGroup className="mb-3">
          <Form.Control
            className="rounded-0 shadow-none p-3"
            placeholder="Search…"
            aria-label="Search…"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text className="rounded-0 shadow-none bgc-unset p-3" id="basic-addon2"><FiSearch className='cursor' /></InputGroup.Text>
        </InputGroup>
        <h2 className='fw-bold my-5'>Categories</h2>
        <ListGroup as="ul" className='rounded-0 d-flex gap-4'>
          {categories && categories.map((cate, i) => (
            <ListGroup.Item
              key={cate.id}
              as="li"
              className="d-flex justify-content-between align-items-start border-0"
            >
              <div>
                {cate.category}
              </div>
              <h6 bg="primary" pill>
                {cate.quantity}
              </h6>
            </ListGroup.Item>
          ))}

        </ListGroup>
        <h2 className='fw-bold mt-5 mb-3'>Recent News</h2>
        <Row className='p-3'>
          <Col>
            <Image src={News1} alt='Ellipse31' title="Profile" className='cursor' />
          </Col>
          <Col md={8} className='d-flex flex-column justify-content-center'>
            <h5 className='cursor fw-bold font-size-mokuzai-14'>How To Put Movies On Iphone</h5>
            <p className='font-size-mokuzai-10'>24 Apr 2019, 45 mins ago</p>
          </Col>
          <hr className='mt-4' />
        </Row>
        <Row className='p-3'>
          <Col>
            <Image src={News2} alt='Ellipse31' title="Profile" className='cursor' />
          </Col>
          <Col md={8} className='d-flex flex-column justify-content-center'>
            <h5 className='cursor fw-bold font-size-mokuzai-14'>Windows Registry Cleaner Checklist</h5>
            <p className='font-size-mokuzai-10'>24 Apr 2019, 45 mins ago</p>
          </Col>
          <hr className='mt-4' />
        </Row>
        <Row className='p-3'>
          <Col>
            <Image src={News3} alt='Ellipse31' title="Profile" className='cursor' />
          </Col>
          <Col md={8} className='d-flex flex-column justify-content-center'>
            <h5 className='cursor fw-bold font-size-mokuzai-14'>Messes Make Memories</h5>
            <p className='font-size-mokuzai-10'>24 Apr 2019, 45 mins ago</p>
          </Col>
          <hr className='mt-4' />
        </Row>
        <Row className='p-3'>
          <Col>
            <Image src={News4} alt='Ellipse31' title="Profile" className='cursor' />
          </Col>
          <Col md={8} className='d-flex flex-column justify-content-center'>
            <h5 className='cursor fw-bold font-size-mokuzai-14'>Modern Light House</h5>
            <p className='font-size-mokuzai-10'>24 Apr 2019, 45 mins ago</p>
          </Col>
        </Row>
        <h2 className='fw-bold mt-5 mb-4'>Archives</h2>
        <Form.Select size="lg" className='rounded-0 shadow-none p-3'>
          <option>Select Month</option>
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
          <option>May</option>
          <option>Jun</option>
          <option>Jul</option>
          <option>Aug</option>
          <option>Sep</option>
          <option>Okt</option>
          <option>Nov</option>
          <option>Des</option>
        </Form.Select>
        <h2 className='fw-bold mt-5 mb-4'>Tags</h2>
        <Col className='d-flex gap-2'>
          <Button variant="outline-secondary">funiture</Button>
          <Button variant="outline-secondary">style</Button>
          <Button variant="outline-secondary">life style</Button>
        </Col>
        <Col className='d-flex gap-2 mt-2'>
          <Button variant="outline-secondary">zuka</Button>
          <Button variant="outline-secondary">online store</Button>
          <Button variant="outline-secondary">real estate</Button>
        </Col>
        <Row className='pb-5'>
          <Col className='mt-3'>
            <Image className='my-5' src={AdBanner} alt='AdBanner' />
          </Col>
        </Row>
      </Col>

    </>
  )
}

export default BlogAsideMenu;
