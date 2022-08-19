import Link from 'next/link'
import React from 'react'
import { Col, Row, Button, Nav, Container, Dropdown, ButtonGroup  } from 'react-bootstrap'
import {FiHeart,FiSearch, FiShoppingCart, FiMenu} from 'react-icons/fi'

export default function ComHeader() {
  return (
    <Container>
      <Row className='justify-content-between mb-5 mt-md-3 gap-5 gap-md-0'>
        <Col md={4}>
          <Link href='#'>
            <a className='text-decoration-none c-primary font-size-mokuzai-46 font-weight-mokuzai-700'>
              <span>MOKUZAI</span>
            </a>
          </Link>
        </Col>
        <Col md={4} className='d-flex flex-row justify-content-between align-items-center'>
          <Link href='#'>
            <a className='text-decoration-none c-primary'>
              <span className='font-weight-mokuzai-700'>HOME</span>
            </a>
          </Link>
          <Link href='#'>
            <a className='text-decoration-none c-primary'>
              {/* <span>PAGES</span> */}
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='bgc-unset border-0 c-black shadow-none p-0'>
                  <span className='font-weight-mokuzai-700'>PAGES</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">About Us</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Contact Us</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Coming Soon</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">404 Page</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">FAQ Page</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </a>
          </Link>
          <Link href='#'>
            <a className='text-decoration-none c-primary'>
              {/* <span>SHOP</span> */}
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='bgc-unset border-0 c-black shadow-none p-0'>
                  <span className='font-weight-mokuzai-700'>SHOP</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Shopping Cart</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Check Out</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">My Account</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Order Tracking</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </a>
          </Link>
          <Link href='#'>
            <a className='text-decoration-none c-primary'>
              <span className='font-weight-mokuzai-700'>BLOG</span>
            </a>
          </Link>
        </Col>
        <Col md={4} className="me-auto d-flex flex-row justify-content-end align-items-end gap-5">
          <Link href='#'>
            <a className='text-decoration-none c-primary'>
              <FiSearch size={23} stroke-width={3} />
            </a>
          </Link>
          <Link href='#'>
            <a className='text-decoration-none c-primary'>
              <FiHeart size={23} stroke-width={3} />
            </a>
          </Link>
          <Link href='#'>
            <a className='text-decoration-none c-primary'>
              <FiShoppingCart size={23} stroke-width={3} />
            </a>
          </Link>
          <Link href='#'>
            <a className='text-decoration-none c-primary'>
              <FiMenu size={30} stroke-width={3} />
            </a>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
